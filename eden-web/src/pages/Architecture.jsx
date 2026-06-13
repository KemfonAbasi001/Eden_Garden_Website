import { useEffect, useRef, useState } from "react";
import NavBar from '../components/Navbar.jsx'
import FooterSection from '../components/Footer.jsx'

import imgFour from '../assets/photo-four.png'
import imgFive from '../assets/photo-five.png'
import imgEight from '../assets/photo-eight.png'
import imgNine from '../assets/photo-nine.png'
import imgTen from '../assets/photo-tem.png'
import imgEleven from '../assets/photo-eleven.png'

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

function ArchCard({ src, tag, title, isVisible, delay, tall }) {
  return (
    <div
      className={`w-full relative overflow-hidden group ${tall ? "h-64 sm:h-96 md:h-110 lg:h-127.5" : "h-64 sm:h-80 md:h-96 lg:h-110"} ${base} ${isVisible ? show : hidden}`}
      style={{ transitionDelay: delay }}
    >
      <img
        src={src}
        alt={title}
        className="h-full w-full block object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/70" />
      <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 lg:bottom-17 lg:left-15 max-w-70 sm:max-w-[384px] flex flex-col gap-2">
        <p className="text-[10px] sm:text-[12px] leading-4 font-medium tracking-[3px] sm:tracking-[3.6px] text-[#808080] uppercase font-inter">
          {tag}
        </p>
        <h1 className="text-[24px] sm:text-[30px] md:text-[36px] leading-tight font-medium tracking-[1.4px] sm:tracking-[1.8px] text-[#FFFFFF] font-cormorant">
          {title}
        </h1>
      </div>
    </div>
  );
}

function ArchitectureSection() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [heroRef, heroVisible] = useScrollReveal();
  const [rowOneRef, rowOneVisible] = useScrollReveal();
  const [rowTwoRef, rowTwoVisible] = useScrollReveal();
  const [outroRef, outroVisible] = useScrollReveal();

  return (
    <>
      <NavBar section="architecture" />

      <section className="w-full py-35 lg:py-35 flex justify-center items-center">
        <div className="w-[95%] flex flex-col justify-center items-center gap-14 sm:gap-18 lg:gap-22">

          <div ref={headerRef} className="text-center flex flex-col gap-4 sm:gap-6">
            <p
              className={`font-medium text-[11px] sm:text-[12px] leading-4 uppercase tracking-[4px] sm:tracking-[4.8px] text-[#6D7873] font-inter ${base} ${headerVisible ? show : hidden}`}
              style={{ transitionDelay: "0ms" }}
            >
              Masterful Design
            </p>
            <h1
              className={`text-[48px] sm:text-[68px] md:text-[80px] lg:text-[96px] leading-tight font-normal tracking-[2.4px] sm:tracking-[3.6px] lg:tracking-[4.8px] text-[#1C221F] font-cormorant ${base} ${headerVisible ? show : hidden}`}
              style={{ transitionDelay: "120ms" }}
            >
              Landscape <span className="italic">Architecture</span>
            </h1>
            <p
              className={`font-normal leading-6 tracking-[.4px] text-[#808080] font-inter text-[14px] sm:text-[15px] md:text-[16px] ${base} ${headerVisible ? show : hidden}`}
              style={{ transitionDelay: "220ms" }}
            >
              Where engineering meets artistry. Each structure is a testament to the harmony between human vision and nature's beauty.
            </p>
          </div>

          <div className="w-full flex flex-col gap-5 sm:gap-6 lg:gap-7">

            <div ref={heroRef}>
              <ArchCard
                src={imgNine}
                tag="Water Architecture"
                title="Grand Fountains"
                isVisible={heroVisible}
                delay="0ms"
                tall
              />
            </div>

            <div
              ref={rowOneRef}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-7"
            >
              <ArchCard
                src={imgTen}
                tag="Vertical Gardens"
                title="Living Walls"
                isVisible={rowOneVisible}
                delay="0ms"
              />
              <ArchCard
                src={imgEight}
                tag="Water Features"
                title="Koi Sanctuaries"
                isVisible={rowOneVisible}
                delay="150ms"
              />
            </div>

            <div
              ref={rowTwoRef}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-7"
            >
              <ArchCard
                src={imgFive}
                tag="Garden Lighting"
                title="Night Illumination"
                isVisible={rowTwoVisible}
                delay="0ms"
              />
              <ArchCard
                src={imgEleven}
                tag="Glass Architecture"
                title="The Conservatory"
                isVisible={rowTwoVisible}
                delay="150ms"
              />
            </div>

            <div ref={outroRef}>
              <ArchCard
                src={imgFour}
                tag="Contemporary Design"
                title="Modern Landscapes"
                isVisible={outroVisible}
                delay="0ms"
                tall
              />
            </div>

          </div>
        </div>
      </section>

      <FooterSection />
    </>
  );
}

export default ArchitectureSection;