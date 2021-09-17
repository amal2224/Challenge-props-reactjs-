import React from 'react'
import '../App.css';

const About = ({person}) => {
    return (
      <section id="about-me">
      <h1>
        Hello, my name is
        <span class="rotate text-important">{person.fullName}</span>,<br />
        and i make horrible websites.
      </h1>
      <img class="avatar" src={person.img} alt="jhon-doe" />
    </section>
            )
}

export default About
