const StatCard = ({ value, label, className }) => {
  return (
    <div className={className}>
      <h2 className="text-2xl bg-[linear-gradient(90deg,#8B5CF6_0%,#6366F1_40%,#38BDF8_100%)] bg-clip-text text-transparent sm:text-[32px] font-bold">{value}</h2>
      <p className="text-xs sm:text-base text-[#b9b9b9] mt-1">{label}</p>
    </div>
  );
};

export default StatCard;