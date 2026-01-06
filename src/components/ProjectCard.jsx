export default function ProjectCard({ title, description, tags, liveUrl, githubUrl, liveText, githubText, hint, }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition hover:-translate-y-1 hover:border-zinc-700">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-zinc-300">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-200"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-3">
        <a
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl bg-zinc-100 px-4 py-2 text-sm text-zinc-950 transition hover:bg-zinc-200"
        >
          {liveText}
        </a>

        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-zinc-800 px-4 py-2 text-sm transition hover:bg-zinc-700"
          >
            {githubText}
          </a>
        )}
      </div>

      <p className="mt-4 text-xs text-zinc-500">{hint}</p>
    </div>
  );
}
