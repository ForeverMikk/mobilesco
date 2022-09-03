import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

import './GoogleCalendar.scss';

const GoogleCalendar = () => {

    const gapi = window.gapi;
    const CLIENT_ID = '936846069614-s1vbbqm9jp5cv8qq4j4fg34fc914vkjh.apps.googleusercontent.com';
    const API_KEY = 'AIzaSyAVeoENX2xLHnfhCEW5lANzch444vgxKOs';
    const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
    const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';

    const handleClick = () => {
        gapi.load('client:auth2', ()=> {
            console.log('load client');

            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES
            });

            gapi.client.load('calendar', 'v3', () => console.log('bam!'));

            gapi.auth2.getAuthInstance().signIn()
            .then(() => {
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


                  let request = gapi.calendar.events.insert({
                    'calendarId': "primary",
                    "resource": event
                  });

                  request.execute(event => {
                    window.open(event.htmlLink);
                  });
            })

        })
    }

    return(
        <div className='calendar'>
            <h1>Agenda tu cita con Nosotros</h1>  

            <button onClick={handleClick}>
                <FontAwesomeIcon icon={faCalendar} style={{marginRight: '1rem'}}/>
                Agenda tu cita Aqui
            </button>
        </div>
    )
}

export default GoogleCalendar;