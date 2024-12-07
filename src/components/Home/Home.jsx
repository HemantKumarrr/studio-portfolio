import projectList from "../../Projects/ProjectList";

const Home = () => {
  return (
    <div className="w-full font-Popins gap-5 flex flex-col items-center justify-center py-[4rem] md:px-[10rem] px-[2rem]">
      <div className="image-logo flex flex-col justify-center items-center">
        <img
          className="w-[10rem] h-[10rem] md:w-[15rem] md:h-[15rem] object-cover object-center rounded-full"
          src="/images/tdzms.png"
          alt="imageLogo"
        />
        <div className="text-center space-y-2">
          <h1 className="text-4xl pt-4 font-semibold">
            The Dark Zone Music Studio
          </h1>
          <p className="text-gray-900 text-sm">
            Bringing Sound to Life: Precision, Passion, Perfection."
          </p>
        </div>
        <div className="text-[12px] mt-4 border-2 rounded-md p-2 py-8">
          <p className="">
            A leading record label rapidly growing in the music industry and
            providing platform to many aspiring artists. Managing adaptive
            approach and industry benchmark for Video shoots, Photo shoots and
            Ad. We are well-versed with Artists Management, Live Events, Short
            Films, Superior Studio Recording, including various genres like Folk
            Songs, English/Hindi Pop Song, Raps, EDM (Electronic Dance Music),
            Commercial Music Videos and Documentary
          </p>
        </div>
      </div>
      <div className="text-2xl font-semibold w-full py-8">
        <h1>Services</h1>
        <ul className="font-normal text-sm flex flex-col md:flex-row  md:items-center justify-center gap-5 pt-4">
          <li className="border-2 rounded-md shadow-md p-2 cursor-pointer hover:bg-black hover:text-white transition-all delay-100">
            Music Production
          </li>
          <li className="border-2 rounded-md shadow-md p-2 cursor-pointer hover:bg-black hover:text-white transition-all delay-100">
            Audio Mixing and Mastering
          </li>
          <li className="border-2 rounded-md shadow-md p-2 cursor-pointer hover:bg-black hover:text-white transition-all delay-100">
            Audio Recording
          </li>
          <li className="border-2 rounded-md shadow-md p-2 cursor-pointer hover:bg-black hover:text-white transition-all delay-100">
            BGM for Stories/Short movies/Comm.
          </li>
          <li className="border-2 rounded-md shadow-md p-2 cursor-pointer hover:bg-black hover:text-white transition-all delay-100">
            Voice Overs & Dubbing
          </li>
        </ul>
      </div>
      <div className="text-start border-t-2 text-gray-900">
        <h1 className="text-sm md:text-xl p-2">
          Below are some projects We worked on!
        </h1>
        <div className="projects py-4 flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-8">
          {projectList.map((item) => {
            return (
              <a key={item.id} target="_blank" href={item.url}>
                <div className="border-2 px-2 py-4 shadow-md rounded-md">
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
