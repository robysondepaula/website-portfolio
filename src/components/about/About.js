import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>About Me</h3>
        <p>
          My name is Robyson, I am a developer. I love technology, knowledge and
          learning.
        </p>
        <p>
          I always aim to solve problems, write clean code, and deliver a unique
          and fun experience to the user.
        </p>
        <br></br>
        <h3>Languages and Frameworks</h3>
        <ul>C#|JavaScript|HTML|CSS|TypeScript|React JS|ASP.NET|Bootstrap</ul>
      </div>
      <div className="about-img">
        <img
          src="https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="about"
        />
      </div>
    </div>
  );
};
export default About;
