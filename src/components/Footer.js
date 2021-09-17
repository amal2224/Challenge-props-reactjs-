import React from 'react'
import '../App.css';

const Footer = ({footerr}) => {
    return (
        <footer>
            <p>{footerr.Copyritghts} &copy; {footerr.company} {footerr.year}</p>
        </footer>
    )
}

export default Footer
