import Image from "next/image";
import Link from "next/link";

const AboutContent = () => {
  return (
    <div className="flex h-scree mt-4 mb-24">
      <div className="w-[55%]">
        <div className="flex flex-col h-full items-end">
          <div className="w-3/4 2xl:w-3/5">
            {/* Hello */}
            <div className="font-bebasNeue">
              <div className="text-9xl font-bold">Hello</div>
              <div className="text-5xl leading-snug mt-10">
                {"I'm Jung"}
                <br />A software developer
              </div>
            </div>

            {/* Intro */}
            <div className="text-lg leading-normal mt-6 space-y-6 font-varela text-brown-dark">
              <div>
                {"I have nearly 6 years of experience as a software developer, in " +
                  "the early stages of my career I focus on Mobile development. " +
                  "This has allowed me to build a solid foundation in mobile " +
                  "application design and implementation."}
              </div>
              <div>
                {"Outside of work, my passion for technology drives me to explore " +
                  "the latest innovations. These years, I have expanded my " +
                  "interests into the blockchain domain, focusing on decentralized " +
                  "systems and Web3 applications, inspired by their transformative " +
                  "potential."}
              </div>
              <div>
                {"Currently, I am fortunate to be a part of the blockchain " +
                  "industry, focusing on developing innovative applications. I look " +
                  "forward to the continuous evolution of blockchain and its " +
                  "transformative global impact."}
              </div>
            </div>

            {/* Expierence */}
            <div className="mt-12">
              <div className="text-5xl font-bebasNeue">Expierence</div>
              <div className="text-lg mt-4 ms-2 space-y-1 font-varela text-brown-dark">
                <div>- 1 year of blockchain developer</div>
                <div>- 5 years of mobile developer</div>
                <div>- Bachelor of Computer Science</div>
              </div>
            </div>

            {/* Skills */}
            <div className="mt-12">
              <div className="text-5xl font-bebasNeue">Skills</div>
              <div className="mt-3 space-y-6">
                <div>
                  <div className="text-3xl font-bebasNeue">Blockchain</div>
                  <div className="text-lg leading-relaxed mt-1 ms-1 font-varela text-brown-dark">
                    Solidity / Foundry
                    <br />
                    Openzeppelin / Chainlink VRF
                    <br />
                    The Graph / Goldsky / SQD(Subsquid)
                    <br />
                    Slither / Tenderly
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bebasNeue">Mobile</div>
                  <div className="text-lg leading-relaxed mt-1 ms-1 font-varela text-brown-dark">
                    Kotlin / Java
                    <br />
                    MVVM / MVI / Clean Architecture
                    <br />
                    RESTful API / gRPC / WebSocket
                    <br />
                    Mockk / Junit5 / Robolectric / Kaspresso / Github Action(CI)
                    <br />
                    Jetpack / KMM(Kotlin Multiplatform Mobile) / Firebase Tools
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bebasNeue">Others</div>
                  <div className="text-lg leading-relaxed mt-1 ms-1 font-varela text-brown-dark">
                    Next.js / React / TypeScript / Tailwind CSS
                  </div>
                </div>
              </div>
            </div>

            {/* CV & Contact */}
            <Link
              href="/contact"
              className="inline-block px-16 py-4 mt-16 bg-black text-white text-2xl rounded-[36px] hover:px-20 duration-300 font-bebasNeue"
            >
              {"Let's Contact"}
            </Link>
          </div>
        </div>
      </div>

      {/* Profile Image */}
      <div className="h-screen flex-grow">
        <div className="w-[700px] h-[800px] 2xl:w-[700px] 2xl:h-[800px] overflow-hidden relative ms-16 mt-12">
          <Image
            src="/profile.jpg"
            alt="Profile"
            layout="fill"
            objectFit="cover"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
