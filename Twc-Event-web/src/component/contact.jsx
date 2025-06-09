import { useState, useEffect, useRef } from "react";
// import { db } from "../firebase/config";
// import { addDoc, collection } from "firebase/firestore";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const formRef = useRef();
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  // Handle toast timeout
  useEffect(() => {
    let toastTimer;
    if (toast.show) {
      toastTimer = setTimeout(() => {
        setToast({ ...toast, show: false });
      }, 5000);
    }
    return () => clearTimeout(toastTimer);
  }, [toast]);

  const validateForm = () => {
    const newErrors = {};
    
    // Full Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }
    
    // Phone Number validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s\-()]{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message should be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // const contactsRef = collection(db, 'contacts');
        // const contactData = {
        //   ...formData,
        //   timestamp: new Date().toISOString()
        // };
        
          // await addDoc(contactsRef, contactData, `${formData.name[0] + '-' + Date.now()}`);
          await emailjs
      .sendForm('service_pxqfldl', 'template_c3nhddl', formRef.current,  {
        publicKey: 'yPCpGiBEHqjeWE4ls',
      })

      //   await emailjs
      // .sendForm('service_uxfr24e', 'template_qcao3it', formRef.current,  {
      //   publicKey: 'NjrX6NBh7EcbyLUNA',
      // })
        
        // Reset form and show success toast
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: ""
        });
        setToast({
          show: true,
          message: "Thank you for contacting us! We'll get back to you soon.",
          type: "success"
        });
      } catch (error) {
        console.error("Error submitting form:", error);
        setToast({
          show: true,
          message: "There was an error submitting your message. Please try again later.",
          type: "error"
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Toast notification */}
        {toast.show && (
          <div 
            className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg flex items-center justify-between max-w-sm transition-all duration-300 transform translate-y-0 ${
              toast.type === "success" ? "bg-green-100 text-green-800 border-l-4 border-green-500" : 
              "bg-red-100 text-red-800 border-l-4 border-red-500"
            }`}
          >
            <div className="flex items-center">
              {toast.type === "success" ? (
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              )}
              <p>{toast.message}</p>
            </div>
            <button 
              onClick={() => setToast({ ...toast, show: false })}
              className="ml-4 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        )}
        
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-orange-500 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Have questions about our event planning services? Get in touch with us and we'll be happy to assist you.
          </p>
        </div>
        
        <div className="bg-orange-50 rounded-xl shadow-lg p-6 sm:p-10">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                placeholder="Your full name"
              />
              {errors.name && (
                <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                placeholder="Your phone number"
              />
              {errors.phone && (
                <p className="mt-1 text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                placeholder="Your email address"
              />
              {errors.email && (
                <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                placeholder="Tell us about your event or inquiry"
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-red-500 text-sm">{errors.message}</p>
              )}
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3 bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Submitting...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-orange-50 rounded-lg shadow-md">
            <div className="inline-block p-4 bg-cyan-500 text-white rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
            <p className="text-gray-600">+234 809 844 0865</p>
            <p className="text-gray-600">+234 9123 991 109</p>
          </div>
          
          <div className="p-6 bg-orange-50 rounded-lg shadow-md">
            <div className="inline-block p-4 bg-cyan-500 text-white rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-600">twceventservices@gmail.com</p>
          </div>
          
          <div className="p-6 bg-orange-50 rounded-lg shadow-md">
            <div className="inline-block p-4 bg-cyan-500 text-white rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Address</h3>
            <p className="text-gray-600">46 Ajanaku Str, Awuse Estate, Opebi, Ikeja, Lagos, Nigeria.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;