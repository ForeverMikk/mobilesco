import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import './ProductCard.scss';

const ProductCard = () => {
    return (
        <div className='product-card'>

            <div className="img"></div>
            
            <div className="product-info">
                <h3 className="category">Categoria Sillas</h3>
                <h1>Silla ISO</h1>
                <p className='description'>Silla acojinada en vinil o pliana con estructura tubular ovalada y coderas. <br /> Variedad de colores. Pregunte por los disponibles.</p>
                
                <div className="colors">
                    <h3 className='colors-title'>Colores: </h3>
                    <div className="buttons">
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                    <label htmlFor="" className='label'>Azul Rey</label>
                </div>

                <div className="sizes">
                    <h3 className='sizes-title'>Tamaños</h3>
                    <div className="buttons">
                        <button>Preescolar</button>
                        <button>Primaria</button>
                        <button>Sec / Ejecutivo</button>
                    </div>
                </div>

                <div className="quantity">
                    <h3 className="quantity-title">Cantidad</h3>
                    <div className="buttons">
                        <button className='less'>-</button>
                        <p>1</p>
                        <button className='more'>+</button>
                    </div>
                </div>

                <div className="bottom-buttons">  
                    <button className='quote'>Cotizar Ahora</button>
                    <button className='heart'>
                        <FontAwesomeIcon icon={faHeart} />
                    </button>
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