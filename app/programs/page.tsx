import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Ext, JoinBand, PageHero } from "@/components/ui";
import { byPillar, catalystLinks, pillars } from "@/lib/programs";
import { links } from "@/lib/site";

export const metadata: Metadata = {
  title: "Programs & Events",
  description:
    "Business Breakfast, Coffee Social, Final Friday, Ribbon Cuttings, Lunch N’ Learn, the Leadership Institute, Leading Ladies Network and more from the North Tampa Bay Chamber.",
  alternates: { canonical: "/programs" },
};

export default function Programs() {
  return (
    <>
      <PageHero kicker="Programs & events" title={<>Connector. Convener. <em>Catalyst.</em></>}>
        <p>
          From advocacy and economic development to leadership programs, scholarships, and small business support, we are
          committed to creating opportunities that help businesses grow and communities thrive.
        </p>
        <div className="mt-8">
          <Ext href={links.events}>Events calendar</Ext>
        </div>
      </PageHero>

      {pillars.map((p, i) => (
        <section key={p.id} id={p.id} aria-labelledby={`${p.id}-h`} className="border-t border-rule">
          <div className="container-x grid gap-10 py-20 lg:grid-cols-[1fr_2.2fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <span aria-hidden className="block h-3 w-10 rounded-full" style={{ background: p.color }} />
              <p className="label mt-5 text-ink-2">0{i + 1}</p>
              <h2 id={`${p.id}-h`} className="display mt-2 text-5xl md:text-6xl">{p.name}</h2>
              <p className="mt-4 max-w-sm text-ink-2">{p.line}</p>
            </div>
            {p.id === "catalyst" ? (
              <ul className="grid gap-4 sm:grid-cols-2">
                {catalystLinks.map((c) => (
                  <li key={c.href}>
                    <Link href={c.href} className="group flex h-full items-center justify-between rounded-2xl bg-paper p-7 transition-colors hover:bg-ink hover:text-linen">
                      <span className="display text-2xl">{c.name}</span>
                      <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="grid gap-5 sm:grid-cols-2">
                {byPillar(p.id).map((prog, j) => (
                  <Reveal as="li" key={prog.slug} delay={(j % 2) * 0.06}>
                    <Link href={`/programs/${prog.slug}`} className="group block h-full overflow-hidden rounded-2xl bg-paper">
                      {prog.photos[0] ? (
                        <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                          <Image
                            src={prog.photos[0].src}
                            alt={prog.photos[0].alt}
                            fill
                            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                          />
                        </div>
                      ) : (
                        <div className="flex aspect-[4/3] items-end bg-deep p-6">
                          <span className="display text-4xl text-linen/90">{prog.name}</span>
                        </div>
                      )}
                      <div className="p-7">
                        {prog.when && <p className="label !text-[0.65rem] text-teal-text">{prog.when}</p>}
                        <h3 className="display mt-2 text-3xl">{prog.name}</h3>
                        <p className="mt-3 text-sm text-ink-2">{prog.summary}</p>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}

      <JoinBand />
    </>
  );
}
