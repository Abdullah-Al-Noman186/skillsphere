"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import {
  ArrowRight,
  Award,
  BookOpen,
  CalendarDays,
  Clock,
  Flame,
  GraduationCap,
  Mail,
  Pencil,
  Sparkles,
  Target,
  Trophy,
  User,
} from "lucide-react";
import { motion } from "motion/react";

const MyProfilePage = () => {
  const { data, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-base-200">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!data?.user) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-base-200 px-4 text-center">
        <div className="rounded-full bg-primary/10 p-5 text-primary">
          <User size={42} />
        </div>

        <h2 className="text-2xl font-bold">Please login to view your profile</h2>

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
      icon: <BookOpen size={24} />,
      color: "text-cyan-500 bg-cyan-500/10",
    },
    {
      title: "Completed",
      value: "3",
      icon: <Trophy size={24} />,
      color: "text-yellow-500 bg-yellow-500/10",
    },
    {
      title: "Learning Hours",
      value: "45",
      icon: <Clock size={24} />,
      color: "text-violet-500 bg-violet-500/10",
    },
    {
      title: "Certificates",
      value: "2",
      icon: <Award size={24} />,
      color: "text-pink-500 bg-pink-500/10",
    },
  ];

  const skills = ["HTML", "CSS", "JavaScript", "React", "Next.js", "MongoDB"];

  const achievements = [
    {
      title: "First Course Completed",
      icon: <Trophy size={20} />,
    },
    {
      title: "7 Day Learning Streak",
      icon: <Flame size={20} />,
    },
    {
      title: "Top Performer",
      icon: <Sparkles size={20} />,
    },
    {
      title: "Fast Learner",
      icon: <GraduationCap size={20} />,
    },
  ];

  const activities = [
    "Completed HTML Basics",
    "Enrolled in React Mastery",
    "Updated Profile",
  ];

  return (
    <section className="min-h-screen bg-base-200 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="overflow-hidden rounded-2xl bg-base-100 shadow-2xl"
        >
          <div className="bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 px-6 py-10 text-white sm:px-8">
            <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
              <div className="avatar">
                <div className="h-32 w-32 rounded-full ring-4 ring-white/80 ring-offset-4 ring-offset-transparent">
                  <img
                    src={user.image || "https://i.ibb.co/4pDNDk1/avatar.png"}
                    alt={user.name || "Profile"}
                  />
                </div>
              </div>

              <div className="flex-1">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
                  <GraduationCap size={16} />
                  SkillSphere Student
                </div>

                <h1 className="text-4xl font-black md:text-5xl">
                  {user.name || "Student"}
                </h1>

                <p className="mt-3 flex items-center justify-center gap-2 text-white/85 md:justify-start">
                  <Mail size={18} />
                  {user.email}
                </p>
              </div>

              <Link
                href="/my-profile/update"
                className="btn border-0 bg-white text-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 p-8 hover:bg-white/90"
              >
                <Pencil size={18} />
                Edit Profile
              </Link>
            </div>
          </div>

          <div className="grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.title}
                whileHover={{ y: -4 }}
                className="rounded-xl border border-base-300 bg-base-100 p-5"
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${stat.color}`}
                >
                  {stat.icon}
                </div>

                <h2 className="text-3xl font-black">{stat.value}</h2>
                <p className="mt-1 text-sm text-base-content/60">
                  {stat.title}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="card bg-base-100 shadow-xl lg:col-span-2">
            <div className="card-body">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <Target size={24} />
                </div>

                <div>
                  <h2 className="card-title">Learning Goal</h2>
                  <p className="text-sm text-base-content/60">
                    Become a Full Stack Web Developer
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-semibold">Progress</span>
                  <span className="text-base-content/60">65%</span>
                </div>

                <progress
                  className="progress progress-primary h-3 w-full"
                  value="65"
                  max="100"
                ></progress>
              </div>

              <Link href="/courses" className="btn btn-primary mt-4 w-fit">
                Continue Learning
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">
                <User className="text-primary" />
                Profile Info
              </h2>

              <div className="mt-4 space-y-4">
                <div className="rounded-lg bg-base-200 p-4">
                  <p className="text-xs uppercase text-base-content/50">Name</p>
                  <p className="mt-1 font-semibold">{user.name || "Student"}</p>
                </div>

                <div className="rounded-lg bg-base-200 p-4">
                  <p className="text-xs uppercase text-base-content/50">Email</p>
                  <p className="mt-1 break-all font-semibold">{user.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">
                <BookOpen className="text-primary" />
                Skills
              </h2>

              <div className="mt-4 flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="badge badge-outline badge-lg px-4 py-4 font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">
                <Award className="text-primary" />
                Achievements
              </h2>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {achievements.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-3 rounded-lg bg-base-200 p-4"
                  >
                    <span className="rounded-full bg-primary/10 p-2 text-primary">
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="card mt-8 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              <CalendarDays className="text-primary" />
              Recent Activity
            </h2>

            <div className="mt-4 space-y-3">
              {activities.map((activity, index) => (
                <div
                  key={activity}
                  className="flex items-center gap-4 rounded-lg bg-base-200 p-4"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-content">
                    {index + 1}
                  </span>
                  <p className="font-medium">{activity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 p-8 text-center text-white shadow-xl">
          <h2 className="text-3xl font-black">Keep Learning</h2>

          <p className="mx-auto mt-3 max-w-xl text-white/85">
            Small progress every day leads to big success.
          </p>

          <Link href="/courses" className="btn mt-6 border-0 bg-white text-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 p-8">
            Explore Courses
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MyProfilePage;