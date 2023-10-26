"use client";
import Vacancies from "@/components/Vacancies";
import { motion } from "framer-motion";

const Work = () => {
  const animations = {
    h1: {
      initial: { x: "-100%", opacity: 0 },
      whileInView: { x: 0, opacity: 1, transition: { duration: 1 } },
    },

    h2: {
      initial: { x: "100%", opacity: 0 },
      whileInView: { x: 0, opacity: 1, transition: { duration: 1.5 } },
    },
  };

  return (
    <section className=" px-6 " id="work-with-us">
      <div className="container px-5 py-12 mx-auto flex flex-wrap border bg-violet-50 rounded-3xl">
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/2 md:w-full">
            <div className="flex p-4 sm:flex-row flex-col">
              <div className="flex-grow">
                <motion.h1
                  {...animations.h1}
                  className=" text-3xl title-font font-medium mb-3"
                >
                  Work With Us
                </motion.h1>

                <div className="m-10 bg-white rounded-3xl  ">
                  <div className=" p-5 pb-10 ">
                    <img
                      className="swing"
                      src="/happyghost.png"
                      alt="happyghost"
                      width={100}
                      height={60}
                    />
                    <h4 className="font-semibold pb-5 text-lg">About</h4>
                    <p>
                      At head our goal is to make self-improvement fun and
                      lasting. We know there's a way how to make it work. And
                      that's what aHead is all abount
                    </p>
                  </div>

                  <div className="bg-rose-50 p-5 pb-10 rounded-3xl  ">
                    <h4 className="font-semibold pt-5 text-lg pb-5 ">
                      Product
                    </h4>
                    <p>
                      Sure, you could spend ages reading books or sitting in
                      semunars on how to become a better spouse, parent, or
                      manager - like we did...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 lg:w-1/2 md:w-full">
            <div className="flex  p-8 sm:flex-row flex-col ">
              <div className="flex-grow flex flex-col items-end ">
                <motion.h2
                  {...animations.h2}
                  className=" text-3xl title-font font-medium mb-3 mr-20 text-violet-600"
                >
                  ahead
                </motion.h2>

                <div className="card-container">
                  <div className="card-content">
                    <div className="card ">
                      <h4 className="font-semibold">
                        Power through, even when the going gets tough
                      </h4>
                      <p>
                        We help you spot and work around whatever stands in the
                        way, be it bad habits, fears, etc .
                      </p>
                    </div>
                    <div className="card">
                      <h4>
                        Learn more about who you are and where you want to go.
                      </h4>
                      <p>
                        We ask the right questions to help you better understand
                        why you do things the way you do.
                      </p>
                    </div>
                    <div className="card">
                      <h4>
                        Play and grow together with oters on the same jouney
                      </h4>
                      <p>
                        Ahead feels like a game, not like a chore. See youself
                        grow every day towards achieving your goal!
                      </p>
                    </div>

                    <div className="card">
                      <h4>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Natus, sit?
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Odit laudantium libero omnis.
                      </p>
                    </div>

                    <div className="card">
                      <h4>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Natus, sit?
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Odit laudant.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Vacancies />
    </section>
  );
};

export default Work;
