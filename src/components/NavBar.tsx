"use client";

import { useState } from "react";
import Link from "next/link";
import { DraisLogo, MenuIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

const NAV_LINKS: { label: string; href: string }[] = [
  { label: "EVENTS", href: "/events" },
  { label: "RESERVATIONS", href: "/reservations" },
  { label: "PRIVATE EVENTS", href: "/private-events" },
  { label: "PHOTOS", href: "/photos" },
  { label: "CONTACT", href: "/contact" },
];

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-[99999] h-[91px] bg-[rgba(38,3,3,0.1)] backdrop-blur-[5px]">
      <div className="site-container flex h-full items-center justify-between">
        {/* Left: logo */}
        <Link href="/" aria-label="Drai's After Hours home">
          <DraisLogo className="h-10 w-auto text-white" />
        </Link>

        {/* Center: desktop nav links */}
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-heading text-[14px] uppercase text-white transition hover:opacity-70"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: desktop BOOK NOW */}
        <Link
          href="/events"
          className="hidden rounded-[10px] border border-white px-[26px] py-3 font-heading text-base font-bold uppercase text-white transition-colors hover:bg-white hover:text-black lg:inline-block"
        >
          Book Now
        </Link>

        {/* Mobile: menu toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="lg:hidden"
        >
          <MenuIcon className="h-8 w-8 text-white" />
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div
          className={cn(
            "absolute inset-x-0 top-[91px] flex flex-col gap-4 bg-[#260303] p-6 lg:hidden",
          )}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-heading text-base uppercase text-white transition hover:opacity-70"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/events"
            onClick={() => setOpen(false)}
            className="rounded-[10px] border border-white px-[26px] py-3 text-center font-heading text-base font-bold uppercase text-white transition-colors hover:bg-white hover:text-black"
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
}
