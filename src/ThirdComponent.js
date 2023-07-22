import React from 'react';

const ThirdComponent = ({ formData }) => {
  const { name, email, phone, category, pdf, video } = formData;

  return (
    <div>
      <h2>Form Data:</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Category:</strong> {category}</p>
      {pdf && (
        <p>
          <strong>PDF File:</strong> {pdf.name}
        </p>
      )}
      {video && (
        <p>
          <strong>Video File:</strong> {video.name}
        </p>
      )}
    </div>
  );
};

export default ThirdComponent;
