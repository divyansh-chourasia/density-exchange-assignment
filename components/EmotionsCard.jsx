
const EmotionsCard = () => {
  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -mx-4 -my-8">
        <div className="py-8 px-4 lg:w-1/3">
          <div className="h-full flex items-start">
            <div className="flex-grow pl-6">
              <h1 className="title-font text-3xl font-medium text-gray-900 mb-3">
                EQ beats IQ
              </h1>
            </div>
          </div>
        </div>

        <div className="py-8 px-4 lg:w-1/3">
          <div className="h-full flex items-start">
            <div className="flex-grow pl-6">
              <p className="leading-relaxed mb-5 text-xl">
                People with high emotional intelligence (EQ) live more fulfilled
                lives. They tend to be happier and have healthier relationships.
              </p>
            </div>
          </div>
        </div>

        <div className="py-8 px-4 lg:w-1/3">
          <div className="h-full flex items-start">
            <div className="flex-grow pl-6">
              <p className="leading-relaxed mb-5 text-xl">
                They are more successful in their pursuits and make for
                inspiring leaders. According to science, they earn $29k a year.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmotionsCard;
