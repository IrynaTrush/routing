import React, { Component } from 'react';
import Header from '../layout/header';
import '../layout/style.css'

export default class Layout extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="wrapper">{this.props.children}</div>
            </div>
        )
    }
}