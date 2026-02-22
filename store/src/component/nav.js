
import { useContext } from 'react';
import'../css/nav.css';
import { Link } from 'react-router-dom';
import themeContext from './mycontext';

export default function Nav() {

const {toggeltheme} = useContext(themeContext);

  return (
    <div id='nav'>

      <button onClick={toggeltheme}>Toggle Theme</button>







      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li>About</li>
        <li>Contact</li>
      </ul>


    </div>
  );
}