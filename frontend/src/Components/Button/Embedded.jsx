import React from 'react';

const Embedded = ({ text }) => {
  return (
    <div className="inline-block border-2 border-[#B8DDD9] rounded-xl px-4 py-2 text-xs tracking-wider uppercase mb-6">
      <span className="text-sm uppercase font-semibold">
        {text}
      </span>
    </div>
  );
};

export default Embedded;