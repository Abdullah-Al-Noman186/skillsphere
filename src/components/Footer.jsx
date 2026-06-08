"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-indigo-950 via-purple-950 to-slate-950 text-white">

      {/* Floating Background Icons */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-10 left-10 text-cyan-400"
        >
          <FaFacebook size={60} />
        </motion.div>

        <motion.div
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-20 right-20 text-pink-400"
        >
          <FaGithub size={70} />
        </motion.div>

        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-20 left-1/3 text-violet-400"
        >
          <FaLinkedin size={60} />
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* BRAND */}
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
              SkillSphere
            </h2>

            <p className="text-white/70 mt-4">
              Learn modern skills from expert instructors and grow your career.
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact Info
            </h3>

            <p className="text-white/70">📍 Tangail, Bangladesh</p>
            <p className="text-white/70">📧 support@skillsphere.com</p>
            <p className="text-white/70">📞 +880 1XXXXXXXXX</p>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Social Links
            </h3>

            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="p-3 rounded-full bg-white/10 hover:bg-blue-500 transition"
              >
                <FaFacebook size={20} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="p-3 rounded-full bg-white/10 hover:bg-gray-600 transition"
              >
                <FaGithub size={20} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="p-3 rounded-full bg-white/10 hover:bg-indigo-500 transition"
              >
                <FaLinkedin size={20} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="p-3 rounded-full bg-white/10 hover:bg-pink-500 transition"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* NEWSLETTER */}
        

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-white/60">
          <p>© {new Date().getFullYear()} SkillSphere</p>

          <div className="flex justify-center gap-6 mt-2">
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;