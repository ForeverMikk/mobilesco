import React from 'react';

import './Catalog.scss';
import sillas from '../../asstes/img/sillas.png';
import mesas from '../../asstes/img/mesas.png';
import escritorios from '../../asstes/img/escritorios.png';
import libreros from '../../asstes/img/libreros.png';
import CategoriesPopular from './CategoriesPopular/CategoriesPopular';
import TopProducts from './TopProducts/TopProducts';


const CaregorieCircle = ({img, name}) => {
    return (
        <button>
            <img src={img} alt={name} />
            <h3>{name}</h3>
        </button>
    )
}


const Catalog = () => {
    return (
        <section className="catalog">
            <div className="header">

                <h1 className="title">Echa a un vistazo a<br />nuestro catálogo</h1>

                <p className='description'>Si estás en busca de mobiliario de calidad entonces eres bienvenido. Tenemos diferentes tipos de muebles esperando a ser repartidos.</p>

                <form action="" className="search-bar">
                    <input type="text" placeholder='Búsqueda por nombre'/>
                    <button>Buscar</button>
                </form>

                <div className='categories'>
                    <CaregorieCircle img={sillas} name="Sillas" />
                    <CaregorieCircle img={mesas} name="Mesas" />
                    <CaregorieCircle img={escritorios} name="Escritorioss" />
                    <CaregorieCircle img={libreros} name="Libreros" />
                </div>
            </div>

            <CategoriesPopular />
            <TopProducts />

        </section>
    )
}

export default Catalog;