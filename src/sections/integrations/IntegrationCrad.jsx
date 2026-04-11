const IntegrationCard = ({ name, type, icon }) => {
  return (
    <div
      className="w-full flex items-center gap-4 px-5 py-4 rounded-[var(--radius-xl)] transition-all duration-300 ease-in-out hover:-translate-y-1"
      style={{
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--border-light)",
      }}
    >
      {/* ICON */}
      <div className="p-3 bg-[rgba(139,92,246,0.10)] rounded-(--radius-xl)">
        <div
          className="w-8 h-8 flex items-center justify-center rounded-lg shrink-0"
          style={{
            background: "var(--gradient-cta)",
          }}
        >
          {icon ? (
            icon
          ) : (
            <span className="text-white text-sm font-semibold">
              {name.charAt(0)}
            </span>
          )}
        </div>
      </div>

      {/* TEXT */}
      <div className="flex flex-col">
        {/* Integration Name */}
        <h4
          style={{
            fontSize: "var(--text-lg)",
            fontWeight: "var(--fw-medium)",
            color: "var(--text-primary)",
          }}
        >
          {name}
        </h4>

        {/* Category Badge */}
        <span
          className="mt-1 px-2 py-[2px] rounded-(--radius-xs) uppercase tracking-wide w-fit"
          style={{
            fontSize: "10px",
            border: "1px solid var(--border-light)",
            color: "var(--text-muted)",
          }}
        >
          {type}
        </span>
      </div>
    </div>
  );
};

export default IntegrationCard;
