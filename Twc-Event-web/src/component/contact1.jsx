import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import pip from "../assets/image/pip-24.jpg";
import Wrapper from "./Wrapper";


const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (formData.firstName && !formData.lastName) {
      newErrors.lastName = "please provide the firstname .";
    }
    if (formData.lastName && !formData.firstName) {
      newErrors.firstName = "please provide the lastname.";
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Your message has been sent successfully!");
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      setErrors({});
    }
  };

  return (
    <div 
      className="relative flex items-center justify-center bg-cover bg-center px-6 pt-16 pb-8 text-white"
      style={{ backgroundImage: `url(${pip})` }}
    >

      <div className="absolute inset-0 bg-blue-500 opacity-80"></div>
      <Wrapper>
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 bg-gray-800 bg-opacity-60 px-8 md:px-12 lg:px-16 py-8 md:py-10 rounded-xl border border-white border-opacity-10 max-w-7xl w-full">
          <div className="w-full space-y-4 text-center lg:text-left">
            <h2 className="text-4xl font-extrabold">Contact Us</h2>
            <p className="text-lg font-semibold">PIP School</p>
            <p className="text-lg">28 Efon Alaye Street, Off Orisunbare Road,<br /> ShaSha, Lagos, Nigeria</p>
            <p className="text-lg">Phone: +234 812 345 6789</p>
            <p className="text-lg">Email: info@pipschool.com</p>
            <div className="flex justify-center lg:justify-start space-x-4 mt-3">
              <a href="#" className="text-white text-2xl hover:text-gray-300"><FaFacebook /></a>
              <a href="#" className="text-white text-2xl hover:text-gray-300"><FaInstagram /></a>
              <a href="#" className="text-white text-2xl hover:text-gray-300"><FaTwitter /></a>
              <a href="#" className="text-white text-2xl hover:text-gray-300"><FaWhatsapp /></a>
            </div>
            <p className="mt-4 text-xs">© 2025 by PIP School. All rights reserved.</p>
          </div>

          <div className="w-full py-6 rounded-xl text-white bg-opacity-10 backdrop-blur-lg">
            <h2 className="text-3xl font-bold text-center mb-4">Leave Us a Message</h2>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row sm:space-x-3">
                <div className="w-full sm:w-1/2">
                  <input type="text" name="firstName" placeholder="First Name*" value={formData.firstName} onChange={handleChange} className="w-full p-3 border-b border-gray-300 bg-transparent focus:outline-none" />
                  {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                </div>
                <div className="w-full sm:w-1/2">
                  <input type="text" name="lastName" placeholder="Last Name*" value={formData.lastName} onChange={handleChange} className="w-full p-3 border-b border-gray-300 bg-transparent focus:outline-none" />
                  {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                </div>
              </div>
              <input type="email" name="email" placeholder="Email*" value={formData.email} onChange={handleChange} className="w-full p-3 border-b border-gray-200 bg-transparent focus:outline-none" />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="w-full p-3 border-b border-gray-200 bg-transparent focus:outline-none" />
              <textarea name="message" placeholder="Leave us a message..." value={formData.message} onChange={handleChange} className="w-full p-3 border-b border-gray-200 bg-transparent focus:outline-none h-28"></textarea>
              <button type="submit" className="w-full bg-blue-500 text-white py-3 px-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Contact;
