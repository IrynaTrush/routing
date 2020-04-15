import React, { Component} from 'react';

import { Link } from 'react-router-dom';
import "../header/style.css"

export default class Header extends Component {
    render() {
        return (
            <header>
               
          <ul className="menu">
            <li>
              <Link to="/routing/">Home</Link>
            </li>
            <li>
              <Link to="/routing/posts">Posts</Link>
            </li>
            <li>
              <Link to="/routing/photos">Photos</Link>
            </li>
            <li>
              <Link to="/routing/contacts">Contacts</Link>
            </li>
          </ul>
        
            </header>
        )
    }
}