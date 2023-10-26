const ManifestoCard = () => {
  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -mx-4 -my-8">
        <div className="py-12 px-4 lg:w-1/3">
          <div className="h-full flex items-start">
            <div className="flex-grow pl-6">
              <h1 className="title-font text-3xl font-medium text-gray-900 mb-3">
                Be the best you with EQ
              </h1>
            </div>
          </div>
        </div>

        <div className="py-12 px-4 lg:w-1/3">
          <div className="h-full flex items-start">
            <div className="flex-grow pl-6">
              <p className="leading-relaxed mb-5 text-xl">
                Not having your own emotions under control might be holding you
                back.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="py-12 px-4 lg:w-1/3">
          <div className="h-full flex items-start">
            <div className="flex-grow pl-6">
              <p className="leading-relaxed mb-5 text-xl">
                Additionally, not understanding those of others stops you from
                being parent, friend you can be.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManifestoCard;
