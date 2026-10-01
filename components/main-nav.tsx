"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";
import { CrossIcon } from "./cross";
import { HamburgerMenu } from "./hamburger";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

export function MainNav() {
  const pathname = usePathname();
  const isMobile = useMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Automatically close mobile menu whenever path changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/our-products", label: "Our Products" },
    { href: "/our-services", label: "Our Services" },
    { href: "/Industries", label: "Industries" },
    { href: "/why-choose-us", label: "Why Choose Us?" },
    { href: "/careers", label: "Careers" },
  ];

  const image = '/Logo-v7.png';

  const normalizePath = (path: string) => path.replace(/\/+$/, '') || '/';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-100/80 bg-white/95 backdrop-blur-xl shadow-sm">
      <div className="container flex h-20 items-center justify-between px-4 md:px-6 mx-auto max-w-7xl">
        {/* Logo section */}
        <div className="flex items-center">
          <Link href="/" onClick={closeMenu} className="flex items-center group">
            <Image
              src={image}
              alt="Global Pearl Ventures Logo"
              width={64}
              height={64}
              priority
              className="h-14 w-14 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-16 lg:w-16 object-contain transition-transform group-hover:scale-105"
            />
          </Link>
        </div>

        {/* Mobile view */}
        {isMobile ? (
          <>
            <Button
              variant="ghost"
              onClick={toggleMenu}
              className="flex items-center justify-center min-h-[48px] min-w-[48px] p-2 text-gray-700 hover:bg-blue-50/60 rounded-full transition-colors"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isMenuOpen ? <CrossIcon /> : <HamburgerMenu />}
            </Button>

            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -12, scaleY: 0.96 }}
                  animate={{ opacity: 1, y: 0, scaleY: 1 }}
                  exit={{ opacity: 0, y: -12, scaleY: 0.96 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-blue-100 shadow-2xl shadow-blue-950/10 p-5 rounded-b-3xl z-50"
                >
                  <nav className="flex flex-col space-y-1.5">
                    {navItems.map((item) => {
                      const isActive = normalizePath(pathname) === normalizePath(item.href);
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={closeMenu}
                          className={cn(
                            "flex items-center justify-between px-4 py-3 rounded-2xl text-base font-semibold transition-all duration-200 active:scale-[0.99]",
                            isActive
                              ? "bg-gradient-to-r from-blue-50/90 via-teal-50/60 to-emerald-50/40 text-blue-700 border border-blue-200/70 shadow-sm"
                              : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/40"
                          )}
                        >
                          <span>{item.label}</span>
                          <ChevronRight
                            className={cn(
                              "h-4 w-4 transition-transform",
                              isActive ? "text-blue-600 translate-x-0.5" : "text-gray-400"
                            )}
                          />
                        </Link>
                      );
                    })}

                    <div className="pt-3 border-t border-gray-100 mt-2">
                      <Link href="/get-in-touch" onClick={closeMenu}>
                        <Button className="w-full h-12 text-base font-semibold bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white rounded-full shadow-lg shadow-blue-600/20 active:scale-98 transition-transform">
                          Get in Touch
                        </Button>
                      </Link>
                    </div>
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        ) : (
          <nav className="flex items-center gap-6 px-0 md:px-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-md font-medium transition-colors hover:text-blue-600",
                  normalizePath(pathname) === normalizePath(item.href)
                    ? "text-blue-600 underline underline-offset-4 decoration-2"
                    : "text-gray-600"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/get-in-touch">
              <Button className="h-10 text-md w-auto bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white rounded-full px-6 shadow-md transition-transform hover:scale-105">
                Get in Touch
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}