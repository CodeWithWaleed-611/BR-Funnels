import SectionWrapper from "../../components/ui/SectionWrapper";
import { Check } from "lucide-react";

const MobileFirst = () => {
  const features = [
    {
      title: "Responsive Design by Default",
      desc: "Every email template is tested across 40+ devices and email clients.",
    },
    {
      title: "Tap‑Optimized CTA",
      desc: "Large buttons, clear spacing, and strategic placement for conversions.",
    },
    {
      title: "Lightning‑Fast Load Times",
      desc: "Optimized images and clean code ensure instant rendering on any connection.",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-(--bg-primary)">
      <SectionWrapper>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* ✅ LEFT CONTENT */}
          <div className=" lg:col-span-5 flex flex-col items-center justify-center gap-3 text-center lg:text-start lg:items-start">
            {/* ICON */}
            <div
              className="w-24 h-24 flex items-center justify-center mb-6 rounded-4xl text-4xl leading-none"
              style={{
                background: "var(--gradient-cta)",
              }}
            >
              📄
            </div>

            {/* HEADING */}
            <h2
              className="mb-2 text-3xl font-semibold sm:text-[32px]"
              style={{
                color: "var(--text-primary)",
              }}
            >
              Optimized for
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
                Mobile‑First Buyers
              </span>
            </h2>

            {/* SUBTEXT */}
            <p
              className="mb-8 text-sm font-semibold sm:text-lg"
              style={{
                color: "var(--text-secondary)",
              }}
            >
              Over 70% of emails are opened on mobile. We design for
              thumb‑friendly engagement and high conversions.
            </p>

            {/* FEATURES */}
            <div className="space-y-6">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:items-start "
                >
                  <div className="p-2.5 rounded-lg  bg-[var(--bg-card)] ">
                    <Check size={17} color="#fff" />
                  </div>

                  <div>
                    <h4
                      style={{
                        fontSize: "var(--text-lg)",
                        fontWeight: "var(--fw-semibold)",
                        color: "var(--text-primary)",
                      }}
                    >
                      {item.title}
                    </h4>

                    <p
                      style={{
                        fontSize: "var(--text-base)",
                        color: "var(--text-secondary)",
                        fontWeight: "var(--fw-normql)",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ✅ RIGHT SIDE WEBPAGE STACK */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-center gap-3 pb-3">
              {[
                "/src/assets/images/mobile-first/largepic1.jpg",
                "/src/assets/images/mobile-first/largepic2.jpg",
                "/src/assets/images/mobile-first/largepic3.jpg",
                "/src/assets/images/mobile-first/largepic4.jpg",
              ].map((img, i) => (
                <div
                  key={i}
                  className="flex-1 p-[1px] rounded-xl border-2 border-white"
                  style={{}}
                >
                  <img
                    src={img}
                    alt="email-demo"
                    className="w-full h-full object-cover rounded-[8px] "
                    
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default MobileFirst;
