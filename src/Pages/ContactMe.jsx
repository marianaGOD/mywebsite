import React from 'react'
import underc from "../assets/under construction.png";
import NavBar from '../Components/NavBar';

export default function ContactMe() {
 return (
    <div>
      <NavBar />
      <img src={underc} alt="" style={{ width: "100%" }} />
    </div>
  );
}
