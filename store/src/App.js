import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ILC from './componentes/ItemListContainer/ItemsListContainer'
function App() {
  return (
    <>
    <NavBar/>
    <ILC name='Bienvenidos a la mejor tienda del mundo' />
    </>
  );
}

export default App;
