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
    <div className="max-w-4xl mx-auto p-6 m-4 bg-white rounded-lg shadow-2xl">
      <h2 className="text-4xl font-bold text-center mb-6">
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
          min="1"
        />

        <textarea
          name="requirements"
          placeholder="Any specific requirement / question"
          value={formData.requirements}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          rows="3"
        />

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
            disabled={loading}
            className={`${loading ? "opacity-70 cursor-wait" : ""
              } bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded`}
          >
            {loading ? "Sending..." : "Send Enquiry"}
          </button>
        </div>
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
  );
};

export default OnSpotRentalsForm;
