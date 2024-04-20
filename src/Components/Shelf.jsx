import React, { useState } from "react";
import "../Styles/ShelfStyles.css";

export default function Shelf() {
  const books = [
    { id: 1, title: "Book One", content: "Content of Book One..." },
    { id: 2, title: "Book Two", content: "Content of Book Two..." },
    { id: 3, title: "Book Three", content: "Content of Book Three..." },
  ];
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = (book) => {
    // Toggle the display of the book details
    if (selectedBook && book.id === selectedBook.id) {
      setSelectedBook(null); // If the same book is clicked again, close the details
    } else {
      setSelectedBook(book); // Otherwise, open the clicked book's details
    }
  };

  return (
    <div className="bookshelf">
      {books.map((book) => (
        <div
          key={book.id}
          className="book"
          onClick={() => handleBookClick(book)}
        >
          {book.title}
        </div>
      ))}
      {selectedBook && (
        <div className="book-details">
          <h2>{selectedBook.title}</h2>
          <p>{selectedBook.content}</p>
        </div>
      )}
    </div>
  );
}
