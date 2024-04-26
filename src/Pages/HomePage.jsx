import React, { useState } from "react";
import "../Styles/HomePageStyles.css";
import NavBar from "../Components/NavBar";
import Shelf from "../Components/Shelf";
import Reviews from "../Components/Reviews";
import CreateReview from "../Components/CreateReview";

export default function HomePage() {
  const [isCreateReviewVisible, setIsCreateReviewVisible] = useState(false);

  const toggleCreateReview = () => {
    setIsCreateReviewVisible(!isCreateReviewVisible);
  };

  return (
    <>
      <NavBar />
      <div className="homepage-container">
        <div className="homepage-title-container">
          <Shelf />
        </div>
        <div className="homepage-intro">
          <h1>Hear it from the Keyboard Warriors! ⤵️</h1>
        </div>
        <div className="reviews-container">
          <Reviews />
        </div>
        <div className="createreviewform-container">
          <div className="createreviewform-title-container">
            <h1 className="createreviewform-title">
              Time to debug your thoughts! Share a comment below and let's code
              our way to better vibes together! 😃
            </h1>
            <button className="showcreatereview-btn" onClick={toggleCreateReview}>
              {isCreateReviewVisible ? "close" : "add my comment"}
            </button>
          </div>
          {isCreateReviewVisible && <CreateReview />}
        </div>
      </div>
    </>
  );
}
