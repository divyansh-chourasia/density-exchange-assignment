"use client";
import { motion } from "framer-motion";

const ManifestoScrollBar = () => {
  const animations = {
    div: {
      initial: { x: "-100%", opacity: 0 },
      whileInView: { x: 0, opacity: 1, transition: { duration: 1.5 } },
    },
  };
  return (
    <section className=" body-font h-fit">
      <div className="container mx-auto flex p-10 my-10  flex-col ">
        <div className="flex ">
          <motion.div {...animations.div}>
            <p className="text-sm sm:text-base">
              Wrong with self-improvement & how we're fixing it
            </p>
            <h1 className="sm:text-3xl md:text-5xl font-bold title-font  py-5">
              Self-improvement. Ugh{" "}
            </h1>
          </motion.div>

          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 1.5 } }}
          >
            <img
              src="/cryingghost.png"
              alt="cryingghost"
              className="w-20 h-20"
            />
          </motion.div>
        </div>

        <article className="flex items-center  justify-center  ">
          <div className="scroll-container  ">
            <div className="scroll-content">
              <div>
                <h4>It's not as easy as 1-2-3.</h4>
                <p>
                  The journey of change may be long, but our sessin are quick.
                  We get to the point and tell you what you want to know (and
                  nothing else).
                </p>
              </div>
              <div>
                <h4>Old habits are hard to break.</h4>
                <p>
                  And bad behaviors die hard. Fortunately, we give you great,
                  science- backed techniques to use.
                </p>
              </div>
              <div>
                <h4>
                  You and your motivation don't have a long-term relationship.
                </h4>
                <p>
                  Luckily, we can proactively prepare you for the marathon, not
                  just the race. Effective, memorable exercises will help you
                  stick to your goals.
                </p>
              </div>
              <div>
                <h4>Books just don't offer practical</h4>
                <p>
                  Remember when you learned to ride a bike just by reading ?
                  Yeah. we don't either. We help you take concrete small steps
                  towards your goals. Learning just a bit , then
                  immediatelyspringing into action.
                </p>
              </div>
              <div>
                <h4>Inspiration is great, but then what</h4>
                <p>
                  We make sure your energy from all the content you consume does
                  not frizzle out.
                </p>
              </div>
              <div>
                <h4>It's not as easy as 1-2-3.</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Asperiores, optio!
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ManifestoScrollBar;
