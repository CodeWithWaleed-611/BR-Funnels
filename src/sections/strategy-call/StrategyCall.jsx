import SectionWrapper from "../../components/ui/SectionWrapper";
import { Clock, Video, Check, ArrowRight } from "lucide-react";
import Button from "../../components/common/Button";

const StrategyCall = () => {
  return (
    <div className="relative w-full overflow-hidden bg-(--bg-primary)">
      <SectionWrapper>
        <div className="max-w-6xl mx-auto w-full">
          {/* ✅ HEADING */}
          <div className="mb-10 lg:text-left">
            <h2
              className="mb-2 text-3xl font-semibold sm:text-[32px]"
              style={{
                color: "var(--text-primary)",
              }}
            >
              Ready to Unlock
              <br />
              <span
                style={{
                  background: "var(--gradient-heading)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Predictable Revenue Growth?
              </span>
            </h2>

            <p
              className="text-sm font-semibold sm:text-lg"
              style={{
                color: "var(--text-secondary)",
              }}
            >
              Let's build a retention system that works 24/7.
            </p>
          </div>

          {/* ✅ MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* ================= LEFT PANEL ================= */}
            <div>
              {/* TEAM */}
              <div className="flex items-center gap-3 mb-6">
                <div>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "var(--text-xs)",
                    }}
                  >
                    BR Funnels
                  </p>
                  <p
                    style={{
                      color: "var(--text-primary)",
                      fontSize: "var(--text-sm)",
                    }}
                  >
                    Growth Strategy Team
                  </p>
                </div>
              </div>

              {/* STRATEGY HEADER */}
              <h3
                className="mb-2 "
                style={{
                  fontSize: "var(--text-lg)",
                  color: "var(--text-primary)",
                  fontWeight: "var(--fw-semibold)",
                }}
              >
                Strategy Call
              </h3>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-(--bg-navbar) text-[var(--text-secondary)]">
                  <Clock size={14} />{" "}
                </div>
                <span
                  className="text-sm"
                  style={{
                    color: "var(--text-secondary)",
                  }}
                >
                  30 minutes
                </span>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                <div className="p-2 rounded-lg bg-(--bg-navbar) text-[var(--text-secondary)]">
                  <Video size={16} />
                </div>
                <span
                  className="text-sm font-semibold"
                  style={{
                    color: "var(--text-secondary)",
                  }}
                >
                  Web conferencing details provided upon confirmation.
                </span>
              </div>

              {/* GLASS CARD */}
              <div
                className="p-5 mb-6 text-center lg:text-left bg-(--bg-navbar) border border-(--border-light) rounded-xl "
                style={{}}
              >
                <p
                  className="text-base "
                  style={{
                    color: "var(--text-muted)",
                  }}
                >
                  This is a 30‑minute call to discuss how we can help scale your
                  email and SMS marketing.
                </p>

                <ul className="mt-4 space-y-3">
                  {[
                    "Quick overview of your brand and current email strategy",
                    "Biggest challenges or pain points you're seeing",
                    "Quick wins or fixes you can implement right away",
                    "Goals you have for email/SMS revenue growth",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <Check size={14} color="#fff" />
                      <span
                        className="text-[13px] "
                        style={{
                          color: "var(--text-muted)",
                        }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <p
                className="text-sm"
                style={{
                  color: "var(--text-secondary)",
                }}
              >
                • No commitment required • 100% free consultation
              </p>
            </div>

            {/* ================= RIGHT PANEL ================= */}
            <div className="flex flex-col gap-6 p-3 rounded-xl">
              {/* ✅ RIGHT PANEL CALENDAR */}
              <div className="text-(--text-primary) rounded-2xl overflow-hidden">
                <iframe
                  src="https://calendar.google.com/calendar/embed?src=waleedahmad4109%40gmail.com&ctz=UTC"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  scrolling="no"
                ></iframe>
              </div>
              <Button
                className="w-full lg:w-fit lg:self-end text-sm font-semibold"
                
              >
                Schedule a Call →
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default StrategyCall;
