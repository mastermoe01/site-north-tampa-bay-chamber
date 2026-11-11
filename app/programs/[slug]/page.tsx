import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { Ext, JoinBand, PersonCard } from "@/components/ui";
import { fellows, fellowsCoordinator, fellowsFacilitator } from "@/lib/people";
import { getProgram, pillars, programs } from "@/lib/programs";

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProgram(slug);
  if (!p) return {};
  return {
    title: p.name,
    description: p.summary,
    alternates: { canonical: `/programs/${p.slug}` },
    openGraph: p.photos[0] ? { images: [{ url: p.photos[0].src, alt: p.photos[0].alt }] } : undefined,
  };
}

export default async function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProgram(slug);
  if (!p) notFound();
  const pillar = pillars.find((x) => x.id === p.pillar)!;
  const siblings = programs.filter((x) => x.pillar === p.pillar && x.slug !== p.slug);

  return (
    <>
      <section className="container-x pb-12 pt-10 md:pt-16">
        <nav aria-label="Breadcrumb" className="label !text-[0.65rem] text-ink-2">
          <Link href="/programs" className="hover:text-teal-text">Programs</Link>
          <span aria-hidden> / </span>
          <Link href={`/programs#${pillar.id}`} className="hover:text-teal-text">{pillar.name}</Link>
        </nav>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <p className="label text-teal-text">{p.kicker}</p>
            <h1 className="display mt-4 text-[2.9rem] md:text-7xl">{p.name}</h1>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Ext href={p.cta.href} className="btn btn-gold">{p.cta.label}</Ext>
            {p.cta2 && <Ext href={p.cta2.href} className="btn btn-line">{p.cta2.label}</Ext>}
          </div>
        </div>
        {p.when && (
          <p className="mt-8 inline-flex items-center gap-3 rounded-full bg-paper px-5 py-3 text-sm">
            <span aria-hidden className="h-2 w-2 rounded-full" style={{ background: pillar.color }} />
            {p.when}
          </p>
        )}
      </section>

      {p.photos.length > 0 && (
        <section aria-label={`${p.name} photos`} className="container-x">
          <div className={`grid gap-3 ${p.photos.length === 1 ? "" : "grid-cols-2 md:grid-cols-4"}`}>
            {p.photos.map((ph, i) => {
              const big = p.photos.length > 1 && i === 0;
              return (
                <Reveal
                  key={ph.src}
                  delay={i * 0.05}
                  className={`relative overflow-hidden rounded-xl bg-sand ${
                    p.photos.length === 1 ? "aspect-[16/9] max-h-[34rem]" : big ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
                  }`}
                >
                  <Image
                    src={ph.src}
                    alt={ph.alt}
                    fill
                    priority={i === 0}
                    sizes={big || p.photos.length === 1 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"}
                    className={ph.src.includes("chamber-chatter") ? "object-contain" : "object-cover"}
                  />
                </Reveal>
              );
            })}
          </div>
        </section>
      )}

      <section className="container-x grid gap-14 py-20 lg:grid-cols-[1.3fr_1fr]">
        <div className="prose-body max-w-2xl text-[1.08rem] text-ink-2">
          {p.intro.map((t, i) => (
            <p key={i} className={i === 0 ? "display !text-2xl !leading-snug text-ink md:!text-[1.75rem]" : ""}>
              {t}
            </p>
          ))}
        </div>
        <div className="space-y-6">
          {p.sections.map((s) => (
            <Reveal key={s.heading} className="rounded-2xl bg-paper p-7">
              <h2 className="display text-2xl">{s.heading}</h2>
              {s.body?.map((b, i) => (
                <p key={i} className="mt-3 text-sm text-ink-2">{b}</p>
              ))}
              {s.items && (
                <ul className="mt-4 space-y-2">
                  {s.items.map((it) => (
                    <li key={it} className="flex gap-3 text-sm">
                      <span aria-hidden className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: pillar.color }} />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      {p.slug === "leadership-institute" && (
        <section aria-labelledby="cohort" className="bg-paper/60">
          <div className="container-x py-20">
            <p className="label text-teal-text">Leadership Fellows Program</p>
            <h2 id="cohort" className="display mt-4 text-5xl">Meet the 2026 Leadership Fellow Cohort</h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {fellows.map((f) => (
                <PersonCard key={f.name} p={f} />
              ))}
            </div>
            <div className="mt-14 grid gap-8 border-t border-rule pt-10 sm:grid-cols-2">
              <PersonCard p={fellowsFacilitator} />
              <PersonCard p={fellowsCoordinator} />
            </div>
          </div>
        </section>
      )}

      {siblings.length > 0 && (
        <section aria-labelledby="more" className="container-x border-t border-rule py-16">
          <h2 id="more" className="label text-ink-2">More from {pillar.name}</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {siblings.map((s) => (
              <li key={s.slug}>
                <Link href={`/programs/${s.slug}`} className="inline-block rounded-full border border-rule px-4 py-2 text-sm hover:border-ink hover:bg-ink hover:text-linen">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <JoinBand />
    </>
  );
}
