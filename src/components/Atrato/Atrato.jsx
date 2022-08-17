import React, { useEffect } from 'react';

const Atrato = () => {

    // Función para cargar scripts dinámicamente.
    const appendScripts = (firstScript, secondScript) => {
        const script = document.createElement('script');
        script.src = firstScript;
        script.async = true;
        script.defer = true;
        script.onload = () => {
            if (secondScript) {
                appendScripts(secondScript, null);
            }
        };
        document.body.appendChild(script);
    };

    // Función para cargar una hoja de estilo de manera dinámica.
    const appendStylesheet = (scriptToAppend) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = scriptToAppend;
        link.media = 'all';
        document.body.appendChild(link);
    };

    useEffect(() => {
        appendStylesheet(
            'https://sandbox.atratopago.com/ecommerce_plugin/highslide.css'
        );
        appendScripts(
            'https://sandbox.atratopago.com/ecommerce_plugin/highslide-with-html.js',
            'https://sandbox.atratopago.com/ecommerce_plugin/highslide-config.js'
        );
    })

    return (
        <>
        <div id="higslide-div-atrato-info"
            data-plataform="other"  
            data-type="info" 
            data-price="PRECIO DEL PRODUCTO" 
            data-version="2.0"
            data-style="dark" 
            data-linkcolor="black" 
            data-urlhost="https://sandbox.atratopago.com">Atrato
        </div>
        </>
    )
}

export default Atrato;