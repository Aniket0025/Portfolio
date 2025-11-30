import { useEffect, useRef, useState } from 'react';
import { FiMenu } from "react-icons/fi";
import Alogo from "../assets/Alogo.png";
import OverlayMenu from "./OverlayMenu.jsx";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [visable, setVisable] = useState(true);
  const [forceVisable, setForceVisable] = useState(false);

  const lastScrolY = useRef(0);
  const timmerId = useRef(null);

  useEffect(() => {
    const homesection = document.querySelector("#home");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setForceVisable(true);
          setVisable(true);
        } else {
          setForceVisable(false);
        }
      },
      { threshold: 0.1 }
    );
    if (homesection) observer.observe(homesection);
    return () => {
      if (homesection) observer.unobserve(homesection);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (forceVisable) {
        setVisable(true);
        return;
      }

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrolY.current) {
        setVisable(false);
      } else {
        setVisable(true);

        if (timmerId.current) clearTimeout(timmerId.current);
        timmerId.current = setTimeout(() => {
          setVisable(false);
        }, 3000);
      }

      lastScrolY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timmerId.current) clearTimeout(timmerId.current);
    };
  }, [forceVisable]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition-transform duration-300 ${visable ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className='flex items-center space-x-2'>
          <img src={Alogo} alt="logo" className='w-25 h-25' />
          <div className='text-3xl font-bold text-white hidden sm:block'>Aniket</div>
        </div>

        <div className='block lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2'>
          <button
            onClick={() => setMenuOpen(true)}
            className='text-white text-3xl focus:outline-none'
            aria-label='open Menu'
          >
            <FiMenu />
          </button>
        </div>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-5 py-2 rounded-full font-medium shadow-lg hover:opacity-90 transition-opacity duration-300"
          >
            Reach Out
          </a>
        </div>
      </nav>

      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Navbar;
