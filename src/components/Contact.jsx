import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
} from "lucide-react";

function Contact() {
  return (
    <>
      <section
        id="contact"
        className="relative z-10 overflow-hidden border-t border-white/[0.08] px-5 py-20 sm:px-6 sm:py-24 lg:px-12 lg:py-28"
      >
        <div className="pointer-events-none absolute -bottom-16 right-0 select-none text-[100px] font-black tracking-[-0.08em] text-white/[0.015] sm:text-[160px] lg:text-[220px]">
          HELLO
        </div>

        <div className="relative mx-auto max-w-[1400px]">
          <div className="flex items-center gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
              06 / Contact
            </p>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
              }}
              className="h-px bg-white/20"
            />
          </div>

          <div className="mt-10 grid items-end gap-10 sm:mt-12 lg:grid-cols-[1.25fr_.75fr] lg:gap-14">
            <motion.h2
              initial={{
                opacity: 0,
                y: 55,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.75,
              }}
              className="text-[43px] font-black leading-[0.9] tracking-[-0.06em] text-white sm:text-6xl md:text-7xl lg:text-8xl"
            >
              HAVE AN IDEA?
              <br />

              <span className="text-white/25">
                LET&apos;S BUILD IT.
              </span>
            </motion.h2>

            <div>
              <div className="mb-6 h-px w-full bg-white/10" />

              <p className="max-w-sm text-[15px] leading-7 text-white/45">
                Open to opportunities,
                collaborations, projects, or just a
                friendly hello.
              </p>

              {/* SAME BUTTON DESIGN */}

              <div className="mt-7 flex max-w-[540px] flex-wrap gap-3">
                <ContactButton
                  href="mailto:mjbanaguas145@gmail.com"
                  primary
                >
                  <Mail
                    size={16}
                    className="text-current"
                  />

                  <span className="text-current">
                    Email Me
                  </span>
                </ContactButton>

                <ContactButton
                  href="https://github.com/Sushi1-lab"
                  external
                >
                  <span className="text-current">
                    GitHub
                  </span>

                  <ArrowUpRight
                    size={14}
                    className="text-current"
                  />
                </ContactButton>

                <ContactButton
                  href="https://www.linkedin.com/in/marl-joshua-banaguas-86a34826b/"
                  external
                >
                  <span className="text-current">
                    LinkedIn
                  </span>

                  <ArrowUpRight
                    size={14}
                    className="text-current"
                  />
                </ContactButton>

                <ContactButton
                  href="https://wa.me/639454896781"
                  external
                >
                  <MessageCircle
                    size={16}
                    className="text-current"
                  />

                  <span className="text-current">
                    WhatsApp
                  </span>

                  <ArrowUpRight
                    size={13}
                    className="text-current"
                  />
                </ContactButton>
              </div>

              <a
                href="mailto:mjbanaguas145@gmail.com"
                className="mt-8 inline-block max-w-full break-all text-xs !text-white/30 transition-colors duration-300 hover:!text-white/70 sm:text-sm"
              >
                mjbanaguas145@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/[0.08] px-5 py-8 sm:px-6 lg:px-12">
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-xs text-white/30">
            © 2026 Marl Joshua.
          </p>

          <div className="flex items-center gap-3">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-30" />

              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-400" />
            </span>

            <p className="text-xs text-white/30">
              Available for opportunities
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

function ContactButton({
  children,
  href,
  primary = false,
  external = false,
}) {
  return (
    <motion.a
      href={href}
      target={
        external
          ? "_blank"
          : undefined
      }
      rel={
        external
          ? "noopener noreferrer"
          : undefined
      }
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.97 }}
      className={
        primary
          ? `
            group
            flex items-center justify-center gap-2
            rounded-full
            border border-white
            bg-white
            px-5 py-3
            text-sm font-semibold
            !text-black
            transition-all duration-300
            hover:bg-transparent
            hover:!text-white
            sm:px-6
          `
          : `
            group
            flex items-center justify-center gap-2
            rounded-full
            border border-white/15
            bg-transparent
            px-5 py-3
            text-sm font-semibold
            !text-white
            transition-all duration-300
            hover:border-white
            hover:bg-white
            hover:!text-black
            sm:px-6
          `
      }
    >
      {children}
    </motion.a>
  );
}

export default Contact;