import SectionWrapper from "../../components/ui/SectionWrapper";
import { FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";
import { ArrowRight } from "lucide-react";
import Button from "../../components/common/Button";

const Footer = () => {
  return (
    <div className="relative w-full overflow-hidden bg-(--bg-primary)">
      <SectionWrapper>
        <div className="w-full mx-auto xl:px-15">
          {/* ================= TOP FOOTER ================= */}

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10
                        text-center md:text-left"
          >
            {/* -------- LOGO AREA -------- */}
            <div>
              <h3
                className="mb-3 text-2xl font-semibold sm:text-[26px] xl:text-[28px]"
                style={{
                  background: "var(--gradient-cta)",
                  backgroundClip: "text",

                  color: "transparent",
                }}
              >
                BR FUNNELS
              </h3>

              <p
                className="mb-4 text-sm"
                style={{
                  color: "var(--text-secondary)",
                }}
              >
                Performance‑driven email & SMS growth systems.
              </p>

              {/* SOCIALS */}
              <div className="flex justify-center md:justify-start gap-3">
                {[FiLinkedin, FiTwitter, FiInstagram].map((Icon, i) => (
                  <div
                    key={i}
                    className="p-2.5 border border-(--border-light) bg-(--bg-navbar) rounded-[10px]"
                    style={{
                      borderColor: "var(--border-light)",
                    }}
                  >
                    <Icon size={18} color="#fff" />
                  </div>
                ))}
              </div>
            </div>

            {/* -------- SERVICES -------- */}
            <div>
              <h4
                className="mb-4 text-base font-semibold"
                style={{
                  color: "var(--text-primary)",
                }}
              >
                Services
              </h4>

              <ul className="space-y-2">
                {[
                  "Email Marketing Audit",
                  "Full Management",
                  "SMS Marketing",
                  "Funnel Strategy",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: "var(--text-sm)",

                      color: "var(--text-secondary)",
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* -------- COMPANY -------- */}
            <div>
              <h4
                className="mb-4"
                style={{
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--fw-semibold)",
                  color: "var(--text-primary)",
                }}
              >
                Company
              </h4>

              <ul className="space-y-2">
                {["Case Studies", "Process", "About", "Contact"].map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: "var(--text-sm)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* -------- SUBSCRIBE -------- */}
            <div>
              <h4
                className="mb-3"
                style={{
                  fontSize: "var(--text-base)",
                  fontWeight: "var(--fw-semibold)",
                  color: "var(--text-primary)",
                }}
              >
                Get Weekly Growth Insights
              </h4>

              <p
                className="mb-4"
                style={{
                  fontSize: "var(--text-sm)",
                  color: "var(--text-secondary)",
                }}
              >
                Expert tips on email marketing and funnel optimization.
              </p>

              {/* EMAIL BOX */}
              <div className="flex justify-center md:justify-start">
                <div className="w-full flex flex-col sm:flex-row gap-2 overflow-hidden border">
                  <input
                    type="text"
                    placeholder="Your email"
                    className="w-full sm:w-4/6 px-3 py-2 outline-none  border border-(--bg-navbar) bg-(--border-light) rounded-xl"
                    style={{
                      color: "var(--text-primary)",
                      fontSize: "var(--text-sm)",
                    }}
                  />

                  <Button className="w-full sm:w-2/6 flex items-center justify-center">
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* ================= DIVIDER ================= */}
          <div
            className="my-8"
            style={{
              borderTop: "1px solid var(--border-light)",
            }}
          />

          {/* ================= BOTTOM ================= */}
          <div
            className="flex flex-col md:flex-row justify-between gap-4
                     items-center text-center md:text-left"
          >
            <p
              style={{
                fontSize: "var(--text-xs)",
                color: "var(--text-secondary)",
              }}
            >
              © 2026 BR Funnels. All rights reserved.
            </p>

            <div className="flex gap-6">
              <span
                style={{
                  fontSize: "var(--text-xs)",
                  color: "var(--text-secondary)",
                }}
              >
                Privacy Policy
              </span>
              <span
                style={{
                  fontSize: "var(--text-xs)",
                  color: "var(--text-secondary)",
                }}
              >
                Terms of Service
              </span>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Footer;
