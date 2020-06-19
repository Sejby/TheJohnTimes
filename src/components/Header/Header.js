import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav>
                        <Link to='/' className='link'>
                            <h1>The John Times</h1>
                        </Link>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Header;
