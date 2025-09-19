import { Bus } from "lucide-react";

function TechAndAi() {
    const cardData = [
        {
            number: "01",
            title: "Control Room",
            description: "Our 24/7 control centers provide immediate response, real-time monitoring, and seamless management of all operational situations."
        },
        {
            number: "02", 
            title: "Live Tracking",
            description: "Advanced live tracking technology enables real-time fleet visibility, efficient route planning, enhanced passenger safety, and improved operational efficiency."
        },
        {
            number: "03",
            title: "Driver's App", 
            description: "A dedicated mobile app equips chauffeurs with tools, updates, and navigation support, ensuring smoother operations and higher service quality."
        },
        {
            number: "04",
            title: "Hardware Integration",
            description: "Our fleet is equipped with panic buttons, GPS cameras, RFID, and microphones, delivering comprehensive, tech-enabled, driven passenger safety."
        }
    ];

    return (
        <div
            className="relative bg-cover bg-center py-16 text-white"
            style={{
                backgroundImage:
                    "url('/techandAI.png')",
            }}
        >
            <div className="relative max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-4">
                    <span className="text-yellow-400">Tech & AI</span> Enabled Organisation
                </h2>
                <p className="text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed">
                    CTTPL is a technology-driven leader, pioneering end-to-end automation in the transportation sector. Our advanced systems cover every aspect of operations-from corporate fleet management and HR processes to workshop control and financial oversight-delivering unmatched efficiency and reliability. With built-in features like real-time route optimization, precise scheduling, and live vehicle tracking, our platform ensures smarter, safer journeys. At CTTPL, automation isn't just about technology-it's about creating a seamless, user-friendly ecosystem that enhances safety, accountability, and operational excellence across the board.
                </p>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-b from-[#014452] to-[#012d38] rounded-2xl p-2 shadow-lg border border-gray-700/20 relative overflow-hidden text-left"
                        >
                            {/* Large Background Number */}
                            <div className="absolute top-2 left-4">
                                <span className="text-yellow-400/20 text-6xl sm:text-8xl font-bold leading-none select-none">
                                    {card.number}
                                </span>
                            </div>
                            
                            {/* Content */}
                            <div className="relative z-10 pt-12 mt-8 sm:mt-12">
                                <h3 className="text-white text-lg sm:text-xl font-semibold mb-3">
                                    {card.title}
                                </h3>
                                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TechAndAi
