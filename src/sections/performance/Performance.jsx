import SectionWrapper from "../../components/ui/SectionWrapper";
import { Mail, TrendingUp, Users, DollarSign } from "lucide-react";

const PerformanceCard = ({ icon, value, label }) => {
  return (
    <div className="w-full p-[1px] rounded-[var(--radius-xl)] border border-(--border-medium)">
      <div className="w-full h-full px-5 py-5 rounded-[calc(var(--radius-xl)-1px)]">
        {/* ICON */}
        <div
          className="w-10 h-10 flex items-center justify-center mb-1 rounded-(--radius-xl)"
          style={{
            backgroundColor: "rgba(99,102,241,0.20)",
          }}
        >
          {icon}
        </div>

        {/* VALUE */}
        <h3
          className="mb-1 text-(length:--text-3xl) font-(--fw-bold)"
          style={{
            background: "var(--gradient-cta)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            WebkitTextFillColor: "transparent",
          }}
        >
          {value}
        </h3>

        {/* LABEL */}
        <p
          style={{
            fontSize: "var(--text-sm)",
            color: "var(--text-secondary)",
          }}
        >
          {label}
        </p>
      </div>
    </div>
  );
};

const Performance = () => {
  return (
    <div className="relative w-full overflow-hidden bg-(--bg-primary)">
      <SectionWrapper>
        <div
          className="max-w-6xl mx-auto rounded-[var(--radius-2xl)] w-full px-6 py-10 sm:px-10 sm:py-12"
          style={{
            background: `
    radial-gradient(
      120% 120% at 70% 30%,
      rgba(43,30,122,0.25) 0%,
      rgba(59,43,117,0.18) 35%,
      rgba(9,20,40,0.65) 70%,
      rgba(9,20,40,1) 100%
    ),
    linear-gradient(
      95deg,
      #070E24 0%,
      #121744 40%,
      #1D1A49 65%,
      #0C2F38 100%
    )
  `,
            backgroundBlendMode: "normal",
          }}
        >
          {/* HEADING */}
          <div className="text-center mb-10">
            <h2
              className="mb-2 font-semibold text-2xl sm:text-3xl"
              style={{
                color: "var(--text-primary)",
              }}
            >
              Performance That Speaks for Itself!
            </h2>

            <p
              className="text-sm sm:text-lg "
              style={{ color: "var(--text-secondary)" }}
            >
              Real metrics from real campaigns we've managed
            </p>
          </div>

          {/* METRICS GRID */}
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <PerformanceCard
              icon={<Mail size={20} color="#FFFFFF" />}
              value="2.4M+"
              label="Campaigns Delivered"
            />

            <PerformanceCard
              icon={<TrendingUp size={20} color="#FFFFFF" />}
              value="6.8%"
              label="Avg. Conversion Rate"
            />

            <PerformanceCard
              icon={<Users size={20} color="#FFFFFF" />}
              value="850K+"
              label="Subscribers Managed"
            />

            <PerformanceCard
              icon={<DollarSign size={20} color="#FFFFFF" />}
              value="$12M+"
              label="Revenue Generated"
            />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Performance;
