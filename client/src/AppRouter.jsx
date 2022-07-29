import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginRegister from "./pages/LoginRegister";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import BikeDetails from "./pages/BikeDetails";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Ads from "./pages/Ads";
import UserProfile from "./pages/UserProfile";
import AboutUs from "./pages/AboutUs";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/results" element={<Results />} />
        <Route path="/results/:id" element={<BikeDetails />} />
        <Route path="/ads" element={<Ads />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
