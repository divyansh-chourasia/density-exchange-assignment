"use client";
import { motion } from "framer-motion";

const AwarenessTest = () => {
  return (
    <article className="flex flex-col items-center justify-center mx-14 my-28 py-24">
      <p>We take privacy seriously</p>
      <h1 className="text-3xl font-bold py-5">Before you get started</h1>
      <motion.p
        initial={{ opacity: 0, translateY: -50 }}
        whileInView={{
          opacity: 1,
          translateY: 0,
          transition: { duration: 1, delay: 0.5 },
        }}
      >
        "We won't share your answers with anyone ( and won't even tell you which
        friends said what about you)"
      </motion.p>

      <div className="flex py-5 items-center gap-2">
        <p>with love,</p>
        <motion.img
          initial={{ opacity: 0, translateX: -50 }}
          whileInView={{
            opacity: 1,
            translateX: 0,
            transition: { duration: 1, delay: 0.5 },
          }}
          src="/sign.png"
          alt="sign"
          className="w-25 h-10"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, translateY: -50 }}
        whileInView={{
          opacity: 1,
          translateY: 0,
          transition: { duration: 1, delay: 0.5 },
        }}
        className="m-4  py-2 px-6 text-center  md:border-b-0 bg-black text-white rounded-full   md:hover:text-purple-600 md:hover:bg-white      outline hover:outline-offset-1"
      >
        <button href="#download-app">Start a Test</button>
      </motion.div>

      <p>Take only 5 minutes</p>
    </article>
  );
};

export default AwarenessTest;
