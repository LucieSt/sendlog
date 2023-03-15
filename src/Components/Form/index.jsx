import React, { useState, useEffect } from "react";
import Results from "../Results";
import './style.css';

const Form = () => {

	const [latitude, setLatitude] = useState('');
	const [longitude, setLongitude] = useState('');
	const [data, setData] = useState(null);
	const myApi = `https://api.artic.edu/api/v1/artworks?page=2&limit=10`;

	const handleClick = (e) => {
		e.preventDefault();
		fetch(myApi)
			.then((response) => response.json())
			.then((data) => setData(data.data));
	};

	console.log(data);

	return (
		<div className="form-container">
			<form>
				<label>latitude
					<input type="number" value={latitude} onChange={(e) => { setLatitude(e.target.value) }} />
				</label>
				<label>longitude
					<input type="number" value={longitude} onChange={(e) => { setLongitude(e.target.value) }} />
				</label>
				<button disabled={!setLatitude} onClick={handleClick}>button</button>
			</form>

			<ul>
				{data && data.map((record) => (
					<Results
						key={record.title}
						artist={record.artist_title}
						title={record.title}
					/>
				))}
			</ul>
		</div>
	);
};

export default Form;