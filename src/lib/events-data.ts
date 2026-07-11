import type { DraisEvent } from "@/types";

const TIME = "Evening (after midnight)";
const flyer = (f: string) => `/images/events/${f}`;

// Upcoming events, verbatim from draisgroup.com (Swiper carousel, 24 slides).
export const EVENTS: DraisEvent[] = [
  { date: "Jul 9", time: TIME, title: "Leverage", image: flyer("c2eak-1782347378422-13oa.jpeg") },
  { date: "Jul 10", time: TIME, title: "Nomadiq", image: flyer("9h3ji-1782347441587-hnla.jpeg") },
  { date: "Jul 11", time: TIME, title: "House • Hip-Hop", image: flyer("fbvgw-1782763579030-ufhn.jpeg") },
  { date: "Jul 12", time: TIME, title: "Latin • Hip-Hop", image: flyer("4ityx-1783548124405-hitc.jpeg") },
  { date: "Jul 13", time: TIME, title: "Drai's After Hours", image: flyer("utpqr-1781905733377-labw.jpeg") },
  { date: "Jul 14", time: TIME, title: "DJ Marx", image: flyer("ejkss-1782347814726-7aan.jpeg") },
  { date: "Jul 15", time: TIME, title: "Patrick Cornett", image: flyer("dm1vp-1782347830035-e0qe.jpeg") },
  { date: "Jul 16", time: TIME, title: "DJ Poun", image: flyer("11udz-1782348093065-gw6f.jpeg") },
  { date: "Jul 17", time: TIME, title: "DJ Nino", image: flyer("uap6d-1782348124390-7mzo.jpeg") },
  { date: "Jul 18", time: TIME, title: "House • Space Yacht", image: flyer("pfcfh-1783035932248-ssir.jpeg") },
  { date: "Jul 19", time: TIME, title: "Latin • Hip-Hop", image: flyer("f69wf-1783560123910-og9c.jpeg") },
  { date: "Jul 23", time: TIME, title: "Lucky Lou", image: flyer("ladaw-1783024954770-hgrf.jpeg") },
  { date: "Jul 24", time: TIME, title: "Flowfly", image: flyer("dm9jk-1783024995871-pecm.jpeg") },
  { date: "Jul 25", time: TIME, title: "House • Hip-Hop", image: flyer("4ttvs-1779927236421-rq8l.avif") },
  { date: "Jul 26", time: TIME, title: "Last Call", image: flyer("ip5iu-1783026048127-6esi.jpeg") },
  { date: "Jul 30", time: TIME, title: "VTech", image: flyer("p7w9q-1783026533129-1pgi.jpeg") },
  { date: "Jul 31", time: TIME, title: "Leverage", image: flyer("goucu-1783026546304-4rf6.jpeg") },
  { date: "Aug 1", time: TIME, title: "House • Hip-Hop", image: flyer("4ttvs-1779927236421-rq8l.avif") },
  { date: "Aug 2", time: TIME, title: "Latin • Hip-Hop", image: flyer("f69wf-1783560123910-og9c.jpeg") },
  { date: "Aug 6", time: TIME, title: "R&B Thursdays", image: flyer("vukma-1779925522025-v3te.avif") },
  { date: "Aug 7", time: TIME, title: "Only At Drai's", image: flyer("evker-1779925983860-bn9w.avif") },
  { date: "Aug 8", time: TIME, title: "House • Hip-Hop", image: flyer("4ttvs-1779927236421-rq8l.avif") },
  { date: "Aug 9", time: TIME, title: "Latin • Hip-Hop", image: flyer("f69wf-1783560123910-og9c.jpeg") },
  { date: "Aug 13", time: TIME, title: "R&B Thursdays", image: flyer("zhnfs-1779925519435-bkgy.avif") },
].map((e) => ({
  ...e,
  ticketsHref: "#tickets",
  reservationHref: "#reservation",
}));

// Instagram photo strip (marquee).
export const GALLERY_PHOTOS: string[] = [
  "/images/gallery/photo-01.avif",
  "/images/gallery/photo-02.avif",
  "/images/gallery/photo-03.avif",
  "/images/gallery/photo-04.avif",
  "/images/gallery/photo-05.avif",
  "/images/gallery/photo-06.avif",
  "/images/gallery/photo-07.avif",
  "/images/gallery/photo-08.avif",
  "/images/gallery/photo-09.avif",
  "/images/gallery/photo-10.avif",
  "/images/gallery/photo-11.avif",
  "/images/gallery/photo-12.jpeg",
];
