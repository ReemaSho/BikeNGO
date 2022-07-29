import React from "react";
import DeveloperCard from "./components/DeveloperCard";
import developersData from "../assets/developersData";
const ContactUs = () => {
  return (
    <div className="text-gray-600 body-font">
      <div className="container px-5 my-24 mx-auto">
        <div className="flex flex-col text-center w-full">
          {/* header */}
          <h1 className="mb-20 text-2xl md:text-4xl font-medium title-font text-gray-800 underline">
            Meet Our Team
          </h1>
          {/* Developers */}
          <div className="flex flex-wrap -m-4">
            {developersData.map((dev, index) => (
              <DeveloperCard key={index} {...dev} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
