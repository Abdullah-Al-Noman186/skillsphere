"use client";

import courses from "@/data/courses.json";
import { motion } from "motion/react";
import { Flame, Star } from "lucide-react";

const TrendingCourses = () => {
  const trending = courses.slice(0, 4);

  return (
    <section className="py-20 bg-gradient-to-b from-base-200 to-base-100">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            🚀 Trending Courses
          </h2>

          <p className="mt-4 text-base-content/70">
            Most popular and fast-growing courses right now
          </p>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trending.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group"
            >
              <div className="card bg-base-100 border border-base-300 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden">

                
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-purple-500/10"></div>

                <div className="card-body relative">

                  
                  <div className="flex justify-between items-center">
                    <div className="badge badge-warning gap-1 animate-pulse">
                      <Flame size={14} />
                      Trending
                    </div>

                    <div className="flex items-center gap-1 text-amber-500 font-semibold">
                      <Star size={16} fill="currentColor" />
                      {course.rating}
                    </div>
                  </div>

                 
                  <h3 className="font-bold text-lg mt-3 group-hover:text-primary transition">
                    {course.title}
                  </h3>

                
                  <p className="text-sm text-base-content/70">
                    {course.category}
                  </p>

                 
                  <p className="text-sm mt-1">
                    By{" "}
                    <span className="font-medium">
                      {course.instructor}
                    </span>
                  </p>

                
                  <div className="mt-5 h-1 w-full rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingCourses;