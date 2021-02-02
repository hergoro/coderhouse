import React from 'react';
import ProductCardComponent from '../components/ProductCard';

const ItemListContainer = (props) => {
    return (
    <>
    <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 fw-normal">{props.greetings}</h1>
            <p className="lead fw-normal">Bienvenido a la tienda oficial de Melian</p>
            <ProductCardComponent stock={5} initial={1}/>
        </div>
    </div>
    </>
    )
}

export default ItemListContainer;