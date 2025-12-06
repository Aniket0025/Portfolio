import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const social = [
  {
    icon: FaXTwitter,
    label: "X",
    href: "https://x.com/AniketYada21982?t=NlUuOyB23wBXKfhkdymjTQ&s=09",
  },
  {
    icon: FaLinkedin,
    label: "Linkedin",
    href:
      "https://www.linkedin.com/in/aniket-yadav-jan2005?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  { icon: FaGithub, label: "GitHub", href: "https://github.com/Aniket0025" },
];

const glowVariants = {
  initial: {
    scale: 1,
    y: 0,
    boxShadow: "0 0 0 rgba(0,0,0,0)",
  },
  hover: {
    scale: 1.15,
    boxShadow:
      "0 0 20px rgba(37,99,235,0.8), 0 0 40px rgba(16,185,129,0.7)",
    transition: { type: "spring", stiffness: 280, damping: 16 },
  },
  tap: {
    scale: 0.95,
    y: 0,
    boxShadow: "0 0 12px rgba(37,99,235,0.8)",
    transition: { duration: 0.08 },
  },
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black">

      {/* LEFT side glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_0%_50%,rgba(37,99,235,0.65),transparent_70%)]" />

      {/* RIGHT side glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_100%_50%,rgba(16,185,129,0.65),transparent_70%)]" />

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-10 sm:px-8 lg:px-10 py-16 md:py-20 flex flex-col items-center text-center space-y-6"
      >
        <h1
          className="font-semibold leading-none text-white text-center select-none"
          style={{
            fontSize: "clamp(3rem,5vw,14rem)",
            letterSpacing: "0.02em",
            lineHeight: 0.9,
            padding: "0 3vw",
            whiteSpace: "nowrap",
            textShadow: "0.2px 18px rgba(0,0,0,0.45)",
          }}
        >
          Aniket Yadav
        </h1>

        <div className="h-[3px] w-24 md:w-32 rounded-full bg-gradient-to-r from-[#0d58cc] via-cyan-300 to-emerald-400" />

        <div className="flex gap-5 text-2xl md:text-3xl">
          {social.map(({ icon: Icon, label, href }) => (
            <motion.a
              key={label}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              variants={glowVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="text-gray-100 inline-flex items-center justify-center rounded-full"
              href={href}
            >
              <Icon />
            </motion.a>
          ))}
        </div>

        <p className="text-gray-200 italic max-w-xl">
          "Success is when preparation meets opportunity."
        </p>

        <p className="text-xs text-gray-300">
          &copy; {new Date().getFullYear()} Aniket Yadav. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
