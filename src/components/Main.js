import React from 'react';
import axios from 'axios';
import Card from './Card';
import SearchBar from './SearchBar';
import DropBox from './DropBox';

import { getTextWidth } from 'get-text-width';

function Main() {
    const [countriesData, setCountriesData] = React.useState([]);
    const [countriesData2, setCountriesData2] = React.useState([]);
    const [regions, setRegions] = React.useState([]);

    React.useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all').then((data) => {
            data.data.sort((a, b) =>
                a.name.common.localeCompare(b.name.common)
            );
            setCountriesData(data.data);
            // console.log('Data impotred successfully!');
            // console.log(data.data);
            setCountriesData2(data.data);

            let regArr = data.data.map((c) => {
                return c.region;
            });
            const unique = [...new Set(regArr)];
            setRegions(unique);
            // console.log(regions);
        });
    }, []);

    const cards = countriesData.map((c) => {
        return c.name.common !== 'Israel' ? (
            <Card
                isMarquee={getTextWidth(c.name.common) > 200}
                key={c.name.common}
                name={c.name.common}
                img={c.flags.png}
                population={c.population.toLocaleString('en-US')}
                region={c.region}
                capital={c.capital}
            />
        ) : null;
    });

    return (
        <div>
            <div className="flex-container2">
                <SearchBar
                    placeholder={'Search for a country...'}
                    data={countriesData2}
                    setData={setCountriesData}
                />
                <DropBox
                    placeholder="Filter by Region"
                    optionsData={regions}
                    data={countriesData2}
                    currentData={countriesData}
                    setData={setCountriesData}
                />
            </div>
            {cards.length !== 0 ? (
                <div className="container main">{cards}</div>
            ) : (
                <h3 className="container">No Countries Found!</h3>
            )}
        </div>
    );
}

export default Main;
