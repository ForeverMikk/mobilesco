import React from 'react';
import { useTranslation } from 'react-i18next';
import { Widget } from '@typeform/embed-react';

import './JoinUs.scss';

const JoinUs = () => {
    const { t } = useTranslation();

    return (
        <section className='join-us'>
            <div className="info">
                <h1>{t('about-us.join-us.title')}</h1>
                <p>{t('about-us.join-us.description')}</p>
            </div>

            <Widget 
                id='pot9swBe' 
                className='my-form' 
                source='//embed.typeform.com/next/embed.js' 
                style={{height: '100vh'}}  
                data-tf-inline-on-mobile
            />

        </section>
    )
}

export default JoinUs;