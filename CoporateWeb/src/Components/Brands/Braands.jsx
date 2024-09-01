import React from "react";
import "./brands.css";

// Import the images directly
import brand1 from "../../assets/brands1.png";
import brand2 from "../../assets/brands2.png";
import brand3 from "../../assets/brands3.png";
import brand4 from "../../assets/brands4.png";
import brand5 from "../../assets/brands5.png";
import brand6 from "../../assets/brands6.png";
import brand7 from "../../assets/brands7.png";
import brand8 from "../../assets/brands8.png";

function Brands() {
  // Define the brand data with imported images
  const topBrands = [
    { name: "Villgro Africa", logo: brand1 },
    { name: "Bridge for Billions", logo: brand2 },
    { name: "Health Tech Hub", logo: brand3 },
    { name: "The Eye Fund", logo: brand4 },
  ];

  const bottomBrands = [
    { name: "The Global Fund", logo: brand5 },
    { name: "Novartis Foundation", logo: brand6 },
    { name: "Konvergenz", logo: brand7 },
    { name: "Aspira", logo: brand8 },
  ];

  return (
    <div className="brands-container">
      <div className="brands-row top-row">
        {topBrands.map((brand, index) => (
          <div key={index} className="brand-item">
            <img src={brand.logo} alt={brand.name} />
          </div>
        ))}
        {topBrands.map((brand, index) => (
          <div key={`duplicate-${index}`} className="brand-item">
            <img src={brand.logo} alt={brand.name} />
          </div>
        ))}
      </div>
      <div className="brands-row bottom-row">
        {bottomBrands.map((brand, index) => (
          <div key={index} className="brand-item">
            <img src={brand.logo} alt={brand.name} />
          </div>
        ))}
        {bottomBrands.map((brand, index) => (
          <div key={`duplicate-${index}`} className="brand-item">
            <img src={brand.logo} alt={brand.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;
