import React from 'react'
import './styles.css'
import logo from '../../assets/images/logo.jpg'
import {
  Link
} from "react-router-dom";

export const Header = () => {
  return (
    <section>
      <header>
        <div className="logo">
          <Link to="/">  <img src={logo} alt='logo' /></Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/CashBack">Cashback</Link>
            </li>
            <li>
              <Link to="/FAQ">FAQ</Link>
            </li>
            <li>
              <Link to="/Job">Job</Link>
            </li>
          </ul>
        </nav>
      </header>
    </section>
  )
}
