import React from 'react';
import ProductCardComponent from './ProductCard';


const ProductList = (props) => {
    return (
        <>
            <div className="row justify-content-center">
                {props.productos.map((producto) => {
                    return <div key={producto.id}>
                        <ProductCardComponent info={producto} productos={props.productos}/>
                        </div>
                })}
            </div>
        </>
    )
}

export default ProductList;