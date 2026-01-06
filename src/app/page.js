"use client";

import { useMemo, useState } from "react";
import { COPY } from "../content/copy";

import TopBar from "../components/TopBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";

export default function Home() {
  const [lang, setLang] = useState("en");

  const liveDemoUrl = "https://job-application-tracker-benb.vercel.app/";
  const githubRepoUrl = "https://github.com/BB885/Job-Application-Tracker";
  const hockeyLiveUrl = "https://hockey-odds-calculator-rzdn.vercel.app";
  const notesLiveUrl = "https://notesappacr-bnbycxgfe4ajdeau.eastus2-01.azurewebsites.net";

  const spokenLanguages = [
    { en: "English — Fluent", fr: "Anglais — Courant" },
    { en: "French — Fluent", fr: "Français — Courant" },
  ];

  const techStack = ["Python", "Java", "C++", "React", "SQL", "FastAPI", "SQLite", "Vercel", "Render"];

  const t = useMemo(() => COPY[lang], [lang]);

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-4xl px-6 py-10">
        <TopBar
          locationText={t.topLocation}
          buttonText={t.toggleBtn}
          onToggle={() => setLang((l) => (l === "en" ? "fr" : "en"))}
        />

        <Hero name={t.name} headline={t.headline} subtitle={t.subtitle} />
        <About title={t.aboutTitle} body={t.aboutBody} />

        <Projects
          title={t.projectsTitle}
          projects={t.projects}
          trackerLiveUrl={liveDemoUrl}
          hockeyLiveUrl={hockeyLiveUrl}
          notesLiveUrl={notesLiveUrl}
        />


        <section className="mt-12 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
            <h2 className="text-xl font-semibold">{t.languagesTitle}</h2>
            <ul className="mt-4 space-y-2 text-zinc-300">
              {spokenLanguages.map((l, i) => (
                <li key={i}>{lang === "fr" ? l.fr : l.en}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
            <h2 className="text-xl font-semibold">{t.techTitle}</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span key={tech} className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        <footer className="mt-16 text-sm text-zinc-500">
          {t.footer} {new Date().getFullYear()} {t.name}
        </footer>
      </div>
    </main>
  );
}
