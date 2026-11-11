// Sources: research/site-pages/our-team.txt, the-foundation.txt, leadership-institute.txt,
// gz-groups_GroupRoster_2026-board-90.txt, gz-groups_GroupRoster_ambassadors-95.txt (2026-11-11).

export type Person = { name: string; role: string; org?: string; photo?: string };

export const team: Person[] = [
  { name: "Hope Kennedy, CCE", role: "President & CEO", photo: "/people/hope-kennedy.jpg" },
  { name: "Sabina Magana", role: "Administrative Assistant", photo: "/people/sabina-magana.jpg" },
  { name: "Sarah H. Rasheid", role: "Chief Content Creator", photo: "/people/sarah-rasheid-team.jpg" },
];

export const board: Person[] = [
  { name: "Tony Benge", role: "2026 Chair", org: "Benge Development, President" },
  { name: "Chad Emory", role: "Chair Elect", org: "Emorys Rock Realty, Broker" },
  { name: "Ralph Sevelius", role: "Treasurer", org: "Boardwalk Wealth Solutions, Senior Wealth Advisor" },
  { name: "Will Atkins", role: "Vice Chair Governmental Affairs", org: "Cinn-Credible Cinnamon Packets, Founder" },
  { name: "Albert Verile, CFE", role: "Vice Chair – Economic Development", org: "Sharpline Investigations®, Founder" },
  { name: "Lisa Moore", role: "Vice Chair Membership", org: "Hilton Garden Inn Tampa – Wesley Chapel, Regional Director of Sales" },
  { name: "Angelique Lenox", role: "2025 Board Chair", org: "Girl Scouts of West Central Florida, Chief Relationship Officer" },
  { name: "Hope Kennedy, CCE", role: "Secretary", org: "North Tampa Bay Chamber, President/CEO" },
  { name: "Jennifer Batchelor", role: "Board Member", org: "Pasco County School Career, Technical and Adult Education, Program Specialist" },
  { name: "Kathleen Bogolea", role: "Board Member", org: "Johns Hopkins All Children's Hospital, Sr. Assoc Director of Foundation" },
  { name: "Tye Fowler", role: "Board Member", org: "SGD Communications, Inc., Chief Strategy Officer" },
  { name: "Ryan Fink", role: "Board Member", org: "Volkswagen of Wesley Chapel, Operations Manager" },
  { name: "Jamie Hess", role: "Board Member", org: "Computer Emergency Room, Owner" },
  { name: "Roberto Hiller", role: "Board Member", org: "Signs of Tampa Bay dba Signarama New Tampa & YESCO Tampa, CEO" },
  { name: "Denelle Miller", role: "Board Member", org: "FiCare Federal Credit Union, Healthcare's Financial Partner, CEO" },
  { name: "Cheryl Pollock", role: "Board Member", org: "Premier Community Healthcare Group, Inc., Chief Advancement & Community Engagement Officer" },
  { name: "Traci Ryan, D.O", role: "Board Member", org: "Orlando Health, Emergency Department Medical Director" },
  { name: "Chuck Sullivan", role: "Board Member", org: "McFarland Gould Law, Managing Partner" },
  { name: "Troy Stevenson", role: "Board Member", org: "Tampa Bay Mobile Billboards, CEO" },
  { name: "Jean Carlo Peñaloza", role: "Board Member", org: "Captured Now Photography, Owner" },
];

export const ambassadors: Person[] = [
  { name: "John Austin-Willis", role: "Concierge Officer", org: "USF Credit Union – New Tampa" },
  { name: "April Emory", role: "Realtor", org: "Emorys Rock Realty" },
  { name: "Lilly Gonzalez", role: "Director of Community Relations", org: "Blue Heron Senior Living Community" },
  { name: "Jannah Nager", role: "Ambassador", org: "New Tampa & Wesley Chapel Neighborhood News" },
  { name: "Lesia Napodano", role: "Retail Market Manager", org: "Synovus Bank – Wesley Chapel" },
  { name: "Jennie Yingling", role: "Director of Development and Community Engagement", org: "Metropolitan Ministries" },
];

// Photo-to-name mapping read from the source HTML order, not the name order.
export const foundationBoard: Person[] = [
  { name: "Michael Berthelette", role: "Chairman of the Board", org: "CEO | Platinum Salon", photo: "/people/michael-berthelette-foundation.jpg" },
  { name: "Cornelius Demps", role: "Trustee", org: "The Demps Law Firm", photo: "/people/cornelius-demps.jpg" },
  { name: "Aaron Banks", role: "Trustee", org: "Furr Wegman & Banks Architects", photo: "/people/aaron-banks.jpg" },
  { name: "Steve Domonkos", role: "Trustee", org: "The Shops at Wiregrass", photo: "/people/steve-domonkos.jpg" },
  { name: "Jeff Novotny", role: "Trustee", org: "American Consulting Engineers", photo: "/people/jeff-novotny.jpg" },
  { name: "Connie Bladon", role: "Trustee", org: "AdventHealth Wesley Chapel", photo: "/people/connie-bladon.jpg" },
];

export const fellows: Person[] = [
  { name: "Casey Sumner", role: "Director of Development", org: "Orlando Health", photo: "/people/casey-sumner.jpg" },
  { name: "Ryan Ward", role: "Sr. Manager, Business Planning & Operations", org: "Florida Blue", photo: "/people/ryan-ward.jpg" },
  { name: "Cassandra Garvey", role: "Executive Director", org: "Career Focus Inc.", photo: "/people/cassandra-garvey.jpg" },
  { name: "Natasha Faith Beckel", role: "Imaging Manager", org: "BayCare Hospital Wesley Chapel", photo: "/people/natasha-faith-beckel.jpg" },
  { name: "Heather Hughes", role: "Owner", org: "Optimum Health & Wellness", photo: "/people/heather-hughes.jpg" },
  { name: "Natalie Oulton", role: "Firm Administrator", org: "McFarland, Gould, Lyons, Sullivan & Hogan, P.A.", photo: "/people/natalie-oulton.jpg" },
  { name: "Mariana Alvarez", role: "Founder and CEO", org: "Controller Works", photo: "/people/mariana-alvarez.jpg" },
  { name: "Don Copeland", role: "Regional Manager", org: "The Copeland Team, Powered by Benchmark Mark Mortgage", photo: "/people/don-copeland.jpg" },
  { name: "Dustin Gothard", role: "Vice President Member Experience", org: "FiCare Federal Credit Union", photo: "/people/dustin-gothard.jpg" },
  { name: "Dr. Mae McKinney", role: "Founder / Head of School", org: "Tampa Early College Academy", photo: "/people/mae-mckinney.jpg" },
  { name: "Michael Berthelette", role: "CEO / Chief Community Officer", org: "Platinum Salon", photo: "/people/michael-berthelette.jpg" },
  { name: "Tracy Burke", role: "APRN / CEO", org: "Inside Out Aesthetics & Wellness", photo: "/people/tracy-burke.jpg" },
];

export const fellowsFacilitator: Person = {
  name: "Dr. Jacqueline Nelms", role: "Program Facilitator", org: "Founder & CEO, Mindful Elevation", photo: "/people/jacqueline-nelms.jpg",
};
export const fellowsCoordinator: Person = {
  name: "Sarah H. Rasheid", role: "Program Coordinator", org: "Chief Content Creator, North Tampa Bay Chamber", photo: "/people/sarah-rasheid.jpg",
};
