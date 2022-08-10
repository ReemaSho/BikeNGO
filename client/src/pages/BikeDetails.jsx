import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaMailBulk } from "react-icons/fa";
import { HiLink } from "react-icons/hi";
import { toast } from "react-toastify";
import PageWrapper from "../components/PageWrapper";
import MapContainer from "../components/MapContainer";
import Loading from "../components/Loading";
import ErrorModal from "../components/ErrorModal";
import { BikesContext } from "../provider/BikesContext";

const BikeDetails = () => {
  const { id } = useParams();
  const { setBikeId, bike, isLoading, error, resetBikesStates } =
    useContext(BikesContext);
  const [singleBike, setSingleBike] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    setBikeId(id);
  }, [id]);

  useEffect(() => {
    if (bike._id) {
      setSingleBike(bike);
    }
  }, [bike]);
  const NavigateHome = () => {
    resetBikesStates("/bike?limit=all");
    navigate("/");
  };
  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(`${window.location.href}`);
    toast.success("Link copied to clipboard");
  };

  if (error) {
    return (
      <ErrorModal
        message={"Sorry we can't find the bike you are looking for..!"}
        suggestion={"Go Back To Home Page?"}
        closeModal={NavigateHome}
        isOpen={true}
      />
    );
  }
  return (
    <PageWrapper>
      {singleBike ? (
        <>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-4/5">
              {/* title */}
              <h1 className="font-semibold text-4xl mb-4 tracking-wider text-primary">
                {singleBike.title}
              </h1>
              {/* image section */}
              <div className="w-full h-96 md:h-[35rem] flex flex-col md:flex-row md gap-2 md:border-r-2 md:border-gray-50">
                <div className="flex-1 justify-center items-center bg-gray-50 rounded-md overflow-hidden">
                  <img
                    className="w-full h-full object-contain"
                    src={singleBike.photos[selectedPhoto]}
                    alt={singleBike.title}
                  />
                </div>
                <div className="flex md:flex-col md:mr-5 justify-between gap-x-2">
                  {singleBike.photos.map((photo, i) => (
                    <div
                      key={i}
                      onClick={() => setSelectedPhoto(i)}
                      className="w-1/4 md:w-28 h-24 bg-gray-300 rounded-md overflow-hidden hover:shadow-lg shadow-primary"
                    >
                      <img
                        className="w-full h-full object-cover"
                        src={photo}
                        alt={singleBike.title}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:mx-5">
                {/* Brand */}
                <div className="my-2 md:hidden space-y-2">
                  <h3 className="text-xl md:text-2xl text-text font-bold">
                    Brand
                  </h3>
                  <p className="mx-2 text-gray-600 capitalize">
                    {singleBike.brand.value}
                  </p>
                </div>
                {/* Condition */}
                <div className="my-2 md:hidden space-y-2">
                  <h3 className="text-xl md:text-2xl text-text font-bold">
                    Condition
                  </h3>
                  <p className="mx-2 text-gray-600 capitalize">
                    {singleBike.condition.value}
                  </p>
                </div>

                {/* Type*/}
                <div className="my-2 md:hidden space-y-2">
                  <h3 className="text-xl md:text-2xl text-text font-bold">
                    Type
                  </h3>
                  <p className="mx-2 text-gray-600 capitalize">
                    {singleBike.type.value}
                  </p>
                </div>
                {/* Price */}
                <div className="my-2 md:hidden space-y-2">
                  <h3 className="text-xl md:text-2xl text-text font-bold">
                    Price
                  </h3>
                  <p className="mx-2 py-2 px-4 text-lg text-text bg-green-200  rounded-md w-fit capitalize">
                    {singleBike.price} €
                  </p>
                </div>

                {/* Description */}
                <div className="my-2 space-y-2">
                  <h3 className="text-xl md:text-2xl text-text font-bold">
                    Description
                  </h3>
                  <p className="mx-2 text-gray-600 ">
                    {singleBike.description}
                  </p>
                </div>
                {/* Email */}
                {singleBike.user.email && (
                  <div className="block md:hidden my-2">
                    <h3 className="text-xl md:text-2xl text-text font-bold">
                      Mail Seller
                    </h3>
                    <p className="mx-2 text-gray-600 capitalize">
                      <a href={`mailto:${singleBike.user.email}`}>
                        <FaMailBulk className="w-8 h-8  text-text" />
                      </a>
                    </p>
                  </div>
                )}
                {/* Address */}
                <div className="my-2 space-y-2">
                  <h3 className="text-xl md:text-2xl text-text font-bold">
                    Location
                  </h3>
                  <p className="mx-2 bg-gray-200 rounded-md p-2 text-gray-800 w-fit">{`${singleBike.address.postcode}, ${singleBike.address.city}`}</p>
                </div>
              </div>
            </div>
            <div className="flex-1 py-5 mx-2 px-4 md:mt-10 ">
              {/* Advertise by */}
              <div className="my-2">
                <h3 className="text-xl text-text font-bold">Advertised by</h3>
                <div className="mt-2 flex items-center">
                  <div className="w-10 h-10 mr-4 bg-gray-300 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-contain"
                      src="https://www.naps.com.au/media/1060/user-icon-placeholder-1.png"
                      alt="avatar"
                    />
                  </div>
                  <h1 className="font-mono tracking-widest text-xl">
                    {singleBike.user && singleBike.user.username}
                  </h1>
                </div>
              </div>
              {/* Share Via */}
              <div className="my-2">
                <h3 className="text-xl text-text font-bold">Share Via</h3>
                <div className="mt-2 flex items-center">
                  <div
                    onClick={handleCopyLink}
                    className="w-12 h-12 flex justify-center items-center mr-4 bg-gray-100 rounded-full hover:shadow-md shadow-primary"
                  >
                    <HiLink className="w-8 h-8 text-gray-600" />
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                {/* Brand */}
                <div className="my-2 space-y-2">
                  <h3 className="text-xl md:text-2xl text-text font-bold">
                    Brand
                  </h3>
                  <p className="mx-2 text-gray-600 capitalize">
                    {singleBike.brand.value}
                  </p>
                </div>
                {/* Condition */}
                <div className="my-2 space-y-2">
                  <h3 className="text-xl md:text-2xl text-text font-bold">
                    Condition
                  </h3>
                  <p className="mx-2 text-gray-600 capitalize">
                    {singleBike.condition.value}
                  </p>
                </div>
                {/* Email */}
                {singleBike.user.email && (
                  <div className="my-2">
                    <h3 className="text-xl md:text-2xl text-text font-bold">
                      Mail Seller
                    </h3>
                    <p className="mx-2 text-gray-600 capitalize">
                      <a href={`mailto:${singleBike.user.email}`}>
                        <FaMailBulk className=" w-8 h-8 text-text" />
                      </a>
                    </p>
                  </div>
                )}
                {/* Type*/}
                <div className="my-2 space-y-2">
                  <h3 className="text-xl md:text-2xl text-text font-bold">
                    Type
                  </h3>
                  <p className="mx-2 text-gray-600 capitalize">
                    {singleBike.type.value}
                  </p>
                </div>
                {/* Price */}
                <div className="my-2 space-y-2">
                  <h3 className="text-xl md:text-2xl text-text font-bold">
                    Price
                  </h3>
                  <p className="mx-2 py-2 px-4 text-lg text-text bg-green-200 rounded-md w-fit capitalize">
                    € {singleBike.price}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <MapContainer
            error={error}
            isLoading={isLoading}
            bikes={[singleBike]}
            userCenter={false}
          />
        </>
      ) : (
        <Loading />
      )}
    </PageWrapper>
  );
};

export default BikeDetails;
