import HomeContent from "@/components/home/content";
import HomeFooter from "@/components/home/footer";
import HomeHeader from "@/components/home/header";

export default function Home() {
  return (
    // <div className="flex flex-col justify-between">
    //   <header className="sticky top-0 flex justify-between items-end px-8 py-12">
    //     <div className="flex items-center gap-2">
    //       <div className="w-6 h-6 rounded-full bg-beige"></div>
    //       <div className="text-2xl font-extrabold">Jung</div>
    //       <span className="text-xl text-gray-500"> / Software Engineer</span>
    //     </div>

    //     <div className="flex items-center gap-8">
    //       <div className="text-lg">ABOUT ME</div>
    //       <div className="text-lg text-gray-500">RESUME</div>
    //       <div className="text-lg text-gray-500">PROJECTS</div>
    //       <div className="text-lg text-gray-500">CONTACT</div>
    //     </div>
    //   </header>

    //   <main className="flex justify-center items-center min-h-screen gap-8">
    //     <div className="w-96 h-96 rounded-full overflow-hidden shadow-lg">
    //       <Image
    //         src="/globe.svg"
    //         alt="Profile"
    //         width={384}
    //         height={384}
    //         className="object-cover"
    //       />
    //     </div>

    //     <div className="basis-2/5 flex-col">
    //       <div className="sm:text-left">
    //         <h2 className="text-3xl font-bold">Hello</h2>
    //         <p className="mt-2 text-gray-600">
    //           A bit about me: I’m Jung, a software engineer passionate about
    //           building creative solutions. Welcome to my personal website! A bit
    //           about me: I’m Jung, a software engineer passionate about building
    //           creative solutions. Welcome to my personal website! A bit about
    //           me: I’m Jung, a software engineer passionate about building
    //           creative solutions. Welcome to my personal website!
    //         </p>
    //       </div>

    //       <div className="mt-8 flex gap-4">
    //         <a
    //           href="#resume"
    //           className="flex items-center justify-center w-24 h-24 rounded-full bg-yellow-500 text-white font-semibold shadow-md hover:bg-yellow-400 transition"
    //         >
    //           Resume
    //         </a>
    //         <a
    //           href="#projects"
    //           className="flex items-center justify-center w-24 h-24 rounded-full bg-red-500 text-white font-semibold shadow-md hover:bg-red-400 transition"
    //         >
    //           Projects
    //         </a>
    //         <a
    //           href="#contact"
    //           className="flex items-center justify-center w-24 h-24 rounded-full bg-blue-500 text-white font-semibold shadow-md hover:bg-blue-400 transition"
    //         >
    //           Contact
    //         </a>
    //       </div>
    //     </div>
    //   </main>

    //   <footer className="h-32 bg-gray-200"></footer>
    // </div>

    // <div className="flex flex-col justify-between h-screen">
    //   <div className="flex justify-between bg-blue-500 text-white p-4">
    //     <div className="">
    //       1
    //     </div>
    //     <div>
    //       2
    //     </div>
    //   </div>
    //   <div className="bg-green-500 text-white p-4">
    //     This is the centered element
    //   </div>
    //   <div className="bg-orange-500 text-white p-4">
    //     This is the centered element
    //   </div>
    // </div>

    <div>
      <HomeHeader />
      <HomeContent />
      <HomeFooter />
    </div>
  );
}
