import { useState } from "react";
import {
  Award,
  Users,
  ShieldCheck,
  Wallet,
  Monitor,
  Handshake,
  Minus,
  Plus,
  Bus,
} from "lucide-react";

const features = [
  {
    title: "Reliability",
    content:
      "Count on 35+ Years of Legacy for consistent, dependable transport services you can trust every day.",
    icon: <Award className="w-6 h-6 text-gray-600" />,
  },
  {
    title: "Customer Centric",
    content:
      "By placing the customer at the core of every decision, the company can ensure a service that is tailored to meet their unique needs, expectations, and preferences.",
    icon: <Users className="w-6 h-6 text-gray-600" />,
  },
  {
    title: "Safety & Compliance",
    content:
      "Safety is our top priority, with strict adherence to industry standards and comprehensive compliance",
    icon: <ShieldCheck className="w-6 h-6 text-gray-600" />,
  },
  {
    title: "Cost Effective",
    content:
      "We offer competitive pricing without compromising on quality, ensuring value in every journey.",
    icon: <Wallet className="w-6 h-6 text-gray-600" />,
  },
  {
    title: "Technology & Innovation",
    content:
      "Leveraging advanced technology, we enhance service efficiency and deliver a seamless travel experience",
    icon: <Monitor className="w-6 h-6 text-gray-600" />,
  },
  {
    title: "Social Responsibility",
    content:
      "CTTPL is committed to route safety and offers free training sessions to the drivers cross the nation.",
    icon: <Handshake className="w-6 h-6 text-gray-600" />,
  },
];

export default function Choice() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <div className="flex flex-col md:flex-row items-start gap-12 px-8 py-16 max-w-6xl mx-auto">
        <div className="md:w-1/2">
          <h2 className="text-5xl font-semibold ">
            What Makes <span className="text-red-600">CTTPL</span> Your Best
            Choice?
          </h2>
          <p className="text-gray-600 text-md mt-8 ">
            Choose Choudhary Tours & Travels Pvt. Ltd. (CTTPL) for dependable, customer-focused transport solutions that blend safety, technology, and innovation with cost efficiency. Our commitment to professionalism and continuous improvement ensures unmatched service quality.
          </p>
        </div>

        <div className="md:w-1/2 w-full border-l border-gray-300 pl-6">
          {features.map((feature, index) => (
            <div key={index} className="border-b border-gray-300 py-4">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <div className="flex items-center gap-3">
                  {feature.icon}
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                </div>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-red-600" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-600" />
                )}
              </div>
              {openIndex === index && (
                <p className="mt-2 text-sm text-gray-600 pl-9">
                  {feature.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}