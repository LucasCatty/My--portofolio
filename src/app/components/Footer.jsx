import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border-t border-[#33353F] text-white z-10">
      <div className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Profile Image as Logo */}
        <Link href="images" className="flex items-center gap-3">
          <span className="text-lg font-semibold text-purple-400 hover:text-purple-300 transition">
            Lucas Cathy Nishimwe
          </span>
        </Link>

        {/* Rights Reserved */}
        <p className="text-sm text-slate-500 text-center md:text-right">
          © {new Date().getFullYear()} All rights reserved. Made with ❤️ and purpose.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
