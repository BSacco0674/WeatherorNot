import React from 'react';

const NavBar = ({ user, handleLogout }) => {
    let nav = user ?
    <>
        <nav>
            <div className="nav-wrapper">
                <a href="#!" className="brand-logo"><i className="material-icons">cloud</i>Weather or Not</a>
                <ul id="nav-mobile" className="right">

                    <li><a href="/search" className="nav-link"><i className="material-icons left">search</i>Search</a></li>
                    <li><a href="/cities" className="nav-link"><i className="material-icons left">location_city</i>My Cities</a></li>
                    <li><a href=" " className="nav-link"><i className="material-icons left">person</i>Welcome, {user.name}</a></li>
                    <li><a href=" " className="nav-link" onClick={handleLogout}><i className="material-icons left">power_settings_new
</i>Log Out</a></li>
                </ul>
            </div>
        </nav>
    </>
    :
    <>
        <nav>
            <div className="nav-wrapper">
                <ul id="nav-mobile" className="right">
                    <li><a href="/login" className="nav-link">Log In</a></li>
                    <li><a href="/signup" className="nav-link">Sign Up</a></li>
                </ul>
            </div>
        </nav>
    </>

    return (
    <>
        {nav}
    </>
    )
}

export default NavBar;