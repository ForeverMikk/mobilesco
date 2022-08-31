import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

import './FrequentQuestions.scss';
import Question from './Question/Question';

const FrequentQuestions = () => {

    const { t } = useTranslation();
    const [showAnswer, setShowAnswer] = useState(
        {
            show: [false, false, false, false, false]
        }
    );

    const showHide = (num) => {
        setShowAnswer((prevState) => {
            const newItems = [...prevState.show];
            newItems[num] = !newItems[num];
            return {show: newItems}
        })
    }

    return (
        <section className='frequent-questions'>
            <h1>{t('about-us.frequent-questions.title')}</h1>

            <div className="container">
                <div className="container-faq">

                    <div className={`item-faq ${showAnswer.show[0] ? 'active' : ''}`}>
                        <div className="question">
                            <h3>{t('about-us.frequent-questions.q1.question')}</h3>
                            <div className="more" onClick={() => showHide(0)}>
                                <i> <FontAwesomeIcon icon={showAnswer.show[0] ? faAngleDown : faAngleRight} size="2x" /> </i>
                            </div>
                        </div>
                        <div className={`answer ${showAnswer.show[0] ? 'special' : ''}`}>
                            <p>
                                <span>Santander:</span> {t('about-us.frequent-questions.q1.santander')}<br /> <br />
                                <span>BBVA:</span>{t('about-us.frequent-questions.q1.bbva')}<br /> <br />
                                <span>Paypal:</span> {t('about-us.frequent-questions.q1.paypal')} <br /> <br />
                                <span>Atrato:</span> {t('about-us.frequent-questions.q1.atrato')}
                            </p>
                        </div>
                    </div>

                    <Question 
                        question={t('about-us.frequent-questions.q2.question')}
                        answer={t('about-us.frequent-questions.q2.answer')}
                        showAnswer={showAnswer.show[1]} 
                        showHide={()=> showHide(1)}
                    />
                    <Question 
                        question={t('about-us.frequent-questions.q3.question')}
                        answer={t('about-us.frequent-questions.q3.answer')}
                        showAnswer={showAnswer.show[2]} 
                        showHide={()=> showHide(2)}
                    />
                    <Question 
                        question={t('about-us.frequent-questions.q4.question')}
                        answer={t('about-us.frequent-questions.q4.answer')}
                        showAnswer={showAnswer.show[3]} 
                        showHide={()=> showHide(3)}
                    />
                    <Question 
                        question={t('about-us.frequent-questions.q5.question')}
                        answer={t('about-us.frequent-questions.q5.answer')}
                        showAnswer={showAnswer.show[4]} 
                        showHide={()=> showHide(4)}
                    />

                </div>
            </div>

        </section>
    )
}

export default FrequentQuestions;