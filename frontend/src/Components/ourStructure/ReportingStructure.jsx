import React from 'react';

const ReportingStructure = () => {
    const steps = [
        { id: '01', title: 'Chauffeurs' },
        { id: '02', title: 'Operation Supervisor' },
        { id: '03', title: 'Operations Manager' },
        { id: '04', title: 'GM-Operations' },
        { id: '05', title: 'Director-Operations' },
        { id: '06', title: 'CEO' },
        { id: '07', title: 'Managing Director' }
    ];

    return (
        <div className='bg-[#F4FAF9] w-full'>
            <div className="w-full max-w-6xl mx-auto p-6 bg-gray-50">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-block px-4 py-2 border border-[#B8DDD9] rounded-2xl text-sm font-semibold text-gray-600 mb-4">
                        KEY PERFORMANCE INDICATOR
                    </div>
                    <h1 className="text-[52px] md:text-4xl font-bold text-gray-900">
                        Our Reporting <span className="text-[#EC221F]">Structure</span>
                    </h1>
                </div>

                {/* Mobile Layout - Vertical */}
                <div className="block md:hidden">
                    <div className="relative flex flex-col items-center space-y-8">
                        {/* Vertical connecting line */}
                        <div className="absolute left-1/2 top-16 bottom-16 w-0.5 bg-red-400 transform -translate-x-px"></div>

                        {steps.map((step, index) => (
                            <div key={step.id} className="relative flex flex-col items-center z-10">
                                {/* Circle */}
                                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer">
                                    {step.id}
                                </div>

                                {/* Label */}
                                <div className="mt-4 text-center">
                                    <p className="text-gray-900 font-semibold text-sm max-w-32 leading-tight">
                                        {step.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop Layout - Horizontal */}
                <div className="hidden md:block">
                    <div className="relative">
                        {/* Top row: positions 1-3 */}
                        <div className="relative flex justify-between items-center mb-24">
                            {/* Horizontal connecting line for top row */}
                            <div className="absolute top-8 left-8 right-8 h-0.5 bg-red-400"></div>

                            {steps.slice(0, 3).map((step, index) => (
                                <div key={step.id} className="relative flex flex-col items-center z-10">
                                    {/* Circle */}
                                    <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer">
                                        {step.id}
                                    </div>

                                    {/* Label */}
                                    <div className="mt-4 text-center">
                                        <p className="text-gray-900 font-semibold text-sm max-w-36 leading-tight">
                                            {step.title}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Bottom row: positions 4-7 */}
                        <div className="relative flex justify-between items-center">
                            {/* Horizontal connecting line for bottom row */}
                            <div className="absolute top-8 left-8 right-8 h-0.5 bg-red-400"></div>

                            {steps.slice(3).reverse().map((step, index) => (
                                <div key={step.id} className="relative flex flex-col items-center z-10">
                                    {/* Circle */}
                                    <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer">
                                        {step.id}
                                    </div>

                                    {/* Label */}
                                    <div className="mt-4 text-center">
                                        <p className="text-gray-900 font-semibold text-sm max-w-36 leading-tight">
                                            {step.title}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Vertical connecting line - only from position 3 to 4 */}
                        <div className="absolute top-8 right-8 w-0.5 h-45 bg-red-400"></div>
                    </div>
                </div>

                {/* Optional: Add some spacing at bottom */}
                <div className="mt-12"></div>
            </div>
        </div>
    );
};

export default ReportingStructure;