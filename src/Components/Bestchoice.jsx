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
      "We place customers at the heart of everything we do, ensuring personalized service and unmatched experiences.",
    icon: <Users className="w-6 h-6 text-gray-600" />,
  },
  {
    title: "Safety & Compliance",
    content:
      "Strict adherence to safety standards and compliance protocols for worry-free journeys.",
    icon: <ShieldCheck className="w-6 h-6 text-gray-600" />,
  },
  {
    title: "Cost Effective",
    content:
      "Offering affordable and transparent pricing without compromising quality.",
    icon: <Wallet className="w-6 h-6 text-gray-600" />,
  },
  {
    title: "Technology & Innovation",
    content:
      "Harnessing cutting-edge technology to deliver smarter and seamless travel solutions.",
    icon: <Monitor className="w-6 h-6 text-gray-600" />,
  },
  {
    title: "Social Responsibility",
    content:
      "Committed to sustainability and contributing positively to the communities we serve.",
    icon: <Handshake className="w-6 h-6 text-gray-600" />,
  },
];

export default function Choice() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <div className="flex flex-col md:flex-row items-start gap-12 px-8 py-16 max-w-6xl mx-auto">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold leading-snug">
            What Makes <span className="text-red-600">CTTPL</span> Your Best
            Choice?
          </h2>
          <p className="text-gray-600 mt-6 text-base leading-relaxed">
            Choudhary Tours & Travels Pvt. Ltd. (CTTPL) has proudly served over
            100,000 satisfied end users across the nation, conducting 10,000+
            tours and trips with an impressive fleet strength of 4,000+ vehicles.
            With over 35 years of experience, we continue to lead the industry
            as a trusted mobility partner, making every journey safe, reliable,
            and enjoyable.
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