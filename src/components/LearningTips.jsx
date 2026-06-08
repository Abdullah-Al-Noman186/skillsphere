"use client";

import { motion } from "motion/react";
import {
  Clock,
  BookOpen,
  Brain,
  Target,
} from "lucide-react";

const LearningTips = () => {
  const tips = [
    {
      title: "Time Blocking",
      description:
        "Plan your day into focused study sessions.",
      icon: <Clock size={40} />,
      color:
        "from-cyan-500 to-blue-600",
      bg:
        "bg-cyan-500/10",
    },
    {
      title: "Active Recall",
      description:
        "Test yourself regularly to improve retention.",
      icon: <Brain size={40} />,
      color:
        "from-violet-500 to-purple-600",
      bg:
        "bg-violet-500/10",
    },
    {
      title: "Consistent Practice",
      description:
        "Small daily progress beats occasional cramming.",
      icon: <BookOpen size={40} />,
      color:
        "from-pink-500 to-rose-600",
      bg:
        "bg-pink-500/10",
    },
    {
      title: "Set Clear Goals",
      description:
        "Track measurable learning objectives.",
      icon: <Target size={40} />,
      color:
        "from-amber-500 to-orange-600",
      bg:
        "bg-amber-500/10",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-base-100 to-base-200">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
            📌 Learning Tips
          </h2>

          <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
            Develop effective study habits and maximize
            your learning potential with these proven
            techniques.
          </p>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tips.map((tip, index) => (
            <motion.div
              key={index}
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
              <div className="card h-full bg-base-100 shadow-xl border border-base-300 hover:border-primary transition-all duration-300">
                <div className="card-body items-center text-center">
                  <div
                    className={`w-20 h-20 rounded-2xl flex items-center justify-center text-white bg-gradient-to-r ${tip.color} shadow-lg`}
                  >
                    {tip.icon}
                  </div>

                  <h3 className="text-xl font-bold mt-4">
                    {tip.title}
                  </h3>

                  <p className="text-base-content/70">
                    {tip.description}
                  </p>

                  <div
                    className={`w-full h-1 rounded-full mt-4 bg-gradient-to-r ${tip.color}`}
                  ></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningTips;