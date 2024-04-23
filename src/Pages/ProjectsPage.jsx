import React, { useState } from "react";
import NavBar from "../Components/NavBar";

import JestQuestImage from "../assets/JestQuest.jpg";
import PlotTwistImage from "../assets/PlotTwist.jpg";
import WanderHerImage from "../assets/WanderHer.jpg";

const projects = [
  {
    id: 1,
    name: "JestQuest",
    image: JestQuestImage,
    description: "JestQuest: A Hauntingly Whimsical Puzzle ...",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    url: "https://jestquest.example.com",
  },
  {
    id: 2,
    name: "Project Two",
    image: PlotTwistImage,
    description: "Project Two Description...",
    technologies: ["React.js", "Node.js"],
    url: "https://projecttwo.example.com",
  },
  {
    id: 3,
    name: "Project Three",
    image: WanderHerImage,
    description: "Project Three Description...",
    technologies: ["Python", "Flask"],
    url: "https://projectthree.example.com",
  },
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className="projectpage-container">
      <NavBar />
      <div className="projects-container">
        {selectedProject === null ? (
          projects.map((project) => (
            <img
              key={project.id}
              src={project.image}
              alt={project.name}
              className="project-image" // Updated class name here
              onClick={() => handleProjectClick(project)}
              role="button"
              aria-label={`View details about ${project.name}`}
            />
          ))
        ) : (
          <div className="project-detail">
            <h1>{selectedProject.name}</h1>
            <img src={selectedProject.image} alt={selectedProject.name} />
            <p>{selectedProject.description}</p>
            <div className="project-technologies">
              {selectedProject.technologies.join(", ")}
            </div>
            <a
              href={selectedProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-url-button"
            >
              Visit Project
            </a>
            <button onClick={() => setSelectedProject(null)}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
}
