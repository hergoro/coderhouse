import React from 'react';
import ProductCardComponent from '../components/ProductCard';


const ItemList = (props) => {
    return (
        <>
            <div className="col-sm-12">
                {props.productos.map((producto) => {
                    return <div className="card col-sm-2" key={producto.id}>
                        <ProductCardComponent info={producto} />
                        </div>
                })}
            </div>
        </>
    )
}

export default ItemList;