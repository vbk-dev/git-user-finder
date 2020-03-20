import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({title, logo, navItems}) => {
    let navigations = null;
    if (navItems) {
        navigations = (<div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto mr-4">
            {navItems.map( (item, index) => (<li key={index} className="nav-item">
                <Link to={item.path} className="nav-link">{item.name}</Link>
            </li>) )}
        </ul>
    </div>);
    }
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
            <a className="navbar-brand" href="/"> <i className={logo}  /> {title} </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            {navigations}
        </nav>
    );
}

// declaring static props
Navbar.defaultProps = {
    title: 'Navbar',
    logo: 'fas fa-route my-2'
};
// setting props type
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired
};


export default Navbar;