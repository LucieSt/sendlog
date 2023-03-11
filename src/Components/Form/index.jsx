import React, { useState, useEffect } from "react";
import Results from "../Results";
import './style.css';

const Form = () => {

	const [latitude, setLatitude] = useState('');
	const [longitude, setLongitude] = useState('');
	const [data, setData] = useState(null);
	const myApi = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&long=${longitude}&appid=bb953e1cfd8558af5b149f309ada8480`;

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
				<label>latitude
					<input type="text" value={latitude} onChange={(e) => { setLatitude(e.target.value) }} />
				</label>
				<label>longitude
					<input type="text" value={longitude} onChange={(e) => { setLongitude(e.target.value) }} />
				</label>
				<button disabled={!setLatitude} onClick={handleClick}>button</button>
			</form>

			<ul>
				{data && data.map((record) => (
					<Results
						key={record.lat}
						latitude={record.lat}
						longitude={record.lon}
					/>
				))}
			</ul>
		</div>
	);
};

export default Form;