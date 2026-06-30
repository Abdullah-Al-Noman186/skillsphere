"use client";

import courses from "@/data/courses.json";
import Image from "next/image";
import { motion } from "motion/react";
import {
  Award,
  ArrowRight,
  Sparkles,
  Star,
  Users,
  BookOpen,
  BadgeCheck,
} from "lucide-react";

const TopInstructors = () => {
  // Get first 4 instructors
  const instructors = courses.slice(0, 4);

  return (
    <section className="relative overflow-hidden py-24">
      {/* ================= Background ================= */}

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[150px]" />

      {/* ================= Container ================= */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= Heading ================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-cyan-300 backdrop-blur-xl">
            <Sparkles size={16} />
            Meet Our Experts
          </div>

          <h2 className="mt-6 text-4xl md:text-6xl font-black text-white leading-tight">
            Learn From
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
              {" "}
              Top Instructors
            </span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-slate-400">
            Gain real-world skills from experienced mentors trusted by
            thousands of learners worldwide.
          </p>
        </motion.div>

        {/* ================= Cards ================= */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {instructors.map((course, index) => (
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
              <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all duration-500 hover:border-cyan-400/30 hover:shadow-cyan-500/20">

                {/* Glow */}
                <div className="absolute -top-20 right-0 h-52 w-52 rounded-full bg-cyan-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* Award */}
                <div className="absolute right-5 top-5 z-20 rounded-full bg-gradient-to-r from-cyan-500 via-violet-500 to-blue-500 p-2 shadow-lg">
                  <Award
                    size={18}
                    className="text-white"
                  />
                </div>

                <div className="p-8">
                  {/* Avatar */}

                  <div className="relative mx-auto w-fit">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-violet-500 to-blue-500 blur-xl opacity-40 group-hover:opacity-80 transition" />

                    <Image
                      src={course.image}
                      alt={course.instructor}
                      width={120}
                      height={120}
                      className="relative h-32 w-32 rounded-full object-cover border-4 border-cyan-400 shadow-xl"
                    />

                    {/* Online Badge */}

                    <span className="absolute bottom-2 right-2 h-5 w-5 rounded-full bg-green-400 border-2 border-slate-900"></span>
                  </div>

                  {/* Name */}

                  <h3 className="mt-6 text-2xl font-bold text-center text-white transition group-hover:text-cyan-300">
                    {course.instructor}
                  </h3>

                  {/* Expertise */}

                  <div className="mt-3 flex justify-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
                      <BadgeCheck size={15} />
                      {course.category} Expert
                    </span>
                  </div>

                  {/* Rating */}

                  <div className="mt-5 flex justify-center items-center gap-2 text-amber-400">
                    <Star
                      size={18}
                      fill="currentColor"
                    />
                    <span className="font-semibold text-lg">
                      {course.rating}
                    </span>
                  </div>

                  {/* Bio */}

                  <p className="mt-5 text-center leading-7 text-slate-400">
                    Passionate educator helping learners master modern
                    technologies through practical projects and
                    industry-focused training.
                  </p>

                  {/* Divider */}

                  <div className="my-6 border-t border-white/10" />

                  {/* Stats */}

                  <div className="space-y-3">

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-slate-400">
                        <Users size={16} />
                        Students
                      </div>

                      <span className="font-semibold text-white">
                        5,000+
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-slate-400">
                        <BookOpen size={16} />
                        Courses
                      </div>

                      <span className="font-semibold text-white">
                        12+
                      </span>
                    </div>

                  </div>

                  {/* CTA */}

                  <div className="mt-8 flex items-center justify-between">

                    <span className="font-semibold text-cyan-400">
                      View Profile
                    </span>

                    <motion.div
                      whileHover={{
                        x: 4,
                      }}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-violet-500 to-blue-500 text-white shadow-lg"
                    >
                      <ArrowRight size={18} />
                    </motion.div>

                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= Bottom CTA ================= */}

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
          <button className="btn btn-lg rounded-2xl border-0 bg-gradient-to-r from-cyan-500 via-violet-500 to-blue-500 px-8 text-white shadow-xl shadow-violet-500/30 transition-all duration-300 hover:scale-105">
            Explore All Instructors
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TopInstructors;