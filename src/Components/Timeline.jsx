import React, { useState } from "react";
import "../Styles/TimelineStyles.css";

export default function Timeline() {
  const [showText, setShowText] = useState(Array(18).fill(false));

  const toggleText = (index) => {
    // Apply animation before changing state if necessary
    const contentElement = document.querySelectorAll(".timeline-content p")[
      index
    ];
    if (showText[index]) {
      contentElement.style.animationName = "fadeOut";
      setTimeout(
        () =>
          setShowText(
            showText.map((item, idx) => (idx === index ? !item : item))
          ),
        500
      );
    } else {
      setShowText(showText.map((item, idx) => (idx === index ? !item : item)));
    }
  };

  // Function to extract the start date...
  const getStartDate = (dateRange) => {
    return dateRange.includes("-") ? dateRange.split(" - ")[0] : dateRange;
  };
  const entries = [
    {
      date: "March 2022 - December 2022",
      title: "Customer Support Operator @ GRID eSports",
      description:
        "Rocked the B2B customer support scene and kept a hawk’s eye on real-time data, ensuring all gaming stats were up-to-date and accurate. Master of multitasking and digital wizardry in the eSports arena.",
      type: "professional",
    },
    {
      date: "November 2021 - March 2022",
      title: "Customer Service Representative @ Sitel for Airbnb",
      description:
        "Supercharged Airbnb’s platform with top-notch customer support, tamed wild conflicts, and steered the operational controls like a seasoned captain. Always ready to smooth ruffled feathers and enhance user experiences.",
      type: "professional",
    },
    {
      date: "January 2021 - June 2021",
      title: "Airfreight Operations Manager @ Abreu Logistics",
      description:
        "Commanded the skies by managing airfreight imports with a strategic mindset and a knack for sharp negotiations. Tracked orders like a detective and handled invoices like a math whiz.",
      type: "professional",
    },
    {
      date: "March 2020 - August 2020",
      title: "Project Manager @ Centro de Línguas Portal Martim Moniz",
      description:
        "Led translation, interpretation, and certified training projects with a cocktail of charisma and keen oversight. Known for spinning plates effortlessly and keeping teams in harmonious sync.",
      type: "professional",
    },
    {
      date: "October 2018 - August 2019",
      title: "Education Manager @ Centro de Línguas Portal Martim Moniz",
      description:
        "Spearheaded educational projects with an eye for innovation, ensuring every certified training session was a hit. My mantra: transform challenges into learning opportunities.",
      type: "professional",
    },
    {
      date: "March 2018 - August 2020",
      title:
        "Portuguese as a Second or Foreign Language Teacher @ Centro de Línguas Portal Martim Moniz",
      description:
        "Spread the love for Portuguese language with dynamic teaching methods certified by DGERT. Not just a teacher, but a cultural ambassador armed with verbs and vocabulary.",
      type: "professional",
    },
    {
      date: "February 2017 - June 2017",
      title: "Research Assistant @ Macao University",
      description:
        "Dived deep into the world of Patuá, contributing to scientific research that turned dusty archives into insightful academic papers. Always had an eye for detail and a passion for uncovering linguistic gems.",
      type: "professional",
    },
    {
      date: "January 2017 - June 2017",
      title: "Teacher Assistant @ Macao University",
      description:
        "Taught Portuguese to eager university students, spreading linguistic love and cultural insights like a true language maestro in a multicultural setting.",
      type: "professional",
    },
    {
      date: "March 2018 - Present",
      title: "Freelance Proofreader",
      description:
        "Polishing texts from academic articles to theses with a surgeon’s precision and a poet’s heart. Ensuring every comma and period is in its perfect place.",
      type: "professional",
    },
    {
      date: "2017",
      title: "Masters in Linguistics @ Lisbon University",
      description:
        "Dabbled in the complexities of Linguistics, soaking up theories and spouting hypotheses. A year of brainy adventures and linguistic concoctions.",
      type: "education",
    },
    {
      date: "2016 - 2017",
      title: "Masters in Applied Linguistics @ Macao University",
      description:
        "Juggled words and cultures in my quest to conquer Applied Linguistics, leaving a trail of annotated bibliographies and enlightened peers.",
      type: "education",
    },
    {
      date: "2014 - 2015",
      title: "Exchange Program @ Macao Polytechnic Institute",
      description:
        "Leapt into a cultural melting pot, exchanging ideas, languages, and lots of laughs. An academic year that doubled as a global expedition.",
      type: "education",
    },
    {
      date: "2013 - 2014",
      title: "Exchange Program @ Beijing Language and Culture University",
      description:
        "Immersed myself in Mandarin marvels and cultural nuances, all while dodging the linguistic hurdles of Beijing.",
      type: "education",
    },
    {
      date: "2011 - 2016",
      title:
        "Bachelor Degree in Chinese Translation and Interpretation @ Leiria Polytechnic Institute",
      description:
        "Four years of toggling between tones and terms, graduating with a suitcase full of translation tricks and a deep appreciation for Chinese culture.",
      type: "education",
    },
    {
      date: "2011 - 2012",
      title: "Bachelor Degree in Law @ New University of Lisbon",
      description:
        "Briefly courted Lady Justice, exploring the labyrinth of legal studies before setting my sights on linguistic pursuits.",
      type: "education",
    },
    {
      date: "2010 - 2011",
      title: "Bachelor Degree in Law @ Lisbon University",
      description:
        "Took a whirlwind tour through the legal landscape, picking up legalese and a lasting curiosity for law’s intricacies.",
      type: "education",
    },
    {
      date: "2019",
      title: "Teaching Aptitude Certificate (CAP)",
      description:
        "Certified to captivate classrooms and enlighten eager minds with pedagogical effectiveness.",
      type: "certificate",
    },
    {
      date: "2019",
      title: "Education Management Certificate",
      description:
        "Honed skills in educational leadership, mastering the art of managing academic programs and crafting compelling curricula.",
      type: "certificate",
    },
    {
      date: "February 2024 - April 2024",
      title: "Web Development Bootcamp @ IronHack",
      description:
        "Dived into the digital world with an intensive bootcamp focused on web development. Mastered HTML5, CSS, React.js, Express.js, MongoDB, and JavaScript, building a solid foundation in modern web technologies.",
      type: "bootcamp",
    },
  ].sort(
    (a, b) => new Date(getStartDate(b.date)) - new Date(getStartDate(a.date))
  ); // Sorting by extracted start date

  return (
    <div className="timeline-container">
      <ul className="timeline">
        {entries.map((entry, index) => (
          <li
            key={index}
            className={`timeline-item ${entry.type}-item`}
            onClick={() => toggleText(index)}
          >
            <div className={`timeline-content ${entry.type}-content`}>
              <h3>{getStartDate(entry.date)}</h3>
              <strong>{entry.title}</strong>
              <p style={{ display: showText[index] ? "block" : "none" }}>
                {entry.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
