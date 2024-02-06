import { useState } from 'react';
import "./contact.css";
import Footer from "../Footer/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

  };
  return (
    <div>
      <div>
        <img src='https://woodmizer.in//media/catalog/category/KilnsCategory.jpg' style={{ width: "100vw" }} />
      </div>
      <div className="contact-page">
        <h2>Contact Us</h2>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
              <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
              <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
            </div>
            <div className="form-group">
              <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
            </div>
            <div className="form-group">
              <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
              <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} />
              <input type="text" name="zip" placeholder="Zip Code" value={formData.zip} onChange={handleChange} />
            </div>
            <div className="form-group">
              <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange}></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Contact

