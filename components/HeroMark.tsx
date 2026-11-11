"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Mark } from "./Mark";

const Fallback = () => (
  <div className="flex h-full w-full items-center justify-center">
    <Mark className="h-[62%] w-[62%]" />
  </div>
);

const HeroScene = dynamic(() => import("./three/HeroScene"), { ssr: false, loading: Fallback });

function hasWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

export function HeroMark() {
  const [ok, setOk] = useState<boolean | null>(null);
  useEffect(() => setOk(hasWebGL()), []);
  return <div className="h-full w-full">{ok ? <HeroScene /> : <Fallback />}</div>;
}
