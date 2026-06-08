"use client";

import { useState } from "react";
import courses from "@/data/courses.json";
import CourseCard from "@/components/CourseCard";
import { Search, X } from "lucide-react";

const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">

     
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
          🎓 All Courses
        </h1>

        <p className="text-base-content/70 mt-3">
          Explore professional courses and upgrade your skills
        </p>
      </div>

      
      <div className="flex flex-col items-center gap-4 mb-10">

        <div className="relative w-full max-w-md">

          <Search className="absolute left-3 top-3 text-gray-400" size={18} />

          <input
            type="text"
            placeholder="Search courses..."
            className="input input-bordered w-full pl-10 pr-10 focus:outline-none focus:ring-2 focus:ring-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-3 text-gray-400 hover:text-red-500"
            >
              <X size={18} />
            </button>
          )}
        </div>

      
        <p className="text-sm text-base-content/60">
          Showing <span className="font-bold">{filteredCourses.length}</span> courses
        </p>
      </div>

      
      {filteredCourses.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="text-center mt-20">
          <p className="text-2xl">😢 No courses found</p>
          <p className="text-base-content/60 mt-2">
            Try searching with different keywords
          </p>
        </div>
      )}

    </section>
  );
};

export default CoursesPage;