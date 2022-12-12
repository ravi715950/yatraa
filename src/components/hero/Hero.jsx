import React from "react";
import "./Hero.css";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img
          src={props.heroImg}
          alt="img"
        />
      </div>
      <div className="hero-text">
        {/* <h1>{props.title}</h1> */}
        <h3>{props.heading}</h3>
       
        <h1>{props.title} <span className={props.content}> </span></h1>
        <p>"{props.text}"</p>
        <a href={props.url} className={props.btnClass}>{props.buttonText} </a>
      </div>
    </>
  );
}

export default Hero;
