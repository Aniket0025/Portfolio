import { motion, useScroll, useTransform } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";


import Event from "../assets/Event.jpg";
import GDG from "../assets/GDG.jpg";
import Odoo from "../assets/Odoo.jpg";
import PBL from "../assets/PBL.jpg";

const achievements = [
  {
    title: "Runner-Up – GDG Hackathon",
    image: GDG,
    content: (
      <p className="text-gray-300">
        Achieved Runner-Up at the GDG-supported SGU Hackathon 2025 for building
        an innovative tech solution focused on smarter sustainable shopping.
      </p>
    ),
  },
  {
    title: "Finalist – Oddo, Gujarat",
    image: Odoo,
    content: (
      <p className="text-gray-300">
        Finalist among 5,000+ teams at the Odoo Hackathon 2025 for building
        QuickCourt, an innovative sports court booking & management platform.
      </p>
    ),
  },
  {
    title: "Winner – PBL Competition",
    image: PBL,
    content: (
      <p className="text-gray-300">
        Secured 1st Place at the PBL Competition 2025 for developing NEXUS, a
        MERN-based School & College Management System with advanced academic
        management features.
      </p>
    ),
  },
  {
    title: "Organizer – State Level Quiz",
    image: Event,
    content: (
      <p className="text-gray-300">
        Successfully managed complete technical operations for the State-Level
        GK Quiz Contest 2025 using our custom AptTech Quiz Platform — handling
        registrations, scoring, and real-time results.
      </p>
    ),
  },

];

export default function Achievement() {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const scrollWin = useCallback((amount) => {
    try {
      window.scrollBy({ top: amount, behavior: "smooth" });
    } catch {}
  }, []);

  return (
    <section
      id="achievements"
      className="relative w-full bg-black text-white overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-[360px] h-[360px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-15 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-20">
        <div className="text-center mb-10 flex flex-col items-center justify-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2]">
            Achievements
          </h2>

          <p className="mt-3 text-gray-300 max-w-2xl font-semibold text-2xl">
            Milestones that define my journey.
          </p>
        </div>

        <div className="relative" ref={containerRef}>
          <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="flex justify-start pt-10 md:pt-36 md:gap-10"
              >
                {/* Left Sticky Title */}
                <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                  <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-neutral-700 border border-neutral-600" />
                  </div>
                  <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-400">
                    {item.title}
                  </h3>
                </div>

                {/* Right Side */}
                <div className="relative pl-20 pr-4 md:pl-4 w-full">
                  <h3 className="md:hidden block text-4xl mb-4 text-left font-bold text-neutral-400">
                    {item.title}
                  </h3>

                  {/* IMAGE — REDUCED SIZE */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-[350px] h-[200px] md:w-[550px] md:h-[350px] rounded-xl mb-4 border border-white/10 shadow-lg object-cover"
                  />

                  {/* CONTENT — INCREASED TEXT SIZE */}
                  <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                    {item.content.props.children}
                  </p>
                </div>
              </div>
            ))}

            {/* Timeline Line */}
            <div
              style={{ height: height + "px" }}
              className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px]
              bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))]
              from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]
              [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
            >
              <motion.div
                style={{
                  height: heightTransform,
                  opacity: opacityTransform,
                }}
                className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#1cd8d2] via-[#00bf8f] to-transparent rounded-full"
              />
            </div>
          </div>

          {/* Scroll Buttons */}
          <div className="hidden md:flex sticky top-24 ml-auto w-fit z-40 justify-end">
            <div className="flex flex-col gap-2">
              <button
                onClick={() => scrollWin(-600)}
                className="rounded-full p-2 bg-white/10 hover:bg-white/20 border border-white/10 text-white"
              >
                <FaChevronUp />
              </button>
              <button
                onClick={() => scrollWin(600)}
                className="rounded-full p-2 bg-white/10 hover:bg-white/20 border border-white/10 text-white"
              >
                <FaChevronDown />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
