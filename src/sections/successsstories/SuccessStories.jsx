import SectionWrapper from "../../components/ui/SectionWrapper";

const CaseStudyCard = ({ image, category, title, desc, industry }) => {
  return (
    <div className="w-full p-[1px] rounded-2xl bg-(--bg-card) overflow-hidden">
      {/* IMAGE AREA */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-[180px] sm:h-[200px] object-cover"
        />
        {/* PERFORMANCE BADGE */}
        <div
          className="absolute top-3 right-3 px-3 py-1 text-xs rounded-md text-white"
          style={{
            background: "var(--gradient-cta)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "1px",
          }}
        >
          {/* CONTENT LAYER */}
          <div
            className="relative px-2 py-[2px] rounded-md text-xs text-white"
            style={{
              backgroundColor: "rgba(10,15,40,0.45)", // slight glass feel
              backdropFilter: "blur(6px)",
            }}
          >
            +62%
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="h-fit px-5 py-5 text-left ">
        {/* CATEGORY BADGE */}
        <div
          className="w-fit px-3 py-1 text-xs rounded-[7.5px] mb-2.5"
          style={{
            backgroundColor: "rgba(255,255,255,0.10)",
            color: "var(--text-primary)",
          }}
        >
          {category}
        </div>
        <h4
          className="mb-2 text-[20px] font-semibold line-clamp-2"
          style={{
            color: "var(--text-primary)",
          }}
        >
          {title}
        </h4>

        <p
          className="mb-4 text-sm line-clamp-2"
          style={{
            color: "var(--text-secondary)",
          }}
        >
          {desc}
        </p>

        {/* FOOTER */}
        <div className="pt-3 flex justify-between items-center text-xs font-semibold border-t-[00.88px] border-t-(--border-light) ">
          <span style={{ color: "var(--text-secondary)" }}>{industry}</span>
          <span style={{ color: "var(--color-accent)" }}>
            View Case Study →
          </span>
        </div>
      </div>
    </div>
  );
};

const SuccessStories = () => {
  const filters = ["All", "E-Commerce", "DTC", "Info Products"];

  const data = [
    {
      category: "E‑Commerce",
      title: "Revenue in 90 Days",
      desc: "Increased email revenue through segmented automation & personalized flows.",
      industry: "Fashion Retailer",
      image: "/assets/images/success-stories/casestudy1.jpg",
    },
    {
      category: "E‑Commerce",
      title: "Trial Conversions",
      desc: "Optimized onboarding sequences and nurture campaigns for B2B E‑Commerce.",
      industry: "Analytics Platform",
      image: "/assets/images/success-stories/casestudy2.jpg",
    },
    {
      category: "DTC",
      title: "Customer LTV",
      desc: "Built retention system with SMS integration and post‑purchase flows.",
      industry: "Wellness Brand",
      image: "/assets/images/success-stories/casestudy3.jpg",
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
            Proven Funnel Success Stories
          </h2>

          {/* SUBTITLE */}
          <p
            className="mb-8 text-sm font-semibold sm:text-lg"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            Real results from real brands we've scaled
          </p>

          {/* FILTER BUTTONS */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {filters.map((item, i) => (
              <button
                key={item}
                className="px-5 py-3 rounded-[10px] text-xs font-semibold"
                style={{
                  background:
                    i === 0 ? "var(--gradient-cta)" : "var(--bg-card)",
                  border: i !== 0 ? "1px solid var(--border-light)" : "none",
                  color: "var(--text-secondary)",
                }}
              >
                {item}
              </button>
            ))}
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((card, i) => (
              <CaseStudyCard key={i} {...card} />
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default SuccessStories;
