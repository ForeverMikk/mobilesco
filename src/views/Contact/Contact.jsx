import React, {useEffect} from 'react'

import './Contact.scss';
import GoogleCalendar from './GoogleCalendar/GoogleCalendar';
import JoinUs from '../AboutUs/JoinUs/JoinUs';


const Contact = () => {

    useEffect(() => {
        const scrollTop = () => {
            const scrolledElement = document.getElementById('contact');
        
            scrolledElement.scrollIntoView();
        }
        
        scrollTop();
    }, [])
    
    return (
        <section className="contact" id="contact">
            <GoogleCalendar />
            <JoinUs />
        </section>
        )
}

export default Contact;