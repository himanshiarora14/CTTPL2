import React, { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  countryCode: "+91",
  phone: "",
  serviceType: "",
  country: "India",
  date: "",
  travellers: "",
  requirements: "",
  agree: false,
};

const OnSpotRentalsForm = () => {
  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/sendemail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setResponseMessage("Your consultation request has been sent successfully!");
        if (data.previewUrl) setPreviewUrl(data.previewUrl);
        setFormData(initialForm);
      } else {
        setResponseMessage(`Failed to send request: ${data.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponseMessage("There was an error sending your request. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white p-10 rounded-2xl shadow-xl border-[3px] border-white">
        <h2 className=" text-3xl md:text-5xl font-semibold text-center mb-8">
          On Spot <span className="text-red-500">Rentals</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 w-full">
          {/* Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Enter Your name"
              value={formData.name}
              onChange={handleChange}
              className="border-[3px] border-gray-300 p-3 rounded-lg w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              className="border-[3px] border-gray-300 p-3 rounded-lg w-full"
              required
            />
          </div>

          {/* Phone */}
          <div className="grid grid-cols-3 gap-2">
            <select
              name="countryCode"
              className="border-[3px] border-gray-300 p-3 rounded-lg"
              value={formData.countryCode}
              onChange={handleChange}
            >
              <option value="+91">+91</option>
            </select>
            <input
              type="tel"
              name="phone"
              placeholder="Enter Your Phone No."
              value={formData.phone}
              onChange={handleChange}
              className="border-[3px] border-gray-300 p-3 rounded-lg col-span-2"
              required
            />
          </div>

          {/* Service + Country + Date */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="border-[3px] border-gray-300 p-3 rounded-lg"
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
              className="border-[3px] border-gray-300 p-3 rounded-lg"
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
              className="border-[3px] border-gray-300 p-3 rounded-lg"
              required
            />
          </div>

          {/* Travellers */}
          <input
            type="number"
            name="travellers"
            placeholder="No. of Travellers"
            value={formData.travellers}
            onChange={handleChange}
            className="border-[3px] border-gray-300 p-3 rounded-lg w-full"
            required
            min="1"
          />

          {/* Requirements */}
          <textarea
            name="requirements"
            placeholder="Any specific requirement / question"
            value={formData.requirements}
            onChange={handleChange}
            className="border-[3px] border-gray-300 p-3 rounded-lg w-full"
            rows="3"
          />

          {/* Checkbox */}
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

          {/* Button */}
          <div className="flex justify-end">
            {/* Button */}
<div className="flex justify-end">
  <button
    type="submit"
    disabled={loading}
    className={`${
      loading ? "opacity-70 cursor-wait" : ""
    } flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-lg shadow`}
  >
    {loading ? "Sending..." : "Send Enquiry"}

    {/* White icon box */}
    <div className="bg-white p-1 rounded-sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-red-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8h2a2 2 0 012 2v10l-4-4H7a2 2 0 01-2-2V4a2 2 0 012-2h8"
        />
      </svg>
    </div>
  </button>
</div>

          </div>

          {/* Response */}
          {responseMessage && (
            <div
              role="status"
              className="mb-4 p-3 rounded border bg-green-100 text-sm"
            >
              {responseMessage}
              {previewUrl && (
                <div className="mt-2 text-xs">
                  Preview:{" "}
                  <a
                    href={previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Open
                  </a>
                </div>
              )}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default OnSpotRentalsForm;
