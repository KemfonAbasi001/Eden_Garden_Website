import { useEffect, useRef, useState } from "react";
import NavBar from '../components/Navbar.jsx'
import FooterSection from '../components/Footer.jsx'

import imgThree from '../assets/photo-three.webp'
import imgFour from '../assets/photo-four.webp'
import imgFive from '../assets/photo-five.webp'
import imgSix from '../assets/photo-six.webp'
import imgEleven from '../assets/photo-eleven.webp'
import imgTwelve from '../assets/photo-twelve.webp'

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

function TextComp({ headFour, headFive, paragraphFive, isVisible, delay }) {
  return (
    <div
      className={`flex gap-4 flex-col justify-center w-full sm:w-[90%] lg:w-[85%] ${base} ${isVisible ? show : hidden}`}
      style={{ transitionDelay: delay }}
    >
      <p className="text-[11px] sm:text-[12px] leading-4 font-normal tracking-[3px] sm:tracking-[3.6px] text-[#6D7873] uppercase font-inter">{headFour}</p>
      <h1 className="text-[32px] sm:text-[40px] md:text-[48px] leading-tight font-normal tracking-[2px] sm:tracking-[2.4px] text-[#1C221F] font-cormorant">{headFive}</h1>
      <p className="font-normal leading-6 text-[#6D7873] font-inter text-[14px] sm:text-[15px] md:text-[16px]">{paragraphFive}</p>
      <a href="" className="uppercase text-[11px] sm:text-[12px] leading-4 font-medium tracking-[3px] sm:tracking-[3.6px] bg-[#1F513A] hover:bg-[#173626] transition-colors duration-500 ease-in-out text-[#F9F8F6] py-3 sm:py-4 px-8 sm:px-10 w-fit">
        Inquire now
      </a>
    </div>
  );
}

function ImgComp({ src, alt, isVisible, delay }) {
  return (
    <div
      className={`w-full overflow-hidden ${base} ${isVisible ? show : hidden}`}
      style={{ transitionDelay: delay }}
    >
      <img loading="lazy" src={src} alt={alt} className="h-full w-full block object-cover" />
    </div>
  );
}

function EventSection() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [rowOneRef, rowOneVisible] = useScrollReveal();
  const [rowTwoRef, rowTwoVisible] = useScrollReveal();
  const [rowThreeRef, rowThreeVisible] = useScrollReveal();
  const [rowFourRef, rowFourVisible] = useScrollReveal();
  const [rowFiveRef, rowFiveVisible] = useScrollReveal();
  const [rowSixRef, rowSixVisible] = useScrollReveal();

  return (
    <>
      <NavBar section="events" />

      <section className="w-full py-35 sm:py-24 md:py-28 lg:py-35 flex justify-center items-center">
        <div className="w-[92%] flex flex-col justify-center items-center gap-14 sm:gap-18 lg:gap-22">

          <div ref={headerRef} className="text-center flex flex-col gap-4 sm:gap-6">
            <p
              className={`font-medium text-[11px] sm:text-[12px] leading-4 uppercase tracking-[4px] sm:tracking-[4.8px] text-[#6D7873] font-inter ${base} ${headerVisible ? show : hidden}`}
              style={{ transitionDelay: "0ms" }}
            >
              Extraordinary Occasions
            </p>
            <h1
              className={`text-[48px] sm:text-[68px] md:text-[80px] lg:text-[96px] leading-tight font-normal tracking-[2.4px] sm:tracking-[3.6px] lg:tracking-[4.8px] text-[#1C221F] font-cormorant ${base} ${headerVisible ? show : hidden}`}
              style={{ transitionDelay: "120ms" }}
            >
              Events & <span className="italic">Celebrations</span>
            </h1>
          </div>

          <div className="w-full flex flex-col gap-16 sm:gap-22 lg:gap-30">

            <div ref={rowOneRef} className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12 lg:gap-15 items-center">
              <ImgComp src={imgTwelve} alt="Garden Weddings" isVisible={rowOneVisible} delay="0ms" />
              <TextComp headFour="Wedding" headFive="Garden Weddings" paragraphFive='Say "I do" in paradise. Fairy-lit ancient trees, flower-covered arches, and the most romantic setting on earth.' isVisible={rowOneVisible} delay="150ms" />
            </div>

            <div ref={rowTwoRef} className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12 lg:gap-15 items-center">
              <TextComp headFour="Exhibition" headFive="Botanical Exhibitions" paragraphFive="Curated showcases of the world's rarest specimens. A convergence of science, art, and nature." isVisible={rowTwoVisible} delay="0ms" />
              <ImgComp src={imgFive} alt="Botanical Exhibitions" isVisible={rowTwoVisible} delay="150ms" />
            </div>

            <div ref={rowThreeRef} className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12 lg:gap-15 items-center">
              <ImgComp src={imgThree} alt="Fashion & Photography" isVisible={rowThreeVisible} delay="0ms" />
              <TextComp headFour="Fashion" headFive="Fashion & Photography" paragraphFive="The ultimate backdrop for luxury fashion editorials and premium photography productions." isVisible={rowThreeVisible} delay="150ms" />
            </div>

            <div ref={rowFourRef} className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12 lg:gap-15 items-center">
              <TextComp headFour="Corporate" headFive="Corporate Retreats" paragraphFive="Elevate your corporate gatherings in an environment that inspires creativity and connection." isVisible={rowFourVisible} delay="0ms" />
              <ImgComp src={imgFour} alt="Corporate Retreats" isVisible={rowFourVisible} delay="150ms" />
            </div>

            <div ref={rowFiveRef} className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12 lg:gap-15 items-center">
              <ImgComp src={imgEleven} alt="Private Gatherings" isVisible={rowFiveVisible} delay="0ms" />
              <TextComp headFour="Private" headFive="Private Gatherings" paragraphFive="Intimate celebrations in the world's most exclusive botanical setting." isVisible={rowFiveVisible} delay="150ms" />
            </div>

            <div ref={rowSixRef} className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12 lg:gap-15 items-center">
              <TextComp headFour="Workshop" headFive="Botanical Workshops" paragraphFive="Learn from master gardeners and landscape architects in immersive botanical sessions." isVisible={rowSixVisible} delay="0ms" />
              <ImgComp src={imgSix} alt="Botanical Workshops" isVisible={rowSixVisible} delay="150ms" />
            </div>

          </div>
        </div>
      </section>

      <FooterSection />
    </>
  );
}

export default EventSection;