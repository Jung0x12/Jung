const HomeHeader = () => {
  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="container mx-auto flex justify-between items-center py-8">
        <h1 className="text-2xl font-bold flex items-center gap-4">
          <span className="w-4 h-4 bg-beige rounded-full"></span>
          Jung
          <span className="text-xl font-normal text-gray-500">
            / Software Engineer
          </span>
        </h1>
        <nav className="flex gap-6 text-gray-700">
          <a href="#about" className="hover:text-blue-500">
            ABOUT ME
          </a>
          <a href="#resume" className="hover:text-blue-500">
            RESUME
          </a>
          <a href="#projects" className="hover:text-blue-500">
            PROJECTS
          </a>
        </nav>
      </div>
    </header>
  );
};

export default HomeHeader;
