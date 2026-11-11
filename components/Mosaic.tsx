"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export type Tile = { src: string; alt: string; caption: string; href: string; className: string; speed: number };

function TileView({ t, progress }: { t: Tile; progress: ReturnType<typeof useScroll>["scrollYProgress"] }) {
  const y = useTransform(progress, [0, 1], [t.speed * 40, t.speed * -40]);
  return (
    <motion.div style={{ y }} className={t.className}>
      <Link href={t.href} className="group relative block h-full w-full overflow-hidden rounded-xl bg-sand">
        <Image
          src={t.src}
          alt={t.alt}
          fill
          sizes="(min-width: 768px) 33vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <span className="label absolute bottom-3 left-3 rounded-full bg-linen/90 px-3 py-2 !text-[0.65rem] text-ink">
          {t.caption}
        </span>
      </Link>
    </motion.div>
  );
}

export function Mosaic({ tiles }: { tiles: Tile[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  return (
    <div ref={ref} className="grid auto-rows-[9rem] grid-cols-2 gap-3 md:auto-rows-[11rem] md:grid-cols-6 md:gap-4">
      {tiles.map((t) =>
        reduce ? (
          <div key={t.src} className={t.className}>
            <Link href={t.href} className="relative block h-full w-full overflow-hidden rounded-xl bg-sand">
              <Image src={t.src} alt={t.alt} fill sizes="(min-width: 768px) 33vw, 50vw" className="object-cover" />
              <span className="label absolute bottom-3 left-3 rounded-full bg-linen/90 px-3 py-2 !text-[0.65rem] text-ink">
                {t.caption}
              </span>
            </Link>
          </div>
        ) : (
          <TileView key={t.src} t={t} progress={scrollYProgress} />
        ),
      )}
    </div>
  );
}
