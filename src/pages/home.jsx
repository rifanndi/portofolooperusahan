import React, { useState, useEffect } from "react";
import Navbar from "../componet/navbar";
import Heder from "../componet/Heder";
import CustomCarousel from "../componet/carosel";
import AboutUs from "../componet/abaut";
import StatsSection from "../componet/StatsSection.jsx";
import "./css/home.css";
import Footer from "../componet/footer.jsx";
import TestimonialsCarousel from "../componet/testimonialsCarousel";
import ProductCarousel from "../componet/produkslider.jsx";
import OurFactory from "../componet/ourfactory.jsx";
import SeertiCard from "../componet/sertifikasi.jsx";

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        margin: 0, // Remove any margin
        padding: 0, // Remove any padding
        overflowX: "hidden", // Prevent horizontal scrolling
        display: "flex",
        flexDirection: "column",
        width: "100%", // Ensure full width
      }}
    >
      {/* Navbar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          backgroundColor: isScrolled
            ? "rgba(255, 255, 255, 1)" // Solid background after scroll
            : "rgba(255, 255, 255, 0.5)", // Transparent background at the top
          transition: "background-color 0.3s ease, box-shadow 0.3s ease",
          boxShadow: isScrolled ? "0 4px 10px rgba(0, 0, 0, 0.1)" : "none",
          backdropFilter: isScrolled ? "none" : "blur(10px)", // Blur effect when transparent
        }}
      >
        <Navbar />
      </div>

      {/* Heder */}
      <div
        style={{
          marginTop: "60px", // Ensure header is below the fixed navbar
          paddingBottom: 0, // Remove unnecessary padding
        }}
      >
        <Heder />
      </div>
      <dev className="carousel-container1">
        {/* Carousel */}
        <div
          style={{
            marginTop: "", // Adjust margin to have small space between header and carousel
            justifyContent: "center", // Center carousel if needed
            alignItems: "center", // Center carousel vertically if needed
            width: "100%", // Ensure full width for the carousel
          }}
        >
          <CustomCarousel />
        </div>
        <div className="abaut-container">
          <AboutUs />
        </div>
        <div className="abaut-container"></div>
        {/* About Us Section */}
        <dev>
          <StatsSection />
        </dev>

        <div className="ProductCarousel-container">
          {" "}
          <ProductCarousel />
        </div>
        <SeertiCard />
        <div style={{ marginBottom: "5%", marginTop: "7%" }}>
          {" "}
          <h1 style={{ textAlign: "center", color: "green" }}> Testimoni</h1>
          <TestimonialsCarousel />
        </div>

        <OurFactory />
        <div>
          <Footer />
        </div>
      </dev>
    </div>
  );
}

export default Home;
