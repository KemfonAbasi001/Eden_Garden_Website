
// import NavBar from '../components/Navbar.jsx'
// import FooterSection from '../components/Footer.jsx'


// import bg_image from '../assets/bg-image.png'

// import imgOne from '../assets/photo-one.png'
// import imgTwo from '../assets/photo-two.png'
// import imgThree from '../assets/photo-three.png'
// import imgFour from '../assets/photo-four.png'

// import photoOne from '../assets/img-one.png'

// import pics from '../assets/pic-one.png'
// import picsOne from '../assets/pic-two.png'
// import picsTwo from '../assets/pic-three.png'
// import picsThree from '../assets/pic-foour.png'


// function HomeCardOne(props) {
//     return(
//         <a href={props.hreff} className="w-full relative overflow-hidden group">
//             <img 
//                 src={props.imgOne} 
//                 alt="Garden one" 
//                 className="h-full w-full block object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" 
//             />
//             <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/70"></div>
//             <div className="absolute bottom-14 left-13">
//                 <p className="text-[12px] leading-4 font-medium tracking-[3.6px] text-[#808080] uppercase font-inter">{props.paragraph}</p>
//                 <h1 className="text-[36px] leading-10 font-medium tracking-[1.8px] text-[#FFFFFF] font-cormorant">{props.header}</h1>
//             </div> 
//         </a>
//     )
// }


// function HomeCardTwo(props) {
//     return(
//         <a href={props.link} className="w-full relative overflow-hidden group">
//             <img src={props.pics} alt="Garden one" className="h-full w-full block object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"/>
//             <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/20"></div>
//             <div className="absolute bottom-10 left-10">
//                 <p className="text-[10px] leading-3.75 font-medium tracking-[3px] text-[#808080] uppercase font-inter">{props.paragraphOne}</p>
//                 <h1 className="text-[24px] leading-8 font-medium tracking-[1.2px] text-[#FFFFFF] font-cormorant">{props.headerOne}</h1>
//             </div> 
//         </a>
//     )
// }





// function HomeSection() {

//   return (
//     <>
//         <NavBar />
//         <main>
//             <section  style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(${bg_image})` }} className='w-full py-25 flex items-center justify-center flex-col text-center gap-5 bg-cover bg-center bg-no-repeat'>
//                 <p className='text-[#999999] text-[14px] font-400 leading-5 tracking-[5.6px] uppercase font-inter'>The world's most exclusive</p>
//                 <h1 className='text-[118px] leading-30 font-light tracking-[6.4px] text-[#FFFFFF] font-cormorant'>Botanical <br /><span className='text-[#E2AF36] italic'>Paradise</span></h1>
//                 <p className="font-normal leading-6 tracking-[1.6px] text-[#808080] font-inter text-[18px]">Where nature meets luxury in perfect harmony</p>
//                 <div className="flex gap-5 mt-3">
//                     <a href="" className="uppercase border border-solid font-medium box-border text-[#FFFFFF] text-[12px] leading-4 tracking-[3.6px] border-[#ffffff4d] py-4 px-10 transition-all duration-500 ease-in-out hover:bg-white hover:text-black">Explore garden</a>
//                     <a href="" className="uppercase text-[12px] leading-4 font-medium tracking-[3.6px] bg-[#ffffff1a] text-[#FFFFFF] py-4 px-10">Book a visit</a>
//                 </div>
//             </section>

//             <section className="w-full py-35 flex justify-center items-center">
//                 <div className="w-[95%] flex flex-col justify-center items-center gap-22">
//                     <div className="text-center flex flex-col gap-6">
//                         <p className="font-medium text-[12px] leading-4 uppercase tracking-[4.8px] text-[#6D7873]  font-inter">Curated Experiences</p>
//                         <h1 className="text-[72px] leading-18 font-light tracking-[3.6px] text-[#1C221F] font-cormorant">Garden <span className="italic">Collections</span></h1>
//                     </div>

//                     <div className="w-full grid grid-cols-2 gap-7.5">

//                         <HomeCardOne 
//                             hreff='/zen'
//                             imgOne={imgOne}
//                             paragraph='Meditative harmony'
//                             header='Japanese Zen'
//                         />

//                         <HomeCardOne 
//                             hreff='/zen'
//                             imgOne={imgTwo}
//                             paragraph='Exotic immersion'
//                             header='Tropical Paradise'
//                         />

//                         <HomeCardOne 
//                             hreff='/zen'
//                             imgOne={imgThree}
//                             paragraph='Timeless Elegance'
//                             header='Rose Gardens'
//                         />

//                         <HomeCardOne 
//                             hreff='/zen'
//                             imgOne={imgFour}
//                             paragraph='Contemporary serenity'
//                             header='Modern Minimalist'
//                         />

//                     </div>
                        
//                 </div>
//             </section>

//             <section  style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(${photoOne})` }} className='w-full py-35 flex items-center justify-center flex-col text-center gap-5 bg-cover bg-center bg-no-repeat'>
//                 <p className='text-[#999999] text-[14px] font-400 leading-5 tracking-[5.6px] uppercase font-inter'>Our Philosophy</p>
//                 <h1 className='text-[72px] leading-18 font-light tracking-[3.6px] text-[#FFFFFF] font-cormorant'>We don't create gardens. <br /> We create <span className='text-[#E2AF36] italic'>worlds</span>.</h1>
//                 <p className="font-normal leading-6 tracking-[.4px] text-[#808080] font-inter text-[16px]">Every landscape is a masterpiece. Every pathway, a journey. Every<br /> bloom, a moment of pure transcendence.</p>
//             </section>


//             <section className="w-full py-35 flex justify-center items-center">
//                 <div className="w-[95%] flex flex-col justify-center items-center gap-16">
//                     <div className="header text-center flex flex-col gap-6">
//                         <p className="font-medium text-[12px] leading-4 uppercase tracking-[4.8px] text-[#6D7873]  font-inter">Floral Masterpieces</p>
//                         <h1 className="text-[72px] leading-18 font-light tracking-[3.6px] text-[#1C221F] font-cormorant">Living <span className="italic">Art</span></h1>
//                     </div>
//                     <div className="w-full grid grid-cols-4 gap-5">

//                         <HomeCardTwo 
//                             link='/helow'
//                             pics={pics}
//                             paragraphOne='Rare & Exotic'
//                             headerOne='Orchids'
//                         />

//                         <HomeCardTwo 
//                             link='/helow'
//                             pics={picsOne}
//                             paragraphOne='Sacred beauty'
//                             headerOne='Lotus'
//                         />

//                         <HomeCardTwo 
//                             link='/helow'
//                             pics={picsTwo}
//                             paragraphOne='Timeless romance'
//                             headerOne='Roses'
//                         />

//                         <HomeCardTwo 
//                             link='/helow'
//                             pics={picsThree}
//                             paragraphOne='Pure elegance'
//                             headerOne='Lilies'
//                         />

//                     </div>
//                 </div>
//             </section>


//             <section  style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(${bg_image})` }} className='w-full py-25 flex items-center justify-center flex-col text-center gap-5 bg-cover bg-center bg-no-repeat'>
//                 <p className='text-[#999999] text-[14px] font-400 leading-5 tracking-[5.6px] uppercase font-inter'>Begin Your Journey</p>
//                 <h1 className='text-[95px] leading-24 font-light tracking-[4.8px] text-[#FFFFFF] font-cormorant'>Step Into <span className='italic'>Paradise</span></h1>
//                 <p className="font-normal leading-6 tracking-[.4px] text-[#808080] font-inter text-[16px]">Experience the world's most exclusive botanical estate. Private<br /> tours available by appointment.</p>
//                 <div className="flex gap-5 mt-3">
//                     <a href="" className="uppercase font-medium border border-solid bg-[#FFFFFF] text-[#1C221F] text-[12px] leading-4 tracking-[3.6px] py-4 px-10">Reserve your visit</a>
//                     <a href="" className="uppercase text-[12px] font-medium leading-4 tracking-[3.6px] border-[#ffffff4d]  border border-solid  text-[#FFFFFF] py-4 px-10 transition-all duration-500 ease-in-out hover:border-[#ffffff1a] hover:bg-[#ffffff1a]">Host an event</a>
//                 </div>
//             </section>
//         </main>

//         <FooterSection />
//     </>
//   )
// }

// export default HomeSection















































import { useEffect, useRef, useState } from "react";
import NavBar from '../components/Navbar.jsx'
import FooterSection from '../components/Footer.jsx'

import bg_image from '../assets/bg-image.png'
import imgOne from '../assets/photo-one.png'
import imgTwo from '../assets/photo-two.png'
import imgThree from '../assets/photo-three.png'
import imgFour from '../assets/photo-four.png'
import photoOne from '../assets/img-one.png'
import pics from '../assets/pic-one.png'
import picsOne from '../assets/pic-two.png'
import picsTwo from '../assets/pic-three.png'
import picsThree from '../assets/pic-foour.png'

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

function HomeCardOne({ hreff, imgOne, paragraph, header, isVisible, delay }) {
  return (
    <a
      href={hreff}
      className={`w-full relative overflow-hidden group ${base} ${isVisible ? show : hidden}`}
      style={{ transitionDelay: delay }}
    >
      <img
        src={imgOne}
        alt={header}
        className="h-full w-full block object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
      <div className="absolute bottom-8 left-8 sm:bottom-10 sm:left-10 lg:bottom-14 lg:left-13">
        <p className="text-[10px] sm:text-[12px] leading-4 font-medium tracking-[3px] sm:tracking-[3.6px] text-[#808080] uppercase font-inter">
          {paragraph}
        </p>
        <h1 className="text-[24px] sm:text-[30px] md:text-[36px] leading-tight font-medium tracking-[1.4px] sm:tracking-[1.8px] text-[#FFFFFF] font-cormorant">
          {header}
        </h1>
      </div>
    </a>
  );
}

function HomeCardTwo({ link, pics, paragraphOne, headerOne, isVisible, delay }) {
  return (
    <a
      href={link}
      className={`w-full relative overflow-hidden group ${base} ${isVisible ? show : hidden}`}
      style={{ transitionDelay: delay }}
    >
      <img
        src={pics}
        alt={headerOne}
        className="h-full w-full block object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
      <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 lg:bottom-10 lg:left-10">
        <p className="text-[9px] sm:text-[10px] leading-4 font-medium tracking-[2.4px] sm:tracking-[3px] text-[#808080] uppercase font-inter">
          {paragraphOne}
        </p>
        <h1 className="text-[18px] sm:text-[21px] md:text-[24px] leading-tight font-medium tracking-[1px] sm:tracking-[1.2px] text-[#FFFFFF] font-cormorant">
          {headerOne}
        </h1>
      </div>
    </a>
  );
}

function HomeSection() {
  const [heroRef, heroVisible] = useScrollReveal();
  const [collectionsHeaderRef, collectionsHeaderVisible] = useScrollReveal();
  const [collectionsGridRef, collectionsGridVisible] = useScrollReveal();
  const [philosophyRef, philosophyVisible] = useScrollReveal();
  const [artHeaderRef, artHeaderVisible] = useScrollReveal();
  const [artGridRef, artGridVisible] = useScrollReveal();
  const [ctaRef, ctaVisible] = useScrollReveal();

  return (
    <>
      <NavBar />

      {/* Hero */}
      <section
        ref={heroRef}
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(${bg_image})` }}
        className="w-full py-20 sm:py-24 md:py-28 lg:py-25 flex items-center justify-center flex-col text-center gap-4 sm:gap-5 bg-cover bg-center bg-no-repeat"
      >
        <p
          className={`text-[#999999] text-[11px] sm:text-[13px] md:text-[14px] font-normal leading-5 tracking-[4px] sm:tracking-[5.6px] uppercase font-inter ${base} ${heroVisible ? show : hidden}`}
          style={{ transitionDelay: "0ms" }}
        >
          The world's most exclusive
        </p>
        <h1
          className={`text-[60px] sm:text-[80px] md:text-[100px] lg:text-[118px] leading-tight font-light tracking-[3px] sm:tracking-[5px] lg:tracking-[6.4px] text-[#FFFFFF] font-cormorant ${base} ${heroVisible ? show : hidden}`}
          style={{ transitionDelay: "120ms" }}
        >
          Botanical <br /><span className="text-[#E2AF36] italic">Paradise</span>
        </h1>
        <p
          className={`font-normal leading-6 tracking-[1.2px] sm:tracking-[1.6px] text-[#808080] font-inter text-[14px] sm:text-[16px] md:text-[18px] ${base} ${heroVisible ? show : hidden}`}
          style={{ transitionDelay: "220ms" }}
        >
          Where nature meets luxury in perfect harmony
        </p>
        <div
          className={`flex flex-col sm:flex-row gap-3 sm:gap-5 mt-2 sm:mt-3 ${base} ${heroVisible ? show : hidden}`}
          style={{ transitionDelay: "320ms" }}
        >
          <a href="" className="uppercase border border-solid font-medium text-[#FFFFFF] text-[11px] sm:text-[12px] leading-4 tracking-[3px] sm:tracking-[3.6px] border-[#ffffff4d] py-3 sm:py-4 px-8 sm:px-10 transition-all duration-500 ease-in-out hover:bg-white hover:text-black">
            Explore garden
          </a>
          <a href="" className="uppercase text-[11px] sm:text-[12px] leading-4 font-medium tracking-[3px] sm:tracking-[3.6px] bg-[#ffffff1a] text-[#FFFFFF] py-3 sm:py-4 px-8 sm:px-10">
            Book a visit
          </a>
        </div>
      </section>

      {/* Collections */}
      <section className="w-full py-16 sm:py-24 md:py-28 lg:py-35 flex justify-center items-center">
        <div className="w-[95%] flex flex-col justify-center items-center gap-14 sm:gap-18 lg:gap-22">

          <div ref={collectionsHeaderRef} className="text-center flex flex-col gap-4 sm:gap-6">
            <p
              className={`font-medium text-[11px] sm:text-[12px] leading-4 uppercase tracking-[4px] sm:tracking-[4.8px] text-[#6D7873] font-inter ${base} ${collectionsHeaderVisible ? show : hidden}`}
              style={{ transitionDelay: "0ms" }}
            >
              Curated Experiences
            </p>
            <h1
              className={`text-[48px] sm:text-[60px] md:text-[68px] lg:text-[72px] leading-tight font-light tracking-[2.4px] sm:tracking-[3.2px] lg:tracking-[3.6px] text-[#1C221F] font-cormorant ${base} ${collectionsHeaderVisible ? show : hidden}`}
              style={{ transitionDelay: "120ms" }}
            >
              Garden <span className="italic">Collections</span>
            </h1>
          </div>

          <div ref={collectionsGridRef} className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
            <HomeCardOne hreff='/zen' imgOne={imgOne} paragraph='Meditative harmony' header='Japanese Zen' isVisible={collectionsGridVisible} delay="0ms" />
            <HomeCardOne hreff='/zen' imgOne={imgTwo} paragraph='Exotic immersion' header='Tropical Paradise' isVisible={collectionsGridVisible} delay="100ms" />
            <HomeCardOne hreff='/zen' imgOne={imgThree} paragraph='Timeless Elegance' header='Rose Gardens' isVisible={collectionsGridVisible} delay="200ms" />
            <HomeCardOne hreff='/zen' imgOne={imgFour} paragraph='Contemporary serenity' header='Modern Minimalist' isVisible={collectionsGridVisible} delay="300ms" />
          </div>

        </div>
      </section>

      {/* Philosophy banner */}
      <section
        ref={philosophyRef}
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(${photoOne})` }}
        className="w-full py-24 sm:py-28 lg:py-35 flex items-center justify-center flex-col text-center gap-4 sm:gap-5 bg-cover bg-center bg-no-repeat"
      >
        <p
          className={`text-[#999999] text-[11px] sm:text-[13px] md:text-[14px] font-normal leading-5 tracking-[4px] sm:tracking-[5.6px] uppercase font-inter ${base} ${philosophyVisible ? show : hidden}`}
          style={{ transitionDelay: "0ms" }}
        >
          Our Philosophy
        </p>
        <h1
          className={`text-[40px] sm:text-[56px] md:text-[64px] lg:text-[72px] leading-tight font-light tracking-[2px] sm:tracking-[3px] lg:tracking-[3.6px] text-[#FFFFFF] font-cormorant ${base} ${philosophyVisible ? show : hidden}`}
          style={{ transitionDelay: "120ms" }}
        >
          We don't create gardens. <br /> We create <span className="text-[#E2AF36] italic">worlds</span>.
        </h1>
        <p
          className={`font-normal leading-6 tracking-[.4px] text-[#808080] font-inter text-[13px] sm:text-[15px] md:text-[16px] ${base} ${philosophyVisible ? show : hidden}`}
          style={{ transitionDelay: "220ms" }}
        >
          Every landscape is a masterpiece. Every pathway, a journey. Every bloom, a moment of pure transcendence.
        </p>
      </section>

      {/* Living Art */}
      <section className="w-full py-16 sm:py-24 md:py-28 lg:py-35 flex justify-center items-center">
        <div className="w-[95%] flex flex-col justify-center items-center gap-12 sm:gap-14 lg:gap-16">

          <div ref={artHeaderRef} className="text-center flex flex-col gap-4 sm:gap-6">
            <p
              className={`font-medium text-[11px] sm:text-[12px] leading-4 uppercase tracking-[4px] sm:tracking-[4.8px] text-[#6D7873] font-inter ${base} ${artHeaderVisible ? show : hidden}`}
              style={{ transitionDelay: "0ms" }}
            >
              Floral Masterpieces
            </p>
            <h1
              className={`text-[48px] sm:text-[60px] md:text-[68px] lg:text-[72px] leading-tight font-light tracking-[2.4px] sm:tracking-[3.2px] lg:tracking-[3.6px] text-[#1C221F] font-cormorant ${base} ${artHeaderVisible ? show : hidden}`}
              style={{ transitionDelay: "120ms" }}
            >
              Living <span className="italic">Art</span>
            </h1>
          </div>

          <div ref={artGridRef} className="w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            <HomeCardTwo link='/helow' pics={pics} paragraphOne='Rare & Exotic' headerOne='Orchids' isVisible={artGridVisible} delay="0ms" />
            <HomeCardTwo link='/helow' pics={picsOne} paragraphOne='Sacred beauty' headerOne='Lotus' isVisible={artGridVisible} delay="80ms" />
            <HomeCardTwo link='/helow' pics={picsTwo} paragraphOne='Timeless romance' headerOne='Roses' isVisible={artGridVisible} delay="160ms" />
            <HomeCardTwo link='/helow' pics={picsThree} paragraphOne='Pure elegance' headerOne='Lilies' isVisible={artGridVisible} delay="240ms" />
          </div>

        </div>
      </section>

      {/* CTA */}
      <section
        ref={ctaRef}
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(${bg_image})` }}
        className="w-full py-20 sm:py-24 lg:py-25 flex items-center justify-center flex-col text-center gap-4 sm:gap-5 bg-cover bg-center bg-no-repeat"
      >
        <p
          className={`text-[#999999] text-[11px] sm:text-[13px] md:text-[14px] font-normal leading-5 tracking-[4px] sm:tracking-[5.6px] uppercase font-inter ${base} ${ctaVisible ? show : hidden}`}
          style={{ transitionDelay: "0ms" }}
        >
          Begin Your Journey
        </p>
        <h1
          className={`text-[52px] sm:text-[72px] md:text-[84px] lg:text-[95px] leading-tight font-light tracking-[2.4px] sm:tracking-[3.6px] lg:tracking-[4.8px] text-[#FFFFFF] font-cormorant ${base} ${ctaVisible ? show : hidden}`}
          style={{ transitionDelay: "120ms" }}
        >
          Step Into <span className="italic">Paradise</span>
        </h1>
        <p
          className={`font-normal leading-6 tracking-[.4px] text-[#808080] font-inter text-[13px] sm:text-[15px] md:text-[16px] ${base} ${ctaVisible ? show : hidden}`}
          style={{ transitionDelay: "220ms" }}
        >
          Experience the world's most exclusive botanical estate. Private tours available by appointment.
        </p>
        <div
          className={`flex flex-col sm:flex-row gap-3 sm:gap-5 mt-2 sm:mt-3 ${base} ${ctaVisible ? show : hidden}`}
          style={{ transitionDelay: "320ms" }}
        >
          <a href="" className="uppercase font-medium border border-solid bg-[#FFFFFF] text-[#1C221F] text-[11px] sm:text-[12px] leading-4 tracking-[3px] sm:tracking-[3.6px] py-3 sm:py-4 px-8 sm:px-10">
            Reserve your visit
          </a>
          <a href="" className="uppercase text-[11px] sm:text-[12px] font-medium leading-4 tracking-[3px] sm:tracking-[3.6px] border-[#ffffff4d] border border-solid text-[#FFFFFF] py-3 sm:py-4 px-8 sm:px-10 transition-all duration-500 ease-in-out hover:border-[#ffffff1a] hover:bg-[#ffffff1a]">
            Host an event
          </a>
        </div>
      </section>

      <FooterSection />
    </>
  );
}

export default HomeSection;