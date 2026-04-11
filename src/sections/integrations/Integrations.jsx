import SectionWrapper from "../../components/ui/SectionWrapper";
// import IntegrationCard from "../../components/ui/IntegrationItem";
import IntegrationCard from "./IntegrationCrad";
import StatBlock from "./StatBlock";

const integrations = [
  { name: "Shopify", type: "E-COMMERCE" },
  { name: "Klaviyo", type: "EMAIL PLATFORM" },
  { name: "Mailchimp", type: "EMAIL PLATFORM" },
  { name: "HubSpot", type: "CRM" },
  { name: "ActiveCampaign", type: "AUTOMATION" },
  { name: "Zapier", type: "INTEGRATION" },
];

const Integrations = () => {
  return (
    <div className="relative w-full overflow-hidden bg-(--bg-primary)">
      <SectionWrapper>
        {/* PANEL CONTAINER */}
        <div
          className="w-full max-w-6xl mx-auto border rounded-[32px] p-4 sm:p-10 md:p-14"
          style={{
            borderColor: "var(--border-light)",
            background: "linear-gradient(180deg,#0B1225 0%,#070B1A 100%)",
          }}
        >
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
                  <i>✦</i> Seamless Integration
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
            Works With Your Existing Stack
          </h2>

          {/* SUB TEXT */}
          <p
            className="text-center mb-12 px-4 text-(length:--text-sm) sm:text-(length:--text-lg) text-[var(--text-secondary)]"
            // style={{
            //   fontSize: "var(--text-base)",
            //   color: "var(--text-secondary)",
            // }}
          >
            Pre-built integrations with the tools you already use!
          </p>

          {/* CARDS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {integrations.map((item) => (
              <IntegrationCard key={item.name} {...item} />
            ))}
          </div>

          {/* STATS ROW */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-16 border-t border-t-(--border-light) pt-8 gap-8 text-center">
            <StatBlock value="50+" label="Platform Integrations" />
            <StatBlock value="99.9%" label="Uptime Guarantee" />
            <StatBlock value="24/7" label="Sync & Monitoring" />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Integrations;
