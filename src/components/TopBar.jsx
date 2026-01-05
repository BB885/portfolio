export default function TopBar({ locationText, buttonText, onToggle }) {
  return (
    <div className="flex items-center justify-between">
      <div className="text-sm text-zinc-400">{locationText}</div>

      <div className="flex items-center gap-3">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-sm text-zinc-200 transition hover:border-zinc-700 hover:bg-zinc-900"
        >
          Resume
        </a>

        <button
          onClick={onToggle}
          className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-sm text-zinc-200 transition hover:border-zinc-700 hover:bg-zinc-900"
          aria-label="Toggle language"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
