import type { Metadata } from "next";
import { Ext, PageHero } from "@/components/ui";
import { links, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "North Tampa Bay Chamber, 28329 Paseo Dr. Suite 195, Wesley Chapel, FL 33543. (813) 994-8534. Open Monday–Friday, 9 AM–5 PM.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  const a = site.address;
  return (
    <>
      <PageHero kicker="Get in touch" title={<>We’re here to help you <em>every step of the way.</em></>} />

      <section className="container-x grid gap-5 pb-24 lg:grid-cols-3">
        <div className="rounded-2xl bg-paper p-8">
          <h2 className="label text-teal-text">Call or email</h2>
          <p className="display mt-5 text-3xl">
            <a href={site.phoneHref} className="hover:text-teal-text">{site.phone}</a>
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <li>
              <span className="block text-ink-2">Office</span>
              <a className="link" href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <span className="block text-ink-2">Events, sponsorships &amp; speaking</span>
              <a className="link" href={`mailto:${site.eventsEmail}`}>{site.eventsEmail}</a>
            </li>
          </ul>
          <div className="mt-8">
            <Ext href={links.contactForm}>Send us a message</Ext>
          </div>
        </div>

        <div className="rounded-2xl bg-paper p-8">
          <h2 className="label text-teal-text">Visit</h2>
          <address className="display mt-5 text-3xl not-italic leading-tight">
            {a.street}
            <br />
            {a.city}, {a.region} {a.postal}
          </address>
          <div className="mt-8">
            <Ext href={site.directions} className="btn btn-line">Get directions</Ext>
          </div>
        </div>

        <div className="rounded-2xl bg-deep p-8 text-linen">
          <h2 className="label text-gold">Office hours</h2>
          <dl className="mt-5 space-y-4">
            {site.hours.map((h) => (
              <div key={h.days}>
                <dt className="text-sm text-linen/70">{h.days}</dt>
                <dd className="display text-3xl">{h.time}</dd>
              </div>
            ))}
          </dl>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {site.socials.map((s) => (
              <li key={s.label}><a className="underline-offset-4 hover:underline" href={s.href}>{s.label}</a></li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
