import Reveal from "@/components/ui/Reveal";

type SectionHeaderProps = {
  /** Petit label au-dessus du titre. */
  eyebrow?: string;
  title: string;
  subtitle?: string;
  /** Adapte les couleurs au fond de la section. */
  tone?: "dark" | "light";
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  tone = "light",
  className = "",
}: SectionHeaderProps) {
  const isDark = tone === "dark";

  return (
    <Reveal className={`max-w-2xl ${className}`.trim()}>
      {eyebrow ? (
        <p
          className={`mb-4 font-display text-[0.8125rem] font-medium tracking-[0.18em] uppercase ${
            isDark ? "text-accent-light" : "text-accent"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}

      <h2
        className={`text-[clamp(1.8rem,3.5vw,2.6rem)] leading-[1.12] font-bold ${
          isDark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>

      {subtitle ? (
        <p
          className={`mt-5 text-[1.0625rem] leading-relaxed ${
            isDark ? "text-white/60" : "text-muted"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
