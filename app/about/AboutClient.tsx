"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Heart, Leaf, Sparkles } from "lucide-react";

export default function AboutClient() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <motion.div
        className="bg-gradient-to-r from-amber-400 to-rose-300 text-white py-20 lg:py-32 relative overflow-hidden"
        initial="hidden"
        animate="show"
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -ml-40"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">Mimi&apos;s Journey</motion.h1>
          <motion.p variants={fadeUp} className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
            A mother&apos;s vision to create the gentlest, safest products for precious little ones.
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeUp}>
            <h2 className="text-4xl font-bold mb-8 text-amber-900">The Heart of Mimi Choice</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="border-l-4 border-amber-400 pl-6">
                Every parent knows that moment—when you hold your newborn for the first time. That&apos;s when everything changes. At Mimi Choice, that same love and care goes into every product we create.
              </p>
              <p>
                We started with a simple mission: to design feeding products that feel as natural as a mother&apos;s embrace. Our wide-neck feeders aren&apos;t just bottles—they&apos;re engineered with anti-colic venting, ergonomic handles, and soft silicone teats that mimic natural feeding.
              </p>
              <p>
                From our signature feeders to our carefully selected teats and beautiful baby dresses, every item is crafted with premium, non-toxic materials. We test relentlessly. We innovate constantly. All because your baby deserves nothing but the best.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-rose-100 rounded-[3rem] transform -rotate-3 scale-105 blur-sm"></div>
            <Image
              src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=1000"
              alt="Beautiful baby portrait"
              width={1000}
              height={750}
              className="relative rounded-[3rem] shadow-2xl object-cover w-full h-auto aspect-square md:aspect-[4/3]"
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="bg-gradient-to-b from-transparent to-rose-50/50 py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 variants={fadeUp} className="text-4xl font-bold text-center mb-16 text-amber-900">What We Stand For</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { Icon: Heart, gradient: "from-amber-300 to-rose-300", title: "Safety First", desc: "Every product passes rigorous testing. BPA-free, non-toxic, and certified safe—because nothing matters more than your baby&apos;s wellbeing." },
              { Icon: Sparkles, gradient: "from-purple-300 to-pink-300", title: "Crafted with Love", desc: "Every stitch, every curve, every detail is designed with your baby&apos;s comfort in mind. Premium quality that speaks for itself." },
              { Icon: Leaf, gradient: "from-green-300 to-teal-300", title: "Natural Design", desc: "Our products are inspired by nature and designed to support natural feeding and development from day one." },
            ].map(({ Icon, gradient, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={reduceMotion ? undefined : { y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${gradient} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-amber-900">{title}</h3>
                <p className="text-gray-600 text-center">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
      >
        <motion.h2 variants={fadeUp} className="text-4xl font-bold text-center mb-12 text-amber-900">Why Parents Choose Mimi</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { color: "bg-rose-400", title: "Anti-Colic Technology", desc: "Our patented venting system reduces air intake, minimizing colic and discomfort for your baby." },
            { color: "bg-purple-400", title: "Easy to Clean Design", desc: "Wide-neck bottles open up for thorough cleaning and sterilizing—because convenience matters." },
            { color: "bg-amber-400", title: "Ergonomic Handles", desc: "Designed for tiny hands to grip safely and comfortably as your baby grows and learns to hold their bottle." },
            { color: "bg-pink-400", title: "Premium Silicone Teats", desc: "Soft, flexible, and designed to mimic natural breastfeeding for a seamless transition." },
          ].map((item) => (
            <motion.div key={item.title} variants={fadeUp} className="space-y-4">
              <h3 className="text-xl font-bold text-amber-800 flex items-center gap-3">
                <span className={`inline-block w-2 h-2 ${item.color} rounded-full`}></span>
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="bg-gradient-to-r from-amber-300 via-rose-300 to-pink-300 py-20 text-center px-4 relative overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
      >
        <div className="max-w-3xl mx-auto relative z-10">
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Join the Mimi Family?</motion.h2>
          <motion.p variants={fadeUp} className="text-white/90 text-lg mb-8">Discover products designed with love for every precious moment.</motion.p>
          <motion.div variants={fadeUp}>
            <Link href="/products" className="inline-block bg-white text-amber-900 hover:bg-amber-50 px-10 py-4 rounded-full text-lg font-bold transition-all shadow-lg">
              Explore Our Collection
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
