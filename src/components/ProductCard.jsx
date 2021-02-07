import React from 'react';
import ItemCountComponent from './ItemCount';

const ProductCardComponent = (props) => {

    let onAdd = (total) => {
        console.log(`Se agregaron ${total} productos al carrito`);
    }

    return(
        <>
            <div>
                <img src={props.info.imagen} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Tipo: {props.info.tipo}</h5>
                    <h5 className="card-title">Color: {props.info.color}</h5>
                    <p className="card-text">Detalle: "{props.info.detalles}"</p>
                    <ItemCountComponent onAdd={onAdd} initial={1} stock={props.info.stock}></ItemCountComponent>
                </div>
            </div>
        </>
    )
}

export default ProductCardComponent