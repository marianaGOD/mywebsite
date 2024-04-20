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
        <div className='homepage-title-container'>
          <Shelf />
          <h1>Welcome to my page!</h1>
        </div>
      </div>
    </>
  );
}
