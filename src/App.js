import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Styles.css';
import NavbarComponent from './components/NavBar.jsx';
import ItemListContainer from './containers/ItemListContainer';
import Footer from './components/Footer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ItemDetail from './components/ItemDetail';
import ProductList from './components/ProductList';

const App = () => {
  return (
   <BrowserRouter>
    <NavbarComponent/>
      <Switch>
        <Route exact path="/" component={ItemListContainer}/>
        <Route exact path="/detalle/" component={ProductList}/>
        <Route exact path="/detalle/:id" component={ItemDetail}/>
      </Switch>
    <Footer/>
   </BrowserRouter>
   );
}

export default App;
