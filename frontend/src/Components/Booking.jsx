import React, { useState } from "react";

const OnSpotRentalsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    country: "India",
    date: "",
    travellers: "",
    requirements: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Enquiry sent successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">
        On Spot <span className="text-red-500">Rentals</span>
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Enter Your name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <div className="grid grid-cols-3 gap-2">
          <select
            name="countryCode"
            className="border p-2 rounded"
            defaultValue="+91"
          >
            <option value="+91">+91</option>
            <option value="+1">+1</option>
            <option value="+44">+44</option>
          </select>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Phone No."
            value={formData.phone}
            onChange={handleChange}
            className="border p-2 rounded col-span-2"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          >
            <option value="">Select Service Type</option>
            <option value="Car Rental">Car Rental</option>
            <option value="Bus Rental">Bus Rental</option>
            <option value="Tour Package">Tour Package</option>
          </select>

          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
        </div>

        <input
          type="number"
          name="travellers"
          placeholder="No. of Travellers"
          value={formData.travellers}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />

        <textarea
          name="requirements"
          placeholder="Any specific requirement / question"
          value={formData.requirements}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          rows="3"
        ></textarea>

        <label className="flex items-center space-x-2 text-sm">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            required
          />
          <span>
            I agree with the{" "}
            <a href="#" className="text-blue-500 underline">
              privacy policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-500 underline">
              terms and conditions
            </a>
            .
          </span>
        </label>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded"
          >
            Send Enquiry
          </button>
        </div>
      </form>
    </div>
  );
};

export default OnSpotRentalsForm;
