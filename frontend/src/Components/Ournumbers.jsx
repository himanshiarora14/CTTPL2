import React, { useState, useEffect, useRef } from "react";
import { Bus } from "lucide-react";
import { GoPersonFill } from "react-icons/go";
import { FaCar } from "react-icons/fa";
import { MdCorporateFare } from "react-icons/md";
import { BsBusFront } from "react-icons/bs";

const useCountUp = (end, duration = 3000) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    let observer = null;
    let animateFrameId = null;

    const startAnimation = () => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * end);
        setCount(value);
        if (progress < 1) {
          animateFrameId = window.requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };
      animateFrameId = window.requestAnimationFrame(step);
    };

    observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          startAnimation();
        }
      },
      { threshold: 0.5 }
    );

    const el = elementRef.current;
    if (el) observer.observe(el);

    return () => {
      if (observer) {
        if (el) observer.unobserve(el);
        observer.disconnect();
      }
      if (animateFrameId) window.cancelAnimationFrame(animateFrameId);
    };
  }, [end, duration]);

  return [count, elementRef];
};

function Ournumbers() {
  const [experienceCount, experienceRef] = useCountUp(35);
  const [employeesCount, employeesRef] = useCountUp(10000);
  const [vehiclesCount, vehiclesRef] = useCountUp(4312);
  const [clientsCount, clientsRef] = useCountUp(231);
  const [toursCount, toursRef] = useCountUp(97423);

  const stats = [
    {
      value: experienceCount,
      suffix: "+",
      label: "Years of Experience",
      ref: experienceRef,
      icon: <Bus className="w-6 h-6 text-yellow-400 mr-2" />,
    },
    {
      value: employeesCount,
      suffix: "+",
      label: "Employees",
      ref: employeesRef,
      icon: <GoPersonFill className="w-6 h-6 text-yellow-400 mr-2" />,
    },
    {
      value: vehiclesCount,
      suffix: "+",
      label: "Vehicles & Fleet",
      ref: vehiclesRef,
      icon: <FaCar className="w-6 h-6 text-yellow-400 mr-2" />,
    },
    {
      value: clientsCount,
      suffix: "+",
      label: "Corporate Clients",
      ref: clientsRef,
      icon: <MdCorporateFare className="w-6 h-6 text-yellow-400 mr-2" />,
    },
    {
      value: toursCount,
      suffix: "+",
      label: "Successful Transportation",
      ref: toursRef,
      icon: <BsBusFront className="w-6 h-6 text-yellow-400 mr-2" />,
    },
  ];

  return (
    <div
      className="relative bg-cover bg-center py-16 text-white"
      style={{ backgroundImage: "url('/techandAI.png')" }}
    >
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Our <span className="text-yellow-400">Numbers</span> Talk
        </h2>
        <p className="text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed">
          Reliable and efficient employee transport services designed to ensure
          hassle-free commutes for your workforce. With a dedicated fleet of
          4,000+ vehicles, advanced route optimization, and real-time tracking,
          we prioritize safety, punctuality, and comfort. Operating across 8
          major cities, we provide tailored solutions to enhance employee
          satisfaction and productivity.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={stat.ref}
              className="bg-gradient-to-b from-[#014452] to-[#012d38] rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center space-y-3"
            >
              {/* Number with icon inline */}
              <div className="flex items-center text-3xl font-bold text-white">
                {stat.icon}
                {stat.value.toLocaleString()}
                {stat.suffix}
              </div>

              <p className="text-gray-200 text-sm mt-1 text-center">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ournumbers;
