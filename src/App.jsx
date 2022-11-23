import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';
function App() {
  
  
  return (
    <div className="App">
     <NavBar>
     <CartWidget/>
     </NavBar>
     <CartWidget/>
     
     
    <ItemListContainer greeting = 'Bienvenidos a 996Factory'/>
    <Footer>
    <a>Instagram</a>
    <a>WhatsApp</a>
    </Footer>
    </div>
   
    

  
  );
}

export default App;
