import React, { useEffect, useRef, useState } from "react";

const boxes = [
  { src: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg" },
  { src: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" },
  { src: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg" },
  { src: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg" },
  { src: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg" },
  { src: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg" },
  { src: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" },
  { src: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg" },
  { src: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg" },
  { src: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg" },
];

export default function LifeAtCTTPL() {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const [scales, setScales] = useState([]);

  const baseSize = 170;
  const maxScale = 1.28;
  const spread = 0.55;
  const marqueeDuration = 50;
  const gap = 28;

  const totalDupCount = boxes.length * 2;
  itemRefs.current = new Array(totalDupCount);

  useEffect(() => {
    let running = true;
    let rafId = 0;

    const updateScales = () => {
      const container = containerRef.current;
      if (!container) {
        if (running) rafId = requestAnimationFrame(updateScales);
        return;
      }

      const containerRect = container.getBoundingClientRect();
      const containerCenterX = containerRect.left + containerRect.width / 2;
      const halfInfluence = (containerRect.width / 2) * spread;
      const newScales = new Array(totalDupCount).fill(1);

      for (let i = 0; i < totalDupCount; i++) {
        const el = itemRefs.current[i];
        if (!el) continue;
        const r = el.getBoundingClientRect();
        const centerX = r.left + r.width / 2;
        const dist = Math.abs(centerX - containerCenterX);
        const ratio = Math.max(0, 1 - dist / (halfInfluence || 1));
        newScales[i] = 1 + ratio * (maxScale - 1);
      }

      let changed = false;
      if (scales.length !== newScales.length) {
          changed = true;
      } else {
        for (let i = 0; i < newScales.length; i++) {
          if (Math.abs((scales[i] || 1) - newScales[i]) > 0.005) {
            changed = true;
            break;
          }
        }
      }

      if (changed) setScales(newScales);
      if (running) rafId = requestAnimationFrame(updateScales);
    };

    rafId = requestAnimationFrame(updateScales);

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
    };
  }, []);

  const renderGroup = (groupIndexOffset = 0) =>
    boxes.map((box, i) => {
      const dupIndex = groupIndexOffset + i;
      const scale = scales[dupIndex] ?? 1;
      const isCenterish = scale > 1.01;

      return (
        <div
          key={`slot-${dupIndex}`}
          className="flex flex-shrink-0 items-center justify-center"
          style={{
            width: baseSize,
            height: baseSize,
          }}
        >
          <div
            ref={(el) => (itemRefs.current[dupIndex] = el)}
            className="h-full w-full overflow-hidden rounded-xl bg-gray-100"
            style={{
              transform: `scale(${scale})`,
              transition: "transform 220ms cubic-bezier(.2,.9,.2,1), box-shadow 220ms",
              boxShadow: isCenterish
                ? "0 22px 44px rgba(15,23,42,0.20)"
                : "0 6px 12px rgba(2,6,23,0.08)",
            }}
          >
            <img
              src={box.src}
              alt={`Life at CTTPL ${i + 1}`}
              className="pointer-events-none block h-full w-full select-none object-cover"
              draggable={false}
            />
          </div>
        </div>
      );
    });

  return (
    <section className="flex w-full flex-col items-center gap-4 py-5">
      <h2 className="m-2 text-center text-5xl font-bold">
        Life at <span className="text-red-500">CTTPL</span>
      </h2>

      <div
        ref={containerRef}
        className="marquee-container w-full overflow-hidden py-5"
      >
        <div
          className="marquee-track flex"
          style={{
            gap: `${gap}px`,
            animation: `marquee ${marqueeDuration}s linear infinite`,
          }}
        >
          {renderGroup(0)}
          {renderGroup(boxes.length)}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-${boxes.length} * (${baseSize}px + ${gap}px)));
          }
        }
        .marquee-container:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}