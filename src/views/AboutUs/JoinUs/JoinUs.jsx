import React from 'react';
import { useTranslation } from 'react-i18next';

import './JoinUs.scss';
import Contact from '../../Contact/Contact';

const JoinUs = () => {
    const { t } = useTranslation();

    return (
        <section className='join-us'>
            <div className="info">
                <h1>{t('about-us.join-us.title')}</h1>
                <p>{t('about-us.join-us.description')}</p>
            </div>

            <Contact />

        </section>
    )
}

export default JoinUs;