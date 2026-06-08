"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "motion/react";

import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
  const slides = [
    {
      title: "Upgrade Your Skills Today 🚀",
      description:
        "Learn the latest technologies from industry experts.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
    },
    {
      title: "Learn From Industry Experts",
      description:
        "Master in-demand skills and boost your career.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200",
    },
    {
      title: "Build Your Dream Career",
      description:
        "Explore hundreds of professional courses.",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200",
    },
  ];

  return (
    <section>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3500 }}
        pagination={{ clickable: true }}
        loop
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero min-h-[80vh]"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="hero-overlay bg-black/60"></div>

              <div className="hero-content text-center text-white">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="max-w-3xl"
                >
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    {slide.title}
                  </h1>

                  <p className="text-lg md:text-xl mb-8 text-white/80">
                    {slide.description}
                  </p>

                 
                  <Link href="/courses">
                    <button className="btn btn-lg bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 text-white border-0 hover:scale-105 transition">
                      Explore Courses →
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;