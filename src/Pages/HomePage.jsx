import React from 'react'
import "../Styles/HomePageStyles.css";
import HomePageAnimation from './HomePageAnimation';
import NavBar from '../Components/NavBar';


export default function HomePage() {
  return (
    <div className='homepage-container'>
     <NavBar />
     <h1>Welcome to my page!</h1>
    </div>
  );
}
