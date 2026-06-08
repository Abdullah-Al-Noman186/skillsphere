"use client";

import courses from "@/data/courses.json";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

const PopularCourses = () => {
  const popularCourses = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <section className="max-w-7xl mx-auto py-20 px-4">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold">
          🔥 Popular Courses
        </h2>
        <p className="text-base-content/70 mt-3">
          Learn from the highest-rated courses on SkillSphere
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {popularCourses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            whileHover={{ y: -10 }}
          >

           
            <Link href={`/courses/${course.id}`}>
              <div className="group cursor-pointer card overflow-hidden bg-base-100 shadow-xl border border-base-300 transition-all duration-300 hover:shadow-2xl hover:border-primary">

                {/* IMAGE */}
                <figure className="overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={500}
                    height={300}
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </figure>

               
                <div className="card-body">

                  <div className="flex justify-between items-center">
                    <span className="badge badge-primary">
                      {course.category}
                    </span>

                    <span className="font-semibold text-amber-500">
                      ⭐ {course.rating}
                    </span>
                  </div>

                  <h2 className="card-title line-clamp-2 group-hover:text-primary transition">
                    {course.title}
                  </h2>

                  <p className="text-base-content/70">
                    Instructor: {course.instructor}
                  </p>

                  
                  <div className="mt-4">
                    <span className="text-sm font-semibold text-primary">
                      Click to view details →
                    </span>
                  </div>

                </div>
              </div>
            </Link>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PopularCourses;