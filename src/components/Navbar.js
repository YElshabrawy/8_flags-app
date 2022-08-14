import React from 'react';

function Navbar() {
    return (
        <nav>
            <div className="nav-container">
                <div className="flex-container">
                    <h1>Where in the world?</h1>
                    <img className="toggle-btn" src="assets/moon.svg" alt="" />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
