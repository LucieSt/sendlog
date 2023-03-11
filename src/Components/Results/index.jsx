import React, { useState, useEffect } from "react";
import './style.css';

const Results = ({ latitude, longitude }) => {

	return (
		<li>
			<span>{latitude}</span>
			<span>-</span>
			<span>{longitude}</span>
		</li>
	);
};

export default Results;