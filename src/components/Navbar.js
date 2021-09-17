import React from 'react'
import '../App.css';

const Navbar = ({person}) => {
    return (
      <header>
        <h1>{person.fullName}</h1>
        <ul class="navmenu">
          <li><a href="#">About</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
    </header>
    )
}

export default Navbar
