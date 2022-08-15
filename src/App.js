import './css/App.css';
// import Card from './components/Card';
import Main from './components/Main';
import Country from './components/Country';
import Navbar from './components/Navbar';
import React from 'react';

// Router
import { Route, Routes } from 'react-router-dom';

export const ThemeContext = React.createContext(null);

function App() {
    const [theme, setTheme] = React.useState('dark');

    const toggleTheme = () => {
        setTheme((curr) => {
            return curr === 'light' ? 'dark' : 'light';
        });
    };
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className="App" id={theme}>
                <Navbar toggleTheme={toggleTheme} theme={theme} />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/country/:name" element={<Country />} />
                </Routes>
                {/* <Main /> */}
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
