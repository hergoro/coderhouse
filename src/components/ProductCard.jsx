import React from 'react';
import ItemCountComponent from './ItemCount';

const ProductCardComponent = (props) => {

    let onAdd = (total) => {
        console.log(`Se agregaron ${total} productos al carrito`);
    }

    return(
        <>
            <div className="card col-sm-3">
                <img src="../images/prod-13.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Remera</h5>
                    <p className="card-text">Descripcion de la remera.</p>
                </div>
                <ItemCountComponent onAdd={onAdd} initial={props.initial} stock={props.stock}></ItemCountComponent>
            </div>
        </>
    )
}

export default ProductCardComponent