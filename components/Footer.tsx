import Image from "next/image";
import Link from "next/link";
import { links, nav, site } from "@/lib/site";

export function Footer() {
  const a = site.address;
  return (
    <footer className="bg-deep text-linen">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <div className="inline-block rounded-md bg-linen p-4">
            <Image src="/brand/logo-vertical.png" alt="North Tampa Bay Chamber logo" width={180} height={120} />
          </div>
          <p className="mt-6 max-w-xs text-sm text-linen/75">
            Connector · Convener · Catalyst. Serving Wesley Chapel, New Tampa, Lutz, Land O’ Lakes, Trinity and Odessa since {site.founded}.
          </p>
        </div>

        <div>
          <h2 className="label text-gold">Visit</h2>
          <address className="mt-4 not-italic text-sm leading-7">
            <a className="hover:underline" href={site.directions}>
              {a.street}
              <br />
              {a.city}, {a.region} {a.postal}
            </a>
            <br />
            <a className="hover:underline" href={site.phoneHref}>{site.phone}</a>
            <br />
            <a className="hover:underline" href={`mailto:${site.email}`}>{site.email}</a>
          </address>
          <dl className="mt-4 text-sm leading-7">
            {site.hours.map((h) => (
              <div key={h.days} className="flex gap-3">
                <dt className="text-linen/70">{h.days}</dt>
                <dd>{h.time}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h2 className="label text-gold">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link className="hover:underline" href={n.href}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="label text-gold">Members</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a className="hover:underline" href={links.join}>Become a member</a></li>
            <li><a className="hover:underline" href={links.events}>Events calendar</a></li>
            <li><a className="hover:underline" href={links.directory}>Member directory</a></li>
            <li><a className="hover:underline" href={links.login}>Member login</a></li>
          </ul>
          <h2 className="label mt-8 text-gold">Follow</h2>
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {site.socials.map((s) => (
              <li key={s.label}><a className="hover:underline" href={s.href}>{s.label}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-linen/15">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-linen/60 md:flex-row md:justify-between">
          <p>© 2026 North Tampa Bay Chamber. All rights reserved.</p>
          <p>Rated {site.rating.value.toFixed(1)} on Google from {site.rating.count} reviews</p>
        </div>
      </div>
    </footer>
  );
}
