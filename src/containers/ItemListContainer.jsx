import React, { useState } from 'react';
import ProductList from "../mocks/ProductList";
import ItemList from "../components/ItemList"

const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([])

    React.useEffect(() => {
        const promesa = new Promise((done, error) => {
            setTimeout(() => done(ProductList), 2000);
        });

        promesa.then((resultado) => setProductos(resultado));
    }, []);

    return (
    <>
    <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 fw-normal">{props.greetings}</h1>
            <p className="lead fw-normal">Bienvenido a la tienda oficial de Melian</p>
        </div>
    </div>
    <div className="col-sm-12"><ItemList productos={productos} /></div>
    </>
    )
}

export default ItemListContainer;