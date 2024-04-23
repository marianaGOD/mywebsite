import React from "react";
import "../Styles/Project1Styles.css";
import JestQuest from "../assets/JestQuest.jpg"

export default function Project1() {
  const projectUrl = "https://marianagod.github.io/JestQuest/";

  return (
    <div className="project-container">
      <h1>JestQuest</h1>
      <p className="project-description">
        Three weeks into my coding bootcamp and I’ve just rolled out JestQuest,
        a thrilling game set in a decadently spooky world. <br /> Imagine being
        a jest, trapped in a haunted house filled with mysterious doors—each
        opening new challenges and opportunities to either gather treasure or
        face ghostly penalties. <br />
        🚪💀 👻 What’s Inside? <br /> Dynamic Doors: Choose wisely! Each door
        can boost your coin stash or unleash a spooky setback. <br />{" "}
        Collectible Items: Gather coins scattered behind the spectral doors.{" "}
        <br />
        Win or Lose: Secure 13 coins to break free, or risk being haunted
        forever if your count drops to zero! <br /> Crafted with HTML5, CSS3,
        and JavaScript, JestQuest is not just a game—it's a maze of eerie
        encounters designed to test your courage and strategy. Ready to navigate
        the corridors of the unknown? <br />
        🕹️ Play now and see if you can outsmart the haunted house! Feel free to
        connect and explore the spine-chilling corridors of JestQuest. Who
        knows? You might just pick up some coin-collecting tips along the way!
        🌟
      </p>
      <img
        className="project1-img"
        src={JestQuest}
        alt="Project 1 visualization"
      />
      <button className="projectlink-btn" onClick={() => window.open(projectUrl, "_blank")}>👀</button>
    </div>
  );
}
