import React from 'react';


const Footer = () => {
    return (
        <>
        <footer className="container">
            <p className="float-right"><a href="#">Subir</a></p>
            <p>&copy; {(new Date().getFullYear())} Melian, Inc. &middot; <a href="#">Política de Privacidad</a> &middot; <a href="#">Términos</a></p>
        </footer>
        </>
    )
}

export default Footer;