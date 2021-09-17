import React from 'react'
import '../App.css';

const ListItem = ({el}) => {
  
    return (
    <section id="projects">
        <div class="project-card">
          <img src={el.img} alt="project" />
          <h3>{el.title}</h3>
          <p>{el.description}</p>
          <p><a href="#">{el.gitLink}</a></p>
        </div>
    </section>
  
    )
}

export default ListItem
