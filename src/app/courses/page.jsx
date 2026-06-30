"use client";

import { useMemo, useState } from "react";
import courses from "@/data/courses.json";
import CourseCard from "@/components/CourseCard";
import { Search, X } from "lucide-react";

const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    if (!term) return courses;

    return courses.filter((course) => {
      const title = course.title?.toLowerCase() || "";
      const category = course.category?.toLowerCase() || "";
      const instructor = course.instructor?.toLowerCase() || "";

      return (
        title.includes(term) ||
        category.includes(term) ||
        instructor.includes(term)
      );
    });
  }, [searchTerm]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <span className="badge badge-primary mb-4">Courses</span>

        <h1 className="bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 bg-clip-text text-4xl font-black text-transparent md:text-5xl">
          All Courses
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base-content/70">
          Explore professional courses, learn practical skills, and build your
          next career-ready project.
        </p>
      </div>

      <div className="mb-10 flex flex-col items-center gap-4">
        <div className="relative w-full max-w-xl">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40"
            size={20}
          />

          <input
            type="text"
            placeholder="Search by title, category, or instructor..."
            className="input input-bordered w-full rounded-xl pl-12 pr-12 focus:outline-none focus:ring-2 focus:ring-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {searchTerm && (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => setSearchTerm("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-base-content/40 transition hover:text-error"
            >
              <X size={20} />
            </button>
          )}
        </div>

        <p className="text-sm text-base-content/60">
          Showing{" "}
          <span className="font-bold text-base-content">
            {filteredCourses.length}
          </span>{" "}
          {filteredCourses.length === 1 ? "course" : "courses"}
        </p>
      </div>

      {filteredCourses.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="mx-auto mt-16 max-w-md rounded-lg bg-base-100 p-8 text-center shadow-xl">
          <h2 className="text-2xl font-bold">No courses found</h2>

          <p className="mt-3 text-base-content/60">
            Try searching with a different title, category, or instructor.
          </p>

          <button
            type="button"
            onClick={() => setSearchTerm("")}
            className="btn btn-primary mt-6"
          >
            Clear Search
          </button>
        </div>
      )}
    </section>
  );
};

export default CoursesPage;