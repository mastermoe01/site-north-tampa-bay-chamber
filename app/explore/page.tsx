import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { Ext, JoinBand, PageHero } from "@/components/ui";
import { links } from "@/lib/site";

export const metadata: Metadata = {
  title: "Explore North Tampa Bay",
  description:
    "Moving to Wesley Chapel, New Tampa, Lutz, Trinity or Odessa? Find hospitals, realtors, schools, restaurants and more from North Tampa Bay Chamber members.",
  alternates: { canonical: "/explore" },
};

// Source: research/site-pages/explore-north-tampa-bay.txt — category links are the chamber's own directory deep links.
const D = "https://business.northtampabaychamber.com/list";
const groups = [
  {
    title: "Healthcare Ecosystem",
    items: [
      { name: "Local Hospitals", href: `${D}/category/hospitals-6216` },
      { name: "Medical Facilities", href: `${D}/category/medical-1051` },
      { name: "Memory Care", href: `${D}/category/memory-care-8194` },
      { name: "Eye Care", href: `${D}/category/eye-care-1` },
      { name: "Dentist", href: `${D}/category/dentists-1022` },
    ],
  },
  {
    title: "Family-Friendly Living",
    items: [
      { name: "Realtors", href: `${D}/category/real-estate-1064` },
      { name: "Apartment & Condos", href: `${D}/category/apartments-condominiums-1003` },
      { name: "Home Builders", href: `${D}/category/home-builders-1035` },
      { name: "Mortgage Services", href: `${D}/category/mortgage-services-1052` },
      { name: "Movers", href: `${D}/category/movers-1053` },
    ],
  },
  {
    title: "Lifestyle & Recreation",
    items: [
      { name: "Restaurants", href: `${D}/ql/restaurants-food-beverages-22` },
      { name: "Shopping", href: `${D}/ql/shopping-specialty-retail-23` },
      { name: "Lodging", href: `${D}/ql/lodging-travel-15` },
      { name: "Entertainment", href: `${D}/ql/arts-culture-entertainment-3` },
    ],
  },
  {
    title: "Growth & Innovation",
    items: [
      { name: "Schools", href: `${D}/category/schools-1068` },
      { name: "Colleges & Universities", href: `${D}/category/colleges-universities-1104` },
      { name: "Daycare/Pre-School", href: `${D}/category/daycares-pre-schools-1116` },
    ],
  },
];

export default function Explore() {
  return (
    <>
      <PageHero kicker="Explore North Tampa Bay" title={<>Where connections grow, businesses thrive, and <em>community comes first.</em></>}>
        <p>
          North Tampa Bay is one of the fastest-growing regions in Florida, attracting families, professionals, and businesses
          with its vibrant economy and unmatched quality of life. Moving to a new community is exciting, and we’re here to make
          your transition as smooth as possible.
        </p>
        <p className="mt-4 label !text-[0.7rem] text-teal-text">
          Lifestyle you’ll love · World-class healthcare growth · Affordable luxury living · Career + balance
        </p>
      </PageHero>

      <section aria-label="Member directory by category" className="container-x grid gap-5 pb-20 md:grid-cols-2">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={(i % 2) * 0.06} className="rounded-2xl bg-paper p-8">
            <h2 className="display text-3xl">{g.title}</h2>
            <ul className="mt-6 divide-y divide-[var(--rule)] border-y border-rule">
              {g.items.map((it) => (
                <li key={it.name}>
                  <a href={it.href} className="group flex items-center justify-between py-3 hover:text-teal-text">
                    {it.name}
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </section>

      <section className="container-x pb-24">
        <p className="max-w-3xl text-ink-2">
          The businesses listed above are North Tampa Bay Chamber members dedicated to serving your needs. From real estate and
          financial services to healthcare, education, and everyday essentials, our members are trusted partners ready to help
          you settle in and thrive.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Ext href={links.directory}>Search the full directory</Ext>
          <Ext href={links.events} className="btn btn-line">Find an event</Ext>
        </div>
      </section>

      <JoinBand />
    </>
  );
}
