import React from 'react';
import { PopupButton } from 'react-calendly';

import './GoogleCalendar.scss';

const GoogleCalendar = () => {

    return(
        <div className='calendar'>
          <h1>Agenda tu cita con Nosotros</h1>  

          <PopupButton
            url='https://calendly.com/mobilescopachucacontact/'
            rootElement={document.getElementById("root")}
            text="Agenda tu cita aqui!"
          />

          <p>Horario de atención 9AM a 5PM</p>
        </div>
    )
}

export default GoogleCalendar;