import Image from "next/image";
import Link from "next/link";
import {
  DraisLogo,
  LocationIcon,
  PhoneIcon,
  InstagramIcon,
  XIcon,
  FacebookIcon,
} from "@/components/icons";

interface FooterLink {
  label: string;
  href: string;
}

const draisLinks: FooterLink[] = [
  { label: "EVENTS", href: "/events" },
  { label: "RESERVATIONS", href: "/reservations" },
  { label: "PRIVATE EVENTS", href: "/private-events" },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT", href: "/contact" },
];

const exploreLinks: FooterLink[] = [
  { label: "PHOTOS", href: "/photos" },
  { label: "PRESS", href: "/press" },
  { label: "CAREERS", href: "/careers" },
  { label: "FAQs", href: "/faqs" },
  { label: "BOOK A ROOM", href: "/book-a-room" },
];

const legalLinks = ["Privacy Policy", "Sitemap", "Website Terms of Use", "Legal"];

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#2c0906" }} className="pt-16 pb-10">
      <div className="site-container">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Left block */}
          <div>
            <DraisLogo className="h-14 w-auto text-white" />
            <div className="mt-6 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-white">
                <LocationIcon className="h-6 w-6" />
                <a
                  href="https://maps.app.goo.gl/sx3ZEi92iFkPadVE7"
                  className="hover:opacity-70"
                >
                  3595 S Las Vegas Blvd.
                </a>
              </div>
              <div className="flex items-center gap-2 text-white">
                <PhoneIcon className="h-6 w-6" />
                <a href="tel:(702)777-3800" className="hover:opacity-70">
                  (702) 777-3800
                </a>
              </div>
            </div>
            <div className="mt-4 flex gap-4">
              <a href="#">
                <InstagramIcon className="h-5 w-5 text-white hover:opacity-70" />
              </a>
              <a href="#">
                <XIcon className="h-5 w-5 text-white hover:opacity-70" />
              </a>
              <a href="#">
                <FacebookIcon className="h-5 w-5 text-white hover:opacity-70" />
              </a>
            </div>
          </div>

          {/* Right columns */}
          <div className="flex flex-wrap gap-12">
            <div>
              <h3 className="font-heading text-base font-bold uppercase text-white mb-4">
                DRAI&rsquo;S
              </h3>
              <div className="flex flex-col gap-2">
                {draisLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-heading text-[15px] uppercase text-white hover:opacity-70"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-heading text-base font-bold uppercase text-white mb-4">
                EXPLORE
              </h3>
              <div className="flex flex-col gap-2">
                {exploreLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-heading text-[15px] uppercase text-white hover:opacity-70"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-heading text-base font-bold uppercase text-white mb-4">
                HOURS
              </h3>
              <div className="flex flex-col gap-2">
                <p className="text-white/90 text-[15px]">Thursday - Sunday:</p>
                <p className="text-white/90 text-[15px]">Doors at 1AM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom legal bar */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-white/70">
          <p>
            {"© Drai’s Group 2026. All Rights Reserved | "}
            {legalLinks.map((label, index) => (
              <span key={label}>
                {index > 0 && " | "}
                <a href="#" className="hover:text-white">
                  {label}
                </a>
              </span>
            ))}
          </p>
          <div className="flex flex-col items-end">
            <span>Powered by</span>
            <Image
              src="/images/speakeasy-logo.avif"
              alt="Speakeasy"
              width={120}
              height={16}
              className="h-4 w-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
