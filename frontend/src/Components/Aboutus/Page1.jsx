// src/components/Home.jsx
import React, { useEffect, useRef, useState } from "react";
import { Phone, Users, Car, Building, MapPin, Calendar } from "lucide-react";
import Embedded from "../Button/Embedded";
import Contact from "../Button/Contact";
import img from "../../images/about1.png";

// Simple Button Component
function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-md font-medium ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

// Simple Badge Component
function Badge({ children, className = "" }) {
  return (
    <span className={`inline-block px-3 py-1 text-sm font-medium rounded ${className}`}>
      {children}
    </span>
  );
}

// Simple Card Component
function Card({ children, className = "" }) {
  return (
    <div className={`p-4 rounded-lg shadow-sm ${className}`}>
      {children}
    </div>
  );
}

/**
 * Counter component
 * - end: number to count to (integer)
 * - duration: ms duration of animation
 * - startOnView: if true, only start when the component enters viewport
 */
function Counter({ end = 0, duration = 1800, startOnView = true }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const startedRef = useRef(false);
  const rafRef = useRef(null);

  // animate from 0 to end
  function animate() {
    const startTimeRef = { value: null };

    const step = (timestamp) => {
      if (!startTimeRef.value) startTimeRef.value = timestamp;
      const progress = Math.min((timestamp - startTimeRef.value) / duration, 1);
      const current = Math.floor(progress * end);
      setCount(current);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        // ensure final value
        setCount(end);
      }
    };

    rafRef.current = requestAnimationFrame(step);
  }

  useEffect(() => {
    if (!startOnView) {
      // if not waiting for view, start immediately
      startedRef.current = true;
      animate();
      return () => cancelAnimationFrame(rafRef.current);
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            animate();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [end, duration, startOnView]);

  // format with commas and append plus sign
  const formatted = `${count.toLocaleString()}+`;

  return (
    <span ref={ref}>
      {formatted}
    </span>
  );
}

export default function Home() {
  const stats = [
    { icon: Car, number: 45, label: "Trusted Service" },
    { icon: Users, number: 10000, label: "Happy Clients" },
    { icon: Car, number: 4312, label: "Vehicles in Fleet" },
    { icon: Building, number: 231, label: "Corporate Clients" },
    { icon: Calendar, number: 97423, label: "Tours & Trips" },
    { icon: MapPin, number: 10, label: "States & Cities" },
  ];

  return (
    <div className="bg-[#f2f8f8]">
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <div className="space-y-8">
            <Embedded text="TECH-ENABLED TRAVEL" />

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-semibold text-gray-900 leading-[1.0]">
                Trusted <span className="text-red-500">Fleet Solutions</span>
                <br />
                Since 1990
              </h1>
              <p className="text-md text-gray-600 leading-relaxed max-w-lg">
                Experience comfort, reliability, and tech-enabled journeys with
                India's leading travel partner - trusted by travellers and
                businesses across India.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card
                    key={index}
                    className="bg-[#0A283A] text-white flex items-center space-x-3"
                  >
                    <Icon className="w-6 h-6 text-yellow-400" />
                    <div>
                      <div className="text-xl font-bold">
                        <Counter end={stat.number} duration={1400} startOnView={true} />
                      </div>
                      <div className="text-xs text-gray-300">{stat.label}</div>
                    </div>
                  </Card>
                );
              })}
            </div>

            <div className="mt-16">
              <Contact />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-h-screen h-[60vh] lg:h-screen overflow-hidden rounded-lg shadow-lg">
              <img
                src={img}
                alt="Hero - fleet travel"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
