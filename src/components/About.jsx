export default function About({ title, body }) {
  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold">{title}</h2>

      <div className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
        <p className="text-zinc-300 leading-relaxed">{body}</p>
      </div>
    </section>
  );
}
