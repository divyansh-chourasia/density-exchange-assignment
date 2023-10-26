"use client";
import { motion } from "framer-motion";

const Vacancies = () => {
  const animations = {
    h1: {
      initial: { x: "-100%", opacity: 0 },
      whileInView: { x: 0, opacity: 1, transition: { duration: 1.5 } },
    },
  };
  return (
    <section className=" body-font h-fit ">
      <div className="container px-5 py-24 mx-auto  ">
        <motion.h1
          {...animations.h1}
          className="sm:text-3xl text-3xl font-bold title-font  py-10"
        >
          Open Vacancies
        </motion.h1>

        <div className="flex flex-wrap justify-center sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 md:h-80">
          <div className="p-4 md:w-1/3 flex ">
            <div className="flex-grow p-6  group transform transition-transform h-52 hover:h-auto rounded-3xl hover:bg-orange-50  bg-yellow-50">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Senior Full-Stack Engineer
              </h2>
              <ul className="list-disc p-5 ">
                <li>Full time position</li>
                <li>Berlin or remote </li>
                <li>$65k-85k, 0.5-1.50% equity share option</li>
              </ul>

              <button className=" ml-4 bg-black text-white px-5 py-3 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity">
                Apply Now
              </button>
            </div>
          </div>

          <div className="p-4 md:w-1/3 flex ">
            <div className="flex-grow p-6  group transform transition-transform h-52 hover:h-auto rounded-3xl hover:bg-orange-50  bg-yellow-50">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Senior Designer
              </h2>
              <ul className="list-disc p-5 ">
                <li>Full time position</li>
                <li>Berlin or remote </li>
                <li>$40-55k, 0.25-0.50% equity share options</li>
              </ul>

              <button className=" ml-4 bg-black text-white px-5 py-3 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity">
                Apply Now
              </button>
            </div>
          </div>

          <div className="p-4 md:w-1/3 flex ">
            <div className="flex-grow p-6  group transform transition-transform h-52 hover:h-auto rounded-3xl hover:bg-orange-50   bg-yellow-50">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Superstar Intern
              </h2>
              <ul className="list-disc p-5 ">
                <li>Full time position</li>
                <li>Berlin or remote </li>
                <li>$20k-24k, 0.5-1.50% equity share options</li>
              </ul>

              <button className=" ml-4 bg-black text-white px-5 py-3 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vacancies;
