import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";

const Footer = lazy(() => import("../components/Footer"));

// Lazy Video Component
const HeroVideo = () => (
  <video
    className="w-full max-h-96 object-cover rounded-md"
    autoPlay
    loop
    muted
    playsInline
    poster="/videos/poster.png"
  >
    <source src="/videos/hero.mp4" type="video/mp4" />
  </video>
);
const LazyHeroVideo = lazy(() =>
  Promise.resolve({ default: HeroVideo })
);

const Home = () => {
  return (
    <>
      <div className="flex flex-col py-16 px-6">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-white"
        >
          No Competition
          <span className="text-xl sm:text-xl md:text-1xl lg:text-3xl">
            In The World
          </span>
        </motion.h1>

        {/* Video Section with Lazy Loading */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="w-full  rounded-2xl overflow-hidden py-14"
        >
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-60 text-lg text-sky-500 font-semibold">
                Loading Video...
              </div>
            }
          >
            <LazyHeroVideo />
          </Suspense>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-white"
        >
          BMW M Series –
          <br />
          The Ultimate Driving Machine
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-300"
        >
          Experience power, precision, and performance engineered for the
          racetrack and refined for the road.
        </motion.p>

        <motion.hr
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="border-gray-500 my-4"
        ></motion.hr>

        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-white"
        >
          Feel the roar of <br /> M Power
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-300"
        >
          Step into the world of BMW M — a place where speed, style, and
          technology collide. Experience engines that roar like thunder, designs
          sculpted for perfection, and performance tuned for the purest driving
          pleasure. The BMW M Series isn’t just about cars — it’s about
          emotions, adrenaline, and the ultimate freedom on wheels
        </motion.p>
        <hr className="border-gray-500 my-14" />
      </div>

      {/* Footer Lazy Load */}
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen text-xl font-bold text-sky-600">
            Loading...
          </div>
        }
      >
        <Footer />
      </Suspense>
    </>
  );
};

export default Home;
