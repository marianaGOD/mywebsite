import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import "../Styles/CreateReviewStyles.css";

const CREATE_REVIEW = gql`
  mutation CreateReview(
    $name: String!
    $comment: String!
    $rating: Int!
    $date: Date!
  ) {
    createReview(
      data: { name: $name, comment: $comment, rating: $rating, date: $date }
    ) {
      id
      name
      comment
      rating
      date
    }
  }
`;

function CreateReview() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [createReview, { loading, error }] = useMutation(CREATE_REVIEW);

  const handleRating = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name || !comment || rating <= 0) {
      alert("Please fill in all fields and ensure rating is above 0");
      return;
    }
    try {
      await createReview({
        variables: {
          name,
          comment,
          rating,
          date: new Date().toISOString(),
        },
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Error submitting review:", err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error("GraphQL Error:", error);
    return <p>Error submitting review!</p>;
  }

  if (submitted) {
    return <p>Thanks for the feedback!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <label className="form-label">
        your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-field"
        />
      </label>
      <br />
      <label className="form-label">
        your thoughts:
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="textarea-field"
        />
      </label>
      <br />
      <label className="form-label">
        score check:
        <div className="rating-container">
          {[1, 2, 3, 4, 5].map((index) => (
            <span
              key={index}
              onClick={() => handleRating(index)}
              onMouseEnter={() => setRating(index)}
              className={index <= rating ? "thumb-up" : "thumb-down"}
            >
              {index <= rating ? "👍" : "👎"}
            </span>
          ))}
        </div>
      </label>
      <br />
      <button type="submit" className="submit-button">
        review away!
      </button>
    </form>
  );
}

export default CreateReview;
