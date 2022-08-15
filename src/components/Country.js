import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Country() {
    const location = useLocation();
    const prop = location.state;
    // console.log(location.state);
    return (
        <div className="container">
            <Link to="/" className="btn" style={{ textDecoration: 'none' }}>
                <ArrowBackIcon style={{ marginRight: 10 }} /> Back
            </Link>
            <br />
            <div className="data">
                <img src={prop.img} alt="" />
                <div className="contry-info">
                    <h2>Name</h2>
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
                                <span className="bold">Top Level Domain:</span>{' '}
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

export default Country;
