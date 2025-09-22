import React, { useState, useEffect, useRef } from "react";
import { Bus } from "lucide-react";

/**
 * useCountUp hook
 * end: final number
 * duration: animation duration in ms
 * Returns: [count, ref]
 */
const useCountUp = (end, duration = 4000) => {
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
          // ensure exact final value
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
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
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
  // values from your code
  const [experienceCount, experienceRef] = useCountUp(35);
  const [employeesCount, employeesRef] = useCountUp(10000);
  const [vehiclesCount, vehiclesRef] = useCountUp(4312);
  const [clientsCount, clientsRef] = useCountUp(231);
  const [toursCount, toursRef] = useCountUp(97423);

  const stats = [
    {
      value: experienceCount,
      suffix: "+",
      label: "Years of experience",
      ref: experienceRef,
    },
    {
      value: employeesCount,
      suffix: "+",
      label: "Employees",
      ref: employeesRef,
    },
    {
      value: vehiclesCount,
      suffix: "+",
      label: "Vehicles & Fleet",
      ref: vehiclesRef,
    },
    {
      value: clientsCount,
      suffix: "+",
      label: "Corporate Clients",
      ref: clientsRef,
    },
    {
      value: toursCount,
      suffix: "+",
      // you used a <br /> inside the label — keep it if you want a line break
      label: "Successful <br /> Transportation",
      ref: toursRef,
    },
  ];

  return (
    <div
      className="relative bg-cover bg-center py-16 text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80')",
      }}
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
              <Bus className="w-10 h-10 text-yellow-400 mb-3" />
              <div className="flex flex-col items-center">
                <p className="text-3xl font-bold text-yellow-400">
                  {stat.value.toLocaleString()}
                  {stat.suffix}
                </p>
                <p
                  className="text-gray-200 text-sm mt-1 text-center"
                  // keep this only if you intentionally want HTML (line breaks)
                  dangerouslySetInnerHTML={{ __html: stat.label }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ournumbers;
