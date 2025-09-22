import React from "react"
import { Phone, Users, Car, Building, MapPin, Calendar } from "lucide-react"
import Embedded from '../Button/Embedded'
import Contact from "../Button/Contact"
import img from '../../images/bus5.png'

// Simple Button Component
function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-md font-medium ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

// Simple Badge Component
function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-block px-3 py-1 text-sm font-medium rounded ${className}`}
    >
      {children}
    </span>
  )
}

// Simple Card Component
function Card({ children, className = "" }) {
  return (
    <div className={`p-4 rounded-lg shadow-sm ${className}`}>
      {children}
    </div>
  )
}

export default function Home() {
  const stats = [
    { icon: Car, number: "45+", label: "Trusted Service" },
    { icon: Users, number: "10,000+", label: "Happy Clients" },
    { icon: Car, number: "4312+", label: "Vehicles in Fleet" },
    { icon: Building, number: "231+", label: "Corporate Clients" },
    { icon: Calendar, number: "97423+", label: "Tours & Trips" },
    { icon: MapPin, number: "10+", label: "States & Cities" },
  ]

  return (
    <div className="min-h-screen bg-[#f2f8f8]">
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <div className="space-y-8">
            <Embedded text="TECH-ENABLED TRAVEL" />

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Trusted <span className="text-red-500">Fleet Solutions</span>
                <br />
                Since 1990
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Experience comfort, reliability, and tech-enabled journeys with
                India's leading travel partner - trusted by travellers and
                businesses across India.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <Card
                    key={index}
                    className="bg-gray-900 text-white flex items-center space-x-3"
                  >
                    <Icon className="w-6 h-6 text-yellow-400" />
                    <div>
                      <div className="text-xl font-bold">{stat.number}</div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </div>
                  </Card>
                )
              })}
            </div>

            <Contact />
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
  )
}
