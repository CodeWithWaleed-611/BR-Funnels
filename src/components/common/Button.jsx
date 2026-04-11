import clsx from "clsx";

const Button = ({ children, className}) => {
  return (
    <button 
className={clsx(
  "px-6 py-3.5 rounded-xl font-semibold text-white bg-[linear-gradient(90deg,#8B5CF6_0%,#6366F1_40%,#38BDF8_100%)] hover:opacity-90 transition duration-300 ease-in-out shadow-lg",
  className
)}
 >
      {children}
    </button>
  );
};

export default Button;
