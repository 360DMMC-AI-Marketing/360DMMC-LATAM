import { useEffect, useState } from "react";

const InfiniteLogoScroll = () => {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    fetch("/scrollassets.json")
      .then((res) => res.json())
      .then((data) => setLogos(data.logos))
      .catch(console.error);
  }, []);

  // Double the logos for seamless loop
  const duplicated = [...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <section className="bg-white py-10 px-30 max-sm:px-5">
      <div className="mx-auto max-w-6xl">
        <p className="mb-12 text-center text-sm font-semibold tracking-widest text-black/50">
          READY TO DEAL WITH ALL TYPES OF COMPANIES
        </p>

        <div
          style={{
            position: "relative",
            overflow: "hidden",
            maskImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 100%)",
          }}
        >
          <div
            className="flex items-center gap-10 max-sm:gap-2"
            style={{
              animation: "scroll-left 30s linear infinite",
              width: "max-content",
            }}
          >
            {duplicated.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt="company logo"
                className="h-25 w-25 object-contain grayscale opacity-full max-sm:h-10 max-sm:w-10"
                style={{ flexShrink: 0 }}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 h-px w-full bg-black/15" />
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default InfiniteLogoScroll;
