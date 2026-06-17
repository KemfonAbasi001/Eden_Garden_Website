import { useEffect, useRef, useState } from "react";

import pics from '../assets/pic-one.webp'
import picsOne from '../assets/pic-two.webp'
import picsTwo from '../assets/pic-three.webp'
import picsThree from '../assets/pic-foour.webp'
import imgTen from '../assets/photo-tem.webp'
import picsT from '../assets/pics-fifty.webp'

import NavBar from '../components/Navbar.jsx'
import FooterSection from '../components/Footer.jsx'

function useScrollReveal() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px"
      }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

const base = "transition-all duration-700 ease-out";
const hidden = "opacity-0 translate-y-10";
const show = "opacity-100 translate-y-0";

const flowers = [
  { src: pics,      label: "Royal Orchid" },
  { src: picsOne,   label: "Sacred Lotus" },
  { src: picsTwo,   label: "Heritage Rose" },
  { src: picsThree, label: "White Lily" },
  { src: picsT,     label: "Bird of Paradise" },
  { src: imgTen,    label: "Green Cascade" },
];

function GallerySection() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal();

  return (
    <>
      <NavBar section="gallery" />

      <section className="w-full py-40 lg:py-35 flex justify-center items-center">
        <div className="w-[93%] flex flex-col justify-center items-center gap-14 sm:gap-18 lg:gap-22">

          <div ref={headerRef} className="text-center flex flex-col gap-4 sm:gap-6 w-full">
            <p
              className={`font-medium text-[11px] sm:text-[12px] leading-4 uppercase tracking-[4px] sm:tracking-[4.8px] text-[#6D7873] font-inter ${base} ${headerVisible ? show : hidden}`}
              style={{ transitionDelay: "0ms" }}
            >
              Botanical Masterpieces
            </p>
            <h1
              className={`text-[48px] sm:text-[72px] md:text-[84px] lg:text-[96px] leading-tight font-normal tracking-[2.4px] sm:tracking-[3.6px] lg:tracking-[4.8px] text-[#1C221F] font-cormorant ${base} ${headerVisible ? show : hidden}`}
              style={{ transitionDelay: "120ms" }}
            >
              Flower <span className="italic">Gallery</span>
            </h1>
          </div>

          <div
            ref={gridRef}
            className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7"
          >
            {flowers.map(({ src, label }, i) => (
              <div
                key={label}
                className={`relative w-full overflow-hidden group ${base} ${gridVisible ? show : hidden}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <img
                  loading="lazy"
                  src={src}
                  alt={label}
                  className="w-full block object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/50" />
                <div className="absolute bottom-6 left-6 sm:bottom-9 sm:left-8 flex flex-col gap-2">
                  <h1 className="text-[27px] leading-tight font-medium tracking-[1.2px] text-[#FFFFFF] font-cormorant">
                    {label}
                  </h1>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <FooterSection />
    </>
  );
}

export default GallerySection;