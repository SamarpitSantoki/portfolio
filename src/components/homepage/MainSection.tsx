import Image from "next/image";
import Link from "next/link";

function MainSection() {
  return (
    <section id="hero" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="flex gap-4 items-center">
                <Image
                  src={"/me.jpg"}
                  width="100"
                  height="100"
                  alt="Samarpit Santoki"
                  className="rounded-full"
                />
                <div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Samarpit Santoki
                  </h1>
                  <p className="inline-block rounded-lg text-sm">
                    Full-Stack Developer
                  </p>
                </div>
              </div>
              <h3
                aria-label="Job Title"
                className="max-w-[600px] text-muted-foreground md:text-xl"
              >
                I&apos;m a full-stack developer with a passion for creating
                innovative and user-friendly web applications.
              </h3>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                View Projects
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Hire Me
              </Link>
            </div>
          </div>
          <Image
            src="https://www.softsuave.com/blog/wp-content/uploads/2023/01/fullstack-development.png"
            width="550"
            height="550"
            alt="Hero"
            className="hidden lg:block mx-auto aspect-video overflow-hidden rounded-xl object-contain sm:w-full lg:order-last lg:aspect-square grayscale"
          />
        </div>
      </div>
    </section>
  );
}
export default MainSection;
