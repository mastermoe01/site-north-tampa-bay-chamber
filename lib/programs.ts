// Program copy is verbatim from the chamber's own pages, saved in
// clients/north-tampa-bay-chamber/research/site-pages/<source>.txt (captured 2026-11-11).
import { links } from "./site";

export type Pillar = "connector" | "convener" | "catalyst";

export const pillars: { id: Pillar; name: string; line: string; color: string }[] = [
  {
    id: "connector",
    name: "Connector",
    line: "Building meaningful relationships between business, leaders, and the community through networking, celebration, and shared opportunities.",
    color: "var(--teal)",
  },
  {
    id: "convener",
    name: "Convener",
    line: "Bringing business leaders, elected officials, educators, and community partners together to share ideas, solve challenges, and shape the future of North Tampa Bay.",
    color: "var(--gold)",
  },
  {
    id: "catalyst",
    name: "Catalyst",
    line: "Accelerating growth through leadership development, advocacy, workforce initiatives, and programs that strengthen businesses and communities.",
    color: "var(--ink)",
  },
];

export type Photo = { src: string; alt: string; w: number; h: number };
export type Section = { heading: string; body?: string[]; items?: string[] };
export type Program = {
  slug: string;
  name: string;
  pillar: Pillar;
  kicker: string;
  when?: string;
  summary: string;
  intro: string[];
  sections: Section[];
  photos: Photo[];
  cta: { label: string; href: string };
  cta2?: { label: string; href: string };
  source: string;
};

const sq = (src: string, alt: string, s = 350): Photo => ({ src, alt, w: s, h: s });

export const programs: Program[] = [
  {
    slug: "business-breakfast",
    name: "Business Breakfast",
    pillar: "convener",
    kicker: "Start Your Day with Insight, Inspiration & Connections",
    when: "Monthly",
    summary:
      "This popular monthly event brings together business professionals, community leaders, entrepreneurs, and decision-makers for a morning of networking, education, and meaningful conversation.",
    intro: [
      "Kickstart your morning with insight and inspiration at the North Tampa Bay Chamber's Business Breakfast. This popular monthly event brings together business professionals, community leaders, entrepreneurs, and decision-makers for a morning of networking, education, and meaningful conversation.",
      "Featuring timely topics and engaging speakers, Business Breakfast provides attendees with valuable takeaways, Chamber and community updates, and opportunities to connect with fellow business leaders before the workday begins.",
    ],
    sections: [
      {
        heading: "What to Expect",
        items: [
          "Guest speakers and subject matter experts",
          "Educational presentations on relevant business topics",
          "Networking with local business and community leaders",
          "Economic, legislative, and community updates",
          "Opportunities to build new relationships and referrals",
          "Insights you can apply directly to your business",
        ],
      },
      {
        heading: "Get Involved",
        body: [
          "Become a Speaker — Share your expertise, insights, or industry knowledge with an engaged audience of business professionals and community leaders.",
          "Sponsor a Business Breakfast — Increase your visibility and position your business as a supporter of professional development and community engagement through event sponsorship opportunities.",
          "Invite a Guest — Know a business owner, colleague, or community partner who would benefit from attending? Bring them along and help them experience the value of Chamber membership firsthand.",
        ],
      },
    ],
    photos: [
      sq("/photos/business-breakfast-3.jpg", "Business Breakfast speaker at the podium before a full room of seated attendees"),
      sq("/photos/business-breakfast.jpg", "Business Breakfast attendees at round tables facing the presentation screens"),
      sq("/photos/business-breakfast-2.jpg", "Five attendees posing together at a North Tampa Bay Chamber Business Breakfast"),
    ],
    cta: { label: "See upcoming breakfasts", href: links.events },
    cta2: { label: "Speak or sponsor", href: links.eventsMail },
    source: "business-breakfast.txt",
  },
  {
    slug: "rise-and-connect",
    name: "Rise & Connect",
    pillar: "convener",
    kicker: "A Speaker & Networking Series Presented by Hunters Green Country Club.",
    when: "Monthly",
    summary:
      "The Chamber's intimate morning networking series designed to foster authentic conversations, fresh ideas, and meaningful relationships.",
    intro: [
      "Rise & Connect is the North Tampa Bay Chamber's intimate morning networking series designed to foster authentic conversations, fresh ideas, and meaningful relationships. Presented by Hunters Green Country Club this monthly gathering brings together Chamber members, business professionals, entrepreneurs, and community leaders in a relaxed setting where dialogue takes center stage.",
      "Unlike a traditional speaker-driven program, Rise & Connect is built around engaging conversations. Each event features a timely business topic with guided discussion, allowing attendees to share experiences, exchange ideas, ask questions, and learn from one another.",
    ],
    sections: [
      {
        heading: "What to Expect",
        items: [
          "Guided conversations centered around relevant business topics",
          "Interactive discussions with fellow business professionals",
          "Relationship-building in a smaller, more personal setting",
          "Opportunities to exchange ideas, challenges, and best practices",
          "Chamber updates and community connections",
          "Meaningful networking that extends beyond exchanging business cards",
        ],
      },
    ],
    photos: [],
    cta: { label: "See upcoming dates", href: links.events },
    cta2: { label: "Speak or sponsor", href: links.eventsMail },
    source: "business-breakfast-copy.txt",
  },
  {
    slug: "economic-development-briefing",
    name: "Economic Development Briefing",
    pillar: "convener",
    kicker: "Stay Informed About the Future of Our Region",
    summary:
      "Designed to keep business leaders, community stakeholders, and residents informed about the growth, development, and opportunities shaping our region.",
    intro: [
      "The North Tampa Bay Chamber's Economic Development Briefing is designed to keep business leaders, community stakeholders, and residents informed about the growth, development, and opportunities shaping our region.",
      "Featuring influential guest speakers, industry experts, developers, elected officials, and economic development professionals, this event provides firsthand insights into the projects, initiatives, and investments driving North Tampa Bay's future.",
    ],
    sections: [
      {
        heading: "What to Expect",
        items: [
          "Presentations from key community and industry leaders",
          "Updates on major development projects and investments",
          "Economic trends and regional growth forecasts",
          "Infrastructure, transportation, and workforce updates",
          "Insights into future opportunities and challenges",
          "Opportunities for questions, discussion, and networking",
        ],
      },
      {
        heading: "Why Attend?",
        items: [
          "Learning about upcoming developments before they happen",
          "Understanding the economic factors influencing business growth",
          "Gaining insights into community planning and infrastructure improvements",
          "Connecting with business leaders, developers, and decision-makers",
          "Identifying opportunities for investment, collaboration, and growth",
        ],
      },
    ],
    photos: [
      sq("/photos/economic-develop.jpg", "Standing-room crowd at a North Tampa Bay Chamber Economic Development Briefing"),
      sq("/photos/economic-develop-2.jpg", "Attendees mingling at an Economic Development Briefing"),
    ],
    cta: { label: "See the next briefing", href: links.events },
    source: "economic-development.txt",
  },
  {
    slug: "lunch-n-learn",
    name: "Lunch N’ Learn",
    pillar: "convener",
    kicker: "Learn, Connect & Grow · By Members. For Members.",
    summary:
      "Designed for members, by members, these interactive sessions provide practical knowledge, professional development, and actionable insights.",
    intro: [
      "Lunch N' Learn is one of the North Tampa Bay Chamber's most valuable member-driven educational programs. Designed for members, by members, these interactive sessions provide practical knowledge, professional development, and actionable insights that attendees can immediately apply to their businesses and careers.",
      "Each Lunch N' Learn features a Chamber Member sharing their expertise on topics that matter most to today's professionals and business owners.",
    ],
    sections: [
      {
        heading: "Topics May Include",
        items: [
          "Marketing and Branding",
          "Artificial Intelligence (AI)",
          "Legal and Compliance Updates",
          "Financial Wellness and Business Finance",
          "Hurricane Preparedness and Business Continuity",
          "Human Resources and Workforce Development",
          "Leadership and Professional Growth",
          "Sales and Customer Service Strategies",
          "Technology and Business Tools",
          "Health, Wellness, and Workplace Culture",
        ],
      },
      {
        heading: "Become a Speaker",
        body: [
          "Do you have expertise, experience, or a topic that could benefit fellow Chamber Members? We are always looking for knowledgeable professionals to lead future Lunch N' Learn sessions.",
        ],
      },
    ],
    photos: [
      { src: "/photos/lunch-n-learn-3.jpg", alt: "Lunch N’ Learn session on getting found on Google, members around a conference table", w: 425, h: 425 },
      { src: "/photos/lunch-n-learn-2.jpg", alt: "Member presenter leading a Lunch N’ Learn session", w: 425, h: 425 },
      { src: "/photos/lunch-n-learn-22.jpg", alt: "Members listening to a Lunch N’ Learn presentation", w: 425, h: 425 },
      { src: "/photos/lunch-n-learn.jpg", alt: "Presenter materials on the table at a Lunch N’ Learn", w: 425, h: 425 },
    ],
    cta: { label: "Become a speaker", href: links.eventsMail },
    cta2: { label: "See upcoming sessions", href: links.events },
    source: "lunch-n-learn.txt",
  },
  {
    slug: "leadership-institute",
    name: "Leadership Institute",
    pillar: "convener",
    kicker: "Developing Leaders. Strengthening Community. Shaping the Future.",
    when: "8-month Fellows cohort",
    summary:
      "The Chamber’s hub for high-impact leadership development, home of the Leadership Fellows Program.",
    intro: [
      "The Leadership Institute Program is the North Tampa Bay Chamber’s hub for high-impact leadership development designed to cultivate confident, connected, and forward-thinking professionals. Through immersive programs and meaningful experiences, the Institute equips individuals with the skills, insight, and relationships needed to lead effectively in today’s evolving business landscape.",
      "The Leadership Fellows Program is the Chamber’s flagship offering within the Leadership Institute - an exclusive, high-level experience designed for professionals ready to elevate their leadership impact. This 8-month program brings together a small, focused cohort of just 12 participants, creating a personalized and highly engaging environment. Fellows dive deep into the nationally recognized BetterCulture curriculum, combining strategic insight with real-world application to drive meaningful personal and professional growth.",
      "Each session is led by a PhD-level facilitator, Dr. Jacqueline Nelms, ensuring a thought-provoking, results-driven experience that challenges perspectives and strengthens leadership capabilities.",
    ],
    sections: [
      {
        heading: "Participants",
        items: [
          "Refine and elevate their leadership style",
          "Expand their influence within their organization and the community",
          "Build meaningful relationships with like-minded professionals",
          "Gain practical tools to lead with clarity, purpose, and impact",
        ],
      },
    ],
    photos: [],
    cta: { label: "I’m interested", href: links.eventsMail },
    source: "leadership-institute.txt",
  },
  {
    slug: "leading-ladies-network",
    name: "Leading Ladies Network",
    pillar: "convener",
    kicker: "Empowering Women Through Connection, Leadership & Growth",
    summary:
      "The Chamber's premier women's networking and professional development program. More than a networking event, it's a community of women supporting women.",
    intro: [
      "Leading Ladies is the North Tampa Bay Chamber's premier women's networking and professional development program, created to bring together women from diverse industries, backgrounds, and career stages to connect, learn, and grow.",
      "Designed exclusively for women in our business community, Leading Ladies provides a welcoming environment where professionals, entrepreneurs, executives, and emerging leaders can build meaningful relationships while gaining valuable insights from inspiring speakers and industry experts.",
      "Leading Ladies is more than a networking event, it's a community of women supporting women.",
    ],
    sections: [
      {
        heading: "Topics Include",
        items: [
          "Leadership Development",
          "Entrepreneurship and Business Growth",
          "Marketing and Personal Branding",
          "Artificial Intelligence and Emerging Technologies",
          "Financial Wellness and Wealth Building",
          "Work-Life Integration",
          "Health and Wellness",
          "Career Advancement",
          "Communication and Confidence Building",
          "Community Leadership and Impact",
        ],
      },
      {
        heading: "Become a Speaker",
        body: [
          "Do you have expertise, a unique perspective, or a story that could inspire and empower fellow women professionals? We welcome Chamber Members who are interested in sharing their knowledge and experiences with the Leading Ladies community.",
        ],
      },
    ],
    photos: [
      { src: "/photos/leading-ladies-5.jpg", alt: "Leading Ladies Network members smiling together", w: 425, h: 425 },
      { src: "/photos/leading-ladies.jpg", alt: "Leading Ladies Network gathering around a long conference table", w: 425, h: 425 },
      { src: "/photos/leading-ladies-3.jpg", alt: "Leading Ladies member surrounded by fresh flower arrangements", w: 425, h: 425 },
      { src: "/photos/leading-ladies-4.jpg", alt: "Speaker presenting to the Leading Ladies Network", w: 425, h: 425 },
      { src: "/photos/leading-ladies-2.jpg", alt: "Flower arranging at a Leading Ladies Network event", w: 425, h: 425 },
    ],
    cta: { label: "Get involved", href: links.eventsMail },
    cta2: { label: "See upcoming events", href: links.events },
    source: "leading-ladies-network.txt",
  },
  {
    slug: "coffee-social",
    name: "Coffee Social",
    pillar: "connector",
    kicker: "NTBC Coffee Social | Third Wednesday",
    when: "Third Wednesday",
    summary:
      "A relaxed morning networking event for local professionals, entrepreneurs, and community leaders, hosted at a member's business.",
    intro: [
      "Start your morning with meaningful connections at the NTBC Coffee Social! This relaxed networking event is designed to bring together local professionals, entrepreneurs, and community leaders for great conversations, new business opportunities, and relationship building in a welcoming atmosphere.",
      "Guests can enjoy fresh coffee, light refreshments, and casual networking with fellow Chamber members and prospective members. Bring your business cards, share your story, and discover new opportunities to collaborate.",
    ],
    sections: [
      {
        heading: "Interested in hosting a Coffee Social?",
        body: [
          "Hosting an NTBC Coffee Social is a great way to showcase your business while welcoming Chamber members into your space. Businesses provide the venue, coffee, and light refreshments, while NTBC helps promote the event and invites members to attend. It's an excellent way to increase visibility, generate leads, and position your business as an active supporter of the local business community.",
        ],
      },
    ],
    photos: [
      sq("/photos/coffee-social-3.jpg", "Members shaking hands at an NTBC Coffee Social"),
      sq("/photos/coffee-social-2.jpg", "Two members with coffee at a Coffee Social"),
      sq("/photos/coffee-social-4.jpg", "Conversation over coffee at a Coffee Social"),
      sq("/photos/coffee-social-5.jpg", "Two members posing at a Coffee Social"),
      sq("/photos/coffee-social-6.jpg", "Members greeting one another at a Coffee Social"),
      sq("/photos/coffee-social-8.jpg", "Members exchanging business cards at a Coffee Social"),
    ],
    cta: { label: "Host a Coffee Social", href: links.eventsMail },
    cta2: { label: "See the calendar", href: links.events },
    source: "coffee-social.txt",
  },
  {
    slug: "final-friday",
    name: "Final Friday",
    pillar: "connector",
    kicker: "End the Month with Connections, Conversations & Community",
    when: "Final Friday of the month",
    summary:
      "One of the Chamber's most popular networking events: free, after-hours networking with great food and a cash bar.",
    intro: [
      "Final Friday is one of the North Tampa Bay Chamber's most popular networking events, bringing together Chamber Members, business professionals, community leaders, and guests for an evening of relationship-building in a relaxed and engaging atmosphere.",
      "Held on the final Friday of the month, this after-hours networking event provides attendees with the opportunity to make new connections, strengthen existing relationships, and learn more about local businesses while enjoying great food, refreshments, and conversation.",
    ],
    sections: [
      {
        heading: "What to Expect",
        items: [
          "Casual, after-hours free networking",
          "Opportunities to connect with local business professionals",
          "Great food and cash bar",
        ],
      },
      {
        heading: "Become a Final Friday Host",
        body: [
          "Hosting Final Friday is a valuable opportunity to showcase your business, facility, products, and team to a diverse audience of Chamber Members and community leaders. As the host location, your business will receive visibility through Chamber marketing efforts, event promotion, and recognition before, during, and after the event.",
        ],
      },
    ],
    photos: [{ src: "/photos/final-friday.jpg", alt: "Four members at a Final Friday after-hours networking event", w: 1440, h: 1080 }],
    cta: { label: "Save the date", href: links.events },
    cta2: { label: "Host a Final Friday", href: links.eventsMail },
    source: "final-friday.txt",
  },
  {
    slug: "foundation-fridays",
    name: "Foundation Fridays",
    pillar: "connector",
    kicker: "Presented by Worthington Agency · Connect. Give Back. Make an Impact.",
    summary:
      "Networking hosted at a member's business, where a portion of proceeds benefits the North Tampa Bay Chamber Foundation.",
    intro: [
      "Foundation Fridays is a unique networking experience hosted by the North Tampa Bay Chamber Foundation that brings business professionals together while supporting local businesses and strengthening our community. Presented by Worthington Agency, this event encourages Chamber members and guests to intentionally shop, dine, and engage with local businesses that are making a difference in North Tampa Bay.",
      "Each Foundation Friday is hosted at a local Chamber Member's business that has partnered with the Chamber Foundation to give back through the event. As attendees enjoy networking, refreshments, shopping, or interactive experiences, a portion of event proceeds or sales directly benefits the North Tampa Bay Chamber Foundation and its mission of supporting leadership development, workforce initiatives, scholarships, and community programs.",
    ],
    sections: [
      {
        heading: "What to Expect",
        items: [
          "Networking in a relaxed, welcoming environment while feeling good that you are contributing to scholarships for deserving students",
          "Exclusive experiences hosted by local business Chamber Members",
          "Opportunities to support Chamber Members and the NTBC Foundation",
          "Connections with Chamber members, business leaders, and community partners",
          "A chance to discover and support businesses throughout our region",
        ],
      },
    ],
    photos: [],
    cta: { label: "See upcoming dates", href: links.events },
    cta2: { label: "Host a Foundation Friday", href: links.eventsMail },
    source: "final-friday-copy.txt",
  },
  {
    slug: "ribbon-cuttings",
    name: "Ribbon Cuttings",
    pillar: "connector",
    kicker: "Celebrate Your Milestone with a North Tampa Bay Chamber Ribbon Cutting",
    when: "Tue–Thu · 11:30 AM or 4:30 PM ceremonies",
    summary:
      "More than a photo opportunity: a celebration of your business journey, shared with Chamber leadership, members, local officials and supporters.",
    intro: [
      "A Ribbon Cutting is more than just a photo opportunity - it is a celebration of your business journey, and a chance to share an important milestone with the community. Whether you're opening a new business, expanding to a new location, or launching a renovation, a Ribbon Cutting creates visibility, builds connections, and generates excitement around your organization.",
      "As part of our commitment to supporting local businesses, Ribbon Cuttings are now included with Premier, Executive & President’s Circle Membership and we are excited to announce that Non-Members will also have the opportunity to host a Ribbon Cutting for a nominal fee.",
    ],
    sections: [
      {
        heading: "Ribbon Cutting Scheduling Guidelines",
        body: [
          "North Tampa Bay Chamber Ribbon Cuttings are hosted exclusively on Tuesdays, Wednesdays, and Thursdays during one of the following event windows:",
        ],
        items: [
          "11:00 AM – 1:00 PM (Ribbon Cutting Ceremony at 11:30 AM)",
          "4:00 PM – 6:00 PM (Ribbon Cutting Ceremony at 4:30 PM)",
          "Requests must be submitted at least six (6) weeks in advance of your preferred event date.",
          "The Chamber does not host Ribbon Cuttings during the month of July.",
        ],
      },
      {
        heading: "Think beyond the ribbon",
        body: [
          "One of the greatest benefits of Chamber membership is access to our Member-to-Member network. Need catering, photography, signage, promotional items, event rentals, florals, entertainment, or printing services? Chances are a fellow Chamber member can help.",
        ],
      },
    ],
    photos: [
      { src: "/photos/ribbon-cutting.jpg", alt: "Ribbon cutting with a gold ribbon outside a member storefront", w: 650, h: 500 },
      { src: "/photos/ribbon-cutting-4.jpg", alt: "Ribbon cutting celebration outside the CALI storefront", w: 650, h: 500 },
      { src: "/photos/ribbon-cutting-2.jpg", alt: "Members and guests holding a red ribbon outside a new business", w: 650, h: 500 },
      { src: "/photos/ribbon-cutting-3.jpg", alt: "Indoor ribbon cutting with members and family", w: 650, h: 500 },
    ],
    cta: { label: "Get the ribbon cutting package", href: links.ribbonPackage },
    cta2: { label: "See upcoming ribbon cuttings", href: links.events },
    source: "ribbon-cuttings.txt",
  },
  {
    slug: "open-houses",
    name: "Open Houses",
    pillar: "connector",
    kicker: "Open Your Doors to the Chamber Community",
    when: "Tue–Thu · 11 AM–1 PM or 4–6 PM",
    summary:
      "Invite fellow members, business leaders, and community partners into your space to learn about your products, services, culture, and mission.",
    intro: [
      "An Open House is a fantastic opportunity to showcase your business, introduce your team, and build meaningful connections within the North Tampa Bay Chamber community.",
      "Unlike a Ribbon Cutting, which celebrates a grand opening or milestone event, an Open House is designed to help Chamber Members invite fellow members, business leaders, and community partners into their space to learn more about their products, services, culture, and mission.",
    ],
    sections: [
      {
        heading: "Open Houses are exclusively available to North Tampa Bay Chamber Members and provide a unique opportunity to:",
        items: [
          "Showcase your facility, office, or storefront",
          "Introduce your team and company culture",
          "Demonstrate products and services",
          "Build relationships with fellow Chamber Members",
          "Generate awareness for your business",
          "Strengthen your presence within the local business community",
        ],
      },
      {
        heading: "Scheduling",
        items: [
          "Hosted exclusively on Tuesdays, Wednesdays and Thursdays from 11:00 AM – 1:00 PM and 4:00 PM – 6:00 PM.",
          "Requests must be submitted at least three (3) weeks in advance of your preferred event date.",
          "The Chamber does not host Open Houses during the month of July.",
        ],
      },
    ],
    photos: [
      { src: "/photos/open-house-ficare.jpg", alt: "Members touring a FiCare Federal Credit Union open house", w: 1600, h: 1200 },
      { src: "/photos/open-house-2.jpg", alt: "Two members at a Chamber open house", w: 1600, h: 1200 },
    ],
    cta: { label: "Schedule your Open House", href: links.officeMail },
    source: "open-houses.txt",
  },
  {
    slug: "chamber-chatter",
    name: "Chamber Chatter",
    pillar: "connector",
    kicker: "The podcast where business, community, and conversation come together.",
    when: "New episodes twice each month",
    summary:
      "Expert interviews, industry leaders, local changemakers, and member spotlights in a convenient 20 - 45 minute format.",
    intro: [
      "Welcome to Chamber Chatter, the podcast where business, community, and conversation come together. Special thanks to our Studio Recording Sponsor, Emorys Rock Realty for helping bring Chamber Chatter to life.",
      "Featuring expert interviews, industry leaders, local changemakers, and member spotlights, Chamber Chatter brings you real stories and practical takeaways from those making a difference in our community. Episodes include one-on-one interviews, panel discussions, and interactive conversations, all presented in a convenient 20 - 45 minute format.",
      "New episodes are released twice each month, so don't forget to subscribe and join the conversation.",
    ],
    sections: [
      {
        heading: "Interested in being featured on Chamber Chatter?",
        body: [
          "We’re always looking for inspiring business leaders, entrepreneurs, and community changemakers to share their stories, expertise, and insights with our audience. Contact us, and tell us a little about yourself, your business, and the topics you'd like to discuss.",
        ],
      },
    ],
    photos: [{ src: "/photos/chamber-chatter-web.jpg", alt: "Chamber Chatter podcast cover art", w: 650, h: 850 }],
    cta: { label: "Be featured", href: links.eventsMail },
    cta2: { label: "Watch on YouTube", href: "https://www.youtube.com/user/wesleychapelchamber/videos" },
    source: "chamber-chatter.txt",
  },
];

export const catalystLinks = [
  { name: "Legislative Priorities", href: "/advocacy#legislative-priorities" },
  { name: "Growth & Development", href: "/advocacy#growth" },
  { name: "The Foundation", href: "/foundation" },
  { name: "Grants & Funding", href: "/foundation#grants" },
  { name: "Become a Sponsor", href: "/membership#sponsor" },
  { name: "Share Your Voice", href: "/membership#share-your-voice" },
  { name: "Affinity Program", href: "/membership#affinity" },
];

export const getProgram = (slug: string) => programs.find((p) => p.slug === slug);
export const byPillar = (pillar: Pillar) => programs.filter((p) => p.pillar === pillar);
