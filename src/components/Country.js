import React from 'react';
import { useLocation, Link, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import axios from 'axios';

function Country() {
    const location = useLocation();
    const { name } = useParams();
    let prop = null;
    if (location.state) {
        prop = location.state;
    } else {
        const myData = JSON.parse(window.sessionStorage.getItem('countryData'));

        const c = myData.find((o) => o.name.common === name);
        if (c) {
            prop = {
                name: c.name.common,
                img: c.flags.png,
                population: c.population.toLocaleString('en-US'),
                region: c.region,
                capital: c.capital,
                languages: c.languages,
                currencies: c.currencies,
                tld: c.tld,
                subRegion: c.subregion,
                nativeName: c.name.nativeName,
            };
        }
    }

    if (prop) {
        return (
            <div className="container">
                <Link to="/" className="btn" style={{ textDecoration: 'none' }}>
                    <ArrowBackIcon style={{ marginRight: 10 }} /> Back
                </Link>
                <br />
                <div className="data">
                    <img className="country--img" src={prop.img} alt="" />
                    <div className="country-info">
                        <h2>{prop.name}</h2>
                        <div className="all-props">
                            <div className="left">
                                <p>
                                    <span className="bold">Native Name:</span>{' '}
                                    {Object.values(prop.nativeName)
                                        .map((c) => c.common)
                                        .join(', ')}
                                </p>
                                <p>
                                    <span className="bold">Population:</span>{' '}
                                    {prop.population}
                                </p>
                                <p>
                                    <span className="bold">Region:</span>{' '}
                                    {prop.region}
                                </p>
                                <p>
                                    <span className="bold">Subregion:</span>{' '}
                                    {prop.subRegion}
                                </p>
                                <p>
                                    <span className="bold">Capital:</span>{' '}
                                    {prop.capital}
                                </p>
                            </div>
                            <div className="right">
                                <p>
                                    <span className="bold">
                                        Top Level Domain:
                                    </span>{' '}
                                    {prop.tld.join(', ')}
                                </p>
                                <p>
                                    <span className="bold">Currencies:</span>{' '}
                                    {Object.values(prop.currencies)
                                        .map((c) => c.name)
                                        .join(', ')}
                                </p>
                                <p>
                                    <span className="bold">Languages:</span>{' '}
                                    {Object.values(prop.languages).join(', ')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div>
                <Link to="/" className="btn" style={{ textDecoration: 'none' }}>
                    <ArrowBackIcon style={{ marginRight: 10 }} /> Back
                </Link>
                <h3>Session Ended! Please go back</h3>
            </div>
        </div>
    );
}

export default Country;
