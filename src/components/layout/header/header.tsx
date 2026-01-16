"use client";
import { CloseIcon, MenuIcon } from "@/icons/icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import DesktopNav from "./desktop-nav";
import MainMobileNav from "./main-mobile-nav";
import ThemeToggle from "./theme-toggle";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="bg-white/80 dark:bg-dark-primary/80 backdrop-blur-sm border-b dark:border-gray-800 border-gray-100 sticky top-0 z-50 py-2 lg:py-4">
      <div className="px-4 sm:px-6 lg:px-7">
        <div className="grid grid-cols-2 items-center lg:grid-cols-[1fr_auto_1fr]">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold leading-tight">
                  <span className="text-gray-900 dark:text-white">Jobir</span>
                  <span className="text-primary-500"> Ashurov</span>
                </span>
                <span className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 transition-colors">
                  Frontend Engineer
                </span>
              </div>
            </Link>
          </div>

          <DesktopNav />

          <div className="flex items-center gap-4 justify-self-end">
            <ThemeToggle />

            <button
              onClick={(e) => {
                e.stopPropagation();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              type="button"
              className="order-last shrink-0 inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 lg:hidden"
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      <MainMobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}
