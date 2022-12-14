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

    // console.log('wid', window.sessionStorage.getItem('count'));

    React.useEffect(() => {
        if (!window.sessionStorage.getItem('countryData')) {
            // console.log('am not initialized yet!');
            axios.get('https://restcountries.com/v3.1/all').then((data) => {
                data.data.sort((a, b) =>
                    a.name.common.localeCompare(b.name.common)
                );
                window.sessionStorage.setItem(
                    'countryData',
                    JSON.stringify(data.data)
                );
                setCountriesData(data.data);
                setCountriesData2(data.data);

                let regArr = data.data.map((c) => {
                    return c.region;
                });
                const unique = [...new Set(regArr)];
                setRegions(unique);
                // console.log(regions);
            });
        } else {
            // console.log('lol xd');
            const myData = JSON.parse(
                window.sessionStorage.getItem('countryData')
            );

            setCountriesData(myData);
            setCountriesData2(myData);

            let regArr = myData.map((c) => {
                return c.region;
            });
            const unique = [...new Set(regArr)];
            setRegions(unique);
        }
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
                languages={c.languages}
                currencies={c.currencies}
                tld={c.tld}
                subRegion={c.subregion}
                nativeName={c.name.nativeName}
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
