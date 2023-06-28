import React, { useEffect, useState } from "react";
import Animations from "../../utilities/Animations";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import "./resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
          {props.github ? (
            <div className="heading-github">
              <a href={props.github ? props.github : ""}>Github Repo</a>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "Java", ratingPercentage: 80 },
    { skill: "C", ratingPercentage: 85 },
    { skill: "Python", ratingPercentage: 70 },
    { skill: "JavaScript", ratingPercentage: 45 },
    { skill: "Node JS", ratingPercentage: 30 },
    { skill: "Express JS", ratingPercentage: 30 },
    { skill: "React JS", ratingPercentage: 30 },
    { skill: "Boastrap", ratingPercentage: 60 },
    { skill: "Mongo DB", ratingPercentage: 50 },
    { skill: "Postgress", ratingPercentage: 50 },
    { skill: "HTML", ratingPercentage: 60 },
    { skill: "CSS", ratingPercentage: 60 },
  ];

  const projectsDetails = [
    {
      title: "YelpCamp",
      github: "https://github.com/SpyrosTsotzolas/yelp-camp",
    },
    {
      title: "Booking App",
      github: "https://github.com/SpyrosTsotzolas/Booking-App",
    },
    {
      title: "Text To Speech Editor",
      github: "https://github.com/SpyrosTsotzolas/Text2SpeechEditor",
    },
    {
      title: "Treegram",
      github: "https://github.com/SpyrosTsotzolas/treegram",
    },
    {
      title: "Multithreaded Server",
      github: "https://github.com/SpyrosTsotzolas/multithreaded-server",
    },
    {
      title: "Starlet Compiler",
      github: "https://github.com/SpyrosTsotzolas/StarletCompiler",
    },
    {
      title: "Tax Calculation",
      github:
        "https://github.com/SpyrosTsotzolas/Refactor-Minnesota-Income-Tax-Calculation-master",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"University of Ioannina, Greece"}
        fromDate={"2015"}
        toDate={"2021"}
      />
      <div className="resume-education">
        <span>
          Integrated Master’s Degree in Computer Science and Engineering
        </span>
      </div>
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Netcompany-Itrasoft"}
          fromDate={"Mar 2022"}
          toDate={"Oct 2022"}
        />
        <div className="resume-sub-heading">
          <span>Java Developer</span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Worked within an agile team on the development of a web
            application by using technologies such as Java EE, Microservices
            Architecture, Docker, Kafka, etc. .
          </span>
          <br />
          <span className="resume-description-text">
            - Performed a full range of complex programming tasks using a
            variety of web programming technologies.{" "}
          </span>
          <br />
          <span className="resume-description-text">
            - Collaborated with team members to understand requirements and
            propose solutions.
          </span>
          <br />
          <span className="resume-description-text">
            - Participated in peer code reviews.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          github={projectsDetails.github}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading heading="Sports" />
      <div className="resume-heading-description">
        <span>
          Apart from being a tech enthusiast and a code writer, i also love to
          play or watch sports because they let me get away from reality and
          give me the opportunity to collaborate with other people as well.
        </span>
      </div>
      <ResumeHeading heading="Music" />

      <div className="resume-heading-description">
        <span>
          Listening to soothing music is something i can never compromise with,
          skimming through Spotify's pop songs charts is at times the best
          stress reliever that i can get my hands on.
        </span>
      </div>

      <ResumeHeading heading="Travelling" />
      <div className="resume-heading-description">
        <span>
          I really like travel because it takes me out of my comfort zones and
          inspires me to see, taste and try new things.
        </span>
      </div>
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
