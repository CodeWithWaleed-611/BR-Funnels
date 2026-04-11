const BrandLogoCard = ({ brand }) => {
  return (
    <div
      className="w-full p-[1px] rounded-[var(--radius-2xl)] transition duration-300"
      style={{
        background: "var(--gradient-cta)",
      }}
    >
      <div
        className="w-full flex items-center justify-center py-6 rounded-[calc(var(--radius-2xl)-1px)] text-sm"
        style={{
          backgroundColor: "var(--bg-card)",
          color: "var(--text-primary)",
          fontSize: "var(--text-base)",
          fontWeight: "var(--fw-medium)",
        }}
      >
        {brand}
      </div>
    </div>
  );
};

export default BrandLogoCard;