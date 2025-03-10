import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList({countries}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
          <div className="list-group">
            <ul>
              {countries.map((country) => {
                return (
                  <div key={country.alpha3Code}>
                    <li>
                      <Link
                        to={`/country/${countries.alpha3Code}`}
                        className="list-group-item list-group-item-action"
                      >
                        {country.alpha3Code}
                      <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}  alt="gvhgvhgy" />
                      </Link>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountriesList;
