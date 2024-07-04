function SkillSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="skills">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              My Skills
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I have a wide range of skills and experience in various web
              development technologies.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
            <div className="text-sm font-medium leading-none group-hover:underline">
              Front-end
            </div>
            <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              React, Next.js, HTML, CSS, JavaScript, TypeScript
            </div>
          </div>
          <div className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
            <div className="text-sm font-medium leading-none group-hover:underline">
              Back-end
            </div>
            <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              Node.js, Express, MongoDB, PostgreSQL, MySQL
            </div>
          </div>
          <div className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
            <div className="text-sm font-medium leading-none group-hover:underline">
              Tools & Frameworks
            </div>
            <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              Git, GitHub, Figma, Tailwind CSS, Jest, Cypress
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SkillSection;
