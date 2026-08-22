import Image from "next/image";

function hashToHue(slug: string): number {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return hash % 360;
}

export function ProjectVisual({
  slug,
  thumbnail,
  title,
}: {
  slug: string;
  thumbnail?: string | null;
  title: string;
}) {
  if (thumbnail) {
    return (
      <div className="relative h-full w-full overflow-hidden">
        <Image
          src={thumbnail}
          alt={`${title} screenshot`}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    );
  }

  const hue = hashToHue(slug);
  const accent = `hsl(${hue} 45% 38%)`;
  const accentSoft = `hsl(${hue} 45% 92%)`;

  return (
    <div
      className="relative h-full w-full"
      style={{
        backgroundColor: accentSoft,
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 27px, ${accent}22 27px, ${accent}22 28px)`,
      }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{ backgroundImage: `linear-gradient(135deg, ${accent}18 0%, transparent 55%)` }}
      />
      <span className="absolute bottom-3 right-3 font-mono text-[11px] tracking-wide" style={{ color: accent }}>
        {slug.slice(0, 2).toUpperCase()}-{String(hue).padStart(3, "0")}
      </span>
    </div>
  );
}
