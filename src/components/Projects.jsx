import ProjectCard from "./ProjectCard";

export default function Projects({ title, projects, trackerLiveUrl }) {
  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold">{title}</h2>

      <div className="mt-6 grid gap-5">
        {projects.map((p) => {
          const liveUrl = p.liveUrlKey === "tracker" ? trackerLiveUrl : p.githubUrl;

          return (
            <ProjectCard
              key={p.title}
              title={p.title}
              description={p.description}
              tags={p.tags}
              liveUrl={liveUrl}
              githubUrl={p.githubUrl}
              liveText={p.liveText}
              githubText={p.githubText}
              hint={p.hint}
            />
          );
        })}
      </div>
    </section>
  );
}
