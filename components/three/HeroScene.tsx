"use client";

// "Four pieces, one center" — the logo's four ribbons, extruded, resting apart and
// converging into the finished mark as the hero scrolls away (design-brief.md §Hero / 3D).

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { RIBBON, RIBBON_COLORS } from "@/components/Mark";

const QUADS = [
  { sx: 1, sy: 1 },
  { sx: -1, sy: 1 },
  { sx: 1, sy: -1 },
  { sx: -1, sy: -1 },
];

// Mark space: 0..300, y down. Scene space: centered, y up, 1 unit = 100 mark units.
function toScene(x: number, y: number, q: { sx: number; sy: number }) {
  const mx = q.sx === 1 ? x : 300 - x;
  const my = q.sy === 1 ? y : 300 - y;
  return new THREE.Vector2((mx - 150) / 100, (150 - my) / 100);
}

function shapeFrom(points: readonly (readonly number[])[], q: { sx: number; sy: number }) {
  const v = points.map(([x, y]) => toScene(x, y, q));
  // keep a consistent winding after mirroring
  if (THREE.ShapeUtils.isClockWise(v)) v.reverse();
  return new THREE.Shape(v);
}

function Ribbon({
  index,
  progress,
  reduced,
}: {
  index: number;
  progress: React.RefObject<number>;
  reduced: boolean;
}) {
  const q = QUADS[index];
  const ref = useRef<THREE.Group>(null);
  const { outerGeo, darkGeo, dir, faceLight, faceDark, side } = useMemo(() => {
    const outer = shapeFrom(RIBBON.outer, q);
    const notch = shapeFrom(RIBBON.notch, q);
    outer.holes.push(new THREE.Path(notch.getPoints()));
    const dark = shapeFrom(RIBBON.dark, q);
    const opts = { depth: 0.22, bevelEnabled: true, bevelThickness: 0.03, bevelSize: 0.02, bevelSegments: 2 };
    const outerGeo = new THREE.ExtrudeGeometry(outer, opts);
    const darkGeo = new THREE.ExtrudeGeometry(dark, { ...opts, depth: 0.23 });
    darkGeo.translate(0, 0, 0.004);
    const c = toScene(71, 71, q);
    const dir = new THREE.Vector3(c.x, c.y, 0).normalize();
    const colors = RIBBON_COLORS[index];
    return {
      outerGeo,
      darkGeo,
      dir,
      faceLight: new THREE.MeshBasicMaterial({ color: colors.light }),
      faceDark: new THREE.MeshBasicMaterial({ color: colors.dark }),
      side: new THREE.MeshStandardMaterial({
        color: new THREE.Color(colors.dark).multiplyScalar(0.8),
        roughness: 0.55,
        metalness: 0.05,
      }),
    };
  }, [index, q]);

  const seed = index * 1.7;
  useFrame((state) => {
    const g = ref.current;
    if (!g) return;
    const p = progress.current ?? 0; // 0 = resting apart, 1 = assembled
    const t = state.clock.elapsedTime;
    const spread = reduced ? 0 : 0.3 * (1 - p);
    const bob = reduced ? 0 : Math.sin(t * 0.6 + seed) * 0.04 * (1 - p);
    g.position.set(dir.x * (spread + bob), dir.y * (spread + bob), 0);
    // each ribbon "unfolds" a little while apart
    g.rotation.set(dir.y * 0.6 * spread, -dir.x * 0.6 * spread, Math.sin(t * 0.4 + seed) * 0.03 * (1 - p));
  });

  return (
    <group ref={ref}>
      <mesh geometry={outerGeo} material={[faceLight, side]} />
      <mesh geometry={darkGeo} material={[faceDark, side]} />
    </group>
  );
}

function Assembly({ progress, reduced }: { progress: React.RefObject<number>; reduced: boolean }) {
  const root = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    const g = root.current;
    if (!g) return;
    const tx = reduced ? 0 : state.pointer.y * -0.12;
    const ty = reduced ? 0 : state.pointer.x * 0.18;
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, tx, 3, delta);
    g.rotation.y = THREE.MathUtils.damp(g.rotation.y, ty, 3, delta);
  });
  return (
    <group ref={root}>
      {[0, 1, 2, 3].map((i) => (
        <Ribbon key={i} index={i} progress={progress} reduced={reduced} />
      ))}
    </group>
  );
}

export default function HeroScene() {
  const reduced =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const target = useRef(0);
  const progress = useRef(reduced ? 1 : 0);

  useEffect(() => {
    if (reduced) return;
    const onScroll = () => {
      const h = window.innerHeight * 0.7;
      target.current = Math.min(1, Math.max(0, window.scrollY / h));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduced]);

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 10.5], fov: 28 }}
      frameloop={reduced ? "demand" : "always"}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      aria-hidden="true"
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[3, 4, 6]} intensity={1.4} />
      <Smoother target={target} progress={progress} reduced={reduced} />
      <Assembly progress={progress} reduced={reduced} />
    </Canvas>
  );
}

function Smoother({
  target,
  progress,
  reduced,
}: {
  target: React.RefObject<number>;
  progress: React.RefObject<number>;
  reduced: boolean;
}) {
  useFrame((_, delta) => {
    if (reduced) return;
    progress.current = THREE.MathUtils.damp(progress.current ?? 0, target.current ?? 0, 4, delta);
  });
  return null;
}

