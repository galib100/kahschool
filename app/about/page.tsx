"use client"
import React from 'react'
import { motion } from 'framer-motion';
// import CEOPage from '@/components/CeoCard';
const page = () => {
  return (
    <div>
      <div>
        <motion.section
          className="relative h-96 md:h-80 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="shopoth.jpeg"
            alt="About Us"
            className="object-cover w-full h-full filter blur-sm"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white text-3xl md:text-4xl font-semibold">
            <p> কাজী আলাউদ্দীন মাধ্যমিক বিদ্যালয়</p>
            
          </div>
        </motion.section>
      </div>
      <motion.section
        className="container mx-auto p-8 md:p-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-light mb-20">প্রতিষ্ঠাকাল </h1>
        <p className="text-lime-100 mb-6">
          At CyberSecure, we are dedicated to providing top-notch cybersecurity solutions to protect your business from evolving cyber threats. With a team of experts and cutting-edge technologies, we ensure the safety of your digital assets.
        </p>
        <p className="text-lime-100">
          Our mission is to safeguard your sensitive information, keep your systems secure, and empower you to navigate the digital landscape with confidence.
        </p>
      </motion.section>
      <div>
        {/* <CEOPage /> */}
      </div>
    </div>
  )
}

export default page