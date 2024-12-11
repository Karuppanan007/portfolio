import React, { useState } from "react";
import mail from "../assets/mail.png"; 
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    try {
      const response = await axios.post("https://portbackend-b9z0.onrender.com/api/send-email", formData);
      setResponseMessage(response.data.success || "Email sent successfully!");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setResponseMessage(error.response.data.error);
      } else {
        setResponseMessage("Failed to send email. Please try again later.");
      }
    } finally {
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <div id="contact" className="py-12 bg-gray-50">
      <h1 className="text-center text-4xl font-extrabold my-6 text-black animate__animated animate__fadeInDown">
        Contact Us
      </h1>

      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
       
        <div className="flex items-center justify-center animate__animated animate__zoomIn">
          <img
            src={mail}
            alt="Contact Illustration"
            className="max-w-xs md:max-w-sm lg:max-w-md unique-animation"
          />
        </div>

       
        <div
          className="bg-white p-5 rounded-lg shadow-lg"
        >
          <form onSubmit={handleSubmit} className="space-y-3">
           
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your name"
                required
              />
            </div>

           
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your email"
                required
              />
            </div>

           
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your message"
                rows="4"
                required
              />
            </div>

            
            <button
              type="submit"
              className="w-full p-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
          {responseMessage && (
            <div
              className={`mt-4 p-4 text-center rounded ${
                responseMessage.includes("successfully")
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              } animate__animated animate__fadeInUp`}
            >
              {responseMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;


