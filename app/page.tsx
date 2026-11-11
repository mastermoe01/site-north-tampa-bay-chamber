import Image from "next/image";
import Link from "next/link";
import { HeroMark } from "@/components/HeroMark";
import { Mosaic, type Tile } from "@/components/Mosaic";
import { Reveal } from "@/components/Reveal";
import { Ext, JoinBand, ReviewCard, Stars } from "@/components/ui";
import { byPillar, catalystLinks, pillars } from "@/lib/programs";
import { partners, reviews } from "@/lib/reviews";
import { links, site } from "@/lib/site";

const tiles: Tile[] = [
  { src: "/photos/ribbon-cutting-4.jpg", alt: "Ribbon cutting celebration outside the CALI storefront", caption: "Ribbon Cuttings", href: "/programs/ribbon-cuttings", className: "col-span-2 row-span-2 md:col-span-3", speed: 0.4 },
  { src: "/photos/final-friday.jpg", alt: "Four members at a Final Friday after-hours networking event", caption: "Final Friday", href: "/programs/final-friday", className: "md:col-span-2 row-span-2", speed: 1 },
  { src: "/photos/coffee-social-3.jpg", alt: "Members shaking hands at an NTBC Coffee Social", caption: "Coffee Social", href: "/programs/coffee-social", className: "md:col-span-1", speed: 1.6 },
  { src: "/photos/leading-ladies-5.jpg", alt: "Leading Ladies Network members smiling together", caption: "Leading Ladies", href: "/programs/leading-ladies-network", className: "md:col-span-1", speed: 1.4 },
  { src: "/photos/economic-develop.jpg", alt: "Standing-room crowd at an Economic Development Briefing", caption: "Economic Development", href: "/programs/economic-development-briefing", className: "md:col-span-2", speed: 0.6 },
  { src: "/photos/open-house-ficare.jpg", alt: "Members touring a FiCare Federal Credit Union open house", caption: "Open Houses", href: "/programs/open-houses", className: "md:col-span-2", speed: 1.1 },
  { src: "/photos/lunch-n-learn-3.jpg", alt: "Lunch N’ Learn session with members around a conference table", caption: "Lunch N’ Learn", href: "/programs/lunch-n-learn", className: "col-span-2 md:col-span-2", speed: 0.8 },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="container-x grid items-center gap-6 pb-16 pt-6 md:grid-cols-[1.25fr_1fr] md:gap-10 md:pb-24 md:pt-10">
        <div className="order-2 md:order-1">
          <p className="label text-teal-text">North Tampa Bay Chamber · Wesley Chapel, FL</p>
          <h1 className="display mt-5 text-[2.9rem] md:text-[4.6rem] lg:text-[5rem]">
            If you do business in the North Tampa Bay area, <em className="text-teal-text">you belong here.</em>
          </h1>
          <p className="mt-7 max-w-xl text-lg text-ink-2">
            A connector, convener, and catalyst for business success, serving more than 620 member businesses throughout
            Wesley Chapel, New Tampa, Trinity, Odessa, and surrounding communities.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Ext href={links.join} className="btn btn-gold">Become a member</Ext>
            <Ext href={links.events} className="btn btn-line">Events calendar</Ext>
            <Ext href={links.directory} className="btn btn-line">Member directory</Ext>
          </div>
        </div>
        <div className="order-1 mx-auto aspect-square w-[min(68vw,15rem)] md:order-2 md:w-full md:max-w-[34rem]">
          <HeroMark />
        </div>
      </section>

      {/* Stat strip */}
      <section aria-label="At a glance" className="border-y border-rule">
        <dl className="container-x grid grid-cols-2 gap-y-8 py-10 md:grid-cols-4">
          {[
            { k: "Member businesses", v: site.members },
            { k: "Serving since", v: String(site.founded) },
            { k: `Google rating · ${site.rating.count} reviews`, v: site.rating.value.toFixed(1) },
            { k: "Recognized as", v: "Florida Chamber of the Year", small: true },
          ].map((s) => (
            <div key={s.k} className="pr-4">
              <dt className="label text-ink-2 !text-[0.65rem]">{s.k}</dt>
              <dd className={`display mt-2 ${s.small ? "text-2xl md:text-3xl" : "text-5xl md:text-6xl"}`}>{s.v}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Pillars */}
      <section aria-labelledby="pillars-heading" className="container-x grid gap-12 py-24 md:grid-cols-[1fr_1.35fr] md:py-32">
        <div className="md:sticky md:top-28 md:self-start">
          <p className="label text-teal-text">Connector · Convener · Catalyst</p>
          <h2 id="pillars-heading" className="display mt-4 text-5xl md:text-6xl">
            Three roles. <em>One business community.</em>
          </h2>
          <p className="mt-6 max-w-md text-ink-2">
            We bring together business leaders, nonprofits, educators, healthcare providers, and government partners to
            strengthen our regional economy.
          </p>
          <Link href="/programs" className="link mt-6 inline-block">All programs</Link>
        </div>
        <ol className="space-y-6">
          {pillars.map((p, i) => {
            const items =
              p.id === "catalyst"
                ? catalystLinks.map((c) => ({ name: c.name, href: c.href }))
                : byPillar(p.id).map((x) => ({ name: x.name, href: `/programs/${x.slug}` }));
            return (
              <Reveal as="li" key={p.id} delay={i * 0.06} className="rounded-2xl bg-paper p-8 md:p-10">
                <div className="flex items-center gap-4">
                  <span aria-hidden className="h-3 w-10 rounded-full" style={{ background: p.color }} />
                  <span className="label text-ink-2">0{i + 1}</span>
                </div>
                <h3 className="display mt-5 text-4xl md:text-5xl">{p.name}</h3>
                <p className="mt-4 max-w-xl text-ink-2">{p.line}</p>
                <ul className="mt-7 flex flex-wrap gap-2">
                  {items.map((it) => (
                    <li key={it.href}>
                      <Link
                        href={it.href}
                        className="inline-block rounded-full border border-rule px-4 py-2 text-sm transition-colors hover:border-ink hover:bg-ink hover:text-linen"
                      >
                        {it.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </ol>
      </section>

      {/* Next signature event */}
      <section aria-labelledby="next-heading" className="bg-sand">
        <div className="container-x grid items-center gap-10 py-20 md:grid-cols-[1fr_1.1fr] md:py-24">
          <Reveal>
            <Image
              src="/brand/celebrating-excellence-logo.jpg"
              alt="Celebrating Excellence in Business Awards logo"
              width={1536}
              height={640}
              className="w-full rounded-xl"
              sizes="(min-width: 768px) 45vw, 100vw"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <p className="label text-teal-text">Next on the calendar · December 1, 2026 · 9:00 AM</p>
            <h2 id="next-heading" className="display mt-4 text-4xl md:text-5xl">
              Annual Meeting &amp; Celebrating Excellence in Business Awards
            </h2>
            <p className="mt-5 text-ink-2">
              Recognizing outstanding member businesses that demonstrate our four core values: Integrity, Collaboration,
              Inclusivity, and Innovation. Applications and nominations are due Tuesday, November 17, 2026, at 5:00 PM.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Ext href={links.annualMeeting}>Register for the event</Ext>
              <Link href="/membership#awards" className="btn btn-line">About the awards</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* In the room */}
      <section aria-labelledby="room-heading" className="container-x py-24 md:py-32">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label text-teal-text">In the room</p>
            <h2 id="room-heading" className="display mt-4 max-w-3xl text-5xl md:text-6xl">
              Get connected. <em>Then keep showing up.</em>
            </h2>
          </div>
          <Ext href={links.events} className="btn btn-line">Full events calendar</Ext>
        </div>
        <Mosaic tiles={tiles} />
      </section>

      {/* Reviews */}
      <section aria-labelledby="reviews-heading" className="bg-paper/60">
        <div className="container-x py-24 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="label text-teal-text">What members say</p>
              <h2 id="reviews-heading" className="display mt-4 text-5xl md:text-6xl">
                {site.rating.value.toFixed(1)} <Stars /> <span className="text-ink-2">on Google</span>
              </h2>
              <p className="mt-3 text-ink-2">From {site.rating.count} reviews, every one of them five stars.</p>
            </div>
            <a className="link" href={site.directions}>Read them on Google</a>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={(i % 2) * 0.06}>
                <ReviewCard r={r} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Executive members */}
      <section aria-labelledby="exec-heading" className="container-x py-24">
        <p className="label text-teal-text">Thank you</p>
        <h2 id="exec-heading" className="display mt-4 text-4xl md:text-5xl">Our Executive Members</h2>
        <ul className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9">
          {partners.map((p) => (
            <li key={p.file} className="relative flex aspect-[3/2] items-center justify-center rounded-lg bg-paper p-3">
              <Image src={`/partners/${p.file}`} alt={p.name} fill sizes="160px" className="object-contain p-3" />
            </li>
          ))}
        </ul>
      </section>

      <JoinBand />
    </>
  );
}
