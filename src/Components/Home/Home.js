import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import "./Home.css";
import Plants from "./Plants";
import Diseases from "./Diseases";
import PremiumSupport from "./PremiumSupport";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Medicines from "./Medicines";

function Home() {
  return (
    <>
      <div>
        {/*---------------------- Header Section-------------------------------------- */}

        <Header />
        <hr />
        {/* ------------------------- Hero Section ------------------------------------- */}

        <Hero />
        <hr />
        {/* ---------------------------- Features Section ---------------------------------- */}

        <Features />
        <hr />
        {/* ------------------------------ Plants Section ------------------------------- */}

        <Plants />
        <hr />
        {/* ----------------------------------- Diseases Section ---------------------------- */}

        <Diseases />
        <hr />

        {/* ----------------------------------- Medicines Section ---------------------------- */}

        <Medicines />
        <hr />
        {/* ----------------------------------- Premium Support Section ---------------------------- */}

        <PremiumSupport />
        <hr />
        {/* ------------------------------ Testimonials Section ------------------------------- */}

        <Testimonials />
        <hr />
        {/* ------------------------------ Footer Section ------------------------------- */}

        <Footer />
      </div>
    </>
  );
}

export default Home;
