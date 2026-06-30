"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  BookOpen,
  Clock,
  Sparkles,
  Star,
  User,
} from "lucide-react";

const CourseCard = ({ course }) => {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.5,
      }}
      className="group h-full"
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all duration-500 hover:border-cyan-400/30 hover:shadow-cyan-500/20">

        {/* ================= Glow ================= */}

        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

        {/* ================= Image ================= */}

        <div className="relative overflow-hidden">

          <Image
            src={course.image}
            alt={course.title}
            width={700}
            height={450}
            className="h-60 w-full object-cover transition duration-700 group-hover:scale-110"
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

          {/* Category */}

          <div className="absolute left-5 top-5 flex flex-wrap gap-2">

            <span className="rounded-full border border-cyan-400/20 bg-cyan-500/20 px-4 py-2 text-xs font-semibold text-cyan-300 backdrop-blur-xl">
              {course.category}
            </span>

            {course.level && (
              <span className="rounded-full border border-violet-400/20 bg-violet-500/20 px-4 py-2 text-xs font-semibold text-violet-300 backdrop-blur-xl">
                {course.level}
              </span>
            )}

          </div>

          {/* Rating */}

          <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-500/10 px-3 py-2 text-amber-400 backdrop-blur-xl">

            <Star
              size={15}
              fill="currentColor"
            />

            <span className="font-semibold">
              {course.rating}
            </span>

          </div>

        </div>

        {/* ================= Content ================= */}

        <div className="flex flex-1 flex-col p-7">

          {/* Title */}

          <h2 className="line-clamp-2 text-2xl font-bold text-white transition duration-300 group-hover:text-cyan-300">
            {course.title}
          </h2>

          {/* Instructor */}

          <div className="mt-5 flex items-center gap-3 text-slate-400">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5">

              <User size={18} />

            </div>

            <div>

              <p className="text-xs uppercase tracking-wider">
                Instructor
              </p>

              <p className="font-semibold text-white">
                {course.instructor}
              </p>

            </div>

          </div>

          {/* Description */}

          <p className="mt-5 line-clamp-3 leading-7 text-slate-400">
            {course.description}
          </p>

          {/* Divider */}

          <div className="my-6 border-t border-white/10" />

          {/* Stats */}

          <div className="space-y-4">

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-2 text-slate-400">

                <Clock size={16} />

                Duration

              </div>

              <span className="font-semibold text-white">
                {course.duration}
              </span>

            </div>

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-2 text-slate-400">

                <BookOpen size={16} />

                Lessons

              </div>

              <span className="font-semibold text-white">
                24+
              </span>

            </div>

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-2 text-slate-400">

                <Sparkles size={16} />

                Certificate

              </div>

              <span className="font-semibold text-green-400">
                Included
              </span>

            </div>

          </div>

          {/* CTA */}

          <div className="mt-8">

            <Link
              href={`/courses/${course.id}`}
              className="group/button flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-violet-500 to-blue-500 px-6 py-4 font-semibold text-white shadow-xl shadow-violet-500/20 transition-all duration-300 hover:scale-[1.02]"
            >
              View Details

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover/button:translate-x-1"
              />

            </Link>

          </div>

        </div>

      </div>
    </motion.article>
  );
};

export default CourseCard;