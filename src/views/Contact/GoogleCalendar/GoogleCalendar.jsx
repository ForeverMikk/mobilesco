import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

import './GoogleCalendar.scss';
import { addEvent } from '../../../services/googleService';

let event = {
  'summary': 'Google I/O 2015',
  'location': '800 Howard St., San Francisco, CA 94103',
  'description': 'A chance to hear more about Google\'s developer products.',
  'start': {
    'dateTime': '2015-05-28T09:00:00-07:00',
    'timeZone': 'America/Los_Angeles'
  },
  'end': {
    'dateTime': '2015-05-28T17:00:00-07:00',
    'timeZone': 'America/Los_Angeles'
  },
  'recurrence': [
    'RRULE:FREQ=DAILY;COUNT=2'
  ],
  'attendees': [
    {'email': 'lpage@example.com'},
    {'email': 'sbrin@example.com'}
  ],
  'reminders': {
    'useDefault': false,
    'overrides': [
      {'method': 'email', 'minutes': 24 * 60},
      {'method': 'popup', 'minutes': 10}
    ]
  }
};

const GoogleCalendar = () => {

    const handleClick = () => {
      addEvent(event);
    }

    return(
        <div className='calendar'>
            <h1>Agenda tu cita con Nosotros</h1>  

            <button onClick={handleClick}>
                <FontAwesomeIcon icon={faCalendar} style={{marginRight: '1rem'}}/>
                Agenda tu cita Aqui
            </button>

            <p>Horario de atención 9AM a 5PM</p>

          <ul>
            {/* {events.length > 0 && events.map((event) => (
              <li key={event.id}>
                <Event description={event.summary} />
              </li>
            ))} */}
          </ul>
        </div>
    )
}

export default GoogleCalendar;