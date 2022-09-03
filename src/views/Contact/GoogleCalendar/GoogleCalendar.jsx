import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

import './GoogleCalendar.scss';

const GoogleCalendar = () => {
    return(
        <div className='calendar'>
            <h1>Agenda tu cita con Nosotros</h1>  

            <button>
                <FontAwesomeIcon icon={faCalendar} style={{marginRight: '1rem'}}/>
                Agenda tu cita Aqui
            </button>
        </div>
    )
}

export default GoogleCalendar;