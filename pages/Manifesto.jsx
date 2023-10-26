"use client";
import ManifestoCard from "@/components/ManifestoCard";
import ManifestoScrollBar from "@/components/ManifestoScrollBar";
import { motion } from "framer-motion";


const Manifesto = () => {
  const animations = {
    div: {
      initial: { x: "-10%", opacity: 0 },
      whileInView: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    },
  };
  return (
    <section className=" px-6 h-fit" id="manifesto">
      <div className="container mx-auto flex px-10   flex-col  border h-4/5 bg-orange-50 rounded-3xl">
        <div className="flex justify-end gap-10 pb-5">
          <img
            src="/leaf2.png"
            alt="image1"
            className=" w-16 sm:w-10 sm:h-10 infinite-rotation  mt-5"
          />
          <img
            src="/flower2.png"
            alt="image2"
            className=" w-16 sm:w-10 sm:h-10 infinite-rotation"
          />
        </div>

        <div className="">
          <p className=" leading-relaxed">Ahead app</p>

          <h1 className="title-font sm:text-5xl text-3xl  font-bold text-gray-900">
            Master your life <span></span>
            <br className="hidden lg:inline-block" />
            by mastering emotions
          </h1>
        </div>

        <div className="container px-10 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden flex items-center">
            <img
              alt="feature"
              className="object-cover object-center h-44 w-48"
              src="/firstghost.png"
            />
            <img
              src="/leaf2.png"
              alt="leaf"
              className="ml-5 w-16 sm:w-10 sm:h-10 infinite-rotation"
            />
          </div>

          <div className="flex flex-col flex-wrap -mb-10 lg:w-1/2 lg:pl-12 lg:text-left ">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <motion.div {...animations.div} className="flex-grow">
                <p className="leading-relaxed text-lg text-gray-600">
                  A personalized pocket coach that provides bite- sized,
                  science-driven tools to boost emotional intelligence.
                  <br /> <br />
                  Think of it as a pocket cheerleader towards a better, more
                  fulfilling.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <ManifestoScrollBar />

      <ManifestoCard />
    </section>
  );
};

export default Manifesto;
