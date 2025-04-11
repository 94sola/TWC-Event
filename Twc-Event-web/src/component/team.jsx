import team from "../assets/image/mrsk.jpg";
import team1 from "../assets/image/team.jpg";
import team2 from "../assets/image/team 2.jpg";
import team3 from "../assets/image/team 3.jpg";

const Team = () => {
  return (
    <section className="bg-white text-black py-16 sm:py-20 lg:py-24">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-500">
          Meet Our Team
        </h2>
        <p className="mt-4 text-lg text-gray-800">
          Dedicated, experienced, and committed to excellence.
        </p>
      </div>

      {/* Team Wrapper */}
      <div className="flex flex-wrap justify-center gap-8 px-6 sm:px-10 md:px-16">
        {/* Team Member 1 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 text-center">
          <div className="bg-neutral-800 px-10 py-14 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
            <img
              src={team}
              alt="Adefunke Kuyoro"
              className="w-40 h-40 object-cover rounded-full mx-auto mt-6 mb-4"
            />
            <h3 className="text-2xl font-semibold text-orange-400">
              Adefunke Kuyoro
            </h3>
            <h5 className="text-xl text-cyan-400 ">CEO of TWC</h5>
            <p className="mt-2 text-sm text-gray-200">
              Our visionary CEO, Adefunke, leads TWC with passion, overseeing strategic growth and organizational direction. With a focus on innovation and excellence, she ensures TWC's sustained success.
            </p>
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 text-center">
          <div className="px-10 py-6 bg-neutral-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
            <img
              src={team1}
              alt="Tosin Ayoola"
              className="w-40 h-40 object-cover rounded-full mx-auto mt-6 mb-4"
            />
            <h3 className="text-2xl font-semibold  text-orange-400">Tosin Ayoola</h3>
            <h5 className="text-xl text-cyan-400">Lead Coordinator</h5>
            <p className="mt-2 text-sm text-gray-200 ">
              Tosin is responsible for managing and streamlining operations, ensuring that every project is executed flawlessly. Her coordination skills keep the team on track and deliver outstanding results on time.
            </p>
          </div>
        </div>

        {/* Team Member 3 (Oluwaseun Akinwumi) */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 text-center">
          <div className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden transform transition-all px-10 py-14 duration-300 hover:scale-105">
            <img
              src={team2}
              alt="Oluwaseun Akinwumi"
              className="w-40 h-40 object-cover rounded-full mx-auto mt-6 mb-4"
            />
            <h3 className="text-2xl font-semibold text-orange-400">Oluwaseun Akinwumi</h3>
            <h5 className="text-xl text-cyan-300">Lead Coordinator</h5>
            <p className="mt-2 text-sm text-gray-200 ">
              Oluwaseun is a key player in the coordination of all team activities. With a focus on precision and efficiency, she ensures that every project runs smoothly, always ensuring the highest standards are met.
            </p>
          </div>
        </div>

        {/* Team Member 4 (Adebanke Ojo) */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 text-center">
          <div className="px-10 py-6 bg-neutral-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
            <img
              src={team3}
              alt="Adebanke Ojo"
              className="w-40 h-40 object-cover rounded-full mx-auto mt-6 mb-4"
            />
            <h3 className="text-2xl font-semibold  text-orange-400">Adebanke Ojo</h3>
            <h5 className="text-xl text-cyan-400">Social Media Coordinator</h5>
            <p className="mt-2 text-sm text-gray-200 ">
              Adebanke is the voice of TWC on social media, crafting engaging content that resonates with our audience. She brings creativity and passion to every post, ensuring our brand message reaches far and wide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
