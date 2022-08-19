import React, {useEffect} from 'react'
import { Widget } from '@typeform/embed-react';

import './Contact.scss';

const scrollTop = () => {
    const scrolledElement = document.getElementById('contact');

    scrolledElement.scrollIntoView();
}


const Contact = () => {

    useEffect(() => {
      scrollTop()
    }, [])
    

    return (
        <sesction className="contact" id="contact">
            <Widget 
                id='pot9swBe' 
                className='my-form' 
                source='//embed.typeform.com/next/embed.js' 
                style={{height: '100vh'}}  
                data-tf-inline-on-mobile
            />
        </sesction>
        )
}

export default Contact;