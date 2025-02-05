import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phoneNumber: "",
    linkedin: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.companyName || !formData.email || !formData.phoneNumber) {
      alert("Please fill in all the required fields.");
      return;
    }

    setLoading(true);

    try {
      const result = await emailjs.send(
        "service_vrx90do",
        "template_7xa46y8",
        {
          company_name: formData.companyName,
          email: formData.email,
          phone_number: formData.phoneNumber,
          linkedin: formData.linkedin,
        },
        "6pVl7iX5tzX1GHhza"
      );

      if (result.text === "OK") {
        alert("Form submitted successfully!");
        setFormData({
          companyName: "",
          email: "",
          phoneNumber: "",
          linkedin: "",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-6 w-full px-8" onSubmit={handleSubmit}>
      <div className="w-full flex flex-col gap-0">
        <label className="text-base font-medium">Company Name:</label>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          placeholder="Company Name"
          className="w-full bg-[#E5DCCB] rounded-md px-4 py-3 text-base placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#A3383A]"
        />
      </div>

      <div className="w-full flex flex-col gap-0">
        <label className="text-base font-medium">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Company Email"
          className="w-full bg-[#E5DCCB] rounded-md px-4 py-3 text-base placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#A3383A]"
        />
      </div>

      <div className="w-full flex flex-col gap-0">
        <label className="text-base font-medium">Phone Number:</label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full bg-[#E5DCCB] rounded-md px-4 py-3 text-base placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#A3383A]"
        />
      </div>

      <div className="w-full flex flex-col gap-0">
        <label className="text-base font-medium">LinkedIn:</label>
        <input
          type="text"
          name="linkedin"
          value={formData.linkedin}
          onChange={handleChange}
          placeholder="LinkedIn Profile URL"
          className="w-full bg-[#E5DCCB] rounded-md px-4 py-3 text-base placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#A3383A]"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full flex justify-center items-center py-3 rounded-md text-2xl font-semibold uppercase transition-all 
          ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#A3383A] text-white"}`}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default Form;
