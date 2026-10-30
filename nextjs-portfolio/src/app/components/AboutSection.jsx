"use client";
import React, { useState } from "react";
import TabButton from "./TabButton";

const tabs = {
  skills: { title: "Skills", content: <div className="space-y-4"><div><h3 className="mb-1 font-semibold text-pink-300">Languages</h3><p>C, C++, JavaScript, HTML, CSS, SQL</p></div><div><h3 className="mb-1 font-semibold text-pink-300">Frameworks</h3><p>React.js, Node.js, Express.js</p></div><div><h3 className="mb-1 font-semibold text-pink-300">Tools &amp; Technologies</h3><p>MongoDB, REST APIs, JWT, Git, GitHub, VS Code, Postman, n8n workflow automation</p></div><div><h3 className="mb-1 font-semibold text-pink-300">Coursework &amp; strengths</h3><p>OOPS, DSA, C Programming, DBMS, Operating Systems · Analytical problem solving, teamwork, communication</p></div></div> },
  education: { title: "Education", content: <div className="space-y-5"><div><h3 className="font-semibold text-white">B.Tech, Computer Science &amp; Engineering</h3><p>Shri Vaishnav Vidyapeeth Vishwavidyalaya · Indore, India</p><p>2022–2026 · CGPA 7.7/10</p></div><div><h3 className="font-semibold text-white">Padmaja Higher Secondary School</h3><p>Dewas, India</p><p>Class XII: 91.6% (2021) · Class X: 91.6% (2019)</p></div></div> },
  experience: { title: "Experience", content: <div><h3 className="font-semibold text-white">Web Development Intern</h3><p className="text-pink-300">PBEL Internship provided by IBM</p><ul className="mt-2 list-disc space-y-2 pl-5"><li>Developed responsive web applications using React.js for frontend interface design and Node.js for backend logic.</li><li>Collaborated on web development assignments focused on scalable integration and software performance.</li></ul></div> },
  certifications: { title: "Certifications", content: <ul className="list-disc space-y-2 pl-5"><li>NPTEL — Internet of Things (Ministry of Education, IITs)</li><li>TakeUForward — Data Structures and Algorithms Certification</li></ul> },
};

export default function AboutSection() {
  const [tab, setTab] = useState("skills");
  return <section className="py-10 text-white sm:py-16" id="about">
    <div className="grid gap-8 md:grid-cols-2 md:gap-12">
      <div className="flex min-h-[260px] flex-col justify-center rounded-2xl border border-[#33353F] bg-[radial-gradient(ellipse_at_top_right,_#452039,_#181818_65%)] p-7 sm:p-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-pink-300">A little about me</p>
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Build with purpose.</h2>
        <p className="leading-relaxed text-[#ADB7BE]">Detail-oriented Computer Science Engineering graduate with a strong foundation in full-stack development, C++, and database management. I build backend systems, RESTful APIs, and responsive interfaces, and enjoy applying automation and AI to create efficient applications.</p>
        <p className="mt-4 text-sm text-[#ADB7BE]">Outside of code: competitive cricket, thriller movies, and cinematic storytelling.</p>
      </div>
      <div className="min-w-0">
        <div className="flex flex-wrap gap-x-2 gap-y-1 border-b border-[#33353F] pb-2">{Object.entries(tabs).map(([id, item]) => <TabButton key={id} selectTab={() => setTab(id)} active={tab === id}>{item.title}</TabButton>)}</div>
        <div className="mt-6 min-h-[220px] space-y-2 leading-relaxed text-[#ADB7BE]">{tabs[tab].content}</div>
      </div>
    </div>
  </section>;
}
