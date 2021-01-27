import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavBar.jsx';
import ItemListContainer from './containers/ItemListContainer';

const App = () => {
  return (
   <>
    <NavbarComponent/>
    <ItemListContainer greetings='¡Hola!'/>
   </>
   );
}

export default App;
