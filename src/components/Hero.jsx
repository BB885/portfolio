export default function Hero({ name, headline, subtitle }) {
  return (
    <header className="mt-10 space-y-4">
      <h1 className="text-4xl font-semibold tracking-tight">
        {name} <span className="text-zinc-400">— {headline}</span>
      </h1>

      <p className="max-w-2xl leading-relaxed text-zinc-300">{subtitle}</p>
    </header>
  );
}
