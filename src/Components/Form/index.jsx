import React, { useState, useEffect } from "react";
import Results from "../Results";
import './style.css';

const Form = () => {

	const [limit, setLimit] = useState('');
	const [title, setTitle] = useState('');
	const [data, setData] = useState(null);

	const handleClick = (e) => {
		e.preventDefault();

		// API URL setup
		const myApi = `https://api.artic.edu/api/v1/artworks?search?q=${title}&limit=${limit}`;

		fetch(myApi)
			.then((response) => response.json())
			.then((data) => setData(data.data));
	};

	console.log(data);

	return (
		<div className="form-container">
			<form>
				<label>title
					<input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} />
				</label>
				<label>limit
					<input type="number" value={limit} onChange={(e) => { setLimit(e.target.value) }} />
				</label>
				<button disabled={!setLimit} onClick={handleClick}>button</button>
			</form>

			<ul>
				{data && data.map((record) => (
					<Results
						key={record.id}
						artist={record.artist_title}
						title={record.title}
						image={record.image_id}
					/>
				))}
			</ul>
		</div>
	);
};

export default Form;