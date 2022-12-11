import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ILC from './componentes/ItemListContainer/ItemsListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer';

function App() {
  return (
    <>
    <NavBar/>
    <ILC name='Bienvenidos a la mejor tienda del mundo' />
    <ItemDetailContainer/>
    <Catalogo/>
    </>
  );
}

export default App;
