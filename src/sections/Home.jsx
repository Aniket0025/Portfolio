import { motion } from "framer-motion";
import React, { useMemo } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import avator from "../assets/avator.png";
import ParticleBackground from "../components/ParticlesBackground.jsx";

const social = [
  { icon: FaXTwitter, label: "X", href: "https://x.com/AniketYada21982?t=NlUuOyB23wBXKfhkdymjTQ&s=09" },
  { icon: FaLinkedin, label: "Linkedin", href: "https://www.linkedin.com/in/aniket-yadav-jan2005?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  { icon: FaGithub, label: "GitHub", href: "https://github.com/Aniket0025" }
];

const glowVariants = {
  initial: { 
    scale: 1,
    y: 0,
    filter: "drop-shadow(0 0 0 rgba(0,0,0,0))"
  },
  hover: {
    scale: 1.15,
    filter: "drop-shadow(0 0 8px rgba(13,88,201,0.9)) drop-shadow(0 0 15px rgba(16,185,129,0.8))",
    transition: { type: "spring", stiffness: 300, damping: 15 }
  },
  tap: { 
    scale: 0.95, 
    y: 0, 
    transition: { duration: 0.08 } 
  }
};

const Home = () => {

  const roles = useMemo(
    () => ["Web Developer", "AI/ML Developer", "Full Stack Developer", "Software Developer"],
    []
  );

  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const current = roles[index];

    const timeout = setTimeout(() => {
      if (!deleting && subIndex < current.length) {
        setSubIndex((v) => v + 1);      // typing
      }
      else if (!deleting && subIndex === current.length) {
        setTimeout(() => setDeleting(true), 1000);  // pause before deleting
      }
      else if (deleting && subIndex > 0) {
        setSubIndex((v) => v - 1);      // deleting
      }
      else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);   // next word
      }

    }, deleting ? 45 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);

  return (
    <section id="home" className="w-full h-screen relative bg-black overflow-hidden">

      <ParticleBackground />

      <div className="absolute inset-0">

        {/* Top Glow */}
        <div className="absolute -top-32 -left-32 w-[72vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vh] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse"></div>

        {/* Bottom Glow */}
        <div className="absolute -bottom-0 right-0 w-[72vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vh] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse delay-500"></div>

        {/* Content */}
        <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2">
          
          {/* LEFT SIDE TEXT */}
          <div className="flex flex-col justify-center h-full text-center lg:text-left relative">
            <div className="w-full lg:pr-24 mx-auto max-w-[48rem]">

              {/* Typewriter */}
              <motion.div
                className="mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white min-h-[1.6em]"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span>{roles[index].substring(0, subIndex)}</span>

                <span
                  className="inline-block w-[2px] ml-1 bg-white animate-pulse align-middle"
                  style={{ height: "1em" }}
                ></span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Hello I'm
                <br />
                <span className="text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:whitespace-nowrap">
                  Aniket Yadav
                </span>
              </motion.h1>

              {/* About Paragraph */}
              <motion.p
                className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                I build digital experiences using React, Node.js, and AI technologies.  
                I focus on clean UI, scalable backend systems, and meaningful products that solve real problems.
              </motion.p>

              {/* Buttons */}
              <motion.div
                className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <a
                  href="#project"
                  className="px-6 py-3 rounded-full font-medium text-lg text-white bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] shadow-lg hover:scale-105 transition-all"
                >
                  View My Work
                </a>

                <a
                  href="/Resume.pdf"
                  download
                  className="px-6 py-3 rounded-full text-lg font-medium text-black bg-white hover:bg-gray-200 shadow-lg scale-105 transition-all"
                >
                  My Resume
                </a>
              </motion.div>

              {/* Social Icons */}
              <div className="mt-10 flex gap-5 text-2xl md:text-3xl justify-center lg:justify-start">
                {social.map(({ icon: Icon, label, href }) => (
                  <motion.a
                    href={href}
                    key={label}
                    target="_blank"
                    aria-label={label}
                    rel="noopener noreferrer"
                    variants={glowVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                    className="text-gray-300"
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>

            </div>
          </div>

          {/* RIGHT SIDE AVATAR */}
          <div className="relative hidden lg:block">
            
            {/* Glow Behind Avatar */}
            <div
              className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
              style={{
                right: "0px",
                width: "min(28vw, 480px)",
                height: "min(50vw, 820px)",
                borderRadius: "50%",
                filter: "blur(38px)",
                opacity: 0.32,
                background: "conic-gradient(from 0deg, #1cd8d2, #00bf8f, #302b63, #1cd8d2)"
              }}

              
            />

            {/* Avatar Image */}
            <motion.img
              src={avator}
              alt="Aniket Yadav"
              className="absolute top-1/2 -translate-y-1/2 object-contain select-none pointer-events-none"
              style={{
                right: "-30px",
                width: "min(60vh, 880px)",
                maxHeight: "110vh"
              }}
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default Home;
