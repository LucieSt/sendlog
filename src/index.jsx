import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Form from './Components/Form';
import './style.css';

const App = () => {

  return (
    <div className="container">
      <Form />
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
