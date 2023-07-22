import React, { useState } from 'react';
import './App.css';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';

function App() {
  const [formData, setFormData] = useState({});

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div className="App">
      <h1>Form App</h1>
      <div className="components-container">
        <div className="components-row">
          <div className="first-component">
            <FirstComponent handleFormSubmit={handleFormSubmit} />
          </div>
          <div className="second-component">
            <SecondComponent handleFormSubmit={handleFormSubmit} />
          </div>
        </div>
        {formData.name && formData.email && formData.phone && (
          <div className="result-container">
            <ThirdComponent formData={formData} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
