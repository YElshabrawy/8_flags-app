import React from 'react';
import axios from 'axios';
import Card from './Card';
import { getTextWidth } from 'get-text-width';

function Main() {
    const [countriesData, setCountriesData] = React.useState([]);

    React.useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all').then((data) => {
            setCountriesData(data.data);
            console.log('Data impotred successfully!');
            console.log(data.data);
        });
    }, []);

    const cards = countriesData.map((c) => {
        return (
            <Card
                isMarquee={getTextWidth(c.name.common) > 200}
                key={c.ccn3}
                name={c.name.common}
                img={c.flags.png}
                population={c.population.toLocaleString('en-US')}
                region={c.region}
                capital={c.capital}
            />
        );
    });

    return <div className="container">{cards}</div>;
}

export default Main;
