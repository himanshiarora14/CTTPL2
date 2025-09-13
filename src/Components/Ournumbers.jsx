import { Bus } from "lucide-react";

function Ournumbers() {
    return (
        <div
            className="relative bg-cover bg-center py-16 text-white"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#002b36]/80"></div>

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

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((i) => (
                        <div
                            key={i}
                            className="bg-gradient-to-b from-[#014452] to-[#012d38] rounded-2xl p-6 shadow-lg flex flex-col items-center"
                        >
                            <Bus className="w-10 h-10 text-yellow-400 mb-3" />
                            <div className="flex flex-row gap-4 justify-center">
                                <p className="text-3xl font-bold">50K</p>
                                <p className="text-gray-200 text-sm mt-1 text-center">
                                    Successful <br /> Transportation
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Ournumbers;
