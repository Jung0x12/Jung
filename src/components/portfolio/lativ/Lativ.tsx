import Image from "next/image";

import LinkWithIcon from "@/components/common/LinkWithIcon";
import { generateBlurDataURLs } from "@/helpers";

const Lativ = async () => {
  const imgs = ["lativ1.webp", "lativ2.webp", "lativ3.webp"];

  const blurUrls = await generateBlurDataURLs(
    imgs.map((img) => `public/${img}`),
  );

  return (
    <div className="flex w-full">
      <div className="flex flex-col w-[42vw] items-end pe-8 2xl:pe-16">
        <div className="flex flex-col w-[35vw] 2xl:w-[30vw] pt-20 2xl:pt-32">
          <LinkWithIcon
            href="https://play.google.com/store/apps/details?id=tw.com.lativ.shopping&hl=zh_TW&pli=1"
            title="Lativ"
          />
          <div className="text-xl mt-6 2xl:text-2xl font-varela text-brown-dark">
            {"Lativ is an e-commerce platform dedicated to offering nice quality clothing " +
              "and exceptional customer service. The platform strives to combine style, comfort, " +
              "and functionality, catering to a wide range of fashion preferences while maintaining " +
              "a commitment to quality and customer satisfaction, also ensures that customers enjoy " +
              "a seamless shopping experience."}
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-grow py-8">
        <div className="flex gap-1">
          {imgs.map((img, index) => (
            <div key={img} className="w-[17vw]">
              <Image
                src={img}
                alt={`Lativ Shopping APP ${index}`}
                width={1080}
                height={1290}
                priority={true}
                style={{ width: "100%", height: "auto" }}
                placeholder="blur"
                blurDataURL={blurUrls[index].blurDataURL}
                className="rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lativ;
