import React, { useState, useContext } from "react";
import Button from "./Button";
import Logo from "./Logo";
import TextLink from "./TextLink";
import { UserContext } from "../provider/UserContext";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { user, setUser, isLoading, error } = useContext(UserContext);
  const handleMenuClose = () => {
    setIsOpen(false);
  };
  const handleLogOut = () => {
    setUser(null);
    navigate("/");
    localStorage.removeItem("user");
  };
  const handleSellNow = () => {
    setIsOpen(false);
    if (user) {
      navigate("/ads");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap  p-2 lg:p-3">
        <div>
          <Logo />
        </div>
        {/* hamburger menu */}
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="md:hidden flex items-center"
        >
          {isOpen ? (
            // if isOpen is true, show the svg
            <svg
              className="h-12 w-12 p-2 bg-primary text-white rounded-md"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // if isOpen is false, show the svg
            <svg
              className="h-12 w-12 p-2 bg-primary text-white rounded-md"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </div>
        <div className="hidden md:flex items-center space-x-3">
          {user && !isLoading && !error ? (
            user.username ? (
              <>
                <TextLink path="/profile" text={user.username} />

                <Button
                  text={"Log out"}
                  onClick={handleLogOut}
                  classes={
                    "bg-white text-primary border-solid border-[1px] border-primary "
                  }
                />
                <Button text={"Sell now"} onClick={handleSellNow} />
              </>
            ) : (
              <>
                <TextLink path="/login" text="Login" />
                <Button text={"Sell now"} onClick={handleSellNow} />
              </>
            )
          ) : (
            <>
              <TextLink path="/login" text="login" />
              <Button text={"Sell now"} onClick={handleSellNow} />
            </>
          )}
        </div>
      </nav>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="bg-white shadow-lg rounded-lg">
          <div className="px-4 py-5 sm:p-6 flex flex-col justify-center items-center space-y-3">
            {user ? (
              user.username ? (
                <>
                  <TextLink path="/profile" text={user.username} />
                  <Button
                    text={"Log out"}
                    onClick={handleLogOut}
                    classes={
                      "bg-white text-primary border-solid border-[1px] border-primary "
                    }
                  />
                  <Button text={"Sell now"} onClick={handleSellNow} />
                </>
              ) : (
                <>
                  <TextLink path="/login" text="Login" />
                  <Button text={"Sell now"} onClick={handleSellNow} />
                </>
              )
            ) : (
              <>
                <TextLink
                  path="/login"
                  text="login"
                  onClick={handleMenuClose}
                />
                <Button text={"Sell now"} />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
