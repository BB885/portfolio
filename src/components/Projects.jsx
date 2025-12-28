import ProjectCard from "./ProjectCard";

export default function Projects({ title, project, liveUrl, githubUrl }) {
  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold">{title}</h2>

      <div className="mt-6 grid gap-5">
        <ProjectCard
          title={project.title}
          description={project.description}
          tags={project.tags}
          liveUrl={liveUrl}
          githubUrl={githubUrl}
          liveText={project.liveDemo}
          githubText={project.github}
          hint={project.cicdHint}
        />
      </div>
    </section>
  );
}
