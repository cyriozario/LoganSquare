// src/components/Navbar.tsx
import React from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import logo from "../../public/images/d&m.webp";

export default function Navbar() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex items-center justify-between px-6 py-8">
        {/* Logo */}
        <a href="/">
          <img src={logo} alt="Logo" className="h-20" />
        </a>

        {/* Desktop nav: simple inline links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-gray-900 font-medium transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger + sheet */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className={buttonVariants({ variant: "ghost" })}>
                <MenuIcon size={24} />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-3/4 p-6 [&>button:last-child]:hidden"
            >
              {/* 1. Accessible Sheet Header */}

              {/* 2. Close Button */}
              <div className="flex justify-end">
                <SheetClose asChild>
                  <button className={buttonVariants({ variant: "ghost" })}>
                    <XIcon />
                  </button>
                </SheetClose>
              </div>

              {/* 3. Your link list */}
              <ul className="mt-6 space-y-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block text-lg font-medium text-gray-700 hover:text-gray-900"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
