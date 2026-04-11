import SectionWrapper from "../../components/ui/SectionWrapper";
import { Search, Zap, MessageSquare } from "lucide-react";

const ServiceCard = ({ icon, title, desc, cta, featured }) => {
  return (
    <div
      className="w-full p-[1px] rounded-[var(--radius-2xl)] transition-all duration-300"
      style={{
        background: featured ? "var(--gradient-cta)" : "transparent",
      }}
    >
      <div
        className="h-full flex flex-col justify-between px-6 py-6 rounded-[calc(var(--radius-2xl)-1px)]"
        style={{
          backgroundColor: "var(--bg-card)",
          border: featured ? "none" : "1px solid var(--border-light)",
        }}
      >
        {/* ICON */}
        <div
          className="w-15 h-15 flex items-center justify-center rounded-xl mb-5"
          style={{
            background: "var(--gradient-cta)",
          }}
        >
          {icon}
        </div>

        {/* CONTENT */}
        <div>
          <h3
            className="mb-2 text-[21px] font-semibold"
            style={{
              color: "var(--text-primary)",
            }}
          >
            {title}
          </h3>

          <p
            className="mb-6 text-sm font-semibold"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            {desc}
          </p>
        </div>

        {/* CTA */}
        <span
          className="text-sm font-semibold"
          style={{
            color: "var(--color-accent)",
          }}
        >
          {cta}
        </span>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="relative w-full overflow-hidden bg-(--bg-primary)">
      <SectionWrapper>
        <div className="max-w-6xl m-auto flex flex-col items-center ">
          {/* HEADING */}
          <h2
            className="mb-2 text-2xl font-semibold text-center sm:text-3xl"
            style={{
              color: "var(--text-primary)",
            }}
          >
            Our Revenue Growth Services
          </h2>

          <p
            className=" mb-14 text-sm text-center sm:text-lg font-semibold"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            End‑to‑end funnel and retention marketing systems tailored to your
            brand.
          </p>

          {/* SERVICES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            <ServiceCard
              icon={<Search size={28} color="#ffffff" />}
              title="Email Marketing Audit"
              desc="Deep performance analysis, segmentation gaps, and revenue leak detection."
              cta="Learn More →"
            />

            <ServiceCard
              featured
              icon={<Zap size={28} color="#ffffff" />}
              title="Full Email Marketing Management"
              desc="Strategy, automation, campaigns, copywriting, and ongoing optimization."
              cta="Get Started →"
            />

            <ServiceCard
              icon={<MessageSquare size={28} color="#ffffff" />}
              title="SMS Marketing"
              desc="High‑converting SMS flows and promotional campaigns with compliance built in."
              cta="Explore →"
            />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Services;
