import React from 'react';

import './NotFoundView.scss';
import notFoundImg from '../../asstes/img/defaultImg.jpg';


const NotFoundView = ({ input }) => {
    if(input.length > 2) {
        return (
            <div className="not-found-img">
                <img src={notFoundImg} alt={`Not found ${input}`} />
                <p>No hemos encontrado ninguna coincidencia con {input}</p>
            </div>
        )
    } else {
        return <></>
    }
}

export default NotFoundView;