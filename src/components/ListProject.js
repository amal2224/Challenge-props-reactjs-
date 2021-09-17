import React from 'react'
import '../App.css';

import ListItem from './ListItem'
const ListProject = ({project}) => {
    return (
        <div>
            <h2 class="text-important">Projects</h2>
            <div class="projects-container">
            {project.map(el=> <ListItem el={el}/>)}
            </div>
        </div>
    )
}

export default ListProject
