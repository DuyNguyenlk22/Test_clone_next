// Content types for the Drai's After Hours clone.

export interface NavLink {
  label: string;
  href: string;
}

/** A single upcoming-event card in the events carousel. */
export interface DraisEvent {
  /** e.g. "Jul 9" */
  date: string;
  /** e.g. "Evening (after midnight)" */
  time: string;
  /** Headliner or theme, e.g. "LEVERAGE" or "HOUSE • HIP-HOP" */
  title: string;
  /** Local path to the event flyer image. */
  image: string;
  ticketsHref: string;
  reservationHref: string;
}

/** A featured experience card (VIP / Bottle Service). */
export interface ExperienceItem {
  title: string;
  subtitle: string;
  image: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface FooterColumn {
  heading: string;
  links: NavLink[];
}
