"use client";

import { motion } from "framer-motion";

// UPDATE YOUR PROJECTS HERE
// Add your own projects with title, description, tags, and optional live demo link
const projects = [
  {
    title: "Pintos Operating System",
    description: "Designed and implemented thread pools and scheduling algorithms to improve concurrency. Implemented user program execution with memory protection and system call handling. Extended the file system with support for dynamic expansion and built a buffer cache to improve disk I/O performance.",
    tags: ["C", "GDB", "x86 Architecture", "Git"],
    live: "",
    featured: true,
  },
  {
    title: "Distributed System in Go",
    description: "Designed and implemented a MapReduce framework replicating the original Google MapReduce paper. Developed RPC-based communication between master and worker nodes with fault-tolerant task scheduling. Integrated Raft consensus protocol and Chandy-Lamport snapshot algorithm for leader election, log replication, and system-wide state capture.",
    tags: ["Golang", "RPC", "MapReduce", "Raft", "Docker"],
    live: "",
    featured: true,
  },
  {
    title: "Emergency Social Network (ESN)",
    description: "Built a real-time full-stack chat platform with REST APIs, JWT authentication, and role-based access control. Implemented real-time messaging and presence tracking with Socket.IO. Developed modular backend services with MVC architecture and PostgreSQL. Worked in an Agile Scrum/Kanban team with automated testing and CI quality gates.",
    tags: ["Node.js", "Express", "PostgreSQL", "Socket.IO", "Docker", "Jest"],
    live: "",
    featured: false,
  },
  {
    title: "Smart Card",
    description: "Developed a flashcard application similar to Quizlet, enabling users to create, edit, and manage flashcards and card sets. Built RESTful backend APIs with Express.js using MongoDB for scalable data storage. Designed responsive frontend with React.js and Redux for real-time state management. Containerized with Docker for streamlined deployment.",
    tags: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB", "Python", "Docker"],
    live: "",
    featured: false,
  },
  {
    title: "Secure File Sharing System",
    description: "Built a secure file sharing system in Go supporting user authentication, file storage, sharing, and access control. Designed invitation-based model for secure file sharing with creation, acceptance, and revocation workflows. Integrated asymmetric/symmetric encryption, digital signatures, and MACs to ensure confidentiality, integrity, and authenticity across all operations.",
    tags: ["Go", "Cryptography", "Security", "System Design"],
    live: "",
    featured: false,
  },
  {
    title: "Malicious URL Detection System",
    description: "Built a machine learning-based system to detect malicious URLs using lexical and structural features extracted from URL strings. Designed feature engineering pipeline capturing patterns indicative of phishing behavior. Trained and evaluated Logistic Regression and tree-based models, optimizing for precision, recall, and F1-score to handle class imbalance.",
    tags: ["Python", "Machine Learning", "Scikit-learn", "Cybersecurity"],
    live: "",
    featured: false,
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one is crafted with care and attention to detail.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl font-bold mb-8"
          >
            Featured Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative rounded-2xl overflow-hidden bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-gray-800"
                >
                  {/* Project Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                    <span className="text-6xl">🚀</span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-md text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Live Demo Link (only show if available) */}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        Live Demo
                      </motion.a>
                    )}
                  </div>

                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </motion.div>
              ))}
          </div>
        </div>

        {/* Other Projects */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl font-bold mb-8"
        >
          Other Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-gray-800 hover:border-purple-500 dark:hover:border-purple-400 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">📁</span>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                </div>
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-gray-500 dark:text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Interested in working together?
          </p>
          <motion.a
            href="mailto:ly2@andrew.cmu.edu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
