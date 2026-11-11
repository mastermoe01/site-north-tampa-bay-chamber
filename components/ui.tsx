import Image from "next/image";
import type { ReactNode } from "react";
import type { Person } from "@/lib/people";
import type { Review } from "@/lib/reviews";
import { links } from "@/lib/site";

export function PageHero({ kicker, title, children }: { kicker: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="container-x pb-14 pt-14 md:pb-20 md:pt-24">
      <p className="label text-teal-text">{kicker}</p>
      <h1 className="display mt-4 max-w-5xl text-[2.75rem] md:text-7xl">{title}</h1>
      {children && <div className="mt-8 max-w-2xl text-lg text-ink-2">{children}</div>}
    </section>
  );
}

export function Ext({ href, children, className = "btn btn-ink" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a href={href} className={className}>
      {children}
      <span aria-hidden>→</span>
    </a>
  );
}

export function PersonCard({ p, size = 112 }: { p: Person; size?: number }) {
  return (
    <figure className="flex items-center gap-4">
      {p.photo && (
        <Image
          src={p.photo}
          alt={`${p.name}, ${p.role}`}
          width={size}
          height={size}
          className="shrink-0 rounded-full object-cover"
          style={{ width: size * 0.7, height: size * 0.7 }}
        />
      )}
      <figcaption>
        <p className="display text-xl">{p.name}</p>
        <p className="text-sm text-ink-2">{p.role}</p>
        {p.org && <p className="text-sm text-ink-2">{p.org}</p>}
      </figcaption>
    </figure>
  );
}

export function Stars({ n = 5 }: { n?: number }) {
  return (
    <span aria-label={`${n} out of 5 stars`} className="text-gold-deep" role="img">
      {"★".repeat(n)}
    </span>
  );
}

export function ReviewCard({ r }: { r: Review }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl bg-paper p-7 shadow-[0_1px_0_var(--rule)]">
      <div className="flex items-center justify-between gap-4">
        {r.stars ? <Stars n={r.stars} /> : <span />}
        <span className="label !text-[0.65rem] text-ink-2">{r.source}</span>
      </div>
      <blockquote className="mt-5 flex-1 space-y-4 text-[1.02rem] leading-relaxed">
        {r.text.map((t, i) => (
          <p key={i}>“{t}”</p>
        ))}
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-rule pt-5">
        {r.photo && (
          <Image src={r.photo} alt={r.name} width={44} height={44} className="h-11 w-11 rounded-full object-cover" />
        )}
        <span>
          <span className="block font-medium">{r.name}</span>
          <span className="block text-sm text-ink-2">{r.detail}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function JoinBand() {
  return (
    <section className="bg-deep text-linen">
      <div className="container-x grid items-end gap-10 py-20 md:grid-cols-[1.4fr_1fr] md:py-28">
        <div>
          <p className="label text-gold">Ready to join?</p>
          <h2 className="display mt-4 text-5xl md:text-7xl">
            If you do business in the North Tampa Bay area, <em className="text-gold">you belong here.</em>
          </h2>
        </div>
        <div>
          <p className="text-linen/80">
            Gain access to dynamic networking events, impactful marketing opportunities, valuable educational resources, and
            exclusive member savings.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Ext href={links.join} className="btn btn-gold">Become a member</Ext>
            <Ext href={links.events} className="btn btn-line-light">Visit an event</Ext>
          </div>
        </div>
      </div>
    </section>
  );
}
