import { gql, useQuery } from "@apollo/client";
import React from "react";
import "../Styles/ReviewsStyles.css"; // Ensure this CSS file contains the updated styles mentioned below

const GET_REVIEWS = gql`
  query {
    reviews {
      id
      name
      comment
      rating
      date
    }
  }
`;

function StarRating({ rating }) {
  const thumbsUp = "👍"; // Full rating
  const thumbsDown = ""; // Empty rating or choose an empty character like "○"
  let thumbsDisplay = "";
  for (let i = 1; i <= 5; i++) {
    thumbsDisplay += i <= rating ? thumbsUp : thumbsDown;
  }
  return <span className="star-rating">{thumbsDisplay}</span>;
}

function Reviews() {
  const { loading, error, data } = useQuery(GET_REVIEWS);

  const getStyles = (index) => {
    const colors = [
      "#fab172",
      "#f77d47",
      "#55946c",
      "#d7a07f",
      "#f6faf0",
      "#aab696",
    ];
    const rotation = index % 2 === 0 ? -2 : 2; // Alternate rotation direction
    return {
      backgroundColor: colors[index % colors.length],
      transform: `rotate(${rotation}deg)`,
    };
  };

  if (loading) return <p className="loading-text">Loading...</p>;
  if (error) return <p className="error-text">Error: {error.message}</p>;

  return (
    <div className="reviews-container">
      {data.reviews.map(({ id, name, comment, rating, date }, index) => (
        <div key={id} className="review-item" style={getStyles(index)}>
          <h3 className="review-heading">{name}</h3>
          <p className="review-text">{comment}</p>
          <div className="review-rating">
            <StarRating rating={rating} />
          </div>
          on {new Date(date).toLocaleDateString()}
        </div>
      ))}
    </div>
  );
}

export default Reviews;
