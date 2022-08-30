import React from 'react';

import './JoinUs.scss';
import Contact from '../../Contact/Contact';

const JoinUs = () => {
    return (
        <section className='join-us'>
            <div className="info">
                <h1>Sé parte del equipo</h1>
                <p>Unete al mejor equipo de Profesionales</p>
            </div>

            <Contact />

        </section>
    )
}

export default JoinUs;