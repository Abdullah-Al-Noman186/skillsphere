"use client";

import courses from "@/data/courses.json";
import Image from "next/image";
import { motion } from "motion/react";
import { Star, Award } from "lucide-react";

const TopInstructors = () => {
  const instructors = courses.slice(0, 4);

  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
            🏆 Top Instructors
          </h2>

          <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
            Learn from experienced professionals who
            have helped thousands of students achieve
            their career goals.
          </p>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
            >
              <div className="card bg-base-100 border border-base-300 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="card-body items-center text-center">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-violet-500 p-2 rounded-full text-white">
                      <Award size={16} />
                    </div>

                    <Image
                      src={course.image}
                      alt={course.instructor}
                      width={110}
                      height={110}
                      className="rounded-full object-cover border-4 border-primary shadow-lg"
                    />
                  </div>

                  
                  <h3 className="text-xl font-bold mt-4">
                    {course.instructor}
                  </h3>

                  
                  <div className="badge badge-primary badge-outline">
                    {course.category} Expert
                  </div>

                 
                  <div className="flex items-center gap-1 text-amber-500 mt-2">
                    <Star
                      size={18}
                      fill="currentColor"
                    />
                    <span className="font-semibold">
                      {course.rating}
                    </span>
                  </div>

                 
                  <p className="text-sm text-base-content/70 mt-3">
                    Passionate educator helping students
                    master modern skills and build
                    successful careers.
                  </p>

                
                  <div className="mt-4 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500/10 to-violet-500/10">
                    <p className="font-semibold">
                      5,000+ Students Taught
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopInstructors;