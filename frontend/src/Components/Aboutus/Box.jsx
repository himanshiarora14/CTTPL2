import React from "react";

const boxes = [{}, {}, {}, {}, {}];

export default function LifeAtCTTPL() {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-8 p-4">
      {/* Header */}
      <h1 className="text-3xl font-bold mt-8 mb-12">
        Life at <span className="text-red-600">CTTPL</span>
      </h1>
      {/* Scrollable Boxes */}
      <div className="w-full overflow-hidden relative">
        <div className="flex gap-6 w-max animate-[scrollbox_20s_linear_infinite] hover:[animation-play-state:paused]">
          {[...boxes, ...boxes].map((_, idx) => {
            // First box: small square
            if (idx % boxes.length === 0) {
              return (
                <div
                  key={idx}
                  className="flex-shrink-0 w-[170px] h-[170px] rounded-xl bg-blue-500 opacity-90 shadow-md"
                />
              );
            }
            // Center (3rd) box: largest
            if (idx % boxes.length === 2) {
              return (
                <div
                  key={idx}
                  className="flex-shrink-0 w-[260px] h-[260px] rounded-[20px] bg-blue-500 shadow-2xl scale-105"
                />
              );
            }
            // Last box: also small square
            if (idx % boxes.length === 4) {
              return (
                <div
                  key={idx}
                  className="flex-shrink-0 w-[170px] h-[170px] rounded-xl bg-blue-500 opacity-90 shadow-md"
                />
              );
            }
            // All other boxes: medium rectangles
            return (
              <div
                key={idx}
                className="flex-shrink-0 w-[220px] h-[220px] rounded-xl bg-blue-500 opacity-95 shadow-md"
              />
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