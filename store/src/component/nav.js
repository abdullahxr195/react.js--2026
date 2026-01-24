

import'../css/nav.css';
import { Link } from 'react-router-dom';
export default function Nav() {
  return (
    <div id='nav'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li>About</li>
        <li>Contact</li>
      </ul>


    </div>
  );
}