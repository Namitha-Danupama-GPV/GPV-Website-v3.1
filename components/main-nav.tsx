"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";
import { CrossIcon } from "./cross";
import { HamburgerMenu } from "./hamburger";
import { cn } from "@/lib/utils";

export function MainNav() {
  const pathname = usePathname();
  const isMobile = useMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/our-products", label: "Our Products" },
    { href: "/our-services", label: "Our Services" },
    { href: "/Industries", label: "Industries"},
    { href: "/why-choose-us", label: "Why Choose Us?" },
    { href: "/careers", label: "Careers" },
  ];

  const image = '/Logo-v7.png';

  const normalizePath = (path: string) => path.replace(/\/+$/, '') || '/';

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-b from-blue-50 via-emerald-50 to-white">
      <div className="container flex h-20 items-center justify-between px-0 md:px-0">
        {/* Logo section - remove horizontal padding */}
        <div className="p-4">
          <Link href="/" className="flex items-center">
            <Image
              src={image}
              alt="Global Pearl Ventures Logo"
              width={64}
              height={64}
              priority
              className="h-14 w-14 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-16 lg:w-16 object-contain"
            />
          </Link>
        </div>

        {/* Mobile view */}
        {isMobile ? (
          <>
            <Button
              variant="ghost"
              onClick={toggleMenu}
              className="md:hidden flex items-center justify-center min-h-[56px] min-w-[56px] p-0 m-0"
            >
              {isMenuOpen ? (
                <CrossIcon />
              ) : (
                <HamburgerMenu />
              )}
            </Button>

            {isMenuOpen && (
              <div className="absolute top-16 left-0 right-0 bg-white border-b shadow-lg z-50">
                <nav className="flex flex-col p-4 space-y-4">
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
                  <Link
                    href="/get-in-touch"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Contact Us
                    </Button>
                  </Link>
                </nav>
              </div>
            )}
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
              <Button className="h-10 text-md w-auto bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white">
                Get in Touch
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}