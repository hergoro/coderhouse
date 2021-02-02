import React, {useState} from 'react';

const ItemCountComponent = (props) => {
    const [count, setCount] = useState(props.initial);

    let agregar = () => {
        if (count < props.stock) {
            setCount(count + 1)
        }
    }
    let restar = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    let cargarTotalSeleccionado = () => {
        props.onAdd(count)
    };

    return(
        <>
            <div className="col-sm-12">
                <button className="btn btn-outline-secondary btn-sm" onClick={restar}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                    </svg>
                </button>
                <span className="badge bg-secondary">{count}</span>
                <button className="btn btn-outline-secondary btn-sm" onClick={agregar}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
                </button><br/>
                <button className="btn btn-primary" onClick={cargarTotalSeleccionado}>Agregar al carrito</button>
            </div>
        </>
  );
}

export default ItemCountComponent;