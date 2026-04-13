import SectionWrapper from "../../components/ui/SectionWrapper";
import { PortfolioImage } from "@/assets"; 

const PortfolioShowcase = () => {
  return (
    <div className="relative w-full overflow-hidden bg-(--bg-primary)">
      <SectionWrapper>
        {/* PANEL CONTAINER */}
        <div className="w-full max-w-6xl mx-auto p-4 sm:p-10 md:p-14">
          {/* TAG */}
          <div className="flex justify-center mb-6">
            {/* OUTER → GRADIENT BORDER */}
            <div
              style={{
                background: "var(--gradient-cta)",
                padding: "1px",
                borderRadius: "var(--radius-xl)",
              }}
            >
              {/* INNER → DARK BADGE */}
              <div
                className="px-4 py-2 rounded-[11px] text-sm sm:text-base"
                style={{
                  backgroundColor: "var(--bg-card)",
                }}
              >
                {/* TEXT → GRADIENT CLIP */}
                <span
                  className="flex justify-center items-center gap-2 font-(--fw-medium)"
                  style={{
                    background: "var(--gradient-cta)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  <i>✦</i> Poryfolio Showcases
                </span>
              </div>
            </div>
          </div>
          {/* HEADING */}
          <h2
            className="
                        text-center mb-2 px-2
                        text-[var(--text-primary)]
                        text-(length:--text-2xl)
                        lg:text-(length:--text-3xl)
                        font-(--fw-semibold)"
          >
            Designed for Conversions.{" "}
            <span
              style={{
                background: "var(--gradient-heading)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
              }}
            >
              Built for Scale.
            </span>
          </h2>

          {/* SUB TEXT */}
          <p
            className="text-center mb-12 px-4 text-(length:--text-sm) sm:text-(length:--text-lg) text-[var(--text-secondary)]"
            // style={{
            //   fontSize: "var(--text-base)",
            //   color: "var(--text-secondary)",
            // }}
          >
            Every email template is crafted with psychology‑driven design
            principles and tested across industries.
          </p>

          {/* ✅ IMAGE STACK */}
          <div className="relative w-full flex justify-center">
            {/* BACKGROUND GLOW */}
            <div
              className="absolute w-96 h-96 blur-[200px] rounded-full"
              style={{
                opacity: 0.25,
                bottom: "-80px",
              }}
            />

            {/* PORTFOLIO IMAGE */}
            <div className="w-full h-full overflow-hidden">
              <img
                src={PortfolioImage}
                alt="Portfolio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default PortfolioShowcase;
