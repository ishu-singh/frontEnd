import React from 'react';
import './Navbar.css';

const Navbar = ({ setSearch, category, setCategory }) => {

    const onTabChange = (categ) =>{
        setCategory(categ)
    }

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">News Room</div>
                <ul className="navbar-menu">
                    <li className="navbar-item" onClick={() => onTabChange('world')}>World</li>
                    <li className="navbar-item" onClick={() => onTabChange('entertainment')}>Entertainment</li>
                    <li className="navbar-item" onClick={() => onTabChange('sports')}>Sports</li>
                    <li className="navbar-item" onClick={() => onTabChange('business')}>Business</li>
                    <li className="navbar-item" onClick={() => onTabChange('technology')}>Technology</li>
                </ul>
                <div className="search-box">
                    <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
