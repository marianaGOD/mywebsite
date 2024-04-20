import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import homepagepic from "../assets/pfp.jpg";
import homepagepic2 from "../assets/pfp1.jpg";
import speechbub1pic from "../assets/bub.png";
import speechbub2pic from "../assets/bub2.png";
import "../Styles/HomePageAnimationStyles.css";

export default function HomePageAnimation() {
  const [showBubble, setShowBubble] = useState(0);
  const [isRedirecting, setIsRedirecting] = useState(false); // New state to control redirection
  const navigate = useNavigate();

  const toggleBubble = () => {
    const next = (showBubble + 1) % 4; // Cycle through 0 to 3
    setShowBubble(next);

    if (next === 3 && !isRedirecting) {
      // Check if it's time to show the last pic and not already redirecting
      setIsRedirecting(true); // Mark as redirecting
      setTimeout(() => {
        navigate("/homepage"); // Navigate after showing the final image
      }, 2000); // Delay for 2 seconds to display the last picture
    }
  };

  return (
    <div className="homepageanimation-container" onClick={toggleBubble}>
      <img
        src={homepagepic}
        alt="Profile Picture"
        className="homepageanimation-pic"
      />
      {showBubble === 1 && (
        <img
          src={speechbub1pic}
          alt="First Speech Bubble"
          className="speechbub1-pic"
          style={{ display: "block", opacity: "0.9" }}
        />
      )}
      {showBubble === 2 && (
        <img
          src={speechbub2pic}
          alt="Second Speech Bubble"
          className="speechbub2-pic"
          style={{ display: "block", opacity: "0.9" }}
        />
      )}
      {showBubble === 3 && (
        <img
          src={homepagepic2}
          alt="Second Profile Picture"
          className="homepageanimation-pic2"
          style={{ display: "block" }}
        />
      )}
    </div>
  );
}
