import React from "react";
import Bus21 from "../images/Bus21.png";
import EV from "../images/electric.png";
import luxury from "../images/luxury.png";
import suv from "../images/suv.png";
import sedan from "../images/sedan.png"

const cards = [
    { title: "Hatchbacks & Sedans", image: sedan },
    { title: "SUVs and MUVs", image: suv },
    { title: "Luxury Cars", image: luxury },
    { title: "Buses and Coaches", image: Bus21 },
    { title: "Electric Vehicles", image: EV },
];

export default function FleetSection() {
    return (
        <section className="relative py-16 bg-white">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                    Browse Our <span className="text-red-500">Fleet</span>
                </h2>
                <p className="mt-3 text-md md:text-base text-gray-600 max-w-3xl mx-auto">
                    Choose from our wide range of well-maintained vehicles to match your corporate transport needs.
                </p>

                <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-end">
                    {cards.map((card, i) => (
                        <div
                            key={card.title}
                            className="relative rounded-xl shadow-sm overflow-hidden bg-gradient-to-b from-amber-50 to-white flex flex-col items-center justify-between h-44 sm:h-52 p-4"
                        >
                            <div className="text-center text-xs sm:text-sm text-gray-700 font-medium">
                                {card.title}
                            </div>

                            {/* Show image only if card has one */}
                            {card.image && (
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-24 sm:w-28 md:w-70 object-contain drop-shadow-xl"
                                />
                            )}

                            {/* subtle bottom fade */}
                            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
