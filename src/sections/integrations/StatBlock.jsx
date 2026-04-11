const StatBlock = ({ value, label }) => {
  return (
    <div>

      <h3 className="text-(length:--text-3xl) sm:text-(length:--text-4xl)"
        style={{
          fontWeight: "var(--fw-extrabold)",
          background: "var(--gradient-cta)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          WebkitTextFillColor: "transparent",
        }}
      >
        {value}
      </h3>

      <p
        className="uppercase mt-1 text-(length:--text-xs) sm:text-(length:--text-sm) tracking-widest font-medium"
        style={{
          color: "var(--text-muted)",
        }}
      >
        {label}
      </p>
    </div>
  );
};

export default StatBlock;
``