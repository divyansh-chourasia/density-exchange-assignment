"use client";
import EmotionsCard from "@/components/EmotionsCard";
import EmotionsScrollComponent from "@/components/EmotionsScrollComponent";
import { motion } from "framer-motion";

const Emotions = () => {
  const animations = {
    div: {
      initial: { x: "-10%", opacity: 0 },
      whileInView: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    },
    img: {
      initial: { scale: 0 },
      animate: { rotate: -360, scale: 1 },
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
  };

  return (
    <section className=" px-6 h-fit" id="emotions">
      <div className="container mx-auto flex px-10 py-12 md:flex-row flex-col items-center border h-4/5 bg-violet-100 rounded-3xl">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <motion.div {...animations.div}>
            <p className=" leading-relaxed">Ahead app</p>

            <h1 className="title-font sm:text-5xl text-3xl  mb-8 font-bold text-gray-900">
              Master your life <span></span>
              <br className="hidden lg:inline-block" />
              by mastering emotions
            </h1>
          </motion.div>

          <div className="flex lg:flex-row md:flex-col">
            <div className="bg-black text-white inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-700 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 305 305"
              >
                <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
              </svg>

              <span className="ml-4 flex items-start flex-col leading-none">
                <span className="text-xs  mb-1">Download on the</span>
                <span className="title-font font-medium">App Store</span>
              </span>
            </div>

            <div className="  inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0  focus:outline-none">
              <span className="ml-4 flex items-start flex-col leading-none">
                <span className="text-xs mb-1">⭐⭐⭐⭐⭐</span>
                <span className="title-font font-medium">100+ App Store</span>
              </span>
            </div>
          </div>
        </div>

        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <motion.img
            {...animations.img}
            className="object-cover object-center rounded"
            alt="hero"
            src="/mobile.png"
          />
        </div>
      </div>

      <EmotionsCard />

      <EmotionsScrollComponent />
    </section>
  );
};

export default Emotions;
