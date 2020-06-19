import React, { Component } from 'react';
import './Footer.scss';

export class Footer extends Component {
    render() {
        return (
            <div id='footer'>
                <h2 id='author'>Coded by Jan Schejbal</h2>
                <h2 id='api'>API data provided by <a href="https://newsapi.org/" target='_blank' rel="noopener noreferrer">newsapi.org</a></h2>
                <h2 id='copyright'>© Copyright 2020</h2>
            </div>
        )
    }
}

export default Footer;
