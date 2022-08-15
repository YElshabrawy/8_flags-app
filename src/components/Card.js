import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

function Card(props) {
    return (
        <Link
            to={'/country/' + props.name}
            style={{ all: 'unset' }}
            state={props}
        >
            <div className="card">
                <img src={props.img} alt="" className="card--img" />
                <div className="card--container">
                    {props.isMarquee ? (
                        <Marquee
                            className="country-name"
                            gradient={false}
                            speed={50}
                            pauseOnHover={true}
                        >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {props.name}
                        </Marquee>
                    ) : (
                        <h2 className="country-name">{props.name}</h2>
                    )}
                    <p>
                        <span className="bold">Population:</span>{' '}
                        {props.population}
                    </p>
                    <p>
                        <span className="bold">Region:</span> {props.region}
                    </p>
                    <p>
                        <span className="bold">Capital:</span> {props.capital}
                    </p>
                </div>
            </div>
        </Link>
    );
}

export default Card;
