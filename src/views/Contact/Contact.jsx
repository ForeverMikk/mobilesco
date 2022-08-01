import React from 'react'
import { Widget } from '@typeform/embed-react';

import './Contact.scss';

const Contact = () => {
    return (
        <sesction className="contact">
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