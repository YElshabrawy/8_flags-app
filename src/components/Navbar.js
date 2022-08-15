import React from 'react';

function Navbar(props) {
    return (
        <nav>
            <div className="nav-container">
                <div className="flex-container">
                    <h1>Where in the world?</h1>
                    <img
                        onClick={props.toggleTheme}
                        className="toggle-btn"
                        src={
                            props.theme === 'light'
                                ? 'assets/moon.svg'
                                : 'assets/sun.svg'
                        }
                        alt=""
                    />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
