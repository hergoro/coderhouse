import React from 'react';
import ItemCountComponent from './ItemCount';
import { Link, useParams } from 'react-router-dom';

const ProductCardComponent = (props) => {

    let onAdd = (total) => {
        console.log(`Se agregaron ${total} productos al carrito`);
    }

    return (
        <>
            <div className="card-container"><Link to={`/detalle/${props.info.id}`} ><img className="imagen" src={props.info.imagen}/></Link>
                <div className="">
                    <div className="">
                        <h5 className="card-tittle">{props.info.detalles}</h5>
                        <small className="card-tipo">{props.info.tipo}</small>
                        <small className="card-tipo">Colores: {props.info.color}</small>
                    </div>
                    <div className="row">
                        <h5 className="card-precio">$ {props.info.precio}</h5>
                    </div>
                    <div className="button-agregar">
                        <ItemCountComponent onAdd={onAdd} initial={1} stock={props.info.stock}></ItemCountComponent>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCardComponent;