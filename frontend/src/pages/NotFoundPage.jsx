import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
  return (
    <main className="flex items-center m-8 justify-center w-full h-auto relative overflow-hidden">

      <div className="p-2 sm:p-12 mx-4 rounded-3xl shadow-2xl max-w-lg w-full relative z-10">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 10 }}
          className="text-8xl md:text-9xl font-extrabold text-[#0A283A] tracking-tighter"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-4 text-3xl md:text-4xl font-bold text-gray-800"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-4 text-base md:text-lg text-gray-600"
        >
          Oops! The page you are looking for does not exist. It might have been moved, deleted, or you mistyped the URL.
        </motion.p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5, type: 'spring', stiffness: 120 }}
        >
          <Link
            to="/"
            className="inline-block px-8 py-3 mt-8 text-lg font-semibold text-white bg-red-500 rounded-lg shadow-md hover:bg-red-500 focus:outline-none  focus:ring-opacity-50 transition-transform transform hover:scale-105 duration-300 ease-in-out"
          >
            Go Back Home
          </Link>
        </motion.div>
      </div>
    </main>
  );
};

export default NotFoundPage;
