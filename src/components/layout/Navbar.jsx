import { useState } from "react";
import Button from "../common/Button";
import { FiPhoneCall, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50 bg-[#0B0F1A] py-4 border-b-[0.5px] border-b-[#b9b9b9]">
      <div className="w-full mx-auto flex justify-between items-center px-4 lg:px-8 max-w-full lg:max-w-5xl xl:max-w-7xl 2xl:max-w-360">

        {/* Logo */}
        <h1 className="text-2xl sm:text-[26px] xl:text-[28px] font-bold bg-[linear-gradient(90deg,#8B5CF6_0%,#6366F1_40%,#38BDF8_100%)] bg-clip-text text-transparent">
          BR FUNNELS
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-12 text-white/90 text-lg font-medium">
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#case-studies" className="hover:text-white transition">Case Studies</a>
          <a href="#clients" className="hover:text-white transition">Our Clients</a>
          <a href="#process" className="hover:text-white transition">Our Process</a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button>
            <div className="flex items-center gap-2 text-lg">
              <FiPhoneCall size={20} />
              Book a Call
            </div>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="text-white text-3xl lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="lg:hidden bg-[#0B0F19] px-6 py-4 space-y-4 text-white/90 text-lg font-medium border-t border-white/10">
          <a href="#services" className="block hover:text-white transition">Services</a>
          <a href="#case-studies" className="block hover:text-white transition">Case Studies</a>
          <a href="#clients" className="block hover:text-white transition">Our Clients</a>
          <a href="#process" className="block hover:text-white transition">Our Process</a>

          {/* Mobile CTA Button */}
          <Button>
            <div className="flex items-center gap-2 text-lg">
              <FiPhoneCall size={20} />
              Book a Call
            </div>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;