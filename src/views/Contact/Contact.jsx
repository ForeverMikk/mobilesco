import React, {useEffect} from 'react'

import './Contact.scss';
import GoogleCalendar from './GoogleCalendar/GoogleCalendar';
import JoinUs from '../AboutUs/JoinUs/JoinUs';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';


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
            <Tabs>
                <TabList>
                    <Tab>
                        Titulo 1
                    </Tab>
                    <Tab>
                        Titulo 2
                    </Tab>
                </TabList>
                <TabPanel>
                    <h2>Panel 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Panel 2</h2>
                </TabPanel>
            </Tabs>
            <GoogleCalendar />
            <JoinUs />
        </section>
        )
}

export default Contact;