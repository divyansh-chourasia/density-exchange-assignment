"use client";
import { motion } from "framer-motion";

const EmotionsScrollComponent = () => {
  const animations = {
    h1: {
      initial: { x: "-100%", opacity: 0 },
      whileInView: { x: 0, opacity: 1, transition: { duration: 1 } },
    },
    div: {
      initial: { x: "100%", opacity: 0 },
      whileInView: { x: 0, opacity: 1, transition: { duration: 1.5 } },
    },
  };

  return (
    <div>
      <div className="flex justify-around md:px-20 p-5">
        <motion.h1 {...animations.h1} className="text-4xl font-bold">
          Does this sound familiar
        </motion.h1>
        <motion.div {...animations.div}>
          <img
            {...animations.img}
            src="/angryghost.png"
            alt="angryghost"
            className="w-20 h-20 mr-40"
          />
        </motion.div>
      </div>

      <article>
        <div className="wrapper mb-10">
          <div className="slider">
            <div className="slide">
              <div className="card text-xl">
                😠
                <h4>You argue with a colleague</h4>
                <p>
                  You get angry and defensive, instead of staying open and
                  working towards common ground.
                </p>
              </div>

              <div className="card text-xl">
                😳
                <h4>You get a promotion at work e</h4>
                <p>
                  You question yourself and wonder when the'll realise you're an
                  unqualified imposter, instead of trusting youself & your
                  abilities.
                </p>
              </div>

              <div className="card text-xl">
                🤨
                <h4>You attend a classreunion</h4>
                <p>
                  You compare yourself with your peers achievments. insteadof
                  making your self-judgement more independent of others.
                </p>
              </div>
              <div className="card text-xl">
                😒
                <h4>You are at a lively dinner party</h4>
                <p>
                  You play on your phone, instead of confidently approaching
                  stranger and striking up a chat.
                </p>
              </div>

              <div className="card text-xl">
                😬
                <h4>You hit a dead end in a negotiation.</h4>
                <p>
                  You get nervous, frazzeled and frustated, instead of staying
                  optimistic and solution-oriented.
                </p>
              </div>
            </div>

            <div className="slide">
              <div className="card text-xl">
                😠
                <h4>You argue with a colleague</h4>
                <p>
                  You get angry and defensive, instead of staying open and
                  working towards common ground.
                </p>
              </div>

              <div className="card text-xl">
                😳
                <h4>You get a promotion at work e</h4>
                <p>
                  You question yourself and wonder when the'll realise you're an
                  unqualified imposter, instead of trusting youself & your
                  abilities.
                </p>
              </div>

              <div className="card text-xl">
                🤨
                <h4>You attend a classreunion</h4>
                <p>
                  You compare yourself with your peers achievments. insteadof
                  making your self-judgement more independent of others.
                </p>
              </div>
              <div className="card text-xl">
                😒
                <h4>You are at a lively dinner party</h4>
                <p>
                  You play on your phone, instead of confidently approaching
                  stranger and striking up a chat.
                </p>
              </div>

              <div className="card text-xl">
                😬
                <h4>You hit a dead end in a negotiation.</h4>
                <p>
                  You get nervous, frazzeled and frustated, instead of staying
                  optimistic and solution-oriented.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
      <div></div>
    </div>
  );
};

export default EmotionsScrollComponent;
