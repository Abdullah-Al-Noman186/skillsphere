"use client";

import React from "react";
import courses from "@/data/courses.json";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "motion/react";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Clock,
  Star,
  User,
} from "lucide-react";

const curriculum = [
  "Introduction",
  "Core Concepts",
  "Hands-on Projects",
  "Final Exam",
];

const CourseDetailsPage = ({ params }) => {
  const resolvedParams = React.use(params);
  const id = Number(resolvedParams.id);

  const course = courses.find((c) => c.id === id);

  if (!course) return notFound();

  return (
    <main className="min-h-screen bg-base-200">
      <section className="relative min-h-[70vh] overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-slate-950/80" />

        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl items-end px-4 pb-12 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-3xl text-white"
          >
            <span className="badge badge-primary mb-5 px-4 py-3">
              {course.category}
            </span>

            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              {course.title}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              {course.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-sm sm:text-base">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                <Star size={18} className="text-yellow-400" />
                {course.rating}
              </span>

              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                <Clock size={18} />
                {course.duration}
              </span>

              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                <User size={18} />
                {course.instructor}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
        <div className="space-y-8">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex items-center gap-3">
                <BookOpen className="text-primary" size={26} />
                <h2 className="text-2xl font-bold">Course Overview</h2>
              </div>

              <p className="mt-3 leading-relaxed text-base-content/70">
                {course.description}
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-2xl font-bold">Curriculum</h2>

              <ul className="mt-4 space-y-3">
                {curriculum.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-lg bg-base-200 p-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-content">
                      {index + 1}
                    </span>

                    <span className="flex-1">{item}</span>

                    <CheckCircle2 size={20} className="text-success" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <aside className="card h-fit bg-base-100 shadow-xl lg:sticky lg:top-24">
          <div className="card-body">
            <Image
              src={course.image}
              alt={course.title}
              width={500}
              height={300}
              className="aspect-video rounded-lg object-cover"
            />

            <div className="space-y-1">
              <h3 className="mt-4 text-xl font-bold">Enroll Now</h3>
              <p className="text-sm text-base-content/60">
                Start learning today with {course.instructor}.
              </p>
            </div>

            <button className="btn w-full border-0 bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 text-white">
              Enroll Course
            </button>

            <Link href="/courses" className="btn btn-outline w-full">
              <ArrowLeft size={18} />
              Back
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default CourseDetailsPage;