import React from 'react';
import '../css/SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({ setData, placeholder, data }) {
    const handleChange = (e) => {
        // console.log(e.target.value);
        const result = data.filter((country) => {
            return country.name.common
                .toLowerCase()
                .includes(e.target.value.toLowerCase());
        });
        // console.log(result);
        setData(result);
    };
    return (
        <div className="search">
            <div className="search-inputs">
                <input
                    type="text"
                    placeholder={placeholder}
                    name=""
                    id=""
                    onChange={handleChange}
                />
                <div className="search-icon">
                    <SearchIcon color="action" />
                </div>
            </div>
            <div className="data-results"></div>
        </div>
    );
}

export default SearchBar;
