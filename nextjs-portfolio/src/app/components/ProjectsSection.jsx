"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ProjectTag from "./ProjectTag";

const projects = [
  { title: "Smart Resume Evaluator", kind: "Full-stack", technologies: "React.js · Node.js · AI integration", description: "Built an AI-integrated tool that evaluates resumes against job descriptions and provides actionable suggestions to improve candidate profiles." },
  { title: "YouTube-Like Backend System", kind: "Backend", technologies: "Node.js · Express.js · MongoDB · JWT", description: "Developed video-sharing platform backend functionality for role-based access, subscriptions, and likes, with REST APIs and JWT-protected endpoints." },
  { title: "Employee Management System", kind: "Frontend", technologies: "React.js", description: "Created a responsive frontend with modular components to manage employee records through CRUD operations." },
];

export default function ProjectsSection() {
  const [tag, setTag] = useState("All");
  const visibleProjects = projects.filter((project) => tag === "All" || project.kind === tag);
  return <section id="projects" className="py-8 sm:py-12">
    <h2 className="mb-2 text-center text-3xl font-bold text-white sm:text-4xl">Selected Projects</h2>
    <p className="mx-auto max-w-2xl text-center text-[#ADB7BE]">A few applications and systems I&apos;ve built.</p>
    <div className="flex flex-wrap justify-center gap-2 py-6 text-white">{["All", "Full-stack", "Backend", "Frontend"].map((name) => <ProjectTag key={name} onClick={setTag} name={name} isSelected={tag === name} />)}</div>
    <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {visibleProjects.map((project, index) => <motion.li key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.08 }} className="flex min-w-0 flex-col rounded-xl border border-[#33353F] bg-[#181818] p-6">
        <span className="mb-4 inline-flex w-fit rounded-full border border-pink-500/40 px-3 py-1 text-xs text-pink-300">{project.kind}</span>
        <h3 className="mb-3 text-xl font-semibold text-white">{project.title}</h3>
        <p className="mb-5 flex-1 leading-relaxed text-[#ADB7BE]">{project.description}</p>
        <p className="border-t border-[#33353F] pt-4 text-sm text-pink-200">{project.technologies}</p>
      </motion.li>)}
    </ul>
  </section>;
}
