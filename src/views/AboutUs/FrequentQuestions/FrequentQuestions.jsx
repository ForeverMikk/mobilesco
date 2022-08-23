import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import './FrequentQuestions.scss';
import Question from './Question/Question';

const FrequentQuestions = () => {
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
            <h1>Preguntas frecuentes</h1>

            <div className="container">
                <div className="container-faq">

                    <div className={`item-faq ${showAnswer.show[0] ? 'active' : ''}`}>
                        <div className="question">
                            <h3>¿Cuáles son los métodos de pago?</h3>
                            <div className="more" onClick={() => showHide(0)}>
                                <i> <FontAwesomeIcon icon={showAnswer.show[0] ? faAngleDown : faAngleRight} size="2x" /> </i>
                            </div>
                        </div>
                        <div className={`answer ${showAnswer.show[0] ? 'special' : ''}`}>
                            <p>
                                <span>Santander:</span> Obtén meses sin intereses con tarjeta Santander <br /> <br />
                                <span>BBVA:</span> Obtén meses sin intereses con tarjetas participantes <br /> <br />
                                <span>Paypal:</span> Recibe un formato de pago por correo electrónico a través de PayPal. O si lo prefieres a través de un mensaje de texto, puedes pagar con tarjetas de crédito o débito, PayPal o PayPal Credit. <br /> <br />
                                <span>Atrato:</span> Compra hasta en 24 meses sin necesidad de tener tarjeta. Evalúa tu perfil para conocer la oferta que Atrato tiene para ti , una vez aprobada te enviaremos una liga de pago para comenzar tu compra.
                            </p>
                        </div>
                    </div>

                    <Question 
                        question="¿Qué costo tiene el flete?"
                        answer="El costo del flete depende de la distancia del punto de entrega. En compras mayores a ciertos montos podemos brindarte un descuento, pregunta por las alternativas."
                        showAnswer={showAnswer.show[1]} 
                        showHide={()=> showHide(1)}
                    />
                    <Question 
                        question="¿Qué tipo de garantía puedo tener?"
                        answer="Al comprar cualquier artículo obtén 6 meses de garantía en desperfectos de fábrica. Adicionalmente puedes obtener un descuento por mantenimiento en los primeros 12 meses de uso en tu producto. Pregunta por los términos y condiciones."
                        showAnswer={showAnswer.show[2]} 
                        showHide={()=> showHide(2)}
                    />
                    <Question 
                        question="¿Qué descuentos están disponibles?"
                        answer="Por temporada ofrecemos distintos descuentos sobre productos seleccionados. Adicionalmente otorgamos regalos por montos de compra a partir de ciertos montos. También contamos con precios por mayoreo a partir de 100 piezas. Pregunta por tu descuento aplicable."
                        showAnswer={showAnswer.show[3]} 
                        showHide={()=> showHide(3)}
                    />
                    <Question 
                        question="¿Qué materiales trabajan?"
                        answer="Cada producto puede realizarse en distintos tipos de materiales, puedes consultarlos en el catálogo y preguntar directamente para verificar su disponibilidad."
                        showAnswer={showAnswer.show[4]} 
                        showHide={()=> showHide(4)}
                    />

                </div>
            </div>

        </section>
    )
}

export default FrequentQuestions;