import React from "react";

// 1. Update the 'boxes' array to contain objects with your image URLs.
const boxes = [
  { src: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg" },
  { src: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" },
  { src: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg" },
  { src: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg" },
  { src: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg" },
];

export default function LifeAtCTTPL() {
  return (
    <section className="w-full m-4 flex flex-col justify-center items-center gap-8 p-4">
      <h1 className="text-3xl md:text-5xl font-bold mt-8 mb-12">
        Life at <span className="text-red-600">CTTPL</span>
      </h1>
      <div className="w-full overflow-hidden relative">
        <div className="flex gap-6 w-max animate-[scrollbox_20s_linear_infinite] hover:[animation-play-state:paused]">
          {/* 2. Change the map function to get the 'box' object */}
          {[...boxes, ...boxes].map((box, idx) => {
            if (idx % boxes.length === 0) {
              return (
                <div
                  key={idx}
                  className="flex-shrink-0 w-[170px] h-[170px] rounded-xl bg-gray-200 opacity-90 shadow-md overflow-hidden"
                >
                  {/* 3. Add the <img> tag here */}
                  <img
                    src={box.src}
                    alt="Life at CTTPL"
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            }
            if (idx % boxes.length === 2) {
              return (
                <div
                  key={idx}
                  className="flex-shrink-0 w-[260px] h-[260px] rounded-[20px] bg-gray-200 shadow-2xl scale-105 overflow-hidden"
                >
                  {/* 3. Add the <img> tag here */}
                  <img
                    src={box.src}
                    alt="Life at CTTPL"
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            }
            if (idx % boxes.length === 4) {
              return (
                <div
                  key={idx}
                  className="flex-shrink-0 w-[170px] h-[170px] rounded-xl bg-gray-200 opacity-90 shadow-md overflow-hidden"
                >
                  {/* 3. Add the <img> tag here */}
                  <img
                    src={box.src}
                    alt="Life at CTTPL"
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            }
            return (
              <div
                key={idx}
                className="flex-shrink-0 w-[220px] h-[220px] rounded-xl bg-gray-200 opacity-95 shadow-md overflow-hidden"
              >
                {/* 3. Add the <img> tag here */}
                <img
                  src={box.src}
                  alt="Life at CTTPL"
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        @keyframes scrollbox {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}