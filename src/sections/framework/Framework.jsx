import SectionWrapper from "../../components/ui/SectionWrapper";
import { Search, Map, Layers, Mail, BarChart } from "lucide-react";
import Button from "../../components/common/Button";

const steps = [
  {
    icon: Search,
    title: "Audit & Analysis",
    desc: "Deep dive into your current email performance and revenue opportunities",
  },
  {
    icon: Map,
    title: "Strategy Mapping",
    desc: "Custom funnel architecture designed for your business model",
  },
  {
    icon: Layers,
    title: "Build Core Flows",
    desc: "High‑converting automated flows that drive revenue on autopilot",
  },
  {
    icon: Mail,
    title: "Monthly Email Campaigns",
    desc: "Strategic campaigns designed to boost engagement and sales",
  },
  {
    icon: BarChart,
    title: "Monthly Reporting",
    desc: "Clear performance insights with ongoing optimization",
  },
];

const Framework = () => {
  return (
    <div className="relative w-full overflow-hidden bg-(--bg-primary)">
      <SectionWrapper>
        <div className="max-w-6xl mx-auto text-center">
          {/* HEADING */}
          <h2
            className="mb-2 text-2xl font-semibold"
            style={{
              color: "var(--text-primary)",
            }}
          >
            Our 5‑Step Revenue Framework
          </h2>

          <p
            className="mb-14 text-sm font-semibold"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            A proven system that transforms email from an expense into a profit
            center.
          </p>

          {/* STEP WRAPPER */}
          <div className="relative">
            {/* DESKTOP CONNECTOR LINE */}
            <div
              className="hidden lg:block absolute top-8 inset-x-1/10 h-[2px]"
              style={{ background: "var(--color-secondary)" }}
            ></div>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 relative">
              {steps.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="w-8/10 mx-auto flex flex-col items-center text-center"
                  >
                    {/* ICON */}
                    <div className="relative mb-6 ">
                      <div
                        className="w-16 h-16 flex items-center justify-center rounded-full"
                        style={{
                          background: "var(--gradient-cta)",
                        }}
                      >
                        <Icon size={22} color="#fff" />
                      </div>

                      {/* NUMBER BADGE */}
                      <div
                        className="absolute -top-1 -right-1 w-6 h-6 flex items-center justify-center rounded-full text-xs"
                        style={{
                          background: "var(--gradient-cta)",
                          color: "#fff",
                        }}
                      >
                        {i + 1}
                      </div>
                    </div>

                    {/* TITLE */}
                    <h4
                      className="mb-2 text-base font-semibold"
                      style={{
                        color: "var(--text-primary)",
                      }}
                    >
                      {item.title}
                    </h4>

                    {/* DESC */}
                    <p
                      className="text-xs font-semibold"
                      style={{
                        color: "var(--text-secondary)",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 flex justify-center">
            <Button className="text-sm font-medium">
              Apply This Framework to Your Brand →
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Framework;
