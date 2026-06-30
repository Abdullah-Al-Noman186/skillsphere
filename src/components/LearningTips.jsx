"use client";

import { motion } from "motion/react";
import {
  Clock,
  BookOpen,
  Brain,
  Target,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const LearningTips = () => {
  const tips = [
    {
      title: "Time Blocking",
      description:
        "Organize your day into distraction-free focus sessions to accomplish more in less time.",
      icon: Clock,
      gradient: "from-cyan-500 via-sky-500 to-blue-600",
      glow: "bg-cyan-500/20",
    },
    {
      title: "Active Recall",
      description:
        "Challenge yourself frequently by recalling information instead of simply rereading notes.",
      icon: Brain,
      gradient: "from-violet-500 via-purple-500 to-fuchsia-600",
      glow: "bg-violet-500/20",
    },
    {
      title: "Consistent Practice",
      description:
        "Build momentum with small daily improvements rather than occasional intensive study sessions.",
      icon: BookOpen,
      gradient: "from-pink-500 via-rose-500 to-red-500",
      glow: "bg-pink-500/20",
    },
    {
      title: "Set Clear Goals",
      description:
        "Define measurable milestones and track your progress to stay motivated throughout your journey.",
      icon: Target,
      gradient: "from-amber-500 via-orange-500 to-red-500",
      glow: "bg-amber-500/20",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24">

      {/* ================= Background ================= */}

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[150px]" />

      {/* ================= Content ================= */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= Heading ================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-cyan-300 backdrop-blur-xl">
            <Sparkles size={16} />
            Learn Smarter
          </div>

          <h2 className="mt-6 text-4xl md:text-6xl font-black leading-tight text-white">
            Powerful
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
              {" "}
              Learning Tips
            </span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-slate-400">
            Adopt proven learning techniques used by top students and
            professionals to study efficiently, retain knowledge longer,
            and achieve your goals faster.
          </p>
        </motion.div>

        {/* ================= Cards ================= */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {tips.map((tip, index) => {
            const Icon = tip.icon;

            return (
              <motion.div
                key={tip.title}
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
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                }}
              >
                <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all duration-500 hover:border-cyan-400/30 hover:shadow-cyan-500/20">

                  {/* Glow */}

                  <div
                    className={`absolute -top-16 right-0 h-44 w-44 rounded-full blur-3xl opacity-0 transition duration-500 group-hover:opacity-100 ${tip.glow}`}
                  />

                  <div className="relative p-8">

                    {/* Icon */}

                    <div
                      className={`inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-r ${tip.gradient} text-white shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}
                    >
                      <Icon size={38} />
                    </div>

                    {/* Title */}

                    <h3 className="mt-8 text-2xl font-bold text-white transition duration-300 group-hover:text-cyan-300">
                      {tip.title}
                    </h3>

                    {/* Description */}

                    <p className="mt-4 leading-7 text-slate-400">
                      {tip.description}
                    </p>

                    {/* Divider */}

                    <div
                      className={`mt-8 h-1 w-full rounded-full bg-gradient-to-r ${tip.gradient}`}
                    />

                    {/* CTA */}

                    <div className="mt-8 flex items-center justify-between">

                      <span className="font-semibold text-cyan-400">
                        Learn More
                      </span>

                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition duration-300 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:via-violet-500 group-hover:to-blue-500">

                        <ArrowRight
                          size={18}
                          className="text-white transition-transform duration-300 group-hover:translate-x-1"
                        />

                      </div>

                    </div>

                  </div>

                </div>
              </motion.div>
            );
          })}

        </div>

        {/* ================= Bottom CTA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 text-center"
        >
          <button className="btn btn-lg rounded-2xl border-0 bg-gradient-to-r from-cyan-500 via-violet-500 to-blue-500 px-8 text-white shadow-xl shadow-violet-500/30 transition-all duration-300 hover:scale-105">
            Start Learning Today
            <ArrowRight size={20} />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default LearningTips;