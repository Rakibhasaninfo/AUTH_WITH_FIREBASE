import React from 'react';
import Account from './Account';
import classes from './styles/Nav.module.css';
function Nav() {
  return (
    <nav className={classes.nav}>
    <ul>
      <li>
        <a href="index.html" className={classes.brand}>
          
          <h3>Logo</h3>
        </a>
      </li>
    </ul>
       <Account />
  </nav>
  )
 
}

export default Nav;
