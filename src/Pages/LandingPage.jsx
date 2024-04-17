import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/LandingPageStyles.css";

export default function LandingPage() {
  const navigate = useNavigate();
  const handleCheckboxChange = () => {
    setTimeout(() => {
      navigate("/welcome");
    }, 500); 
  };
  return (
    <div className="landing-main-container">
      <div>
        <input
          type="checkbox"
          id="switch"
          name="switch"
          className="switch"
          onChange={handleCheckboxChange}
        />
        <label htmlFor="switch" className="switch"></label>
      </div>
    </div>
  );
}
