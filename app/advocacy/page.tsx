import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { JoinBand, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Advocacy & Growth",
  description:
    "The North Tampa Bay Chamber's 2026 Legislative Agenda and the healthcare, transportation and residential growth reshaping North Tampa Bay.",
  alternates: { canonical: "/advocacy" },
};

// Sources: research/site-pages/legislative-priorities.txt, growth-development.txt,
// healthcare-corridor.txt, transportation-infrastructure-improvements.txt, continued-residential-growth.txt
const agenda = [
  {
    area: "Transportation",
    intro:
      "Transportation is a core service of a government that is critical for economic development and facilitating the efficient delivery of goods and services. Having sufficient transportation funding is needed to implement a robust and connected transportation network in Tampa Bay.",
    supports: [
      "Advocating for transit projects as a region.",
      "Support for a regional Metropolitan Planning Organization that presents a collaborative priority list of projects for federal and state dollars.",
      "New and innovative transportation and mobility options.",
    ],
  },
  {
    area: "Economic & Business Development",
    intro:
      "Economic development and business thrive where regional collaboration is strong, regulatory and tax burdens are minimal, right-to-work laws that protect our citizens remain in place, and where wages are comparatively based.",
    supports: [
      "Support the study Incorporation of Wesley Chapel.",
      "Maintain or increase hospital Medicaid inpatient and outpatient reimbursement rates.",
      "Legislation that strengthens Florida’s local governments, economic development and tourism agencies.",
      "Recognizing community quality of life as an economic development driver",
    ],
  },
  {
    area: "Education & Workforce Development",
    intro:
      "The business community must partner with stakeholders and policymakers to advocate for adequate resources to help recruit, develop, and retain talent in Tampa Bay. Plans must be in place today to market and train the workforce of tomorrow.",
    supports: [
      "Trade and apprenticeship programs and experiential training offerings with clear pathways for development and approval.",
      "Policies and initiatives aimed at addressing the affordability of childcare.",
      "Expanding the Work Opportunity Tax Credit to include military spouses as part of its benefited groups.",
      "Attainable housing that improves workforce satisfaction, and quality of life, and ensures a vibrant, thriving community.",
      "Policies and budget prioritization that facilitate the development of, and access to, workforce housing.",
      "Regional workforce development initiatives that build diverse talent and is inclusive of groups of people.",
      "Targeted plans that create a skilled pipeline of talent to support and sustain Tampa Bay’s ongoing economic development activities",
      "Support the infrastructure necessary for healthcare facilities to recruit and retain nurses and allied health professionals.",
    ],
  },
];

const growth = [
  {
    title: "Healthcare Corridor",
    text: "North Tampa Bay has emerged as one of Florida's fastest-growing healthcare destinations, with a rapidly expanding healthcare corridor stretching along Bruce B. Downs Boulevard and State Road 56. Anchored by leading healthcare providers including AdventHealth, BayCare, Orlando Health, Florida Medical Clinic, Johns Hopkins All Children's Hospital, and numerous medical office developments, the region continues to attract significant investment in healthcare infrastructure and services.",
    points: [
      "Florida Medical Clinic Orlando Health Wiregrass Ranch Hospital",
      "AdventHealth Wesley Chapel Expansion",
      "Johns Hopkins All Children's Hospital",
      "Wiregrass Ranch Medical Pavilion",
    ],
  },
  {
    title: "Transportation & Infrastructure",
    text: "Major projects include roadway expansions along SR 54, SR 56, Old Pasco Road, and Overpass Road, as well as ongoing studies for the future extension of SR 56 deeper into eastern Pasco County.",
    points: [
      "SR 56 Extension",
      "Old Pasco Road Widening",
      "Overpass Road Improvements",
      "Suncoast Parkway Expansion",
      "Regional Transit Solutions",
      "Future Passenger Rail Opportunities",
      "Multimodal Transportation & Trail Connectivity",
      "Freight and Logistics Infrastructure",
    ],
  },
  {
    title: "Continued Residential Growth",
    text: "Major master-planned communities including Wiregrass Ranch, Epperson, Chapel Crossings, Vida's Way, and surrounding developments continue to add thousands of new residents, creating demand for healthcare, retail, workforce housing, schools, and business services.",
    points: ["Legacy Wiregrass Ranch (The Future Downtown)", "Double Branch", "Two Rivers", "Metro Development Group Communities"],
  },
];

export default function Advocacy() {
  return (
    <>
      <PageHero kicker="Catalyst · Advocacy" title={<>The trusted voice of business, <em>at every table.</em></>}>
        <p>
          The Chamber’s Board of Directors presents the 2026 Legislative Agenda to inform our members about the issues the
          Chamber will be monitoring and advocating for 2026. It should be noted that this list is not all-inclusive and may be
          modified during the year.
        </p>
      </PageHero>

      <section id="legislative-priorities" aria-labelledby="leg" className="container-x pb-24">
        <h2 id="leg" className="label text-teal-text">2026 Legislative Agenda</h2>
        <div className="mt-8 space-y-5">
          {agenda.map((a, i) => (
            <Reveal key={a.area} className="grid gap-8 rounded-2xl bg-paper p-8 md:grid-cols-[1fr_1.4fr] md:p-10">
              <div>
                <p className="label text-ink-2">0{i + 1}</p>
                <h3 className="display mt-2 text-4xl">{a.area}</h3>
                <p className="mt-4 text-sm text-ink-2">{a.intro}</p>
              </div>
              <div>
                <p className="label !text-[0.65rem] text-teal-text">The Chamber supports</p>
                <ul className="mt-4 space-y-3">
                  {a.supports.map((s) => (
                    <li key={s} className="flex gap-3 border-t border-rule pt-3 text-[0.98rem]">
                      <span aria-hidden className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="growth" aria-labelledby="growth-h" className="bg-deep text-linen">
        <div className="container-x py-24">
          <p className="label text-gold">Growth & development</p>
          <h2 id="growth-h" className="display mt-4 max-w-4xl text-5xl md:text-6xl">
            One of the most significant periods of growth in our history.
          </h2>
          <p className="mt-6 max-w-3xl text-linen/80">
            From the development of Legacy Wiregrass Ranch and new healthcare campuses to transportation investments and workforce
            growth, our region is evolving into a premier destination for business, healthcare, education, and innovation. The
            North Tampa Bay Chamber remains committed to serving as a connector, convener, and catalyst as we help shape the
            future of our community.
          </p>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {growth.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.06} className="rounded-2xl border border-linen/15 p-8">
                <h3 className="display text-3xl">{g.title}</h3>
                <p className="mt-4 text-sm text-linen/75">{g.text}</p>
                <ul className="mt-6 space-y-2 text-sm">
                  {g.points.map((pt) => (
                    <li key={pt} className="border-t border-linen/15 pt-2">{pt}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-sm text-linen/70">
            Hear it first at the{" "}
            <Link className="underline underline-offset-4" href="/programs/economic-development-briefing">
              Economic Development Briefing
            </Link>
            .
          </p>
        </div>
      </section>

      <JoinBand />
    </>
  );
}
