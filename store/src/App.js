import logo from './logo.svg';
import './App.css';
import Nav from './component/nav';
import Footer from './component/footer';
import Home from './component/home';
import Products from './component/product';
import{BrowserRouter ,Routes, Route} from 'react-router-dom';
import SupProduct from './component/supProduct';
import { useContext } from 'react';
import themeContext from './component/mycontext';

function App() {
  const {mode} = useContext(themeContext);
  return (
      <div>
      <BrowserRouter>
        <Nav/>

        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/products"  Component={Products} />
           <Route path="/supproduct"  Component={SupProduct} />
        </Routes>

        <Footer/>

      </BrowserRouter>
  </div>
  );
}

export default App;
