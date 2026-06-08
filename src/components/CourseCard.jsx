"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Star, Clock, BookOpen } from "lucide-react";

const CourseCard = ({ course }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -12, scale: 1.02 }}
      transition={{ duration: 0.4 }}
      className="group"
    >
      <div className="card bg-base-100 border border-base-300 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">

        
        <figure className="relative overflow-hidden">
          <Image
            src={course.image}
            alt={course.title}
            width={600}
            height={350}
            className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
          />

          
          <div className="absolute top-3 left-3 flex gap-2">
            <span className="badge badge-primary">
              {course.category}
            </span>

            <span className="badge badge-secondary">
              {course.level}
            </span>
          </div>

         
          <div className="absolute top-3 right-3 bg-black/60 text-white px-2 py-1 rounded-lg flex items-center gap-1">
            <Star size={14} fill="gold" className="text-yellow-400" />
            <span className="text-sm font-semibold">
              {course.rating}
            </span>
          </div>
        </figure>

        
        <div className="card-body">

          
          <h2 className="card-title line-clamp-2 group-hover:text-primary transition">
            {course.title}
          </h2>

          
          <p className="text-base-content/70">
            👨‍🏫 {course.instructor}
          </p>

          
          <div className="flex items-center gap-2 text-sm text-base-content/70">
            <Clock size={16} />
            {course.duration}
          </div>

          
          <p className="text-sm text-base-content/70 line-clamp-2 mt-1">
            {course.description}
          </p>

          
          <div className="card-actions mt-4">
            <Link
              href={`/courses/${course.id}`}
              className="btn w-full bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 text-white border-0 hover:scale-[1.02] transition"
            >
              View Details →
            </Link>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;