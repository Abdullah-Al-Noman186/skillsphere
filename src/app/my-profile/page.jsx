"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import {
  User,
  Mail,
  Trophy,
  BookOpen,
  Target,
  Clock,
} from "lucide-react";
import { motion } from "motion/react";

const MyProfilePage = () => {
    
  const { data, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!data?.user) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center gap-4">
        <h2 className="text-2xl font-bold">
          Please login to view your profile
        </h2>

        <Link href="/login" className="btn btn-primary">
          Login
        </Link>
      </div>
    );
  }

  const user = data.user;

  const stats = [
    {
      title: "Courses Enrolled",
      value: "8",
      icon: <BookOpen className="text-cyan-500" />,
    },
    {
      title: "Completed",
      value: "3",
      icon: <Trophy className="text-yellow-500" />,
    },
    {
      title: "Learning Hours",
      value: "45",
      icon: <Clock className="text-violet-500" />,
    },
    {
      title: "Certificates",
      value: "2",
      icon: <Target className="text-pink-500" />,
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "MongoDB",
  ];

  const achievements = [
    "🏆 First Course Completed",
    "🔥 7 Day Learning Streak",
    "⭐ Top Performer",
    "🚀 Fast Learner",
  ];

  return (
    <section className="min-h-screen bg-base-200 py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* PROFILE HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 rounded-3xl p-8 text-white shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">

            <img
              src={
                user.image ||
                "https://i.ibb.co/4pDNDk1/avatar.png"
              }
              alt={user.name}
              className="w-32 h-32 rounded-full border-4 border-white object-cover"
            />

            <div>
              <h1 className="text-4xl font-bold">
                {user.name}
              </h1>

              <p className="opacity-90 mt-2">
                {user.email}
              </p>

              <div className="badge badge-lg badge-warning mt-3">
                SkillSphere Student
              </div>
            </div>
          </div>
        </motion.div>

        {/* STATS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="card bg-base-100 shadow-xl"
            >
              <div className="card-body items-center text-center">
                <div>{stat.icon}</div>

                <h2 className="text-3xl font-bold">
                  {stat.value}
                </h2>

                <p>{stat.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MAIN CONTENT */}
        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          {/* PROFILE INFO */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">
                <User />
                Profile Information
              </h2>

              <div className="space-y-4 mt-4">

                <div className="flex items-center gap-3">
                  <User className="text-primary" />
                  <span>{user.name}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="text-primary" />
                  <span>{user.email}</span>
                </div>

              </div>

              <Link
                href="/my-profile/update"
                className="btn mt-6 bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 text-white border-0"
              >
                Update Profile
              </Link>
            </div>
          </div>

          {/* LEARNING GOAL */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">
                🎯 Learning Goal
              </h2>

              <p>
                Become a Full Stack Web Developer
              </p>

              <progress
                className="progress progress-primary w-full"
                value="65"
                max="100"
              ></progress>

              <p>65% Completed</p>
            </div>
          </div>

        </div>

        {/* SKILLS */}
        <div className="card bg-base-100 shadow-xl mt-8">
          <div className="card-body">
            <h2 className="card-title">
              💻 Skills
            </h2>

            <div className="flex flex-wrap gap-3 mt-4">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="badge badge-outline badge-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ACHIEVEMENTS */}
        <div className="card bg-base-100 shadow-xl mt-8">
          <div className="card-body">
            <h2 className="card-title">
              🏆 Achievements
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              {achievements.map((item) => (
                <div
                  key={item}
                  className="bg-base-200 rounded-xl p-4"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RECENT ACTIVITY */}
        <div className="card bg-base-100 shadow-xl mt-8">
          <div className="card-body">
            <h2 className="card-title">
              📅 Recent Activity
            </h2>

            <ul className="timeline timeline-vertical mt-4">
              <li>
                <div className="timeline-start">
                  Completed HTML Basics
                </div>
              </li>

              <li>
                <div className="timeline-start">
                  Enrolled in React Mastery
                </div>
              </li>

              <li>
                <div className="timeline-start">
                  Updated Profile
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* MOTIVATION */}
        <div className="mt-8 rounded-3xl p-8 text-center text-white bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 shadow-xl">
          <h2 className="text-3xl font-bold">
            Keep Learning 🚀
          </h2>

          <p className="mt-3 opacity-90">
            Small progress every day leads to big success.
          </p>
        </div>

      </div>
    </section>
  );
};

export default MyProfilePage;