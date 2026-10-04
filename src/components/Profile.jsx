import { useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  ArrowDown,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

const profileImage = "/image1.jpg";

const reveal = {
  hidden: {
    opacity: 0,
    y: 45,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const stagger = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function Profile() {
  const [mobileMenu, setMobileMenu] =
    useState(false);

  const { scrollY } = useScroll();

  const heroY = useTransform(
    scrollY,
    [0, 800],
    [0, 90]
  );

  const portraitY = useTransform(
    scrollY,
    [0, 800],
    [0, -55]
  );

  return (
    <>
      {/* NAVIGATION */}

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.07] bg-[#080808]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 sm:px-6 sm:py-5 lg:px-12">
          <a
            href="#home"
            className="group flex items-center gap-2 !text-white"
          >
            <span className="text-xl font-black tracking-[-0.05em]">
              MJ.
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-white/40 transition duration-300 group-hover:bg-white" />
          </a>

          <div className="hidden items-center gap-10 md:flex">
            <NavLink href="#about">
              About
            </NavLink>

            <NavLink href="#work">
              Work
            </NavLink>

            <NavLink href="#skills">
              Skills
            </NavLink>

            <NavLink href="#contact">
              Contact
            </NavLink>
          </div>

          <a
            href="#contact"
            className="
              group hidden items-center gap-2
              rounded-full
              border border-white/15
              bg-transparent
              px-5 py-2.5
              text-sm font-semibold
              !text-white
              transition-all duration-300
              hover:border-white
              hover:bg-white
              hover:!text-black
              md:flex
            "
          >
            <span className="text-current">
              Let&apos;s Talk
            </span>

            <ArrowRight
              size={15}
              className="text-current transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

          <button
            type="button"
            onClick={() =>
              setMobileMenu(!mobileMenu)
            }
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white md:hidden"
          >
            {mobileMenu ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </div>

        {mobileMenu && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            transition={{
              duration: 0.4,
            }}
            className="border-t border-white/10 bg-[#080808] px-6 py-7 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {[
                "about",
                "work",
                "skills",
                "contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() =>
                    setMobileMenu(false)
                  }
                  className="text-base font-semibold capitalize !text-white/60 transition hover:!text-white"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* HERO */}

      <section
        id="home"
        className="relative z-10 mx-auto min-h-screen max-w-[1400px] overflow-hidden px-5 pb-20 pt-28 sm:px-6 sm:pt-32 lg:overflow-visible lg:px-12 lg:pt-40"
      >
        <div className="grid min-h-0 items-center gap-14 lg:min-h-[720px] lg:grid-cols-[1.05fr_.95fr] lg:gap-16">

          {/* LEFT SIDE */}

          <motion.div
            style={{ y: heroY }}
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="relative z-20 min-w-0"
          >
            <motion.div
              variants={reveal}
              className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 backdrop-blur-md sm:mb-8"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-30" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>

              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/65 sm:text-xs">
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={reveal}
              className="text-[18vw] font-black uppercase leading-[0.75] tracking-[-0.075em] sm:text-[90px] md:text-[105px] lg:text-[125px]"
            >
              Marl
              <br />

              <span className="bg-gradient-to-r from-white via-white/65 to-white/20 bg-clip-text text-transparent">
                Joshua.
              </span>
            </motion.h1>

            <motion.p
              variants={reveal}
              className="mt-7 max-w-lg text-[15px] leading-7 text-white/55 sm:mt-9 sm:text-lg"
            >
              Developer and visual designer creating
              functional digital experiences,
              thoughtful interfaces, and compelling
              presentations.
            </motion.p>

            <motion.div
              variants={reveal}
              className="mt-8 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4"
            >
              <a
                href="#work"
                className="
                  group flex items-center gap-3
                  rounded-full
                  border border-white
                  bg-white
                  px-5 py-3.5
                  text-sm font-bold
                  !text-black
                  transition-all duration-300
                  hover:scale-[1.02]
                  hover:bg-transparent
                  hover:!text-white
                  sm:px-6
                "
              >
                <span className="text-current">
                  Explore my work
                </span>

                <ArrowRight
                  size={17}
                  className="text-current transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#about"
                className="
                  group flex items-center gap-3
                  px-3 py-3
                  text-sm font-semibold
                  !text-white
                  transition-opacity duration-300
                  hover:opacity-60
                  sm:px-4
                "
              >
                <span className="text-current">
                  About me
                </span>

                <ArrowDown
                  size={16}
                  className="text-current transition-transform duration-300 group-hover:translate-y-1"
                />
              </a>
            </motion.div>

            {/* SAME STATS DESIGN */}

            <motion.div
              variants={reveal}
              className="mt-11 flex w-full items-stretch sm:mt-14"
            >
              <Stat
                value="03"
                label="Projects"
              />

              <StatDivider />

              <Stat
                value="12+"
                label="Skills"
              />

              <StatDivider />

              <Stat
                value="2+"
                label="Years Experience"
              />
            </motion.div>
          </motion.div>

          {/* PORTRAIT */}

          <motion.div
            style={{ y: portraitY }}
            className="relative mx-auto w-full max-w-[500px]"
          >
            {/* MJ */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.06 }}
              transition={{
                delay: 2.8,
                duration: 1.2,
              }}
              className="pointer-events-none absolute -right-4 -top-8 z-0 select-none text-[120px] font-black leading-none tracking-[-0.09em] text-transparent [-webkit-text-stroke:1px_white] sm:-right-10 sm:-top-14 sm:text-[180px] lg:-right-14 lg:-top-16 lg:text-[220px]"
            >
              MJ
            </motion.div>

            {/* BACKGROUND LIGHT */}

            <motion.div
              initial={{
                scale: 0.1,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 0.45,
              }}
              transition={{
                delay: 0.6,
                duration: 3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="pointer-events-none absolute left-1/2 top-1/2 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.08] blur-[70px] sm:blur-[100px]"
            />

            {/* FIRST CIRCLE */}

            <motion.div
              initial={{
                width: 8,
                height: 8,
                opacity: 0,
              }}
              animate={{
                width: [8, 8, 130, 220],
                height: [8, 8, 130, 220],
                opacity: [0, 0.8, 0.45, 0],
              }}
              transition={{
                duration: 3.1,
                times: [0, 0.16, 0.65, 1],
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50"
            />

            {/* SECOND CIRCLE */}

            <motion.div
              initial={{
                width: 5,
                height: 5,
                opacity: 0,
              }}
              animate={{
                width: [5, 5, 180, 310],
                height: [5, 5, 180, 310],
                opacity: [0, 0.35, 0.2, 0],
              }}
              transition={{
                delay: 0.3,
                duration: 3.2,
                times: [0, 0.15, 0.65, 1],
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25"
            />

            {/* IMAGE FRAME */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.35,
                duration: 1,
              }}
              whileHover={{
                y: -5,
              }}
              className="relative z-10 overflow-hidden rounded-[32px] border border-white/[0.14] bg-white/[0.035] p-[5px] shadow-[0_40px_100px_rgba(0,0,0,0.55)] sm:rounded-[48px] sm:p-[7px]"
            >
              {/* CIRCULAR REVEAL */}

              <motion.div
                initial={{
                  clipPath:
                    "circle(0% at 50% 50%)",
                }}
                animate={{
                  clipPath: [
                    "circle(0% at 50% 50%)",
                    "circle(0% at 50% 50%)",
                    "circle(10% at 50% 50%)",
                    "circle(28% at 50% 50%)",
                    "circle(48% at 50% 50%)",
                    "circle(75% at 50% 50%)",
                  ],
                }}
                transition={{
                  duration: 3.8,
                  times: [
                    0,
                    0.12,
                    0.28,
                    0.5,
                    0.75,
                    1,
                  ],
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative aspect-[4/5] overflow-hidden rounded-[27px] bg-[#151515] sm:rounded-[41px]"
              >
                <motion.img
                  src={profileImage}
                  alt="Marl Joshua"
                  initial={{
                    scale: 1.14,
                  }}
                  animate={{
                    scale: 1,
                  }}
                  transition={{
                    delay: 0.5,
                    duration: 4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="h-full w-full object-cover grayscale contrast-[1.06]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />

                {/* LIGHT SWEEP */}

                <motion.div
                  initial={{
                    left: "-30%",
                  }}
                  animate={{
                    left: "130%",
                  }}
                  transition={{
                    delay: 3.1,
                    duration: 2.1,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute -top-[20%] h-[140%] w-[15%] rotate-[12deg] bg-gradient-to-r from-transparent via-white/[0.1] to-transparent blur-xl"
                />

                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.07]" />

                {/* NAME */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 3.1,
                    duration: 0.9,
                  }}
                  className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7"
                >
                  <p className="text-xl font-semibold tracking-[-0.03em] text-white sm:text-2xl">
                    Marl Joshua
                  </p>

                  <div className="mt-2 flex items-center gap-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: 20 }}
                      transition={{
                        delay: 3.6,
                        duration: 0.7,
                      }}
                      className="h-px bg-white/30"
                    />

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: 3.7,
                        duration: 0.7,
                      }}
                      className="text-xs text-white/50 sm:text-sm"
                    >
                      Developer · Designer
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* PROFILE LABEL */}

            <motion.div
              initial={{
                opacity: 0,
                x: -15,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 3.3,
                duration: 0.8,
              }}
              className="absolute -left-8 top-14 z-20 hidden items-center gap-3 lg:flex"
            >
              <span className="text-[10px] font-semibold tracking-[0.2em] text-white/30">
                01
              </span>

              <div className="h-px w-7 bg-white/20" />

              <span className="text-[10px] font-semibold tracking-[0.2em] text-white/30">
                PROFILE
              </span>
            </motion.div>

            {/* FOCUS CARD */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                delay: 3.5,
                duration: 0.8,
              }}
              whileHover={{
                y: -4,
              }}
              className="absolute -bottom-3 left-3 z-20 hidden items-center gap-3 rounded-2xl border border-white/10 bg-black/75 px-4 py-3 shadow-2xl backdrop-blur-xl sm:flex lg:-bottom-5 lg:-left-5 lg:px-5 lg:py-4"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-20" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>

              <div>
                <p className="text-xs text-white/35">
                  Focus
                </p>

                <p className="mt-0.5 text-xs font-semibold text-white lg:text-sm">
                  Design + Development
                </p>
              </div>
            </motion.div>

            {/* RIGHT DETAIL */}

            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 80 }}
              transition={{
                delay: 3.7,
                duration: 0.9,
              }}
              className="absolute -right-5 bottom-16 hidden w-px bg-gradient-to-b from-transparent via-white/30 to-transparent lg:block"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 4,
                duration: 0.7,
              }}
              className="absolute -right-9 bottom-4 hidden rotate-90 text-[9px] font-medium tracking-[0.2em] text-white/20 lg:block"
            >
              MJ / 2026
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function NavLink({
  href,
  children,
}) {
  return (
    <a
      href={href}
      className="group relative py-2 text-sm font-medium !text-white/55 transition duration-300 hover:!text-white"
    >
      {children}

      <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-white transition-all duration-300 group-hover:w-full" />
    </a>
  );
}

function Stat({
  value,
  label,
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="min-w-0 flex-1 pr-2 sm:min-w-[110px] sm:pr-6 lg:min-w-[135px]"
    >
      <p className="text-xl font-black tracking-[-0.04em] text-white sm:text-[28px]">
        {value}
      </p>

      <p className="mt-1.5 text-[10px] leading-4 text-white/35 sm:text-sm">
        {label}
      </p>
    </motion.div>
  );
}

function StatDivider() {
  return (
    <div className="mr-2 w-px self-stretch bg-white/10 sm:mr-6" />
  );
}

export default Profile;