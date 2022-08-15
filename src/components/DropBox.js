import React from 'react';
import '../css/DropBox.css';
import Select from 'react-select';
import { ThemeContext } from '../App';

function DropBox(props) {
    const options = props.optionsData.map((o) => {
        return { value: o, label: o };
    });

    function customTheme(theme) {
        return {
            ...theme,
            colors: {
                ...theme.colors,
                primary25: 'lightGray',
                primary: 'gray',
            },
        };
    }

    const style = {
        control: (base) => ({
            ...base,
            border: 0,
            // This line disable the blue border
            boxShadow: 'none',
            height: 46,
            color: 'black',
            transition: 'all 2s',
        }),
    };

    const darkStyle = {
        control: (base) => ({
            ...base,
            border: 0,
            height: 46,
            color: '#FFF',
            backgroundColor: 'hsl(209, 23%, 22%)',
            boxShadow:
                '0 5px 10px rgb(0 0 0 / 10%), 0 -5px 10px rgb(0 0 0 / 10%)',
            transition: 'all 2s',
        }),
        menu: (base) => ({
            ...base,
            backgroundColor: 'hsl(209, 23%, 22%)',
            color: '#FFF',
        }),
        placeholder: (base) => ({
            ...base,
            color: '#FFF',
        }),
        singleValue: (base) => ({
            ...base,
            color: '#FFF',
        }),
    };

    const handleChange = (e) => {
        if (e) {
            console.log(e.value);
            const result = props.data.filter((country) => {
                return country.region.toLowerCase() === e.value.toLowerCase();
            });
            props.setData(result);
        } else {
            props.setData(props.data);
        }
    };

    const { theme } = React.useContext(ThemeContext);

    return (
        <Select
            options={options}
            placeholder={props.placeholder}
            className="dropdown2"
            theme={customTheme}
            styles={theme === 'light' ? style : darkStyle}
            isClearable
            onChange={handleChange}
        />
    );
}

export default DropBox;
