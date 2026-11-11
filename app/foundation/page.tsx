import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Ext, JoinBand, PageHero, PersonCard } from "@/components/ui";
import { foundationBoard } from "@/lib/people";
import { links } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Foundation, Scholarships & Grants",
  description:
    "The North Tampa Bay Chamber Foundation, a 501(c)(3) launched in March 2022: Graduating Senior Scholarships, the Glazer Family Small Business Fund, and Foundation Fridays.",
  alternates: { canonical: "/foundation" },
};

// Sources: research/site-pages/the-foundation.txt, grants-and-funding.txt (verbatim)
const schools = [
  "Cypress Creek High School",
  "Wesley Chapel High School",
  "Wiregrass Ranch High School",
  "Kirkland Ranch High School",
  "Land O'Lakes High School",
];

const recipients2025 = [
  "NEAT COFFEE",
  "DKL INCORPORATED DBA FISH Window Cleaning",
  "Expedia Cruises 900286",
  "MFH Properties, Inc. dba Fazoli's",
  "UPLINK",
  "3 Natives Wiregrass LLC",
  "EVERCHANGING WELLNESS",
  "Fun 4 Tampa Kids",
  "Complete I.T. Corp",
  "Clean Healthy Pups Lutz, LLC",
  "Florida Penguin Productions",
  "The Dan Wright Corp",
  "JMB LOVING CARE, LLC",
  "Circle S BBQ llc",
  "Kelly's Home Team",
  "Epperson & Watergrass Living Magazine, RF Gems LLC",
  "Backyard Tossers",
  "FLORIDA EXOTIC BIRD SANCTUARY INC",
  "Fabulously Made Salon, LLC",
];

export default function Foundation() {
  return (
    <>
      <PageHero kicker="North Tampa Bay Chamber Foundation · 501(c)(3)" title={<>Scholarships, grants, and <em>community.</em></>}>
        <p>
          In March 2022, the North Tampa Bay Chamber officially launched its 501(c)(3) nonprofit, the North Tampa Bay Chamber
          Foundation. The specific purpose of our Foundation is to conduct philanthropic and charitable works in and around the
          community served by the North Tampa Bay Chamber.
        </p>
      </PageHero>

      <section id="grants" aria-labelledby="scholarship" className="container-x grid gap-5 pb-20 lg:grid-cols-2">
        <Reveal className="rounded-2xl bg-paper p-8 md:p-10">
          <p className="label text-teal-text">Program 1</p>
          <h2 id="scholarship" className="display mt-3 text-4xl">Graduating Senior Scholarship Fund</h2>
          <p className="mt-5 text-ink-2">
            Each year, the Chamber Foundation proudly grants scholarships to graduating seniors in our region, helping them take
            the next step toward their future. Through collaboration with the Pasco Education Foundation, and Career Counselors
            at each school, we assist students in navigating the scholarship process.
          </p>
          <h3 className="label mt-8 text-ink-2">Scholarships proudly fund these high schools</h3>
          <ul className="mt-3 grid gap-1 sm:grid-cols-2">
            {schools.map((s) => (
              <li key={s} className="text-sm">{s}</li>
            ))}
          </ul>
          <div className="mt-8 rounded-xl bg-sand p-6">
            <p className="text-sm">
              Scholarships are awarded at <strong>$500</strong>, with a sponsorship total cost of <strong>$650</strong>, which
              helps cover administrative and event expenses. As a sponsor, you will have the opportunity to:
            </p>
            <ul className="mt-3 space-y-1 text-sm">
              <li>✔ Specify selection criteria for the recipient</li>
              <li>✔ Present a ceremonial check at the award event(s)</li>
              <li>✔ Receive recognition for your generous support</li>
            </ul>
            <p className="mt-3 text-sm text-ink-2">All sponsorships are 100% tax-deductible through our 501(c)3 Chamber Foundation.</p>
          </div>
          <div className="mt-8">
            <Ext href={links.scholarshipSponsor} className="btn btn-gold">Sponsor a scholarship</Ext>
          </div>
        </Reveal>

        <Reveal delay={0.06} className="rounded-2xl bg-deep p-8 text-linen md:p-10">
          <p className="label text-gold">Program 2</p>
          <h2 className="display mt-3 text-4xl">The Glazer Family Small Business Fund</h2>
          <p className="mt-5 text-linen/80">
            The North Tampa Bay Chamber is proud to partner with the Glazer Family—owners of the Tampa Bay Buccaneers to deliver
            critical relief funding to small businesses across Tampa Bay and West Central Florida. In response to Hurricanes
            Helene and Milton, the Glazer Family committed $2 million in recovery funding, including $1 million dedicated
            specifically to small businesses.
          </p>
          <blockquote className="display mt-6 border-l-2 border-gold pl-5 text-xl leading-snug">
            “Our small businesses are the heartbeat of this region. These grants represent resilience, recovery, and the power
            of community.”
            <footer className="label mt-3 !text-[0.62rem] text-linen/70">Michael Berthelette, Board Chair, NTBC Foundation</footer>
          </blockquote>
          <h3 className="label mt-8 text-gold">2026 grants</h3>
          <ul className="mt-3 space-y-1 text-sm">
            <li>Up to $5,000 grant</li>
            <li>Open, rolling applications</li>
            <li>Based on need, not location</li>
            <li>Must be a registered business for 12+ months</li>
            <li>Applications are evaluated by an independent panel of judges</li>
            <li>Member bonus: members of the North Tampa Bay Chamber or Greater Pasco Chamber receive one additional point</li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Ext href={links.glazerFund} className="btn btn-gold">Apply today</Ext>
            <Ext href={links.glazerPress} className="btn btn-line-light">Press release</Ext>
          </div>
        </Reveal>
      </section>

      <section aria-labelledby="recipients" className="border-y border-rule bg-sand/60">
        <div className="container-x py-20">
          <p className="label text-teal-text">2025 NTBC Foundation grant recipients</p>
          <h2 id="recipients" className="display mt-4 text-4xl">Nineteen local businesses, moving forward</h2>
          <ul className="mt-10 columns-1 gap-8 sm:columns-2 lg:columns-3">
            {recipients2025.map((r) => (
              <li key={r} className="break-inside-avoid border-t border-rule py-3 text-sm">{r}</li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="fbf" className="container-x grid gap-10 py-20 md:grid-cols-[1.4fr_1fr] md:items-center">
        <div>
          <p className="label text-teal-text">Presented by Worthington Agency</p>
          <h2 id="fbf" className="display mt-4 text-5xl">Foundation Fridays</h2>
          <p className="mt-5 max-w-2xl text-ink-2">
            Each Foundation Friday is hosted at a local Chamber Member&apos;s business that has partnered with the Chamber
            Foundation to give back through the event. A portion of event proceeds or sales directly benefits the North Tampa Bay
            Chamber Foundation and its mission of supporting leadership development, workforce initiatives, scholarships, and
            community programs.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <Link href="/programs/foundation-fridays" className="btn btn-ink">Learn more</Link>
          <Ext href={links.events} className="btn btn-line">See dates</Ext>
        </div>
      </section>

      <section aria-labelledby="fboard" className="bg-paper/60">
        <div className="container-x py-20">
          <p className="label text-teal-text">Leadership</p>
          <h2 id="fboard" className="display mt-4 text-4xl">Meet the Foundation Board of Directors</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {foundationBoard.map((p) => (
              <PersonCard key={p.name} p={p} />
            ))}
          </div>
        </div>
      </section>

      <JoinBand />
    </>
  );
}
