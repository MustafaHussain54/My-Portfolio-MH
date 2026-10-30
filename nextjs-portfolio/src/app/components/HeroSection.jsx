"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => (
  <section className="lg:py-16" aria-labelledby="hero-title">
    <div className="grid grid-cols-1 items-center gap-10 sm:grid-cols-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="sm:col-span-8 text-center sm:text-left">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-pink-400">Computer Science Engineer · Indore, India</p>
        <h1 id="hero-title" className="mb-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl">
          <span className="bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">Hello, I&apos;m</span><br />Mustafa Hussain
        </h1>
        <p className="mb-7 max-w-2xl text-base leading-relaxed text-[#ADB7BE] sm:text-lg">
          I build thoughtful full-stack applications, REST APIs, and responsive interfaces. I&apos;m interested in using automation and AI to solve practical problems and make software more efficient.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row sm:justify-start">
          <Link href="/#contact" className="rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 px-6 py-3 text-center text-white hover:opacity-90">Get in touch</Link>
          <a href={`${process.env.NODE_ENV === "production" ? "/MY-Portfolio-MH" : ""}/mustafa-hussain-resume.txt`} download className="rounded-full border border-[#55515f] px-6 py-3 text-center text-white hover:border-pink-400">Download Resume</a>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-[#ADB7BE] sm:justify-start">
          <a className="hover:text-pink-300" href="mailto:mustafahussain7828@gmail.com">mustafahussain7828@gmail.com</a>
          <a className="hover:text-pink-300" href="tel:+917828136552">+91 78281 36552</a>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="sm:col-span-4">
        <div className="mx-auto flex aspect-square w-full max-w-[320px] items-center justify-center rounded-full border border-pink-500/30 bg-[radial-gradient(circle_at_35%_30%,_#552342,_#21151f_58%,_#181818)] shadow-[0_0_70px_rgba(236,72,153,0.15)]">
          <span className="bg-gradient-to-br from-pink-300 to-red-500 bg-clip-text text-8xl font-black tracking-tight text-transparent" aria-label="Mustafa Hussain initials">MH</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
