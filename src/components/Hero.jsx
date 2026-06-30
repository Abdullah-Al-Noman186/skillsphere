"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "motion/react";
import {
  ArrowRight,
  PlayCircle,
  Sparkles,
} from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
  const slides = [
    {
      title: "Upgrade Your Skills for the Future",
      description:
        "Master modern technologies with expert-led courses and build projects that employers actually value.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1800",
    },
    {
      title: "Learn from Industry Professionals",
      description:
        "Interactive learning experiences, practical assignments, and mentorship from experienced developers.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1800",
    },
    {
      title: "Build Your Dream Career",
      description:
        "Join thousands of learners improving their careers with high-quality online education.",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1800",
    },
  ];

  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[92vh] overflow-hidden">

              {/* Background */}
              <motion.img
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 8,
                }}
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/70 to-indigo-950/80" />

              {/* Extra Glow */}
              <div className="absolute left-20 top-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />
              <div className="absolute right-20 bottom-20 h-80 w-80 rounded-full bg-violet-600/20 blur-[120px]" />

              {/* Content */}
              <div className="relative z-20 flex h-full items-center">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">

                  <div className="max-w-3xl">

                    {/* Badge */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.5,
                      }}
                      className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/10 backdrop-blur-xl px-5 py-2 text-cyan-300 mb-8"
                    >
                      <Sparkles size={16} />
                      Trusted by thousands of learners
                    </motion.div>

                    {/* Heading */}

                    <motion.h1
                      initial={{
                        opacity: 0,
                        y: 30,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.7,
                      }}
                      className="text-5xl md:text-7xl font-black leading-tight text-white"
                    >
                      {slide.title}
                    </motion.h1>

                    {/* Description */}

                    <motion.p
                      initial={{
                        opacity: 0,
                        y: 30,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.2,
                        duration: 0.7,
                      }}
                      className="mt-8 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl"
                    >
                      {slide.description}
                    </motion.p>

                    {/* Buttons */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 30,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.4,
                        duration: 0.7,
                      }}
                      className="mt-10 flex flex-wrap gap-4"
                    >
                      <Link href="/courses">
                        <button className="btn btn-lg rounded-xl border-0 bg-gradient-to-r from-cyan-500 via-violet-500 to-blue-500 text-white hover:scale-105 transition-all duration-300 shadow-xl shadow-violet-500/30">
                          Explore Courses
                          <ArrowRight size={20} />
                        </button>
                      </Link>

                      <button className="btn btn-lg rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20">
                        <PlayCircle size={20} />
                        Watch Demo
                      </button>
                    </motion.div>

                    {/* Stats */}

                    <motion.div
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      transition={{
                        delay: 0.7,
                      }}
                      className="mt-16 grid grid-cols-3 gap-8 max-w-xl"
                    >
                      <div>
                        <h2 className="text-3xl font-bold text-white">
                          500+
                        </h2>
                        <p className="text-slate-400">
                          Courses
                        </p>
                      </div>

                      <div>
                        <h2 className="text-3xl font-bold text-white">
                          50K+
                        </h2>
                        <p className="text-slate-400">
                          Students
                        </p>
                      </div>

                      <div>
                        <h2 className="text-3xl font-bold text-white">
                          4.9★
                        </h2>
                        <p className="text-slate-400">
                          Rating
                        </p>
                      </div>
                    </motion.div>

                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper Custom Style */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.4);
          width: 10px;
          height: 10px;
        }

        .swiper-pagination-bullet-active {
          background: #22d3ee;
          width: 28px;
          border-radius: 999px;
        }
      `}</style>
    </section>
  );
};

export default Hero;