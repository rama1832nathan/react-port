import React, { useRef, useState } from "react";
import Title from "./Title";
import * as emailjs from "@emailjs/browser";
// import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify';

const Review = () => {
  const form = useRef(); 

  const [formData, setFormData] = useState({
    from_name: "",
    email_id: "",
    phoneNo: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_1td3xht", "template_g9fhzet", form.current, {
        publicKey: "BRVS-yF1PaNr1-FOE",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast("Thanks for Your feedback!!!");
          setFormData({
            from_name: "",
            email_id: "",
            phoneNo: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="contact" className="flex flex-col items-center justify-center min-h-screen bg-navy p-6">
      <Title name={"contact me"} />

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg font-poppins w-full max-w-md">
        <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="text-powder font-semibold">Name</label>
          <input
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="p-3 rounded-md bg-gray-700 text-white border border-gray-500 focus:border-powder focus:outline-none"
            required
          />

          <label className="text-powder font-semibold">Email</label>
          <input
            type="email"
            name="email_id"
            value={formData.email_id}
            onChange={handleChange}
            placeholder="Enter your email"
            className="p-3 rounded-md bg-gray-700 text-white border border-gray-500 focus:border-powder focus:outline-none"
            required
          />

          <label className="text-powder font-semibold">Phone</label>
          <input
            type="text"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="p-3 rounded-md bg-gray-700 text-white border border-gray-500 focus:border-powder focus:outline-none"
            required
          />

          <label className="text-powder font-semibold">Comments</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            className="p-3 h-24 rounded-md bg-gray-700 text-white border border-gray-500 focus:border-powder focus:outline-none"
            required
          ></textarea>

          <button
            type="submit"
            className="mt-4 bg-gray border-2 border-powder font-bold py-2 rounded-md transition-all duration-500 hover:bg-powder font-poppins hover:text-navy hover:cursor-pointer hover:scale-105"
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Review;
