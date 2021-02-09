import React, { useState } from 'react';
import api from "../mocks/ProductList";
import ProductList from "../components/ProductList"

const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([])

    React.useEffect(() => {
        const promesa = new Promise((done, error) => {
            setTimeout(() => done(api), 500);
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
    <div><ProductList productos={productos} /></div>
    </>
    )
}

export default ItemListContainer;