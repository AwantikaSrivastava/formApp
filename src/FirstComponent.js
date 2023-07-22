import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import "./First.css"

const FirstComponent = ({ handleFormSubmit }) => {
  const [formData, setFormData] = React.useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="form-container">
      <form>
        <div>
          <input type="text" name="name" placeholder="Name" required onChange={handleInputChange} />
        </div>
        <div>
          <input type="email" name="email" placeholder="Email" required onChange={handleInputChange} />
        </div>
        <div style={{ width: "70%" }}>
          <PhoneInput
            country={'in'}
            placeholder="Phone Number"
            required
            onChange={(value) => setFormData((prevData) => ({ ...prevData, phone: value }))}
          />
        </div>
        <div>
          <select className='selection' name="category" onChange={handleInputChange}>
            <option value="">Select category</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="UI/UX">UI/UX</option>
          </select>
        </div>
        <div className="file-upload-section">
          <label style={{ border: "1px solid #effe87" }} htmlFor="pdfUpload">Upload PDF</label>
        </div>
        <div className='file-upload-section'>
          <input type="file" id="pdfUpload" name="pdf" accept=".pdf" onChange={(e) => setFormData((prevData) => ({ ...prevData, pdf: e.target.files[0] }))} />
        </div>
        <div className="file-upload-section">
          <label htmlFor="videoUpload">Upload Video</label>
          <input type="file" id="videoUpload" name="video" accept="video/*" onChange={(e) => setFormData((prevData) => ({ ...prevData, video: e.target.files[0] }))} />
        </div>
      </form>
      <button className='submit' onClick={() => handleFormSubmit(formData)}>Display Data</button>
    </div>
  );
};

export default FirstComponent;
