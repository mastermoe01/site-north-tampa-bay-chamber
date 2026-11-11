import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { VideoSlot } from "@/components/VideoSlot";
import { Ext, JoinBand, PageHero, PersonCard } from "@/components/ui";
import { ambassadors, board, team } from "@/lib/people";
import { links } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Founded in 1998, the North Tampa Bay Chamber is an award-winning membership organization serving Wesley Chapel, Land O’ Lakes, Lutz, New Tampa, Trinity, and Odessa.",
  alternates: { canonical: "/about" },
};

// Source: research/site-pages/about-us.txt (verbatim)
const values = [
  "Integrity – Accountability",
  "Collaborative – Synergistic",
  "Inclusive – Diversity",
  "Innovation – Visionary – Go to Authority",
];

const areas = [
  {
    name: "Wesley Chapel",
    text: "Wesley Chapel is an unincorporated community in Pasco County, Florida, located about 25 miles north of Tampa. It is considered a suburb of Tampa and is part of the Tampa Bay Area. Wesley Chapel has grown rapidly over the past few decades and is home to numerous residential communities, retail centers, restaurants, and other businesses. It is also known for its top-rated schools and excellent quality of life.",
  },
  {
    name: "Lutz",
    text: "Lutz is a small community with a population of around 21,000 people. It is known for its rural feel, with many residents owning large plots of land and keeping livestock. Lutz is also home to several parks and recreational areas, including Lake Park and the Brooker Creek Preserve.",
  },
  {
    name: "Odessa",
    text: "Odessa is a small, unincorporated community with a population of around 8,000 people. It is known for its scenic lakes and natural beauty, as well as its equestrian community. Odessa is also home to the Keystone Park and Recreation Center, which offers a range of sports and recreational activities.",
  },
  {
    name: "Trinity",
    text: "Trinity is a fast-growing community with a population of around 15,000 people. It is known for its Family-Friendly atmosphere, top-rated schools, and well-manicured neighborhoods. Trinity is also home to several parks and recreational areas, including Starkey Wilderness Park and Trinity Preserve.",
  },
];

export default function About() {
  return (
    <>
      <PageHero kicker="About us" title={<>The trusted voice of business in <em>North Tampa Bay.</em></>}>
        <p>
          The North Tampa Bay Chamber is an award-winning membership-based organization serving the Wesley Chapel, Land O’
          Lakes, Lutz, New Tampa, Trinity, and Odessa business communities. Proudly promoting economic growth and development
          for our members.
        </p>
      </PageHero>

      <section className="container-x grid gap-5 pb-24 md:grid-cols-3">
        <Reveal className="rounded-2xl bg-paper p-8">
          <p className="label text-teal-text">Mission</p>
          <p className="display mt-4 text-2xl leading-snug">
            To provide valuable services to our members, advocate for a positive business community, and sustain and further
            develop a thriving economy for the greater Wesley Chapel and New Tampa Region.
          </p>
        </Reveal>
        <Reveal delay={0.06} className="rounded-2xl bg-paper p-8">
          <p className="label text-teal-text">Vision</p>
          <p className="display mt-4 text-2xl leading-snug">
            To be the trusted leader and driving force for the growth and success of our business community.
          </p>
        </Reveal>
        <Reveal delay={0.12} className="rounded-2xl bg-deep p-8 text-linen">
          <p className="label text-gold">Guiding values</p>
          <ul className="mt-4 space-y-3">
            {values.map((v) => (
              <li key={v} className="display text-2xl leading-snug">{v}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section aria-labelledby="history" className="border-y border-rule bg-sand/60">
        <div className="container-x grid gap-10 py-20 md:grid-cols-[1fr_1.6fr]">
          <div>
            <p className="label text-teal-text">History</p>
            <h2 id="history" className="display mt-4 text-6xl md:text-8xl">1998</h2>
          </div>
          <div className="prose-body max-w-2xl text-ink-2">
            <p>
              The North Tampa Bay Chamber was founded in 1998 and serves the areas of Lutz, Odessa, Trinity, and Wesley Chapel.
              Membership in the North Tampa Bay Chamber is open to any business in the area. Benefits of membership include
              access to networking events, marketing opportunities, and educational resources, as well as discounts on certain
              products and services.
            </p>
            <p>
              In addition to its work with local businesses, the North Tampa Bay Chamber is also involved in various community
              initiatives, including supporting local schools, promoting tourism in the area, and advocating for infrastructure
              improvements.
            </p>
            <p>
              Recognized as Florida Chamber of the Year and a National Chamber of the Year finalist, we are proud to be the
              trusted voice of business in North Tampa Bay.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="team" className="container-x py-24">
        <p className="label text-teal-text">Our team</p>
        <h2 id="team" className="display mt-4 max-w-3xl text-5xl">Passionate about helping businesses succeed.</h2>
        <p className="mt-6 max-w-2xl text-ink-2">
          Nothing excites us more than watching our members grow, achieve their goals, and make a lasting impact in our
          community.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((p) => (
            <Reveal key={p.name}>
              <PersonCard p={p} size={150} />
            </Reveal>
          ))}
        </div>
      </section>

      <section aria-labelledby="board" className="container-x grid gap-12 pb-24 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <p className="label text-teal-text">2026 Board of Directors</p>
          <h2 id="board" className="display mt-4 text-4xl">Led by members, for members</h2>
          <ul className="mt-8 grid gap-x-8 sm:grid-cols-2">
            {board.map((p) => (
              <li key={p.name + p.role} className="border-t border-rule py-4">
                <p className="font-medium">{p.name}</p>
                {p.role !== "Board Member" && <p className="label mt-1 !text-[0.62rem] text-teal-text">{p.role}</p>}
                <p className="mt-1 text-sm text-ink-2">{p.org}</p>
              </li>
            ))}
          </ul>
          <a className="link mt-6 inline-block" href={links.board}>Contact the board</a>
        </div>
        <div>
          <p className="label text-teal-text">Ambassadors</p>
          <h2 className="display mt-4 text-4xl">Your first hello</h2>
          <ul className="mt-8">
            {ambassadors.map((p) => (
              <li key={p.name} className="border-t border-rule py-4">
                <p className="font-medium">{p.name}</p>
                <p className="mt-1 text-sm text-ink-2">
                  {p.role !== "Ambassador" ? `${p.role}, ` : ""}
                  {p.org}
                </p>
              </li>
            ))}
          </ul>
          <a className="link mt-6 inline-block" href={links.ambassadors}>Ambassador contacts</a>
        </div>
      </section>

      <section aria-labelledby="area" className="bg-paper/60">
        <div className="container-x py-24">
          <p className="label text-teal-text">About the North Tampa Bay area</p>
          <h2 id="area" className="display mt-4 max-w-3xl text-5xl">
            A mix of rural and suburban living, close to Tampa.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {areas.map((a, i) => (
              <Reveal key={a.name} delay={(i % 2) * 0.06} className="rounded-2xl bg-paper p-8">
                <h3 className="display text-3xl">{a.name}</h3>
                <p className="mt-3 text-ink-2">{a.text}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Ext href="/explore" className="btn btn-line">Explore North Tampa Bay</Ext>
          </div>
        </div>
      </section>

      <VideoSlot subjectSlug="28329-paseo-dr" fallbackPoster="/photos/open-house-ficare.jpg" title="Inside the Chamber" />

      <JoinBand />
    </>
  );
}
