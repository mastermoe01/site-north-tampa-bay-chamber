// Every fact here traces to clients/north-tampa-bay-chamber/intake.md (captured 2026-11-11).

export const SITE_URL = "https://site-north-tampa-bay-chamber.vercel.app";

const GZ = "https://business.northtampabaychamber.com";

export const site = {
  name: "North Tampa Bay Chamber",
  tagline: "Connector · Convener · Catalyst",
  phone: "(813) 994-8534",
  phoneHref: "tel:+18139948534",
  email: "office@northtampabaychamber.com",
  eventsEmail: "events@northtampabaychamber.com",
  address: {
    street: "28329 Paseo Dr. Suite 195",
    city: "Wesley Chapel",
    region: "FL",
    postal: "33543",
  },
  geo: { lat: 28.1890028, lng: -82.3467149 },
  directions:
    "https://www.google.com/maps/place/The+North+Tampa+Bay+Chamber/@28.1890028,-82.3467149,17z",
  hours: [
    { days: "Monday – Friday", time: "9 AM – 5 PM" },
    { days: "Saturday – Sunday", time: "Closed" },
  ],
  rating: { value: 5.0, count: 52, source: "Google" },
  members: "620+",
  founded: 1998,
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/northtampabaychamber" },
    { label: "Instagram", href: "https://instagram.com/northtampabaychamber" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/northtampabaychamber/" },
    { label: "YouTube", href: "https://www.youtube.com/user/wesleychapelchamber/videos" },
  ],
};

export const links = {
  join: `${GZ}/member/newmemberapp`,
  events: `${GZ}/events/calendar`,
  directory: `${GZ}/list`,
  login: `${GZ}/login`,
  contactForm: `${GZ}/contact`,
  board: `${GZ}/groups/GroupRoster/2026-board-90`,
  ambassadors: `${GZ}/groups/GroupRoster/ambassadors-95`,
  annualMeeting: `${GZ}/events/details/ntbc-business-breakfast-annual-meeting-12-01-2026-24393?calendarMonth=2026-12-01`,
  scholarshipSponsor: `${GZ}/form/view/39218`,
  glazerFund:
    "https://www.buccaneers.com/forms/2026_glazer_family_small_business_fund_grant_application",
  glazerPress:
    "https://www.northtampabaychamber.com/assets/pdf/4-30+Glazer+Family+Small+Business+Fund",
  ribbonPackage:
    "https://edge.growthzonecms.com/sites/2714/2026/06/NTBC-2026-Ribbon-Cutting-Celebration-Package.pdf",
  eventsMail: "mailto:events@northtampabaychamber.com",
  officeMail: "mailto:office@northtampabaychamber.com",
  sharkBranding: "https://sharkbrandingsolutions.com/",
  sharkReport: "https://sharkbrandingsolutions.com/free-report",
};

export const nav = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/membership", label: "Membership" },
  { href: "/foundation", label: "Foundation" },
  { href: "/advocacy", label: "Advocacy" },
  { href: "/explore", label: "Explore" },
  { href: "/contact", label: "Contact" },
];
