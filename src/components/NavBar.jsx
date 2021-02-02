import React from 'react';
import CartWidgetComponent from './CartWidget.jsx';

const NavbarComponent = (props) => {
     return (
          <>
               <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand col-sm-9" href="#">Melian</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse col-sm-3" id="navbarSupportedContent">
                         <ul className="navbar-nav mr-auto d-flex align-items-center">
                              <li className="nav-item">
                                   <a className="nav-link" href="#">Tickets</a>
                              </li>
                              <li className="nav-item">
                                   <a className="nav-link" href="#">Merchandising</a>
                              </li>
                              <li className="nav-item">
                                   <a className="nav-link" href="#">Pagina Oficial</a>
                              </li>
                              <li className="nav-item">
                              <CartWidgetComponent/>
                              </li>
                         </ul>
                    </div>
               </nav>
          </>
     )
}

export default NavbarComponent;