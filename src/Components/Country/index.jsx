import React, { useState, useEffect } from "react";
import './style.css';

const Country = ({ name, capital }) => {

	return (
		<li>
			<span>{name}</span>
			<span>-</span>
			<span>{capital}</span>
		</li>
	);
};

export default Country;