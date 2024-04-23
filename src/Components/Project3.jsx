import React from "react";
import "../Styles/Project1Styles.css";
import WanderHer from "../assets/WanderHer.jpg";

export default function Project3() {
    const projectUrl = "https://wanderher.netlify.app/";
  return (
    <div className="project-container">
      <h1>WanderHer</h1>
      <p className="project-description">
        🌍✨ WanderHer: Unleash Your Inner Explorer! ✨🌍 Co-created with the
        brilliant Carolina and Alexandra, WanderHer is not just a travel
        platform—it’s a revolution in pink sneakers! Designed to empower daring,
        solo female travelers, WanderHer is your digital sidekick for
        globetrotting adventures with sass and class. 🎒💪 What’s Cooking?
        Create & Curate: Jump in as both a guest and host! Sign up for salsa
        under the stars or offer your cozy nook to fellow wanderers. Sisterhood
        of Travel: Tune into our 'Girl Boss' vibes with empowering tunes and
        tales. Who's ready for ‘woman of the month’? Find Your Spot: Got itchy
        feet? Use our smarty-pants search to snag lodgings and local gigs, all
        pinpointed on nifty maps. Empowerment on the Go: Manage your traveler's
        tale, update your trove, and never miss a beat in making new
        connections. Handcrafted with the latest tech by a trio of tech-savvy
        ladies, WanderHer is where fearless meets fabulous in the quest for
        unforgettable journeys. Let’s make the globe your playground!
      </p>
      <img
        className="project1-img"
        src={WanderHer}
        alt="Project 1 visualization"
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
