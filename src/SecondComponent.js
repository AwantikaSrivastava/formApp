import React, { useState } from 'react';
import "./Second.css"

const SecondComponent = ({ handleFormSubmit }) => {
  const [fields, setFields] = useState([
    { name: 'Name', display: false, mandatory: false },
    { name: 'Email', display: false, mandatory: false },
    { name: 'Phone no', display: false, mandatory: false },
    { name: 'Select category', display: false, mandatory: false },
    { name: 'Pdf', display: false, mandatory: false },
    { name: 'Video', display: false, mandatory: false },
  ]);

  const handleFieldChange = (fieldName, option) => {
    setFields((prevFields) =>
      prevFields.map((field) =>
        field.name === fieldName ? { ...field, [option]: !field[option] } : field
      )
    );
  };

  return (
    <div>
      <table className="field-options" style={{ backgroundColor: '#e4e4e6', borderRadius: '15px', margin: '10px 0', padding: '10px' }}>
        <thead>
          <tr>
            <th>Field</th>
            <th>Display</th>
            <th>Mandatory</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((field) => (
            <tr key={field.name}>
              <td>{field.name}</td>
              <td>
                <label>
                  <input
                    type="checkbox"
                    checked={field.display}
                    onChange={() => handleFieldChange(field.name, 'display')}
                  />
                </label>
              </td>
              <td>
                <label>
                  <input
                    type="checkbox"
                    checked={field.mandatory}
                    onChange={() => handleFieldChange(field.name, 'mandatory')}
                  />
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Removed "Display Data" button */}
    </div>
  );
};

export default SecondComponent;
