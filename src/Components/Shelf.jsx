import React, { useState } from "react";
import "../Styles/ShelfStyles.css";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";

export default function Shelf() {
  const books = [
    { id: 1, title: "JestQuest", component: <Project1 /> },
    { id: 2, title: "PlotTwist", component: <Project2 /> }, // Update these as needed
    { id: 3, title: "WanderHer", component: <Project3 /> }, // Update these as needed
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const handleBookClick = (book) => {
    setSelectedProject(book.component);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  return (
    <div className="bookshelf">
      {books.map((book) => (
        <div
          key={book.id}
          className="book"
          onClick={() => handleBookClick(book)}
        >
          <span className="book-title">{book.title}</span>
        </div>
      ))}
      {selectedProject && (
        <div className="popup">
          <div className="popup-content">
            {selectedProject}
            <button className="close-button" onClick={handleClose}>
              ❌
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
