import React, { useEffect, useRef } from "react";
import "../ResumeSection.css";
import javaLogo from "../images/java.png";
import springLogo from "../images/spring.png";
import htmlCssLogo from "../images/html.png";
import javascriptLogo from "../images/js.png";
import sqlLogo from "../images/sql.png";
import gitLogo from "../images/git.png";
import reactLogo from "../images/react.png";
import jenkinsLogo from "../images/jenkins.png";
import linkedinLogo from "../images/linkedin.png";
import githubLogo from "../images/github.png";
import Typed from "typed.js";
import { Helmet } from "react-helmet";

const ResumeSection = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Hi, I am Shubh....",
        "Passionate about creating meaningful web experiences.",
        "Checkout My Profile...",
      ], // Replace with your desired content strings
      typeSpeed: 50, // Adjust typing speed (in milliseconds)
      loop: false, // Set to true if you want the typing effect to repeat
    };

    if (typedRef.current && typedRef.current.tagName) {
      const typed = new Typed(typedRef.current, options);

      return () => {
        typed.destroy(); // Cleanup when component is unmounted
      };
    }
  }, []);

  return (
    <div className="container" style={{ overflow: "auto" }}>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <header>
        <h1>
          <span ref={typedRef} style={{ color: "white" }}></span>
        </h1>
      </header>
      <section className="section">
        <h2 className="section-title">Profile</h2>
        <p
          className="section-content hover-effect"
          style={{ fontFamily: "Lobster" }}
        >
          I am an experienced software engineer with expertise in Java, Spring
          Boot, and web services. I have a passion for developing high-quality
          software solutions and solving complex problems. My strong technical
          skills, coupled with my ability to collaborate and communicate
          effectively, allow me to deliver robust and scalable applications. I
          am highly motivated, detail-oriented, and dedicated to continuous
          learning and professional growth.
        </p>
      </section>

      <section>
        <h2 className="section-title">Skills</h2>
        <div className="skills-list">
          <div className="skills-item">
            <img src={javaLogo} alt="Java" />
            <p>Java</p>
          </div>
          <div className="skills-item">
            <img src={springLogo} alt="Spring Boot" />
            <p>Spring Boot</p>
          </div>
          <div className="skills-item">
            <img src={reactLogo} alt="Java" />
            <p>React</p>
          </div>
          <div className="skills-item">
            <img src={htmlCssLogo} alt="HTML/CSS" />
            <p>HTML/CSS</p>
          </div>
          <div className="skills-item">
            <img src={javascriptLogo} alt="JavaScript" />
            <p>JavaScript</p>
          </div>
          <div className="skills-item">
            <img src={sqlLogo} alt="SQL" />
            <p>SQL</p>
          </div>
          <div className="skills-item">
            <img src={gitLogo} alt="Git" />
            <p>Git</p>
          </div>
          <div className="skills-item">
            <img src={jenkinsLogo} alt="Git" />
            <p>Jenkins</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          <div className="timeline-item move-effect parallax-section">
            <h3>Associate Software Engineer</h3>
            <p>Accenture | August 2021 - Present</p>
            <ul>
              <li>
                Developed and maintained web applications using Java and Spring
                Boot
              </li>
              <li>
                Collaborated with cross-functional teams to design and implement
                new features
              </li>
              <li>
                Created HLDs, LLD's to integrate a new service from sratch.
              </li>
              <li>
                Experience with api development, debugging,integration of apis,
                writing queries
              </li>
              <li>Worked on a number of security vulnerability fixes</li>
              <li>
                Optimized application performance and conducted code reviews
              </li>
            </ul>
          </div>
          <div className="timeline-item move-effect">
            <h3>Mobile Appication Developer Intern</h3>
            <p>Kryptic Media Labs | Jan 2020 - March 2020</p>
            <ul>
              <li>
                Designed and Developed a Mobile Application from scratch which
                shows user interaction and collaborates three industries film,
                fashion, music.
              </li>
              <li>
                Implemented fully functional app writing clean code.
                Troubleshoot and debug to optimize performance.{" "}
              </li>
              <li>Technologies Used - Flutter, Firebase</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Projects</h2>
        <div className="project-item move-effect">
          <h3>Portfolio</h3>
          <ul>
            <li>Made using React for Web!</li>
          </ul>
        </div>
        <div className="project-item move-effect">
          <h3>GLUG_MVIT</h3>
          <ul>
            <li>Website for college club GLUG(GNU Linux Users Group).</li>
            <li>
              Developed with nodejs and express as backend with Firebase as
              database.
            </li>
          </ul>
        </div>
        <div className="project-item move-effect move-effect">
          <h3>Flutter Mobile Application</h3>
          <ul>
            <li>
              A Flutter App which provides users to interact with persons in the
              same field of work, make new connections, share their work.
            </li>
            <li>
              Started the app by building wireframes and then completing one
              page at a time.
            </li>
            <li>Technologies Used - Dart, Firebase.</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Interests</h2>
        <div className="interest-item move-effect">
          <h3>AI & Machine Learning</h3>
          <ul>
            <li>
              I love exploring the fascinating world of Artificial Intelligence
              and Machine Learning algorithms and applications.
            </li>
          </ul>
        </div>
        <div className="interest-item move-effect">
          <h3>Problem Solving</h3>
          <ul>
            <li>
              I enjoy honing my problem-solving skills by tackling challenging
              questions on various platforms to enhance my problem-solving
              abilities.
            </li>
            &nbsp;
            <li>I use Leetcode, Codechef to practice problems</li>
          </ul>
        </div>
        <div className="interest-item move-effect">
          <h3>Playing Football, Swimming</h3>
          <ul>
            <li>
              I love playing football. I am also trying to learn swimming as
              well.
            </li>
          </ul>
        </div>
        <div className="interest-item2 move-effect">
          <h3>Travelling</h3>
          <ul>
            <li>I enjoy travelling sometimes. I like to explore new places.</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Education</h2>
        <div className="education-item move-effect">
          <h3>Bachelor of Technology in Computer Science</h3>
          <ul>
            <li>Sir M Visvesvaraya Institute of Technology| August 2021</li>
            <li>CGPA - 8.9/10</li>
          </ul>
        </div>
        <div className="education-item move-effect">
          <h3>Secondary School</h3>
          <ul>
            <li>Delhi Public School Kalyanpur, Kanpur</li>
            <li>12th - 85.6%</li>
          </ul>
        </div>
      </section>

      <footer className="footer-text">
        <h2>Contact Information</h2>
        <div>
          <a href="https://github.com/shubh07sx">
            <img src={githubLogo} alt="GitHub Logo" className="logo-icon" />
          </a>
          &nbsp;&nbsp;
          <a href="https://www.linkedin.com/in/shubh-saxena-320950166/">
            <img src={linkedinLogo} alt="LinkedIn Logo" className="logo-icon" />
          </a>
        </div>
        <p className="contact-info">Email: shubh.saxena07@gmail.com</p>
        <p className="contact-info">Phone: +917275968152</p>
      </footer>
    </div>
  );
};

export default ResumeSection;
