// Verbatim from clients/north-tampa-bay-chamber/assets/reviews.md (captured 2026-11-11).

export type Review = { name: string; detail: string; stars?: number; source: string; text: string[]; photo?: string };

export const reviews: Review[] = [
  {
    name: "Michelle Stanaland",
    detail: "CEO, Shark Branding Solutions",
    stars: 5,
    source: "Google review",
    photo: "/people/michelle-stanaland.jpg",
    text: [
      "The North Tampa Bay Chamber has been one of the best investments we’ve made. Hope and Sarah are incredible at connecting businesses and creating real community. They’ve introduced us to so many local business owners, and those relationships have already turned into meaningful opportunities.",
      "Their events and networking are top‑tier — high‑value, well‑run, and full of people who genuinely want to support each other. If you’re looking for a Chamber that actually helps you grow, this is it.",
    ],
  },
  {
    name: "Kasie Copeland",
    detail: "The Copeland Team at Benchmark Mortgage",
    source: "Member testimonial",
    photo: "/people/kasie-copeland.jpg",
    text: [
      "The North Tampa Bay Chamber is THE BEST chamber we have ever been a part of! The expertise, knowledge and overall care for local businesses is top notch. Much of our success is due to the chamber as well as the connections we have made through the chamber! THANK YOU!",
    ],
  },
  {
    name: "Will Abraham",
    detail: "Local Guide",
    stars: 5,
    source: "Google review",
    text: [
      "I'm so thankful for the connections I have made through the North Tampa Bay Chamber. Hope and Darlene have led the way for local businesspeople to interact. I love the flexible structure - come to as many or as few events as you want. Each each time I attend something, I meet new people and learn new things.",
    ],
  },
  {
    name: "Anthony Masella Jr",
    detail: "Local Guide",
    stars: 5,
    source: "Google review",
    text: [
      "The North Tampa Bay Chamber is the leader in innovative ideas to bring added value to networking with collaboration between Businesses, (large, medium and small), Government and Education. It is what helps keep our community strong as it faces the challenges of rapid growth and opportunity.",
    ],
  },
];

export const partners: { file: string; name: string }[] = [
  { file: "orlando-health.jpg", name: "Orlando Health" },
  { file: "adventhealth.jpg", name: "AdventHealth Wesley Chapel" },
  { file: "johns-hopkins-all-childrens.jpg", name: "Johns Hopkins All Children's Hospital" },
  { file: "baycare.jpg", name: "BayCare" },
  { file: "florida-blue.jpg", name: "Florida Blue" },
  { file: "usf-college-of-education.jpg", name: "USF College of Education" },
  { file: "buccaneers.jpg", name: "Tampa Bay Buccaneers" },
  { file: "worthington-agency.jpg", name: "Worthington Agency" },
  { file: "citizens-bank.jpg", name: "Citizens Bank" },
  { file: "hilton-garden-inn.jpg", name: "Hilton Garden Inn Tampa – Wesley Chapel" },
  { file: "vesh-catering.jpg", name: "Vesh Catering" },
  { file: "parks-lincoln.jpg", name: "Parks Lincoln of Tampa" },
  { file: "parks-ford.jpg", name: "Parks Ford of Wesley Chapel" },
  { file: "signs-of-tampa-bay.jpg", name: "Signs of Tampa Bay" },
  { file: "waste-connections.jpg", name: "Waste Connections" },
  { file: "metro-development.jpg", name: "Metro Development Group" },
  { file: "benge-development.jpg", name: "Benge Development" },
  { file: "demetree-real-estate.png", name: "Demetree Real Estate Services" },
  { file: "emorys-rock-realty.jpg", name: "Emorys Rock Realty" },
  { file: "charities-pasco-sheriff.jpg", name: "Pasco Sheriff Charities" },
  { file: "avalon-park.jpg", name: "Avalon Park Downtown Wesley Chapel" },
  { file: "clean-freak.png", name: "Clean Freak" },
  { file: "brothers-colors-painting.png", name: "Brothers Colors Painting" },
  { file: "phsc.jpg", name: "Pasco-Hernando State College" },
  { file: "shark-branding.png", name: "Shark Branding Solutions" },
  { file: "st-josephs-north.jpg", name: "St. Joseph's Hospital-North" },
  { file: "veteran-air.jpg", name: "Veteran Air" },
];
