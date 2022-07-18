import React from 'react'

import './ProductCard.scss';


const ProductCard = () => {
    return (
        <div className='product-card'>

            <div className="img"></div>
            
            <div className="product-info">
                <h3 className="category">Categoria Sillas</h3>
                <h1>Silla ISO</h1>
                <p>Silla acojinada en vinil o pliana con estructura tubular ovalada y coderas. <br /> Variedad de colores. Pregunte por los disponibles.</p>
                <div className="colors">
                    <h3 className='colors-title'>Colores: </h3>
                    <div className="buttons">
                        <button>.</button>
                        <button>.</button>
                        <button>.</button>
                    </div>
                    <label htmlFor="">Azul Rey</label>
                </div>

                <div className="sizes">
                    <h3 className='sizes-title'>Tamaños</h3>
                    <div className="buttons">
                        <button>Preescolar</button>
                        <button>Primaria</button>
                        <button>Sec / Ejecutivo</button>
                    </div>
                </div>

                <div className="cuantity">
                    <button>-</button>
                    <p>1</p>
                    <button>+</button>
                </div>

                <div className="bottom-buttons">  
                    <button>Cotizar Ahora</button>
                    <button>💖</button>
                </div>

                <div className="card-footer">
                    <p>Clave: REF</p>
                    <p>Categorias: Lorem</p>
                    <p>Tags: Lorem</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;