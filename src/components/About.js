import React from "react";
import user from "../data/user"


function About(props) {
  const userBio = props.bio
  return (
    <div id="about">
      <h2>About Me</h2>
      { userBio ? <p>{ props.bio }</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
    </div>
  );
}

export default About;
