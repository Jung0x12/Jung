import Image from "next/image";

const HomeFooter = () => {
  return (
    <footer className="bg-white py-6 border-t border-gray-200">
      <div className="flex justify-between w-screen px-64 text-sm text-gray-600">
        <div></div>
        <div className="flex gap-8 mt-4 lg:mt-0">
          <div>
            <strong>E-mail</strong>
            <p className="mt-1">jwork1994212@gmail.com</p>
          </div>
          <div>
            <strong>Follow</strong>
            <div className="flex gap-3 mt-1">
              <div className="relative w-5 h-5 overflow-hidden shadow-lg ">
                <Image
                  src="/linkedin.png"
                  alt="Profile"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />
              </div>
              <div className="relative w-5 h-5 rounded-full overflow-hidden shadow-lg ">
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
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
