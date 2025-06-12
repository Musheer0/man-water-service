import { ExperienceVideo } from "./exprience-video";

export default function ExperienceSection() {
  const videos = ["/exp1.mp4", "/exp2.mp4", "/exp3.mp4"];

  return (
    <section className="relative w-full bg-white h-full mb-20 text-zinc-800 px-4 py-16 sm:px-8 overflow-hidden">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
        <h2 className="text-6xl font-bold font-handwriting">
          We are very experienced in <br className="hidden sm:block" /> cleaning services
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 max-w-2xl mx-auto">
          At our locally owned and operated cleaning service, we’re committed to delivering top-notch results with every clean. Our certified, highly skilled technicians are trusted professionals—vetted, trained, and dedicated to making your space spotless.
        </p>
      </div>

      {/* Videos */}
      <div className="relative flex flex-col sm:flex-row gap-6 justify-center items-end sm:items-start">
        {videos.map((src, i) => (
          <ExperienceVideo
            key={src}
            src={src}
            className={
              i === 0
                ? "sm:translate-y-24 sm:flex hidden"
                : i === 2
                ? "sm:translate-y-24 sm:flex hidden"
                : ""
            }
          />
        ))}
      </div>

      {/* Fade mask */}
      <div className="absolute bottom-0 left-0 w-full h-24 pointer-events-none bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
