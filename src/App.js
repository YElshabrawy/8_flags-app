import './css/App.css';
// import Card from './components/Card';
import Main from './components/Main';
import Navbar from './components/Navbar';
import React from 'react';

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
                <Main />
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
