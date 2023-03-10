import React, { useState, useEffect } from "react";
import Country from "../Country";
import './style.css';

const Form = () => {

	const [countryName, setCountryName] = useState('');
	const [data, setData] = useState(null);
	const myApi = `https://restcountries.com/v3.1/name/${countryName}`;

	const handleClick = (e) => {
		e.preventDefault();
		fetch(myApi)
			.then((response) => response.json())
			.then((data) => setData(data));
	};

	console.log(data);

	return (
		<div className="form-container">
			<form>
				<label>country name
					<input type="text" value={countryName} onChange={(e) => { setCountryName(e.target.value) }} />
				</label>
				<button disabled={!countryName} onClick={handleClick}>button</button>
			</form>

			<ul>
				{data && data.map((country) => (
					<Country
						key={country.name.official}
						name={country.name.common}
						capital={country.capital}
					/>
				))}
			</ul>
		</div>
	);
};

export default Form;