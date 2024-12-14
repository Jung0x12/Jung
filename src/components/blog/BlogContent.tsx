import Image from "next/image";

const BlogContent = () => {
  const blogs = [
    {
      title: "A Secure and Regulatory-Compliant Asset Tokenization Standard",
      subtitle:
        "In this article, we will discuss how ERC-4363 can be implemented to help Real-World Assets (RWA) achieve regulatory compliance.",
      url: "https://medium.com/bsos-taiwan/secure-and-regulatory-compliant-asset-tokenization-standard-ef555b0186d8",
      img: "/blog1.webp",
    },
    {
      title:
        "Liquid Network: Innovation in Privacy and Asset Tokenization Built on Bitcoin",
      subtitle:
        "Explore how Liquid Network combines Bitcoin's core features with innovative technology to provide efficient on-chain asset issuance and privacy-focused transaction solutions.",
      url: "https://medium.com/bsos-taiwan/liquid-network-94bfdbec799f",
      img: "/blog2.webp",
    },
  ];

  const BlogLink = ({
    title,
    subtitle,
    url,
    img,
  }: {
    title: string;
    subtitle: string;
    url: string;
    img: string;
  }) => (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-4 2xl:gap-8 mb-32 2xl:mb-48"
    >
      <div className="text-5xl 2xl:text-7xl font-bebasNeue">{title}</div>
      <div className="text-xl 2xl:text-2xl font-varela">{subtitle}</div>
      <div className="w-[50vw]">
        <Image
          src={img}
          alt=""
          layout="responsive"
          width={0}
          height={0}
          className="rounded-lg shadow-lg"
        />
      </div>
    </a>
  );

  return (
    <div className="flex flex-grow flex-col w-screen items-center">
      <span className="text-9xl font-bebasNeue pt-8 pb-16">Blog</span>
      <div className="w-1/2">
        {blogs.map((blog) => (
          <BlogLink
            key={blog.url}
            title={blog.title}
            subtitle={blog.subtitle}
            url={blog.url}
            img={blog.img}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogContent;
