import React from 'react'
import '../App.css';

const contact = ({person}) => {
    return (
        <section id="contact">
        <h2 class="text-important">contact me</h2>
    <form>
        <label>{person.fullName}</label>
        <input type="text" placeholder="Email" />
        <label>Email</label>
        <input type="email" placeholder="Email" />
        <label>Message</label>
        <textarea rows="5" cols="40"></textarea>
        <button>Send</button>
    </form>
    </section>
    )
}

export default contact
