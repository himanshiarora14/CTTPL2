// ReachOptions.jsx
import React from "react";

const cardData = [
    {
        title: "Reach + Options",
        description:
            "You can lease a self-drive car that suits your needs in states like Delhi, Uttar Pradesh, Haryana, Tamil Nadu, Karnataka, Telangana, Maharashtra, Madhya Pradesh, and more. Choose from a variety of models such as Swift, Innova, Crysta, Baleno, i10, i20, Etios, Creta, and others.",
        bgImage: "/assets/blurcarimage.png",
        characterImage: "/assets/character.svg",
    },
    {
        title: "Tech + Support",
        description:
            "Assistance is available 24/7. Our team managing back-end operations at CTTPL is always ready to address your queries and resolve any issues you encounter. We provide continuous support to our clients, and we're even available to help navigate the complex streets of a new city or country.",
        bgImage: "/assets/blurcarimage.png",
        characterImage: "/assets/character.svg",
    },
];

export default function ReachOptions() {
    return (
        <section className="w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 overflow-visible">
                    {cardData.map((card, idx) => (
                        <article
                            key={idx}
                            className="relative w-full h-[28rem] sm:h-[32rem] md:h-[36rem] lg:h-[42rem] overflow-visible"
                        >
                            {/* --- BACKGROUND IMAGE SCENE (bottom-right) --- */}
                            <div
                                className="absolute top-36 right-0 w-4/5 h-3/5 rounded-3xl overflow-hidden"
                                style={{ zIndex: 1 }}
                            >
                                <img
                                    src={card.bgImage}
                                    alt=""
                                    aria-hidden="true"
                                    className="w-full h-full object-cover select-none pointer-events-none"
                                />
                            </div>

                            {/* --- CHARACTER (USING SCALE TRANSFORM) --- */}
                            <div
                                className="absolute bottom-20 right-4 md:right-8"
                                style={{ zIndex: 10 }}
                            >
                                <img
                                    src={card.characterImage}
                                    alt={`${card.title} character`}
                                    style={{
                                        width: '270px',
                                        height: '380px',
                                        transform: 'scaleY(2)', // Stretch vertically 3x
                                        transformOrigin: 'bottom',
                                        filter: "drop-shadow(0 15px 30px rgba(2,6,23,0.25))",
                                    }}
                                />
                            </div>


                            {/* --- CONTENT CARD (top-left, overlapping with bg) --- */}
                            <div
                                className="absolute top-6 left-0 max-w-[80%] h-2/5"
                                style={{ zIndex: 8 }}
                            >
                                <div className="bg-white rounded-3xl shadow-2xl p-5 sm:p-6 md:p-8 h-full flex flex-col justify-center">
                                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                                        {card.title}
                                    </h2>
                                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-4">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
