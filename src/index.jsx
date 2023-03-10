import React, {useState, useEffect} from 'react';
import { createRoot } from 'react-dom/client';
import Form from './Components/Form';
import './style.css';

const App = () => {

  // TODO:
  // 1. handle cases of 404 from api
  // 2. filter items at least after they come from server
  // 3. how to filter data during request?

  return (
    <div className="container">
      <Form />
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
