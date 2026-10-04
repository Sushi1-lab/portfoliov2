import { motion } from "framer-motion";
import {
  Code2,
  Palette,
} from "lucide-react";

const profileImage = "/image3.jpg";

const skills = [
  "React",
  "JavaScript",
  "Vite",
  "Tailwind CSS",
  "Firebase",
  "Firestore",
  "Node.js",
  "Git",
  "PowerPoint",
  "Photoshop",
  "UI Design",
  "Presentation Design",
];

const reveal = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const stagger = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

function About() {
  return (
    <>
      {/* ABOUT */}

      <section
        id="about"
        className="relative z-10 overflow-hidden border-t border-white/[0.08] px-5 py-20 sm:px-6 sm:py-24 lg:px-12 lg:py-28"
      >
        <div className="pointer-events-none absolute right-[-20px] top-10 select-none text-[90px] font-black tracking-[-0.08em] text-white/[0.018] sm:text-[150px] lg:right-[-40px] lg:text-[240px]">
          ABOUT
        </div>

        <div className="relative mx-auto max-w-[1400px]">
          <SectionLabel>
            01 / About
          </SectionLabel>

          <div className="mt-10 grid items-center gap-12 sm:mt-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
            <motion.div
              initial={{
                opacity: 0,
                x: -60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
              }}
              className="relative mx-auto w-full max-w-[600px] lg:max-w-none"
            >
              <div className="group overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.025] p-1.5 sm:rounded-[32px]">
                <div className="overflow-hidden rounded-[21px] sm:rounded-[27px]">
                  <img
                    src={profileImage}
                    alt="Marl Joshua"
                    className="aspect-[5/4] w-full object-cover grayscale transition duration-700 group-hover:scale-[1.025]"
                  />
                </div>
              </div>

              <div className="absolute -bottom-4 left-3 rounded-2xl border border-white/10 bg-black/70 px-4 py-3 backdrop-blur-xl sm:-bottom-5 sm:-left-3 sm:px-5 sm:py-4">
                <p className="text-xs text-white/40">
                  Based in
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  Philippines
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="min-w-0"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-semibold text-white/50">
                <span className="h-1 w-1 rounded-full bg-white/60" />
                Get to know me
              </span>

              <h2 className="mt-7 max-w-3xl text-[34px] font-black leading-[1.03] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
                I combine development and{" "}

                <span className="text-white/30">
                  design to turn ideas into digital
                  experiences.
                </span>
              </h2>

              <div className="mt-8 grid gap-5 border-t border-white/[0.08] pt-7 text-[15px] leading-7 text-white/50 sm:mt-10 sm:gap-8 sm:pt-8 md:grid-cols-2">
                <p>
                  I work across frontend development,
                  web applications, UI design,
                  graphics, and digital layouts. I
                  enjoy transforming complex
                  requirements into clean and
                  practical solutions.
                </p>

                <p>
                  My approach balances functionality
                  with visual clarity, whether
                  I&apos;m developing an application,
                  designing an interface, or creating
                  presentation materials.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES */}

      <section className="relative z-10 border-t border-white/[0.08] px-5 py-20 sm:px-6 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <SectionLabel>
            02 / Services
          </SectionLabel>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              number="01"
              icon={<Code2 size={24} />}
              title="Development"
              description="Responsive websites and applications built around usability and maintainable code."
            />

            <ServiceCard
              number="02"
              icon={<Palette size={24} />}
              title="Visual Design"
              description="Modern interfaces and graphic materials designed with hierarchy and clarity in mind."
            />

            <ServiceCard
              number="03"
              icon={<PresentationIcon />}
              title="Presentations"
              description="Professional presentations that transform information into clear visual stories."
            />
          </div>
        </div>
      </section>

      {/* SKILLS */}

      <section
        id="skills"
        className="relative z-10 border-t border-white/[0.08] px-5 py-20 sm:px-6 sm:py-24 lg:px-12 lg:py-28"
      >
        <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionLabel>
              04 / Skills
            </SectionLabel>

            <h2 className="mt-5 text-[36px] font-black tracking-[-0.045em] text-white sm:text-5xl">
              TOOLS & SKILLS
            </h2>

            <p className="mt-5 max-w-md text-sm leading-6 text-white/40">
              Technologies and creative tools I use
              across development and visual work.
            </p>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8 flex flex-wrap gap-2.5 sm:mt-9 sm:gap-3"
            >
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={reveal}
                  whileHover={{ y: -3 }}
                  className="
                    cursor-default rounded-full
                    border border-white/15
                    bg-white/[0.02]
                    px-4 py-2.5
                    text-xs font-medium
                    text-white/60
                    transition-colors duration-300
                    hover:border-white
                    hover:bg-white
                    hover:text-black
                    sm:px-5
                    sm:text-sm
                  "
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* EXPERIENCE */}

          <div>
            <SectionLabel>
              05 / Experience
            </SectionLabel>

            <div className="relative mt-10 border-l border-white/20 pl-6 sm:pl-8">
              <Experience
                year="2025 — Present"
                role="Graphic Specialist"
                company="Integreon"
              />

              <Experience
                year="2025 — Present"
                role="Graphics Production / Estimator"
                company="Integreon"
              />

              <Experience
                year="Present"
                role="Web Developer"
                company="Independent Projects"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionLabel({
  children,
}) {
  return (
    <div className="flex items-center gap-4">
      <p className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
        {children}
      </p>

      <div className="h-px w-10 bg-white/15" />
    </div>
  );
}

function ServiceCard({
  number,
  icon,
  title,
  description,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{
        duration: 0.5,
      }}
      className="group relative min-h-[245px] overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.025] p-6 transition-colors duration-500 hover:border-white/20 hover:bg-white/[0.04] sm:min-h-[275px] sm:p-7"
    >
      <div className="absolute left-0 top-0 h-px w-0 bg-white/70 transition-all duration-500 group-hover:w-full" />

      <div className="flex items-start justify-between">
        <div
          className="
            flex h-12 w-12 items-center justify-center
            rounded-xl
            border border-white/10
            bg-white/[0.04]
            text-white/70
            transition-all duration-300
            group-hover:border-white
            group-hover:bg-white
            group-hover:text-black
          "
        >
          {icon}
        </div>

        <span className="text-sm font-medium text-white/20">
          {number}
        </span>
      </div>

      <div className="mt-14 sm:mt-20">
        <h3 className="text-xl font-black tracking-[-0.025em] text-white">
          {title}
        </h3>

        <p className="mt-3 max-w-xs text-sm leading-6 text-white/40">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

function Experience({
  year,
  role,
  company,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.55,
      }}
      className="group relative grid gap-2 border-b border-white/[0.07] py-6 sm:grid-cols-[165px_1fr] sm:py-7"
    >
      <div className="absolute -left-[29px] top-7 h-3 w-3 rounded-full bg-white transition-transform duration-300 group-hover:scale-125 sm:-left-[37px] sm:top-8" />

      <p className="text-sm text-white/35 transition-colors duration-300 group-hover:text-white/55">
        {year}
      </p>

      <div>
        <p className="text-base font-bold text-white transition-transform duration-300 group-hover:translate-x-1">
          {role}
        </p>

        <p className="mt-1 text-sm text-white/40 transition-colors duration-300 group-hover:text-white/55">
          {company}
        </p>
      </div>
    </motion.div>
  );
}

function PresentationIcon() {
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded border border-current">
      <div className="h-2 w-3 border-b border-current" />
    </div>
  );
}

export default About;