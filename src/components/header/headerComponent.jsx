import React, {Component} from 'react';
import './header.css';

class Header extends Component {
    render() {
        return (
            <header id="header" className="header">
                <h1 className="header__title">CRUD Users</h1>
            </header>
        );
    }
}

export default Header;