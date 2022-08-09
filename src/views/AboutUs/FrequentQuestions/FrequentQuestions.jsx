import React, { useState } from 'react';

import './FrequentQuestions.scss';

const FrequentQuestions = () => {

    const [showAnswer, setShowAnswer] = useState(false);

    const handleClick = () => {
        setShowAnswer(!showAnswer);
    }

    return (
        <section className='frequent-questions'>
            <h1>Preguntas frecuentes</h1>

            <div className="container">
                <div className="row">
                    <div className="container-faq">
                        <div className="item-faq">
                            <div className="question">
                                <h3>¿A qué número me puedo contactar? </h3>
                                <div className="more" onClick={handleClick}><i> </i></div>
                            </div>
                            <div className={`answer first ${showAnswer ? 'active' : ''}`}>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores repellat vitae tenetur eos doloremque. Tempora sed ut consequatur laboriosam sit mollitia beatae error, omnis deleniti, earum eius odit. Doloribus, nesciunt.<span>A</span></p>
                            </div>
                        </div>

                        <div className="item-faq">
                            <div className="question">
                                <h3>¿Desde qué cantidad puedo recibir un crédito? </h3>
                                <div className="more" onClick={handleClick}><i> </i></div>
                            </div>
                            <div className={`answer second ${showAnswer ? 'active' : ''}`}>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores repellat vitae tenetur eos doloremque. Tempora sed ut consequatur laboriosam sit mollitia beatae error, omnis deleniti, earum eius odit. Doloribus, nesciunt.<span>A</span></p>
                            </div>
                        </div>

                        <div className="item-faq">
                            <div className="question">
                                <h3>¿Puedo caragr en cualquier gasolinería?</h3>
                                <div className="more"  onClick={handleClick}><i> </i></div>
                            </div>
                            <div className={`answer third ${showAnswer ? 'active' : ''}`}>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores repellat vitae tenetur eos doloremque. Tempora sed ut consequatur laboriosam sit mollitia beatae error, omnis deleniti, earum eius odit. Doloribus, nesciunt.<span>A</span></p>
                            </div>
                        </div>

                        <div className="item-faq">
                            <div className="question">
                                <h3>¿Cúanto tiempo tengo para pagar mi crédito? </h3>
                                <div className="more" onClick={handleClick}><i> </i></div>
                            </div>
                            <div className={`answer fourth ${showAnswer ? 'active' : ''}`}>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores repellat vitae tenetur eos doloremque. Tempora sed ut consequatur laboriosam sit mollitia beatae error, omnis deleniti, earum eius odit. Doloribus, nesciunt.<span>A</span></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default FrequentQuestions;