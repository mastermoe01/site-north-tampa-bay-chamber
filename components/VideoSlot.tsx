// Video-slot contract (docs/design-principles.md §5): renders only when the file exists
// at build time; poster falls back to the subject's lead photo.
import { existsSync } from "node:fs";
import path from "node:path";

const exists = (...p: string[]) => existsSync(path.join(process.cwd(), "public", ...p));

export function VideoSlot({
  subjectSlug,
  fallbackPoster,
  title,
}: {
  subjectSlug: string;
  fallbackPoster: string;
  title: string;
}) {
  const videos = (["walkthrough", "flyover"] as const).filter((f) => exists("videos", subjectSlug, `${f}.mp4`));
  if (videos.length === 0) return null;
  return (
    <section aria-labelledby="inside-heading" className="container-x py-20">
      <p className="label text-teal-text">See the space</p>
      <h2 id="inside-heading" className="display mt-3 text-4xl md:text-5xl">{title}</h2>
      <div className={`mt-10 grid gap-8 ${videos.length > 1 ? "md:grid-cols-2" : ""}`}>
        {videos.map((f) => {
          const poster = exists("videos", subjectSlug, `poster-${f}.jpg`)
            ? `/videos/${subjectSlug}/poster-${f}.jpg`
            : fallbackPoster;
          return (
            <figure key={f}>
              <video
                className="aspect-video w-full rounded-lg bg-ink"
                controls
                playsInline
                preload="metadata"
                poster={poster}
                src={`/videos/${subjectSlug}/${f}.mp4`}
              />
              <figcaption className="label mt-3 text-ink-2">{f === "walkthrough" ? "Walkthrough" : "Aerial flyover"}</figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
