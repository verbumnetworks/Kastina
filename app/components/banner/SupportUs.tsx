"use client";

import { motion } from "framer-motion";
import DonateButton from "../button/DonateButton";
import { ReactNode } from "react";

type SupportUsBannerProps = {
  title?: string;
  quote?: string;
  scripture?: string;
  children?: ReactNode; // optional extra text/slot
  className?: string;
};

// const fadeUp = {
//   hidden: { opacity: 0, y: 18 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
// };

export default function SupportUsBanner({
  title = "Support Our Mission",
  quote = "“God loves a cheerful giver.”",
  scripture = "2 Corinthians 9:7",
  children,
  className = "",
}: SupportUsBannerProps) {
  return (
    <section
      className={[
        "relative overflow-hidden rounded-2xl shadow-sm",
        "bg-gradient-to-br from-amber-50 via-white to-amber-100",
        "border border-amber-200/60",
        className,
      ].join(" ")}
      aria-labelledby="support-us-heading"
    >
      {/* Subtle ornaments */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_70%_0%,#000_0%,transparent_70%)]">
        <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-amber-200/50 blur-2xl" />
        <div className="absolute -bottom-20 -left-12 h-72 w-72 rounded-full bg-yellow-300/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr]"
        >
          {/* Text */}
          <motion.div  className="space-y-4">
            <h2
              id="support-us-heading"
              className="text-2xl font-bold tracking-tight text-amber-900 sm:text-3xl"
            >
              {title}
            </h2>

            <p className="text-base leading-relaxed text-amber-800/90 sm:text-lg">
              {quote}{" "}
              <span className="ml-1 font-medium text-amber-900">— {scripture}</span>
            </p>

            <p className="text-sm text-amber-900/80 sm:text-base">
              Your generosity helps us proclaim the Gospel, care for the poor, and
              build a vibrant community of faith.
            </p>

            {children && <div className="text-amber-900/90">{children}</div>}

            <div className="pt-2">
              {/* Your Donate Button */}
              <DonateButton className="ml-6 inline-flex"  />
            </div>
          </motion.div>

          {/* Callout Card */}
          <motion.div
        
            transition={{ delay: 0.08 }}
            className="relative"
          >
            <div className="rounded-xl border border-amber-200/70 bg-white/70 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div
                  aria-hidden
                  className="mt-0.5 h-10 w-10 shrink-0 rounded-lg bg-amber-100 ring-1 ring-amber-200/70"
                />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-amber-900">
                    Every Gift Makes a Difference
                  </h3>
                  <p className="text-sm leading-relaxed text-amber-900/80">
                    Your support sustains parish programs, catechesis, pastoral care,
                    and outreach. Thank you for partnering with us in this mission.
                  </p>
                  <div className="pt-2">
                    <DonateButton className="ml-6" />
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative divider */}
            <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
