import { Phone, Users, Car, Building, MapPin, Calendar } from "lucide-react"

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
    <div className="min-h-[120vh] bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            

            {/* Get Quote Button */}
           
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="space-y-8">
            {/* Badge */}
            <Badge className="bg-white border-2 rounded-lg border-blue-200 text-black-1100 font-bold">
              TECH-ENABLED TRAVEL
            </Badge>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
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

            {/* Contact Button */}
            <button className="w-fit flex justify-center items-center gap-2 md:gap-4 bg-[#EC221F] border-none rounded-[8px] px-4 md:px-4 py-3 md:py-2 cursor-pointer hover:bg-[#d11e1b] transition-colors duration-200 shadow-lg">
                                <p className="text-white text-base md:text-xl lg:text-xl font-medium">Contact Us</p>
                                <img src="/call.svg" alt="call" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-8 lg:h-8" />
                            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
