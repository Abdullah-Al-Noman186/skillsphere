"use client";

import React from "react";
import courses from "@/data/courses.json";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "motion/react";
import { Star, Clock, User } from "lucide-react";

const CourseDetailsPage = ({ params }) => {
  
  const resolvedParams = React.use(params);
  const id = Number(resolvedParams.id);

  const course = courses.find((c) => c.id === id);

  if (!course) return notFound();

  return (
    <div className="min-h-screen bg-base-200">

      
      <div className="relative h-[60vh]">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute bottom-10 left-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="badge badge-primary mb-3">
              {course.category}
            </span>

            <h1 className="text-4xl font-bold">
              {course.title}
            </h1>

            <p className="mt-3 text-white/80 max-w-xl">
              {course.description}
            </p>
          </motion.div>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-3 gap-10">

        
        <div className="lg:col-span-2 space-y-8">

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-2xl font-bold">
                Course Overview
              </h2>

              <p className="text-base-content/70 mt-3">
                {course.description}
              </p>

              <div className="flex gap-6 mt-6">
                <span className="flex items-center gap-2">
                  <Star className="text-yellow-500" />
                  {course.rating}
                </span>

                <span className="flex items-center gap-2">
                  <Clock />
                  {course.duration}
                </span>

                <span className="flex items-center gap-2">
                  <User />
                  {course.instructor}
                </span>
              </div>
            </div>
          </div>

         
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-2xl font-bold">
                📚 Curriculum
              </h2>

              <ul className="space-y-3 mt-4">
                <li className="p-3 bg-base-200 rounded">
                  Introduction
                </li>
                <li className="p-3 bg-base-200 rounded">
                  Core Concepts
                </li>
                <li className="p-3 bg-base-200 rounded">
                  Projects
                </li>
                <li className="p-3 bg-base-200 rounded">
                  Final Exam
                </li>
              </ul>
            </div>
          </div>

        </div>

        
        <div className="card bg-base-100 shadow-xl h-fit sticky top-24">
          <div className="card-body">

            <Image
              src={course.image}
              alt="course"
              width={500}
              height={300}
              className="rounded-lg"
            />

            <h3 className="text-xl font-bold mt-4">
              Enroll Now
            </h3>

            <button className="btn w-full bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 text-white border-0">
              Enroll Course
            </button>

            <Link href="/courses" className="btn btn-outline w-full">
              Back
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
};

export default CourseDetailsPage;