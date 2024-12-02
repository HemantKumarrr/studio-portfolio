import projectList from "../../Projects/ProjectList";

const Home = () => {
  return (
    <div className="w-full font-Popins gap-5 flex flex-col items-center justify-center py-[4rem] md:px-[10rem] px-[2rem]">
      <div className="image-logo flex flex-col justify-center items-center">
        <img
          className="w-[10rem] h-[10rem] md:w-[15rem] md:h-[15rem] object-cover rounded-full"
          src="/images/myImage.jpg"
          alt="imageLogo"
        />
        <div className="text-center space-y-2">
          <h1 className="text-4xl pt-4 font-semibold">Hemant</h1>
          <p className="text-md font-semibold text-gray-800">Artist Name</p>
          <h1 className="text-2xl font-semibold text-white bg-[#563A9C] rounded-md">
            Fuzion
          </h1>
        </div>
        <div className="text-[12px] mt-4 border-2 rounded-md p-2">
          <div className="">Hello! 👋</div>
          <div className="pb-4">
            my name is hemant I am a self taught music producer, mixing
            mastering engineer, musician I have 5 years experience.
          </div>
          Music production is the art of having a vision for a song or group of
          songs and being able to execute that vision. As a recording and mix
          engineer I approach music production in a hands on way. From scratch
          tracks and demos to completely finished ready for release.
        </div>
      </div>
      <div className="text-start border-t-2 text-gray-900">
        <h1 className="text-sm md:text-xl p-2">
          Below are some projects I’ve worked on as a music producer and
          mixing/mastering engineer.
        </h1>
        <div className="projects py-4 flex flex-col items-center justify-center gap-8">
          {projectList.map((item) => {
            return (
              <a key={item.id} target="_blank" href={item.url}>
                <div className="border-2 p-2 shadow-md rounded-md">
                  <img className="" src={item.image} alt="image" />
                  <h1 className="text-xl font-semibold py-[0.5rem]">
                    {item.title}
                  </h1>
                  {item.views && (
                    <p className="text-md py-[0.2rem] text-yellow-500 bg-black flex justify-center                    gap-2 rounded-md">
                      {item.views} <p className="text-white">views</p>
                    </p>
                  )}
                </div>
              </a>
            );
          })}
        </div>
      </div>
      <h1>Thank You ❤</h1>
    </div>
  );
};

export default Home;
