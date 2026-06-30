"use client";

import React from "react";
import courses from "@/data/courses.json";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "motion/react";
import {
  ArrowLeft,
  BadgeCheck,
  BookOpen,
  CheckCircle2,
  Clock,
  Layers,
  PlayCircle,
  Star,
  User,
} from "lucide-react";

const curriculum = [
  "Introduction and course roadmap",
  "Core concepts with guided lessons",
  "Hands-on projects and practice",
  "Final exam and certificate",
];

const CourseDetailsPage = ({ params }) => {
  const resolvedParams = React.use(params);
  const id = Number(resolvedParams.id);

  const course = courses.find((c) => c.id === id);

  if (!course) return notFound();

  return (
    <main className="min-h-screen bg-base-200">
      <section className="relative min-h-[72vh] overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-950/75 to-black/80" />

        <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-7xl items-end px-4 pb-12 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-4xl text-white"
          >
            <Link
              href="/courses"
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur transition hover:bg-white/20"
            >
              <ArrowLeft size={16} />
              Back to Courses
            </Link>

            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="badge badge-primary px-4 py-3">
                {course.category}
              </span>

              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                <BadgeCheck size={16} className="text-cyan-300" />
                Beginner Friendly
              </span>
            </div>

            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              {course.title}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              {course.description}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
                <Star size={22} className="mb-2 text-yellow-400" />
                <p className="text-2xl font-black">{course.rating}</p>
                <p className="text-sm text-white/65">Course Rating</p>
              </div>

              <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
                <Clock size={22} className="mb-2 text-cyan-300" />
                <p className="text-2xl font-black">{course.duration}</p>
                <p className="text-sm text-white/65">Total Duration</p>
              </div>

              <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
                <User size={22} className="mb-2 text-pink-300" />
                <p className="text-2xl font-black">{course.instructor}</p>
                <p className="text-sm text-white/65">Instructor</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_390px] lg:px-8">
        <div className="space-y-8">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="rounded-xl bg-primary/10 p-3 text-primary">
                  <BookOpen size={26} />
                </span>

                <div>
                  <h2 className="text-2xl font-bold">Course Overview</h2>
                  <p className="text-sm text-base-content/60">
                    What you will learn from this course
                  </p>
                </div>
              </div>

              <p className="mt-5 leading-relaxed text-base-content/70">
                {course.description}
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl bg-base-200 p-4">
                  <Layers className="mb-2 text-primary" size={22} />
                  <h3 className="font-bold">Structured</h3>
                  <p className="mt-1 text-sm text-base-content/60">
                    Step-by-step lessons
                  </p>
                </div>

                <div className="rounded-xl bg-base-200 p-4">
                  <PlayCircle className="mb-2 text-primary" size={22} />
                  <h3 className="font-bold">Practical</h3>
                  <p className="mt-1 text-sm text-base-content/60">
                    Project-based learning
                  </p>
                </div>

                <div className="rounded-xl bg-base-200 p-4">
                  <BadgeCheck className="mb-2 text-primary" size={22} />
                  <h3 className="font-bold">Certificate</h3>
                  <p className="mt-1 text-sm text-base-content/60">
                    Earn after completion
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body p-6 sm:p-8">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold">Curriculum</h2>
                  <p className="text-sm text-base-content/60">
                    4 focused modules to complete
                  </p>
                </div>

                <span className="badge badge-outline">4 Lessons</span>
              </div>

              <ul className="space-y-3">
                {curriculum.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 rounded-xl bg-base-200 p-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-content">
                      {index + 1}
                    </span>

                    <div className="flex-1">
                      <h3 className="font-bold">{item}</h3>
                      <p className="text-sm text-base-content/60">
                        Module {index + 1}
                      </p>
                    </div>

                    <CheckCircle2 size={22} className="text-success" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <aside className="card h-fit bg-base-100 shadow-xl lg:sticky lg:top-24">
          <div className="card-body p-5">
            <Image
              src={course.image}
              alt={course.title}
              width={600}
              height={360}
              className="aspect-video rounded-xl object-cover"
            />

            <div className="mt-2 space-y-2">
              <h3 className="text-2xl font-black">Enroll Now</h3>

              <p className="text-sm leading-relaxed text-base-content/60">
                Start learning today with {course.instructor} and build your
                skills through practical lessons.
              </p>
            </div>

            <div className="my-2 rounded-xl bg-base-200 p-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-base-content/60">Duration</span>
                <span className="font-bold">{course.duration}</span>
              </div>

              <div className="divider my-2"></div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-base-content/60">Rating</span>
                <span className="font-bold">{course.rating}</span>
              </div>

              <div className="divider my-2"></div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-base-content/60">Category</span>
                <span className="font-bold">{course.category}</span>
              </div>
            </div>

            <button className="btn w-full border-0 bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 text-white">
              Enroll Course
            </button>

            <Link href="/courses" className="btn btn-outline w-full">
              <ArrowLeft size={18} />
              Back to Courses
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default CourseDetailsPage;