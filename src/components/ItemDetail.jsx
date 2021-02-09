import React, { useEffect, useState } from 'react';
import ItemCountComponent from './ItemCount';
import { useParams } from 'react-router-dom';
import api from '../mocks/ProductList';

const ItemDetail = (props) => {
    const { id } = useParams();
    const productosTodos = api;
    const [articulo, setArticulo] = useState([])

    useEffect(() => {
        setArticulo(buscarProducto(id));
        return () => {

        }
    },[id]);

    function buscarProducto(id) {
        let productoId = Number(id)
        return api.find(producto => producto.id === productoId) || null
    }

    function getRandomInt() {
        return Math.floor(Math.random() * (productosTodos.length - 1)) + 1;
    }

    let onAdd = (total) => {
        console.log(`Se agregaron ${total} productos al carrito`);
    }

    return (
        <>
            <div className="container bootdey">
                <div className="col-md-12">
                    <section className="panel">
                        <div className="panel-body row">
                            <div className="col-md-6  m-t-20">
                                <div className="pro-img-details">
                                    <img src={articulo.imagen} alt=""/>
                                </div>
                                <div className="pro-img-list">
                                    <a href="#">
                                        <img className="img-sugerida" src={productosTodos[getRandomInt()].imagen} alt=""/>
                                    </a>
                                    <a href="#">
                                        <img className="img-sugerida" src={productosTodos[getRandomInt()].imagen} alt=""/>
                                    </a>
                                    <a href="#">
                                        <img className="img-sugerida" src={productosTodos[getRandomInt()].imagen} alt=""/>
                                    </a>
                                    <a href="#">
                                        <img className="img-sugerida" src={productosTodos[getRandomInt()].imagen} alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6 m-t-20">
                                <h4 className="pro-d-title">
                                    {articulo.detalles}
                                </h4>
                                <p>
                                    Praesent ac condimentum felis. Nulla at nisl orci, at dignissim dolor, The best product descriptions address your ideal buyer directly and personally. The best product descriptions address your ideal buyer directly and personally.
                                </p>
                                <div className="product_meta">
                                    <span className="tagged_as"><strong>Color:</strong> {articulo.color}</span>
                                    <span className="posted_in"> <strong>Categories:</strong> <a rel="tag" href="#">Remeras</a>, <a rel="tag" href="#">Hombre</a>, <a rel="tag" href="#">Mujer</a>.</span>
                                    <span className="tagged_as"><strong>Tags:</strong> <a rel="tag" href="#">Hombres</a>, <a rel="tag" href="#">Mujeres</a>.</span>
                                </div>
                                <div className="m-bot15"> <strong>Precio : </strong> $<span className="pro-price"> {articulo.precio}</span></div>
                                <ItemCountComponent initial={1} stock={articulo.stock} onAdd={onAdd}/>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default ItemDetail;