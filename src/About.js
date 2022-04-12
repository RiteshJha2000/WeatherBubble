import ".//About.css";
import lkdn from "./img/THE NEW LINKEDIN LOGO PNG 2022.png"
import pic1 from "./img/logoabout.jpg";
import pic from "./img/profile.jpeg";
import insta from "./img/insta.jpg";
import React, { useEffect} from "react";
import Navbar from "./Navbar";

const mode="dark"

const About = (props) => {
  useEffect(() => {
    props.setProgress(0);
    // eslint-disable-next-line
  }, [1000]);
  
  document.title="About-WeatherAPI";
  
  return (
    <>
      <div className="myabout background">
        <Navbar mode={mode}/>
        <div className="box-main">
          <div className="firsthalf">
            <h1 className="text-big">About Us</h1>
            <p className="text-small">
              This Website has been made from javascript and ReactJS and This is
              our first basic project as a frontend Developer.This app which will
              keep you updated and informed about the weather condition of alomost any place or city in 
              the world.So that when you plan your next trip or picnic to any other 
              city then it may not get spoiled by bad weather.
            </p>
            <div className="button">
              <button className="btn1">Subscribe</button>
            </div>
          </div>
          <div className="secondhalf">
            <img src={pic1} alt="Loading" id="img2" />
          </div>
        </div>
      </div>

        <h2 className="head"><b>Developer</b></h2>
      <div className="mainsection">

        <div className="firstsection">
          <img src={pic} alt="unable to load" id="pic" />
        </div>

        <div className="secomdsection"  onLoad={props.setProgress(100)}>
          <h2 id="myname">Ritesh Jha</h2>
          <div className="info">
            <ul>
              <li>Roll No. :- 20001016075</li>
              <li>B.Tech 2nd Year</li>
              <li>Computer Science Engineering With Data Science (CEDS)</li>
              <li>From Jc Bose University of Science and Technology, YMCA</li>
            </ul>
          </div>
          <div className="secondimg">
            <a href="https://www.instagram.com/ritesh_jha_20/">
            <img src={insta} id="insta" alt="unable to load" />
            </a>
            <a href="https://www.linkedin.com/in/ritesh-jha-217645200">
            <img src={lkdn} id="insta" alt="unable to load" />
            </a>
          </div>
        </div>
        

      </div>
      <div className="mainsection rev">

        <div className="firstsection">
          <img src={"/"} alt="unable to load" id="pic" />
        </div>

        <div className="secomdsection">
          <h2 id="myname">Siddharth Khera</h2>
          <div className="info">
            <ul>
              <li>Roll No. :- 20001016060</li>
              <li>B.Tech 2nd Year</li>
              <li>Computer Science Engineering With Data Science (CEDS)</li>
              <li>From Jc Bose University of Science and Technology, YMCA</li>
            </ul>
          </div>
          <div className="secondimg">
            <a href="https://www.instagram.com">
            <img src={insta} id="insta" alt="unable to load" />
            </a>
            <a href="https://www.linkedin.com/in">
            <img src={lkdn} id="insta" alt="unable to load" />
            </a>
          </div>
        </div>
        

      </div>


     <section className="contact" id="contact">
     <h2 className="text-centre">Contact Us</h2>
     <div className="form">
     <input type="text" id="name" name="name" placeholder="Enter Your Name" />
     <input type="number" id="number" name="number" placeholder="Enter Your Number" />
     <input type="email" id="email" name="email" placeholder="Enter Your Email id" />
     <textarea name="text" id="text" cols="30" rows="10" placeholder="Elaborate Your Concern"></textarea>
     <button className="btn1 btn2">Submit</button>
     </div>
     </section>

     <footer>
        <div className="foot background" >
            Copyright &copy; www.WeatherAPI.com- All Right Reserved
        </div>
     </footer>
    </>
  );
};
export default About;
