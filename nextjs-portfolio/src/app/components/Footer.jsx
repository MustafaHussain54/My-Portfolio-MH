import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container mx-auto flex flex-col gap-2 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <span className="font-semibold">Mustafa Hussain</span>
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} Mustafa Hussain</p>
      </div>
    </footer>
  );
};

export default Footer;
