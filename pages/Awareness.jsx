"use client";
import AwarenessTest from "@/components/AwarenessTest";
import { motion } from "framer-motion";

const Awareness = () => {
  return (
    <section className=" px-6" id="self-awareness-test">
      <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center border bg-sky-100 rounded-3xl ">
        <div className="lg:flex-grow md:w-full flex flex-col    md:mb-0 items-center text-center">
          <p className=" leading-relaxed">
            Let your friends, family and co-worker (anonymously) rate your
            skills.
          </p>

          <h1 className="title-font sm:text-4xl text-3xl  font-medium text-gray-900">
            Ever wondered what others think of you?
          </h1>

          <img src="/sun-ranking.png" alt="123" />

          <motion.div
            initial={{ opacity: 0, translateY: -100 }}
            whileInView={{
              opacity: 1,
              translateY: 0,
              transition: { duration: 1 },
            }}
            className="flex flex-wrap"
          >
            <div className="lg:w-1/3 p-4">
              <p className=" pl-6">⚫ Answer questions on your social skills</p>
            </div>

            <div className="lg:w-1/3 p-4">
              <p className=" pl-6">
                ⚫Find out where you and others see things same way and where
                not.
              </p>
            </div>

            <div className="lg:w-1/3 p-4">
              <p className=" pl-5">
                ⚫Let others anonymously answer the same questions about you.{" "}
              </p>
            </div>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, translateY: -100 }}
            whileInView={{
              opacity: 1,
              translateY: 0,
              transition: { duration: 1, delay: 0.75 },
            }}
            src="/gif.png"
            alt="gif"
          />
        </div>
      </div>

      <AwarenessTest />
    </section>
  );
};

export default Awareness;
