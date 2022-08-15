import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import './Question.scss';

const Question = ({showAnswer, showHide, question, answer}) => {

    return (
        <div className={`item-faq ${showAnswer ? 'active' : ''}`}>
            <div className="question">
                <h3>{question}</h3>
                <div className="more" onClick={showHide}>
                    <i> <FontAwesomeIcon icon={showAnswer ? faAngleDown : faAngleLeft} size="2x" /> </i>
                </div>
            </div>
            <div className={`answer ${showAnswer ? 'active' : ''}`}>
                <p>{answer}</p>
            </div>
        </div>
    ) 
}

export default Question;