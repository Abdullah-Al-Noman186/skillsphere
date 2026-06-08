"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-base-200 px-4">

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="text-center max-w-md"
      >

        {/* BIG ERROR CODE */}
        <h1 className="text-7xl font-extrabold bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
          404
        </h1>

        {/* MESSAGE */}
        <h2 className="text-2xl font-bold mt-4">
          Page Not Found
        </h2>

        <p className="text-base-content/70 mt-2 mb-6">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">

          <Link
            href="/"
            className="btn bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 text-white border-0"
          >
            <Home size={18} />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="btn btn-outline"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

        </div>

      </motion.div>
    </section>
  );
};

export default NotFound;