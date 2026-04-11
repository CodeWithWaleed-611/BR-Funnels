import SectionWrapper from "../../components/ui/SectionWrapper";
import { ShieldCheck, FileText, Users, CheckCircle, Clock } from "lucide-react";
import Button from "../../components/common/Button";

const GuaranteeCard = ({ icon, title, desc }) => {
  return (
    <div
      className="w-full p-[1px] rounded-[var(--radius-2xl)] border border-(--border-medium)"
      style={{ background: "var(--gradient-border)" }}
    >
      <div
        className="flex justify-start gap-4 px-5 py-5 rounded-[calc(var(--radius-xl)-1px)]"
        style={{ backgroundColor: "var(--bg-card)" }}
      >
        {/* ICON */}
        <div
          className="p-5 h-fit rounded-xl border border-(--color-primary)"
          style={{
            backgroundColor: "rgba(139,92,246,0.15)",
            color: "var(--text-primary)",
          }}
        >
          {icon}
        </div>

        {/* TEXT */}
        <div>
          <h4
            className="mb-1 text-[17px] font-semibold"
            style={{
              color: "var(--text-primary)",
            }}
          >
            {title}
          </h4>

          <p
            style={{
              fontSize: "var(--text-sm)",
              fontWeight: "var(--fw-semibold)",
              color: "var(--text-secondary)",
            }}
          >
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

const Guarantee = () => {
  return (
    <div className="relative w-full overflow-hidden bg-(--bg-primary)">
      <SectionWrapper>
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
        <div className="max-w-6xl mx-auto w-full relative overflow-hidden">
          {/* HEADER */}
          <div className="flex flex-col items-center text-center mb-10 relative z-10">
            {/* ICON */}
            <div
              className="mb-4 p-2 rounded-xl sm:p-4 sm:text-2xl"
              style={{ background: "var(--gradient-cta)" }}
            >
              <ShieldCheck size={24} color="var(--text-primary)" />
            </div>

            {/* TITLE */}
            <h2
              className="mb-2 text-2xl font-semibold sm:text-3xl"
              style={{
                color: "var(--text-primary)",
              }}
            >
              Results Backed by Performance Guarantee
            </h2>

            {/* SUBTEXT */}
            <p
              className="max-w-md text-sm sm:text-lg"
              style={{
                color: "var(--text-secondary)",
              }}
            >
              Your growth is our commitment. We stand behind every campaign.
            </p>
          </div>

          {/* FEATURE GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative z-10 mb-6">
            <GuaranteeCard
              icon={<FileText size={18} color="var(--text-primary)" />}
              title="100% Transparent Reporting"
              desc="Real-time access to all metrics and campaign performance"
            />

            <GuaranteeCard
              icon={<Users size={18} color="var(--text-primary)" />}
              title="Dedicated Account Manager"
              desc="Direct line to your strategic partner, not a ticket system"
            />

            <GuaranteeCard
              icon={<Clock size={18} color="var(--text-primary)" />}
              title="30-Day Performance Commitment"
              desc="See measurable improvements or we work until you do"
            />

            <GuaranteeCard
              icon={<CheckCircle size={18} color="var(--text-primary)" />}
              title="SLA-Based Delivery Framework"
              desc="Guaranteed response times and milestone commitments"
            />
          </div>

          {/* CTA BUTTON */}
          <div className="flex justify-center relative z-10">
            <Button className="text-base font-medium">
              Start Risk Free
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Guarantee;
``;
