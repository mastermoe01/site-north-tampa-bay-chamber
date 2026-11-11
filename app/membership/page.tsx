import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Ext, PageHero } from "@/components/ui";
import { links } from "@/lib/site";

export const metadata: Metadata = {
  title: "Membership & Sponsorship",
  description:
    "Join the North Tampa Bay Chamber: networking events, marketing opportunities, educational resources and member savings. Sponsor a signature event, share your voice, or apply for the Celebrating Excellence in Business Awards.",
  alternates: { canonical: "/membership" },
};

// Sources: research/site-pages/home.txt, become-a-member.txt, become-a-sponsor.txt,
// share-your-voice-2.txt, affinity-program.txt, celebrating-excellence-in-business-awards.txt
const benefits = [
  { t: "Dynamic networking events", d: "Coffee Social, Final Friday, Business Breakfast, Rise & Connect and more." },
  { t: "Impactful marketing opportunities", d: "Ribbon cuttings, open houses, the Chamber Chatter podcast and event sponsorships." },
  { t: "Valuable educational resources", d: "Lunch N’ Learn, Leading Ladies, the Leadership Institute and Economic Development Briefings." },
  { t: "Exclusive member savings", d: "Plus member-only benefits such as the NTBC Member Advantage affinity program." },
];

export default function Membership() {
  return (
    <>
      <PageHero kicker="Membership" title={<>Unlock the power of connection, <em>visibility, and growth.</em></>}>
        <p>
          Join the North Tampa Bay Chamber today. If you do business in the North Tampa Bay area, you belong here. Elevate your
          presence, expand your reach, and align your business with a community that’s committed to success.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Ext href={links.join} className="btn btn-gold">Membership application</Ext>
          <Ext href={links.login} className="btn btn-line">Member login</Ext>
        </div>
      </PageHero>

      <section aria-labelledby="benefits" className="container-x pb-24">
        <h2 id="benefits" className="sr-only">Member benefits</h2>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <Reveal as="li" key={b.t} delay={i * 0.05} className="rounded-2xl bg-paper p-7">
              <span aria-hidden className="block h-1 w-8 rounded-full bg-gold" />
              <h3 className="display mt-5 text-2xl">{b.t}</h3>
              <p className="mt-3 text-sm text-ink-2">{b.d}</p>
            </Reveal>
          ))}
        </ul>
        <p className="mt-6 text-sm text-ink-2">
          New membership benefits are coming soon. Ribbon Cuttings are included with Premier, Executive &amp; President’s Circle
          Membership. For levels and dues, start the{" "}
          <a className="link" href={links.join}>membership application</a> or call the office.
        </p>
      </section>

      <section id="awards" aria-labelledby="awards-h" className="bg-sand">
        <div className="container-x grid gap-10 py-20 md:grid-cols-[1fr_1.2fr] md:items-center">
          <Image
            src="/brand/celebrating-excellence-logo.jpg"
            alt="Celebrating Excellence in Business Awards logo"
            width={1536}
            height={640}
            className="w-full rounded-xl"
            sizes="(min-width: 768px) 45vw, 100vw"
          />
          <div>
            <p className="label text-teal-text">2026 Celebrating Excellence in Business Awards</p>
            <h2 id="awards-h" className="display mt-4 text-4xl md:text-5xl">Honoring businesses that exemplify our core values</h2>
            <p className="mt-5 text-ink-2">
              Integrity, Collaboration, Inclusivity, and Innovation. Members may apply for recognition or nominate a fellow
              Chamber member. Nominees must be current members in good standing; applications should highlight accomplishments
              and initiatives from the past 12 months.
            </p>
            <dl className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-paper p-5">
                <dt className="label !text-[0.62rem] text-ink-2">Application deadline</dt>
                <dd className="display mt-2 text-xl">Tuesday, November 17, 2026, 5:00 PM</dd>
              </div>
              <div className="rounded-xl bg-paper p-5">
                <dt className="label !text-[0.62rem] text-ink-2">Awards</dt>
                <dd className="display mt-2 text-xl">December 1, 2026, 9:00 AM, at the Annual Meeting</dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <Ext href={links.annualMeeting}>Register for the event</Ext>
              <Ext href={links.eventsMail} className="btn btn-line">Ask about applying</Ext>
            </div>
          </div>
        </div>
      </section>

      <section id="sponsor" aria-labelledby="sponsor-h" className="container-x grid gap-10 py-24 md:grid-cols-2">
        <Reveal>
          <p className="label text-teal-text">Become a sponsor</p>
          <h2 id="sponsor-h" className="display mt-4 text-4xl md:text-5xl">Make a lasting impression.</h2>
          <p className="mt-5 text-ink-2">
            Our signature events are where connections are made, leaders are recognized, and our community comes together to
            celebrate growth and opportunity. When you sponsor a signature event, you’re not just gaining visibility you’re
            positioning your business as a community leader.
          </p>
          <div className="mt-8">
            <Ext href={links.eventsMail} className="btn btn-gold">Become a sponsor</Ext>
          </div>
        </Reveal>
        <Reveal delay={0.06} className="rounded-2xl bg-paper p-8" >
          <p id="share-your-voice" className="label text-teal-text">Share your voice</p>
          <h2 className="display mt-4 text-3xl">Take the stage and share your expertise.</h2>
          <ul className="mt-6 space-y-4 text-sm">
            <li><strong>Speak at an Event</strong>: Business Breakfast, Economic Development Briefings.</li>
            <li><strong>Host a Networking Event</strong>: Coffee Social or Final Friday.</li>
            <li><strong>Lead a Presentation or Workshop</strong>: Leading Ladies and Lunch N’ Learn.</li>
          </ul>
          <div className="mt-8">
            <Ext href={links.eventsMail} className="btn btn-line">Get involved</Ext>
          </div>
        </Reveal>
      </section>

      <section id="affinity" aria-labelledby="affinity-h" className="border-t border-rule">
        <div className="container-x grid gap-10 py-20 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <p className="label text-teal-text">Affinity program · NTBC Member Advantage</p>
            <h2 id="affinity-h" className="display mt-4 text-4xl">Tools to help your business stay competitive</h2>
            <p className="mt-5 text-ink-2">
              In partnership with Shark Branding Solutions, this member-only benefit provides enhanced online visibility and
              discoverability, optimization for AI-powered search and recommendations, and a competitive edge in a rapidly
              changing digital landscape. Available exclusively to North Tampa Bay Chamber members.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Ext href={links.sharkReport} className="btn btn-ink">Free business visibility report</Ext>
            <Ext href={links.sharkBranding} className="btn btn-line">Shark Branding Solutions</Ext>
          </div>
        </div>
      </section>
    </>
  );
}
