import React, { Component} from 'react';

import { Link } from 'react-router-dom';
import "../header/style.css"

export default class Header extends Component {
    render() {
        return (
            <header>
               
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/photos">Photos</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        
            </header>
        )
    }
}