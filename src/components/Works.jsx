import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

const projects = [
  {
    number: "01",

    title: "Money Splitter",

    category: "Finance Web Application",

    description:
      "A money management platform for splitting shared expenses, tracking personal finances, managing budgets, and organizing payments.",

    tech: [
      "React",
      "Firebase",
      "Tailwind",
    ],

    image: "/money-splitter.png",

    url:
      "https://money-splitter-lake.vercel.app/",

    imagePosition: "object-center",
  },

  {
    number: "02",

    title: "Digital Invitation",

    category: "Interactive Website",

    description:
      "An interactive digital invitation experience designed for celebrations, featuring custom visuals, music, and a mobile-friendly layout.",

    tech: [
      "React",
      "Vite",
      "Responsive Design",
    ],

    image: "/invitation.png",

    url:
      "https://invitation-ten-xi.vercel.app/",

    imagePosition: "object-top",
  },

  {
    number: "03",

    title: "Food Ordering System",

    category: "Full Stack Web Application",

    description:
      "A digital restaurant ordering system with menu browsing, cart management, checkout, authentication, and administrative controls.",

    tech: [
      "React",
      "Firebase",
      "Firestore",
    ],

    image: "/food-ordering.png",

    url:
      "https://menu-h42mpd0qw-marls-projects-8b56fb40.vercel.app/",

    imagePosition: "object-top",
  },
];

function Works() {
  return (
    <section
      id="work"
      className="relative z-10 overflow-hidden border-t border-white/[0.08] px-5 py-20 sm:px-6 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="pointer-events-none absolute -right-10 top-10 select-none text-[100px] font-black tracking-[-0.08em] text-white/[0.015] sm:text-[150px] lg:text-[200px]">
        WORK
      </div>

      <div className="relative mx-auto max-w-[1400px]">
        <div className="flex items-center gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
            03 / Selected Work
          </p>

          <div className="h-px w-10 bg-white/15" />
        </div>

        <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <motion.h2
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
            }}
            className="text-[44px] font-black tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl"
          >
            PROJECTS
          </motion.h2>

          <p className="max-w-[350px] text-sm leading-6 text-white/35">
            Selected projects combining development,
            functionality, and visual design.
          </p>
        </div>

        {/* SAME CARDS — ONLY RESPONSIVE GRID */}

        <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map(
            (project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 55,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -8,
      }}
      className="group min-w-0 overflow-hidden rounded-[22px] border border-white/10 bg-[#0e0e0e] transition-colors duration-500 hover:border-white/25"
    >
      {/* SAME THUMBNAIL */}

      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-[4/3] overflow-hidden bg-[#111]"
        aria-label={`Open ${project.title}`}
      >
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className={`
            h-full w-full
            object-cover
            ${project.imagePosition}
            transition-all
            duration-700
            ease-out
            group-hover:scale-[1.055]
          `}
        />

        <div className="pointer-events-none absolute inset-0 bg-black/5 transition-all duration-500 group-hover:bg-black/35" />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0e0e0e]/70 via-transparent to-transparent" />

        {/* NUMBER */}

        <div className="absolute left-4 top-4 flex h-10 min-w-10 items-center justify-center rounded-full border border-white/15 bg-black/50 px-3 backdrop-blur-md sm:left-5 sm:top-5 sm:h-11 sm:min-w-11">
          <span className="text-sm font-bold text-white">
            {project.number}
          </span>
        </div>

        {/* ARROW */}

        <div
          className="
            absolute right-4 top-4
            flex h-10 w-10
            items-center justify-center
            rounded-full
            border border-white/15
            bg-black/50
            !text-white
            backdrop-blur-md
            transition-all duration-300
            group-hover:border-white
            group-hover:bg-white
            group-hover:!text-black
            sm:right-5 sm:top-5
            sm:h-11 sm:w-11
          "
        >
          <ArrowUpRight
            size={17}
            className="text-current transition-transform duration-300 group-hover:rotate-12"
          />
        </div>

        {/* SAME HOVER */}

        <div
          className="
            absolute inset-0
            hidden
            items-center justify-center
            opacity-0
            transition-all
            duration-500
            group-hover:opacity-100
            sm:flex
          "
        >
          <motion.div
            className="
              flex items-center gap-2
              rounded-full
              border border-white/20
              bg-black/65
              px-5 py-3
              text-sm font-semibold
              !text-white
              backdrop-blur-xl
            "
          >
            <span className="text-current">
              View Live Project
            </span>

            <ExternalLink
              size={15}
              className="text-current"
            />
          </motion.div>
        </div>
      </a>

      {/* PROJECT INFO */}

      <div className="p-5 sm:p-6">
        <p className="text-xs font-medium uppercase tracking-[0.1em] text-white/30">
          {project.category}
        </p>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/title mt-2 flex items-center justify-between gap-4 !text-white"
        >
          <h3 className="text-xl font-black tracking-[-0.03em] text-white">
            {project.title}
          </h3>

          <ArrowUpRight
            size={17}
            className="shrink-0 text-white/25 transition-all duration-300 group-hover/title:-translate-y-0.5 group-hover/title:translate-x-0.5 group-hover/title:text-white"
          />
        </a>

        <p className="mt-4 text-sm leading-6 text-white/40">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2 border-t border-white/[0.07] pt-5">
          {project.tech.map(
            (item) => (
              <span
                key={item}
                className="
                  rounded-full
                  border border-white/[0.08]
                  bg-white/[0.025]
                  px-3 py-1.5
                  text-xs font-medium
                  text-white/40
                  transition-all duration-300
                  group-hover:border-white/15
                  group-hover:text-white/60
                "
              >
                {item}
              </span>
            )
          )}
        </div>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link mt-6 inline-flex items-center gap-2 text-sm font-semibold !text-white/50 transition-colors duration-300 hover:!text-white"
        >
          <span className="text-current">
            Open Project
          </span>

          <ArrowUpRight
            size={14}
            className="text-current transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
          />
        </a>
      </div>
    </motion.article>
  );
}

export default Works;