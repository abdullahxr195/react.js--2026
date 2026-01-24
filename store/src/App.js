import logo from './logo.svg';
import './App.css';
import Nav from './component/nav';
import Footer from './component/footer';
import Home from './component/home';
import Products from './component/product';
import{BrowserRouter ,Routes, Route} from 'react-router-dom';
function App() {
  return (
    
      <BrowserRouter>
        <Nav/>

        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/products"  Component={Products} />
        </Routes>

        <Footer/>

      </BrowserRouter>
  
  );
}

export default App;
