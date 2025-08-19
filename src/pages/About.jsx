import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";

const Footer = lazy(() => import("../components/Footer"));

const About = () => {
  return (
    <>
      <div className="bg-transparent text-gray-200 min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-white"
          >
            About DreameGarage
          </motion.h1>

          {/* BMW Intro */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="grid md:grid-cols-2 gap-10 items-center py-10"
          >
            {/* Left - Image */}
            <img
              src="https://images.pexels.com/photos/30166138/pexels-photo-30166138.jpeg"
              alt="BMW M Series"
              className="rounded-2xl shadow-lg"
            />

            {/* Right - Text */}
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-white">
                The Legacy of BMW M Series
              </h2>
              <p className="mb-4 leading-relaxed">
                At{" "}
                <span className="text-sky-400 font-semibold">DreamGarage</span>,
                we bring you the **power, precision, and passion** of BMW’s
                iconic M Series. Born on the racetrack and perfected for the
                streets, every BMW M car is a masterpiece of engineering and
                design.
              </p>
              <p className="mb-4 leading-relaxed">
                From the legendary **BMW M3** to the thunderous **BMW M8**, the
                M division has always represented the ultimate driving
                experience. We aim to showcase this legacy and let enthusiasts
                explore the adrenaline of sheer driving pleasure. 🏁
              </p>
            </div>
          </motion.div>

          {/* Vision & Mission */}
          <div className="mt-20 grid md:grid-cols-2 gap-10">
            {/* Vision */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-white mb-3">
                Our Vision
              </h3>
              <p>
                To be the ultimate hub for **BMW lovers** where passion meets
                technology, and every fan can experience the thrill of M Power
                online.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-white mb-3">
                Our Mission
              </h3>
              <p>
                To deliver a **digital experience** as powerful and enjoyable as
                driving a BMW M Series car, inspiring the next generation of car
                enthusiasts.
              </p>
            </motion.div>
          </div>

          {/* Closing Line */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-center mt-16 text-lg italic text-gray-400"
          >
            “Sheer Driving Pleasure is not just a tagline, it’s a lifestyle.”
            🚗💨
          </motion.p>
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  );
};

export default About;
