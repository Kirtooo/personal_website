"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  { name: "Languages", items: ["Go", "C", "C++", "Python", "Java", "TypeScript", "JavaScript", "SQL"] },
  { name: "Backend & Systems", items: ["Node.js", "Express", "RPC", "Raft", "MapReduce", "Socket.IO"] },
  { name: "Databases", items: ["PostgreSQL", "MongoDB"] },
  { name: "Tools", items: ["Docker", "Git", "Linux", "GDB", "Jest"] },
  { name: "Frontend", items: ["React", "Redux", "HTML", "CSS"] },
  { name: "Data / ML", items: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn"] },
];

const experiences = [
  {
    title: "Research Assistant",
    company: "Carnegie Mellon University",
    location: "Mountain View, CA",
    period: "Jan. 2026 – Present",
    description: "Implemented core B-tree algorithms in the Capybara DBMS (SQLite-like system), including insertion, deletion, node split/merge, and rebalancing. Developed cursor-based traversal logic for efficient sequential and random index access. Created 100+ correctness and stress tests validating structural invariants and debugging B-tree/Pager interactions.",
  },
  {
    title: "Project Intern",
    company: "Tencent",
    location: "Beijing, China",
    period: "Jul. 2024 – Aug. 2024",
    description: "Built backend data pipelines processing millions of user activity records from Tencent News and Sports using Python and SQL. Designed and optimized ETL workflows integrating heterogeneous data sources. Developed user segmentation service based on behavioral signals for personalization and targeted recommendations.",
  },
];

const education = [
  {
    school: "Carnegie Mellon University, Silicon Valley",
    location: "Mountain View, CA",
    degree: "M.S. in Software Engineering",
    period: "Aug. 2025 – Dec. 2026",
    details: "Coursework: Software Engineering, Distributed Systems, Machine Learning for Adversaries, Data Science",
  },
  {
    school: "University of California, Berkeley",
    location: "Berkeley, CA",
    degree: "B.A. in Computer Science",
    period: "Aug. 2022 – Dec. 2024",
    details: "Transferred from UC Davis after sophomore year. Coursework: Security, Operating Systems, Algorithms, Data Structures, Databases, Computer Networks.",
  },
  {
    school: "University of California, Davis",
    location: "Davis, CA",
    degree: "B.S. in Computer Science",
    period: "Sep. 2020 – Jul. 2022",
    details: "Completed freshman and sophomore years before transferring to UC Berkeley.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get to know more about my journey, skills, and what drives me as a developer.
          </p>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
        >
          {/* Image */}
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative w-full aspect-square max-w-md mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500 to-blue-500 p-1"
            >
              <div className="w-full h-full bg-gray-200 dark:bg-gray-800 rounded-xl flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </motion.div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl" />
          </div>

          {/* Bio */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Hi, I&apos;m <span className="text-purple-600 dark:text-purple-400">Leo Yuan</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              I&apos;m a software engineer focused on distributed systems and backend infrastructure. I enjoy building
              scalable systems and tackling complex problems, especially in areas like concurrency, networking, and system design.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              My experience spans distributed systems, operating systems, and full-stack development, where I&apos;ve worked
              on building reliable, real-world software from the ground up. Outside of coding, I enjoy exploring new
              technologies, playing badminton, and watching badminton matches.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="/TingchenYuan_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full font-medium"
              >
                Download CV
              </motion.a>
              <motion.a
                href="mailto:ly2@andrew.cmu.edu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-full font-medium hover:border-purple-500 dark:hover:border-purple-400 transition-colors"
              >
                Contact Me
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + categoryIndex * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-gray-800"
              >
                <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ x: 10 }}
                className="relative pl-8 border-l-2 border-purple-500"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-purple-500" />
                <div className="p-6 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-gray-800">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 mb-2">{exp.company} · {exp.location}</p>
                  <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ x: 10 }}
                className="relative pl-8 border-l-2 border-blue-500"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500" />
                <div className="p-6 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-gray-800">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 mb-2">{edu.school} · {edu.location}</p>
                  {edu.details && (
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{edu.details}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
