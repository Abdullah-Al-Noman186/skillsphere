"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  GraduationCap,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Sparkles,
} from "lucide-react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  const quickLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Courses",
      href: "/courses",
    },
    {
      name: "My Profile",
      href: "/my-profile",
    },
  ];

  const resources = [
    {
      name: "Privacy Policy",
      href: "/privacy",
    },
    {
      name: "Terms & Conditions",
      href: "/terms",
    },
    {
      name: "Support",
      href: "/support",
    },
  ];

  const socials = [
    {
      icon: <FaFacebookF size={18} />,
      href: "#",
      hover: "hover:bg-blue-600",
    },
    {
      icon: <FaGithub size={18} />,
      href: "#",
      hover: "hover:bg-gray-700",
    },
    {
      icon: <FaLinkedinIn size={18} />,
      href: "#",
      hover: "hover:bg-sky-600",
    },
    {
      icon: <FaXTwitter size={18} />,
      href: "#",
      hover: "hover:bg-black",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* ================= Background ================= */}

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-black" />

      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[150px]" />

      {/* Floating Icons */}

      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
        }}
        className="absolute top-24 left-20 text-cyan-500/10"
      >
        <GraduationCap size={80} />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 25, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="absolute bottom-20 right-24 text-violet-500/10"
      >
        <Sparkles size={70} />
      </motion.div>

      {/* ================= Content ================= */}

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* ================= CTA ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mb-20 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              Ready to Start Learning?
            </h2>

            <p className="mt-3 max-w-xl text-slate-400">
              Join thousands of students building successful careers
              with industry-leading online courses.
            </p>
          </div>

          <Link href="/courses">
            <button className="btn btn-lg rounded-2xl border-0 bg-gradient-to-r from-cyan-500 via-violet-500 to-blue-500 text-white shadow-xl shadow-violet-500/30 hover:scale-105 transition-all duration-300">
              Explore Courses
              <ArrowRight size={20} />
            </button>
          </Link>
        </motion.div>

        {/* ================= Footer Grid ================= */}

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}

          <div>
            <Link
              href="/"
              className="flex items-center gap-3"
            >
              <div className="rounded-2xl bg-gradient-to-r from-cyan-500 via-violet-500 to-blue-500 p-3">
                <GraduationCap size={24} />
              </div>

              <span className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
                SkillSphere
              </span>
            </Link>

            <p className="mt-6 leading-7 text-slate-400">
              Learn modern technologies from experienced instructors,
              build real-world projects, and accelerate your career
              with confidence.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="mb-6 text-xl font-bold text-white">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}

          <div>
            <h3 className="mb-6 text-xl font-bold text-white">
              Resources
            </h3>

            <ul className="space-y-4">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="mb-6 text-xl font-bold text-white">
              Contact
            </h3>

            <div className="space-y-5">
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin
                  size={18}
                  className="text-cyan-400"
                />
                Tangail, Bangladesh
              </div>

              <div className="flex items-center gap-3 text-slate-400">
                <Mail
                  size={18}
                  className="text-cyan-400"
                />
                support@skillsphere.com
              </div>

              <div className="flex items-center gap-3 text-slate-400">
                <Phone
                  size={18}
                  className="text-cyan-400"
                />
                +880 1XXXXXXXXX
              </div>

              {/* Social */}

              <div className="flex gap-4 pt-4">
                {socials.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{
                      y: -5,
                      scale: 1.1,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className={`flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-300 ${social.hover}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}

        <div className="my-10 border-t border-white/10" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-4 text-center text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} SkillSphere. All rights reserved.
          </p>

          <p className="text-sm">
            Built with ❤️ using Next.js, Tailwind CSS & DaisyUI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;