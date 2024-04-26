import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import Timeline from "../Components/Timeline"
import "../Styles/AboutMeStyles.css";

export default function AboutMe() {
  const [showTimeline, setShowTimeline] = useState(false); 

 
  const toggleTimeline = () => {
    setShowTimeline(!showTimeline);
  };

  return (
    <div>
      <NavBar />
      <div className="aboutme-container">
        <div className="aboutme-text-container">
          <p>
            Hey there! I'm <span className="highlight">Mariana</span>, 31, and
            I'm all about
            <span className="catchy-phrase"> soaking up the good vibes</span> on
            Portugal's beaches with my two cats and my
            <span className="catchy-phrase"> goofy sausage dog</span>. <br />
            Languages are my <span className="highlight">jam</span>—I've spent a
            good chunk of my life unraveling the <br />
            <span className="tech-skill">
              knots between Chinese and Portuguese
            </span>{" "}
            and spreading the word (literally) as a teacher. <br />
            I’m the kind of person who loves a good chat, whether I’m
            <span className="additional-style1">
              {" "}
              soothing customer service woes
            </span>{" "}
            or
            <span className="tech-skill"> geeking out</span> over the latest
            tech. <br />
            Remote work? Yeah, that's pretty much my second language. <br />
            When I'm not <span className="catchy-phrase"> herding cats</span> or
            <span className="tech-skill"> deciphering code</span>, you'll catch
            me in the virtual world,
            <span className="catchy-phrase">
              {" "}
              claiming victory in Valorant
            </span>{" "}
            <br />
            or getting lost in whatever tune fits my mood (because, let’s be
            honest, music is
            <span className="additional-style2"> life</span>). <br />
            I've recently{" "}
            <span className="highlight"> turbo-charged my skills</span> with a
            MERN stack bootcamp, and not to brag, but my final project was the
            crowd favorite. <br />
            Now, armed with{" "}
            <span className="tech-skill">
              {" "}
              JavaScript ES6, React, and a bunch of other cool tools
            </span>
            , I'm ready to dive into new challenges. <br />
            If you need someone who’s all about that{" "}
            <span className="catchy-phrase"> creative spark</span> and has a
            knack for making things happen, let's chat. <br />
            I'm always down for{" "}
            <span className="additional-style1"> bouncing around ideas</span> or
            just sharing a laugh.
          </p>
        </div>
        <button className="big-button" onClick={toggleTimeline}>
          more
        </button>
        {showTimeline && <Timeline />}{" "}
      </div>
    </div>
  );
}
