import SectionWrapper from "../../components/ui/SectionWrapper";
import BrandLogoCard from "./BrandLogoCard";

const brands = [
  "TNT NURSERY",
  "INNURSERY",
  "REONS",
  "AURIA'S",
  "BARELINE",
  "WALLIFY",
  "MOIG",
  "RADIANT",
  "SHINRAI KNIVES",
];

const TrustedBrands = () => {
  return (
    <div className="relative w-full overflow-hidden bg-(--bg-primary)">
      <SectionWrapper>
        {/* MAIN GLASS PANEL */}
        <div
          className="max-w-6xl mx-auto w-full px-6 py-12 sm:px-10 sm:py-14 rounded-[28px] relative overflow-hidden"
          style={{
            background: `
    radial-gradient(
      85% 90% at 100% 0%,
      rgba(0,166,174,0.32) 0%,
      rgba(0,166,174,0.22) 18%,
      rgba(0,166,174,0.10) 35%,
      rgba(0,0,0,0) 60%
    ),
    radial-gradient(
      85% 90% at 0% 100%,
      rgba(112,53,242,0.30) 0%,
      rgba(112,53,242,0.18) 25%,
      rgba(112,53,242,0.08) 40%,
      rgba(0,0,0,0) 60%
    ),
    linear-gradient(
      120deg,
      #000000 0%,
      #02030A 40%,
      #02030A 60%,
      #000000 100%
    )
  `,
          }}
        >
          {/* LEFT AMBIENT GLOW */}
          <div
            className="absolute w-96 h-96 rounded-full blur-[220px]"
            style={{
              background: "var(--color-accent)",
              opacity: 0.25,
              left: "-100px",
              top: "-100px",
            }}
          />

          {/* HEADING */}
          <div className="text-center mb-10 relative z-10">
            <h2
              className="mb-2 text-2xl font-semibold sm:text-3xl"
              style={{
                color: "var(--text-primary)",
              }}
            >
              Trusted by Leading Brands
            </h2>

            <p
              className="text-sm sm:text-lg"
              style={{
                color: "var(--text-secondary)",
              }}
            >
              Powering growth for companies across industries.
            </p>
          </div>

          {/* BRAND GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10 mb-10">
            {brands.map((brand) => (
              <BrandLogoCard key={brand} brand={brand} />
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center relative z-10">
            <button
              className="flex justify-center items-center gap-4 px-5 py-2.5 rounded-xl font-semibold border transition-all duration-300 hover:bg-white/5"
              style={{
                border: "2px solid var(--border-cta)",
                fontSize: "var(--text-sm)",
                color: "var(--text-primary)",
              }}
            >
              See How We Scale Brands <span>→</span>
            </button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default TrustedBrands;
