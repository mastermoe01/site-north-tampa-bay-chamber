import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x py-32">
      <p className="label text-teal-text">Page not found</p>
      <h1 className="display mt-4 text-6xl">This page isn’t here.</h1>
      <div className="mt-8 flex gap-3">
        <Link href="/" className="btn btn-ink">Home</Link>
        <Link href="/programs" className="btn btn-line">Programs</Link>
      </div>
    </section>
  );
}
