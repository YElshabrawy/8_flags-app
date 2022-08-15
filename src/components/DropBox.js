import React from 'react';
import '../css/DropBox.css';
import Select from 'react-select';

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

    return (
        <Select
            options={options}
            placeholder={props.placeholder}
            className="dropdown2"
            theme={customTheme}
            styles={style}
            isClearable
            onChange={handleChange}
        />
    );
}

export default DropBox;
