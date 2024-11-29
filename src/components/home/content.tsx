import Image from "next/image";

const HomeContent = () => {
  return (
    <div className="relative flex h-[86vh]">
      <div className="bg-beige basis-2/5"></div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-sm shadow-md flex h-fit min-w-max">
        <div className="flex flex-col justify-between bg-beige-light">
          <div className="flex flex-col items-center py-12 px-24">
            <div className="relative w-44 h-44 rounded-full overflow-hidden shadow-lg ">
              <Image
                src="/profile.jpg"
                alt="Profile"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>

            <div className="text-3xl font-bold pt-12">Jung Tu</div>

            <span className="bg-gray-400 h-px w-10 my-6"></span>

            <div className="text-xl font-light text-gray-500">
              Software Engineer
            </div>
          </div>

          <div className="flex justify-center items-center bg-white w-full py-4 gap-7">
            <div className="relative w-8 h-8 overflow-hidden shadow-lg ">
              <Image
                src="/linkedin.png"
                alt="Profile"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
            <div className="relative w-8 h-8 rounded-full overflow-hidden shadow-lg ">
              <Image
                src="/github.png"
                alt="Profile"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-white justify-between px-16 pt-16 pb-8 gap-2">
          <span className="text-7xl font-bold">Hello</span>

          <span className="text-xl text-gray-600 max-w-md">
            With 5 years of experience in Android development, I am proficient
            in Java, Kotlin, and Android development components. I am
            acquaintance with various aspects including architecture (MVVM,
            MVI), feature development, unit testing/UI testing, GitHub Actions
            for automated checks, Google Play deployment, and Firebase
            monitoring.
          </span>

          <div className="flex gap-4">
            <button className="bg-blue-400 text-white px-6 py-2 rounded-full hover:bg-blue-300">
              RESUME
            </button>
            <button className="border border-gray-300 px-6 py-2 rounded-full hover:bg-gray-200">
              PROJECTS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
