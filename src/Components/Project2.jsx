import React from "react";
import "../Styles/Project1Styles.css";
import PlotTwist from "../assets/PlotTwist.jpg";

export default function Project2() {
   const projectUrl = "https://plot-twist.netlify.app/";
  return (
    <div className="project-container">
      <h1>PlotTwist</h1>
      <p className="project-description">
        🎬 Discover the Magic of Movies with PlotTwist! 🌟 I’m thrilled to
        introduce PlotTwist, a dynamic social platform I developed alongside my
        talented teammate, Carolina. Together, we’ve created a haven for film
        enthusiasts to explore, rate, and review their favorite cinematic gems.
        Whether you're drawn to the undercurrents of indie films or the thrill
        of blockbusters, PlotTwist caters to all your movie-watching whims. 🍿✨
        Highlights of PlotTwist: Expansive Movie Database: Dive deep into
        details about films, including cast, crew, and genres. Interactive
        Rating and Review System: Your opinions help shape the community’s
        viewing choices. Cinematic Games: Engage with trivia and challenges
        inspired by iconic films. Robust Community Features: Connect, share, and
        discover with like-minded movie lovers. Crafted with cutting-edge
        technologies like React, JavaScript, and CSS, PlotTwist offers a sleek,
        user-friendly interface that makes engaging with films and fellow
        cinephiles a breeze. 🎥 Ready to join a vibrant community of film buffs?
        Visit PlotTwist, where every movie matters and every voice is heard!
      </p>
      <img
        className="project1-img"
        src={PlotTwist}
        alt="Project 2 visualization"
      />
      <button
        className="projectlink-btn"
        onClick={() => window.open(projectUrl, "_blank")}
      >
        👀
      </button>
    </div>
  );
}
