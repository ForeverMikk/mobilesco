import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import './FrequentQuestions.scss';

const FrequentQuestions = () => {

    const [showAnswer, setShowAnswer] = useState(
        {
            show: [false, false, false, false]
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
            <h1>Preguntas frecuentes</h1>

            <div className="container">
                    <div className="container-faq">

                        <div className={`item-faq ${showAnswer.show[0] ? 'active' : ''}`}>
                            <div className="question">
                                <h3>¿A qué número me puedo contactar? </h3>
                                <div className="more" onClick={() => showHide(0)}>
                                    <i> <FontAwesomeIcon icon={showAnswer.show[0] ? faAngleDown : faAngleLeft} size="2x" /> </i>
                                </div>
                            </div>
                            <div className={`answer ${showAnswer.show[0] ? 'active' : ''}`}>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores repellat vitae tenetur eos doloremque. Tempora sed ut consequatur laboriosam sit mollitia beatae error, omnis deleniti, earum eius odit. Doloribus, nesciunt.<span>A</span></p>
                            </div>
                        </div>

                        <div className={`item-faq ${showAnswer.show[1] ? 'active' : ''}`}>
                            <div className="question">
                                <h3>¿Desde qué cantidad puedo recibir un crédito? </h3>
                                <div className="more" onClick={() => showHide(1)}>
                                    <i> <FontAwesomeIcon icon={showAnswer.show[1] ? faAngleDown : faAngleLeft} size="2x" /> </i>
                                </div>
                            </div>
                            <div className={`answer ${showAnswer.show[1] ? 'active' : ''}`}>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores repellat vitae tenetur eos doloremque. Tempora sed ut consequatur laboriosam sit mollitia beatae error, omnis deleniti, earum eius odit. Doloribus, nesciunt.<span>A</span></p>
                            </div>
                        </div>

                        <div className={`item-faq ${showAnswer.show[2] ? 'active' : ''}`}>
                            <div className="question">
                                <h3>¿Puedo caragr en cualquier gasolinería?</h3>
                                <div className="more"  onClick={() => showHide(2)}>
                                    <i> <FontAwesomeIcon icon={showAnswer.show[2] ? faAngleDown : faAngleLeft} size="2x" /> </i>
                                </div>
                            </div>
                            <div className={`answer ${showAnswer.show[2] ? 'active' : ''}`}>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores repellat vitae tenetur eos doloremque. Tempora sed ut consequatur laboriosam sit mollitia beatae error, omnis deleniti, earum eius odit. Doloribus, nesciunt.<span>A</span></p>
                            </div>
                        </div>

                        <div className={`item-faq ${showAnswer.show[3] ? 'active' : ''}`}>
                            <div className="question">
                                <h3>¿Cúanto tiempo tengo para pagar mi crédito? </h3>
                                <div className="more" onClick={() => showHide(3)}>
                                    <i> <FontAwesomeIcon icon={showAnswer.show[3] ? faAngleDown : faAngleLeft} size="2x" /> </i>
                                </div>
                            </div>
                            <div className={`answer ${showAnswer.show[3] ? 'active' : ''}`}>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores repellat vitae tenetur eos doloremque. Tempora sed ut consequatur laboriosam sit mollitia beatae error, omnis deleniti, earum eius odit. Doloribus, nesciunt.<span>A</span></p>
                            </div>
                        </div>

                    </div>
            </div>

        </section>
    )
}

export default FrequentQuestions;