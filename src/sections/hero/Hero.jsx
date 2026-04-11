import SectionWrapper from "../../components/ui/SectionWrapper";
import Button from "../../components/common/Button";
import StatCard from "../../components/ui/StatCard";

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden bg-(--bg-primary) ">
      {/* Purple Glow Left */}
      <div
        className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] 
                  bg-cyan-600 opacity-30 blur-[160px] rounded-full"
      ></div>

      {/* Cyan Glow Right */}
      <div
        className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] 
                  bg-cyan-400 opacity-20 blur-[160px] rounded-full"
      ></div>

      {/* Background Gradient Blur */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(79,70,229,0.25),transparent_40%)]" ></div>

      <SectionWrapper>
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto py-10.5 relative z-10">
          {/* Heading */}
          <h1 className="text-[28px] sm:text-5xl lg:text-[56px] font-bold leading-tight text-white">
            Turn Email & SMS Into Your Most
            <br />
            <span className="bg-[linear-gradient(90deg,#8B5CF6_0%,#6366F1_40%,#38BDF8_100%)] bg-clip-text text-transparent">
              Profitable Revenue Channel
            </span>
          </h1>

          {/* Sub Text */}
          <p className="mt-6 text-[#e4e4e4] text-sm sm:text-xl max-w-2xl">
            We build high-converting funnels, automated email systems, and SMS
            flows that increase retention and maximize lifetime value.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-x-6 sm:gap-x-10 gap-y-8 mt-13.5 text-cyan-400">
            <StatCard value="38%" label="Avg Revenue Growth" className="min-w-30 flex-1"/>
            <StatCard value="4.2x" label="ROI on Campaigns" className="min-w-30 flex-1"/>
            <StatCard value="120+" label="Funnels Built" className="min-w-30 flex-1"/>
          </div>

          {/* CTA Buttons */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-6 mt-12.5">
            <Button className="w-full text-sm sm:text-base sm:w-fit">Book a Free Strategy Call →</Button>

            <button className="w-full text-sm sm:text-base sm:w-fit px-6 py-3.5 border border-white/30 text-white rounded-xl hover:bg-white/10 transition">
              View Case Studies
            </button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Hero;
