"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Mark } from "./Mark";
import { links, nav } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled || open ? "bg-linen/95 shadow-[0_1px_0_var(--rule)] backdrop-blur" : "bg-linen/0"
      }`}
    >
      <div className="container-x flex h-[72px] items-center gap-6">
        <Link href="/" className="flex items-center gap-3" aria-label="North Tampa Bay Chamber, home">
          <Mark className="h-9 w-9 shrink-0" title="" />
          <span className="label whitespace-nowrap leading-tight !tracking-[0.14em] text-ink">
            North Tampa Bay
            <span className="block text-[0.62rem] !tracking-[0.42em] text-ink-2">Chamber</span>
          </span>
        </Link>

        <nav aria-label="Main" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-6">
            {nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className={`label !text-[0.7rem] transition-colors hover:text-teal-text ${
                    pathname.startsWith(n.href) ? "text-teal-text" : "text-ink"
                  }`}
                  aria-current={pathname.startsWith(n.href) ? "page" : undefined}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-4">
          <a href={links.events} className="label hidden !text-[0.7rem] px-3 py-2 hover:text-teal-text md:inline-block">
            Events
          </a>
          <a href={links.directory} className="label hidden !text-[0.7rem] px-3 py-2 hover:text-teal-text md:inline-block">
            Directory
          </a>
          <a href={links.join} className="btn btn-gold !py-3 !px-4">
            Join
          </a>
          <button
            type="button"
            className="ml-1 inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden className="relative block h-3 w-5">
              <span className={`absolute left-0 top-0 h-[1.5px] w-5 bg-ink transition-transform ${open ? "translate-y-[5px] rotate-45" : ""}`} />
              <span className={`absolute bottom-0 left-0 h-[1.5px] w-5 bg-ink transition-transform ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      <nav id="mobile-nav" aria-label="Mobile" className={`${open ? "block" : "hidden"} border-t border-rule lg:hidden`}>
        <ul className="container-x grid gap-1 py-4">
          {nav.map((n) => (
            <li key={n.href}>
              <Link href={n.href} className="display block py-2 text-3xl">
                {n.label}
              </Link>
            </li>
          ))}
          <li className="mt-3 flex flex-wrap gap-2">
            <a href={links.events} className="btn btn-line">Events calendar</a>
            <a href={links.directory} className="btn btn-line">Member directory</a>
            <a href={links.login} className="btn btn-line">Member login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
