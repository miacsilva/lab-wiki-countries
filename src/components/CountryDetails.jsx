import React from 'react';
import { Link, useParams } from 'react-router-dom';

function CountryDetails({countries}) {

  const {countryIdd} = useParams()
  const [country] = countries.filter(el => el.alpha3Code === countryId);

  return (
    <div>
      <div className="col-7">
        <h1>{countries.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: "30%"}}>Capital</td>
              <td>{country.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
              {country.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  <li>
                    <Link href="/AND">{country.borders}</Link>
                  </li>                  
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <Link to="/">Countries List</Link>
      </div>
    </div>
  );
}

export default CountryDetails;
