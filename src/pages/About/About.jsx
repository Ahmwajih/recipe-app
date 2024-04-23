import codingImage from "../../assets/coding.svg";
import Navbar from "../../components/Navbar/Navbar";
import "./styleAbout.css";

import { useNavigate } from "react-router-dom";

function About() {
  return (
    <div>
      <Navbar/>
      <div className="about">
        <div>
          <img src={codingImage} alt="coding" />
        </div>
        <h3 className="text1">
          About Software Developer <span className="textBold1">Ben Smida</span>
        </h3>
        <div className="paragraphe">
          <p>
            <span className="textBold">Hi, I'am Ben Smida Ahmed Wajih</span>
            <br />
            I’m currently learning Full-Stack Development Languages.
            <br />
            I know JS, ReactJS, Django, NodeJS, MongoDB, Python, Flask, Jinja
            Template, JQuery.
            <br />
            <a href="mailto:wajih21@hotmail.fr">
              Send email: <span className="textBold">wajih21@hotmail.fr</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
