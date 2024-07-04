function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 border-t">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              About Me
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Passionate About Crafting Exceptional Web Experiences
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              As a full-stack developer, I have a deep passion for creating
              innovative and user-friendly web applications. With a strong
              foundation in both front-end and back-end technologies, I strive
              to deliver solutions that not only look great but also function
              seamlessly.
            </p>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              My Expertise
            </div>
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Front-End Development</h3>
                  <p className="text-muted-foreground">
                    Proficient in HTML, CSS, JavaScript, and modern front-end
                    frameworks like React, Vue, and Angular.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Back-End Development</h3>
                  <p className="text-muted-foreground">
                    Experienced in building robust server-side applications
                    using Node.js, Express, and various databases like MySQL,
                    PostgreSQL, and MongoDB.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Full-Stack Integration</h3>
                  <p className="text-muted-foreground">
                    Adept at seamlessly integrating front-end and back-end
                    components to create cohesive and scalable web applications.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutSection;
