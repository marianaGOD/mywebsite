import React from 'react'
import "../Styles/HomePageStyles.css";
import NavBar from '../Components/NavBar';
import Playlist from '../Components/Playlist';
import Shelf from '../Components/Shelf';


export default function HomePage() {
  return (
    <>
      <NavBar />
      <div className="homepage-container">
        <div className="homepage-title-container">
          <Shelf />
          <div className="homepage-title">
            <h1>
              Browse my shelf of digital delights 📚 — each book is a portal to
              a different universe of code and creativity 🌌. Pick a volume 📘
              and let's turn the page to innovation! ✨
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
