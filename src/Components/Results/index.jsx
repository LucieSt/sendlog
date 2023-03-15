import React, { useState, useEffect } from "react";
import './style.css';

const Results = ({ artist, title }) => {

	console.log(artist);

	return (
		<li>
			<span>{artist ? artist : "anonymous"}</span>
			<span>-</span>
			<span>{title}</span>
		</li>
	);
};

export default Results;