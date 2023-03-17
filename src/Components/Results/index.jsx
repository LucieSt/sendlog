import React, { useState, useEffect } from "react";
import './style.css';

const Results = ({ artist, title, image }) => {

	const imgUrl = `https://www.artic.edu/iiif/2/${image}/full/300,/0/default.jpg`

	console.log(image);

	return (
		<li>
			{image && <img src={imgUrl} alt={title} width="300" height="auto"></img>}
			<span>{artist ? artist : "anonymous"}</span>
			<span>-</span>
			<span>{title ? title : "no title"}</span>
		</li>
	);
};

export default Results;