import SectionWrapper from "../../components/ui/SectionWrapper";

import { Play } from "lucide-react";

const TestimonialCard = ({ name, role, video }) => {
  return (
    <div className="w-full p-[1px] rounded-[var(--radius-xl)] transition-all duration-300 hover:-translate-y-1">
      <div className="overflow-hidden rounded-2xl">
        {/* VIDEO AREA */}
        {/* <iframe width="100%" height="315" style={{borderRadius:"var(--radius-2xl)",}} src="https://www.youtube.com/embed/t8kGTTNvETA?si=O48I6h2Ge8mP_Dil" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
        {video}

        {/* CONTENT */}
        <div className="px-5 py-4 text-left">
          <h4
            className="text-[17px] font-semibold"
            style={{
              color: "var(--text-primary)",
            }}
          >
            {name}
          </h4>

          <p
            className="text-sm font-semibold"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const data = [
    {
      name: "Cesar",
      role: "Co founder of Susan Shapewear & Donna's Dresses",
      video: (
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/t8kGTTNvETA?si=O48I6h2Ge8mP_Dil"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      ),
    },
    {
      name: "Jure",
      role: "Co Founder of Zippra",
      video: (
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/t8kGTTNvETA?si=O48I6h2Ge8mP_Dil"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      ),
    },
    {
      name: "Auria Abraham",
      role: "Co Founder Auria Malaysian Kitchen",
      video: (
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/t8kGTTNvETA?si=O48I6h2Ge8mP_Dil"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-(--bg-primary)">
      <SectionWrapper>
        <div className="max-w-6xl mx-auto text-center">
          {/* HEADING */}
          <h2
            className="mb-2 text-3xl font-semibold sm:text-[32px]"
            style={{
              color: "var(--text-primary)",
            }}
          >
            Trusted by Fast‑Growing Brands
          </h2>

          <p
            className="mb-10 text-sm font-semibold sm:text-lg"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            Hear directly from the founders and marketers we've helped scale
          </p>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((item, i) => (
              <TestimonialCard key={i} {...item} />
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Testimonials;
