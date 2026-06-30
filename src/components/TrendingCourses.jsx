"use client";

import courses from "@/data/courses.json";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowRight,
  Flame,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Clock,
} from "lucide-react";

const TrendingCourses = () => {
  const trending = [...courses].slice(0, 4);

  return (
    <section className="relative overflow-hidden py-24">
      {/* ================= Background ================= */}

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      <div className="absolute left-0 top-16 h-80 w-80 rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-[150px]" />

      {/* ================= Content ================= */}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= Heading ================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-orange-300 backdrop-blur-xl">
            <Sparkles size={16} />
            Hot Right Now
          </div>

          <h2 className="mt-6 text-4xl md:text-6xl font-black leading-tight text-white">
            Trending
            <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-violet-500 bg-clip-text text-transparent">
              {" "}
              Courses
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Discover the fastest-growing courses chosen by thousands of
            learners to stay ahead in today's technology landscape.
          </p>
        </motion.div>

        {/* ================= Cards ================= */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trending.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
            >
              <Link href={`/courses/${course.id}`}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all duration-500 hover:border-orange-400/40 hover:shadow-orange-500/20">

                  {/* Glow */}

                  <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-orange-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                  {/* Trending Badge */}

                  <div className="absolute left-5 top-5 z-20 flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-500/20 px-4 py-2 text-xs font-semibold text-orange-300 backdrop-blur-xl">
                    <Flame size={14} />
                    Trending
                  </div>

                  {/* Rating */}

                  <div className="absolute right-5 top-5 z-20 flex items-center gap-1 rounded-full border border-amber-400/20 bg-amber-500/10 px-3 py-2 text-amber-400 backdrop-blur-xl">
                    <Star
                      size={15}
                      fill="currentColor"
                    />
                    <span className="font-semibold">
                      {course.rating}
                    </span>
                  </div>

                  {/* Image */}

                  <div className="relative overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      width={600}
                      height={400}
                      className="h-56 w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent" />
                  </div>

                  {/* Content */}

                  <div className="p-7">

                    <span className="inline-flex rounded-full border border-pink-500/20 bg-pink-500/10 px-3 py-1 text-xs font-medium text-pink-300">
                      {course.category}
                    </span>

                    <h3 className="mt-5 line-clamp-2 text-2xl font-bold text-white transition group-hover:text-orange-300">
                      {course.title}
                    </h3>

                    <p className="mt-4 text-slate-400">
                      Instructor{" "}
                      <span className="font-semibold text-white">
                        {course.instructor}
                      </span>
                    </p>

                    {/* Divider */}

                    <div className="my-6 border-t border-white/10" />

                    {/* Stats */}

                    <div className="space-y-3">

                      <div className="flex items-center justify-between text-sm">

                        <div className="flex items-center gap-2 text-slate-400">
                          <TrendingUp size={16} />
                          Growth
                        </div>

                        <span className="font-semibold text-green-400">
                          +92%
                        </span>

                      </div>

                      <div className="flex items-center justify-between text-sm">

                        <div className="flex items-center gap-2 text-slate-400">
                          <Users size={16} />
                          Students
                        </div>

                        <span className="font-semibold text-white">
                          12.5K+
                        </span>

                      </div>

                      <div className="flex items-center justify-between text-sm">

                        <div className="flex items-center gap-2 text-slate-400">
                          <Clock size={16} />
                          Duration
                        </div>

                        <span className="font-semibold text-white">
                          12 Hours
                        </span>

                      </div>

                    </div>

                    {/* CTA */}

                    <div className="mt-8 flex items-center justify-between">

                      <span className="font-semibold text-orange-400">
                        View Course
                      </span>

                      <motion.div
                        whileHover={{
                          x: 4,
                        }}
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 text-white shadow-lg"
                      >
                        <ArrowRight size={18} />
                      </motion.div>

                    </div>

                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </div>

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
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
          }}
          className="mt-20 flex justify-center"
        >
          <Link href="/courses">
            <button className="btn btn-lg rounded-2xl border-0 bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 px-8 text-white shadow-xl shadow-pink-500/30 transition-all duration-300 hover:scale-105">
              Explore All Trending Courses
              <ArrowRight size={20} />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TrendingCourses;