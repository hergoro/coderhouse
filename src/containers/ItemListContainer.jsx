import React from 'react';

const ItemListContainer = (props) => {
    return (
    <>
    <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 fw-normal">{props.greetings}</h1>
            <p className="lead fw-normal">Esto es una "P" del primer proyecto de Reac.js</p>
            <a className="btn btn-outline-secondary" href="#">¡Estamos Trabajando Para Usted!</a>
        </div>
    </div>
    </>
    )
}

export default ItemListContainer;