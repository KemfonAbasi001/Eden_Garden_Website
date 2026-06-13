// // import { useState } from 'react'
// import '../App.css'
// import NavBar from '../components/Navbar.jsx'
// import FooterSection from '../components/Footer.jsx'


// import imgOne from '../assets/photo-one.png'

// import imgTwo from '../assets/photo-two.png'
// import imgThree from '../assets/photo-three.png'

// import imgFive from '../assets/photo-five.png'

// import imgEleven from '../assets/photo-eleven.png'



// import pics from '../assets/pic-one.png'


// function Rarecard(props) {
//     return(
//         <div className="w-full h-full gap-5 flex flex-col group">
//             <div className="w-full h-70 overflow-hidden group">
//                 <img src={props.pics} alt="" className='w-full h-full object-cover block transition-transform duration-500 ease-in-out group-hover:scale-105' />
//             </div>
//             <div className="flex flex-col gap-2">
//                 <p className="text-[12px] font-normal leading-4 tracking-[2.4px] text-[#6D7873] uppercase">{props.paragraone}</p>
//                 <h1 className="text-[24px] leading-8 font-normal tracking-[1.2px] text-[#1C221F] font-cormorant">{props.headive}</h1>
//                 <p className="text-[14px] leading-5.75 font-normal text-[#6D7873]">{props.paragathree}</p>
//                 <p className="text-[12px] leading-4 font-normal tracking-[0.6px] text-[#6D7873]">{props.title}</p>
//             </div>
//         </div>
//     )
// }



// function JournalSection() {

//   return (
//     <>
//       <NavBar section="journal" />
//       <main>

//         <section className="w-full py-35 flex justify-center items-center">
//             <div className="w-[93%] flex flex-col justify-center items-center gap-22">
//                 <div className="header text-center flex flex-col gap-6">
//                     <p className="font-medium text-[12px] leading-4 uppercase tracking-[4.8px] text-[#6D7873]  font-inter">Stories & Explorations</p>
//                     <h1 className="text-[96px] leading-24 font-normal tracking-[4.8px] text-[#1C221F] font-cormorant">Botanical <span className="italic">Journal</span></h1>
//                     {/* <p className="font-normal leading-6 tracking-[.4px] text-[#808080] font-inter text-[16px]">Where engineering meets artistry. Each structure is a testament to the<br /> harmony between human vision and nature's beauty.</p> */}
//                 </div>

//                 <div className="w-full flex flex-col gap-y-15">
//                     <div className="w-full relative h-127.5">
//                         <img src={imgOne} alt="Garden one" className="h-full w-full block object-cover"/>
//                         <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/70"></div>
//                         <div className="absolute bottom-17 left-15 max-w-146 flex flex-col gap-4">
//                             <p class="text-[12px] leading-4 font-medium tracking-[3.6px] text-[#808080] uppercase font-inter">garden design</p>
//                             <h1 className="text-[48px] leading-12 font-medium tracking-[2.4px] text-[#FFFFFF] font-cormorant">The Art of Japanese Garden Design</h1>
//                             <p className="font-normal leading-6 tracking-[.4px] text-[#808080] font-inter text-[14px]">Exploring the ancient principles that guide the creation of the world's most serene landscapes.</p>
//                             <p className="font-normal leading-4 tracking-[.6px] text-[#797878] font-inter text-[12px]">By Isabella Laurent</p>
//                         </div>
//                     </div>

//                     <div className="grid grid-cols-3 gap-y-13 gap-x-7">


//                       <Rarecard 
//                         pics={pics}
//                         paragraone='rare species'
//                         headive='Rare Orchids of Southeast Asia'
//                         paragathree='A photographic journey through the most elusive and breathtaking orchid species.'
//                         title='By Dr. Akira Tanaka'
//                       />

//                       <Rarecard 
//                         pics={imgFive}
//                         paragraone='behind the scenes'
//                         headive='The Grand Conservatory: A Year in Glass'
//                         paragathree='Behind the scenes of maintaining a living cathedral of rare botanical specimens.'
//                         title='By Charlotte Beaumont'
//                       />

//                      <Rarecard 
//                         pics={imgTwo}
//                         paragraone='botanical stories'
//                         headive='Tropical Gardens After Rainfall'
//                         paragathree='The magical transformation that occurs when tropical gardens meet monsoon season.'
//                         title='By Marcus Chen'
//                       />

//                       <Rarecard 
//                         pics={imgThree}
//                         paragraone='botanical stories'
//                         headive='The Secret Language of Roses'
//                         paragathree='Heritage varieties and the stories they tell across centuries of cultivation.'
//                         title='By Isabella Laurent'
//                       />


//                      <Rarecard 
//                         pics={imgEleven}
//                         paragraone='garden design'
//                         headive='Garden Illumination: Light as Art'
//                         paragathree='How premium lighting transforms botanical spaces into nocturnal masterpieces.'
//                         title='By James Worthington'
//                       />

                        
//                     </div>
                
                    

//                 </div>
                    
//             </div>
//         </section>

//     </main>
//     <FooterSection />
//     </>
//   )
// }

// export default JournalSection















// import { useEffect, useRef, useState } from "react";
// import '../App.css'
// import NavBar from '../components/Navbar.jsx'
// import FooterSection from '../components/Footer.jsx'

// import imgOne from '../assets/photo-one.png'
// import imgTwo from '../assets/photo-two.png'
// import imgThree from '../assets/photo-three.png'
// import imgFive from '../assets/photo-five.png'
// import imgEleven from '../assets/photo-eleven.png'
// import pics from '../assets/pic-one.png'

// function useScrollReveal(threshold = 0.1) {
//   const ref = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold }
//     );
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);

//   return [ref, isVisible];
// }

// const base = "transition-all duration-700 ease-out";
// const hidden = "opacity-0 translate-y-10";
// const show = "opacity-100 translate-y-0";

// function Rarecard({ pics, paragraone, headive, paragathree, title, isVisible, delay }) {
//   return (
//     <div
//       className={`w-full h-full gap-4 sm:gap-5 flex flex-col group ${base} ${isVisible ? show : hidden}`}
//       style={{ transitionDelay: delay }}
//     >
//       <div className="w-full h-48 sm:h-60 lg:h-70 overflow-hidden">
//         <img
//           src={pics}
//           alt={headive}
//           className="w-full h-full object-cover block transition-transform duration-500 ease-in-out group-hover:scale-105"
//         />
//       </div>
//       <div className="flex flex-col gap-2">
//         <p className="text-[11px] sm:text-[12px] font-normal leading-4 tracking-[2.4px] text-[#6D7873] uppercase">
//           {paragraone}
//         </p>
//         <h1 className="text-[20px] sm:text-[22px] md:text-[24px] leading-tight font-normal tracking-[1.2px] text-[#1C221F] font-cormorant">
//           {headive}
//         </h1>
//         <p className="text-[13px] sm:text-[14px] leading-6 font-normal text-[#6D7873]">
//           {paragathree}
//         </p>
//         <p className="text-[11px] sm:text-[12px] leading-4 font-normal tracking-[0.6px] text-[#6D7873]">
//           {title}
//         </p>
//       </div>
//     </div>
//   );
// }

// const articles = [
//   {
//     pics: pics,
//     paragraone: "rare species",
//     headive: "Rare Orchids of Southeast Asia",
//     paragathree: "A photographic journey through the most elusive and breathtaking orchid species.",
//     title: "By Dr. Akira Tanaka",
//   },
//   {
//     pics: imgFive,
//     paragraone: "behind the scenes",
//     headive: "The Grand Conservatory: A Year in Glass",
//     paragathree: "Behind the scenes of maintaining a living cathedral of rare botanical specimens.",
//     title: "By Charlotte Beaumont",
//   },
//   {
//     pics: imgTwo,
//     paragraone: "botanical stories",
//     headive: "Tropical Gardens After Rainfall",
//     paragathree: "The magical transformation that occurs when tropical gardens meet monsoon season.",
//     title: "By Marcus Chen",
//   },
//   {
//     pics: imgThree,
//     paragraone: "botanical stories",
//     headive: "The Secret Language of Roses",
//     paragathree: "Heritage varieties and the stories they tell across centuries of cultivation.",
//     title: "By Isabella Laurent",
//   },
//   {
//     pics: imgEleven,
//     paragraone: "garden design",
//     headive: "Garden Illumination: Light as Art",
//     paragathree: "How premium lighting transforms botanical spaces into nocturnal masterpieces.",
//     title: "By James Worthington",
//   },
// ];

// function JournalSection() {
//   const [headerRef, headerVisible] = useScrollReveal(0.1);
//   const [heroRef, heroVisible] = useScrollReveal(0.1);
//   const [gridRef, gridVisible] = useScrollReveal(0.05);

//   return (
//     <>
//       <NavBar section="journal" />

//       <section className="w-full py-16 sm:py-24 md:py-28 lg:py-35 flex justify-center items-center">
//         <div className="w-[93%] flex flex-col justify-center items-center gap-14 sm:gap-18 lg:gap-22">

//           {/* Header */}
//           <div ref={headerRef} className="text-center flex flex-col gap-4 sm:gap-6">
//             <p
//               className={`font-medium text-[11px] sm:text-[12px] leading-4 uppercase tracking-[4px] sm:tracking-[4.8px] text-[#6D7873] font-inter ${base} ${headerVisible ? show : hidden}`}
//               style={{ transitionDelay: "0ms" }}
//             >
//               Stories & Explorations
//             </p>
//             <h1
//               className={`text-[52px] sm:text-[72px] md:text-[84px] lg:text-[96px] leading-tight font-normal tracking-[2.4px] sm:tracking-[3.6px] lg:tracking-[4.8px] text-[#1C221F] font-cormorant ${base} ${headerVisible ? show : hidden}`}
//               style={{ transitionDelay: "120ms" }}
//             >
//               Botanical <span className="italic">Journal</span>
//             </h1>
//           </div>

//           <div className="w-full flex flex-col gap-10 sm:gap-12 lg:gap-15">

//             {/* Hero Article */}
//             <div
//               ref={heroRef}
//               className={`w-full relative h-64 sm:h-96 md:h-[480px] lg:h-[510px] overflow-hidden ${base} ${heroVisible ? show : hidden}`}
//               style={{ transitionDelay: "0ms" }}
//             >
//               <img
//                 src={imgOne}
//                 alt="The Art of Japanese Garden Design"
//                 className="h-full w-full block object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
//               <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 lg:bottom-17 lg:left-15 max-w-[90%] sm:max-w-[520px] lg:max-w-[584px] flex flex-col gap-3 sm:gap-4">
//                 <p className="text-[10px] sm:text-[12px] leading-4 font-medium tracking-[3px] sm:tracking-[3.6px] text-[#808080] uppercase font-inter">
//                   garden design
//                 </p>
//                 <h1 className="text-[28px] sm:text-[38px] md:text-[44px] lg:text-[48px] leading-tight font-medium tracking-[1.4px] sm:tracking-[2.4px] text-[#FFFFFF] font-cormorant">
//                   The Art of Japanese Garden Design
//                 </h1>
//                 <p className="font-normal leading-6 tracking-[.4px] text-[#808080] font-inter text-[13px] sm:text-[14px]">
//                   Exploring the ancient principles that guide the creation of the world's most serene landscapes.
//                 </p>
//                 <p className="font-normal leading-4 tracking-[.6px] text-[#797878] font-inter text-[11px] sm:text-[12px]">
//                   By Isabella Laurent
//                 </p>
//               </div>
//             </div>

//             {/* Articles Grid */}
//             <div
//               ref={gridRef}
//               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-7 gap-y-10 sm:gap-y-12 lg:gap-y-13"
//             >
//               {articles.map(({ pics, paragraone, headive, paragathree, title }, i) => (
//                 <Rarecard
//                   key={headive}
//                   pics={pics}
//                   paragraone={paragraone}
//                   headive={headive}
//                   paragathree={paragathree}
//                   title={title}
//                   isVisible={gridVisible}
//                   delay={`${i * 80}ms`}
//                 />
//               ))}
//             </div>

//           </div>
//         </div>
//       </section>

//       <FooterSection />
//     </>
//   );
// }

// export default JournalSection;




















import { useEffect, useRef, useState } from "react";
import '../App.css'
import NavBar from '../components/Navbar.jsx'
import FooterSection from '../components/Footer.jsx'

import imgOne from '../assets/photo-one.png'
import imgTwo from '../assets/photo-two.png'
import imgThree from '../assets/photo-three.png'
import imgFive from '../assets/photo-five.png'
import imgEleven from '../assets/photo-eleven.png'
import pics from '../assets/pic-one.png'

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

function Rarecard({ pics, paragraone, headive, paragathree, title, isVisible, delay }) {
  return (
    <div
      className={`w-full h-full gap-4 sm:gap-5 flex flex-col group ${base} ${isVisible ? show : hidden}`}
      style={{ transitionDelay: delay }}
    >
      <div className="w-full h-48 sm:h-60 lg:h-70 overflow-hidden">
        <img
          src={pics}
          alt={headive}
          className="w-full h-full object-cover block transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-[11px] sm:text-[12px] font-normal leading-4 tracking-[2.4px] text-[#6D7873] uppercase">
          {paragraone}
        </p>
        <h1 className="text-[20px] sm:text-[22px] md:text-[24px] leading-tight font-normal tracking-[1.2px] text-[#1C221F] font-cormorant">
          {headive}
        </h1>
        <p className="text-[13px] sm:text-[14px] leading-6 font-normal text-[#6D7873]">
          {paragathree}
        </p>
        <p className="text-[11px] sm:text-[12px] leading-4 font-normal tracking-[0.6px] text-[#6D7873]">
          {title}
        </p>
      </div>
    </div>
  );
}

const articles = [
  {
    pics: pics,
    paragraone: "rare species",
    headive: "Rare Orchids of Southeast Asia",
    paragathree: "A photographic journey through the most elusive and breathtaking orchid species.",
    title: "By Dr. Akira Tanaka",
  },
  {
    pics: imgFive,
    paragraone: "behind the scenes",
    headive: "The Grand Conservatory: A Year in Glass",
    paragathree: "Behind the scenes of maintaining a living cathedral of rare botanical specimens.",
    title: "By Charlotte Beaumont",
  },
  {
    pics: imgTwo,
    paragraone: "botanical stories",
    headive: "Tropical Gardens After Rainfall",
    paragathree: "The magical transformation that occurs when tropical gardens meet monsoon season.",
    title: "By Marcus Chen",
  },
  {
    pics: imgThree,
    paragraone: "botanical stories",
    headive: "The Secret Language of Roses",
    paragathree: "Heritage varieties and the stories they tell across centuries of cultivation.",
    title: "By Isabella Laurent",
  },
  {
    pics: imgEleven,
    paragraone: "garden design",
    headive: "Garden Illumination: Light as Art",
    paragathree: "How premium lighting transforms botanical spaces into nocturnal masterpieces.",
    title: "By James Worthington",
  },
];

function JournalSection() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [heroRef, heroVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal();

  return (
    <>
      <NavBar section="journal" />

      <section className="w-full py-16 sm:py-24 md:py-28 lg:py-35 flex justify-center items-center">
        <div className="w-[93%] flex flex-col justify-center items-center gap-14 sm:gap-18 lg:gap-22">

          {/* Header */}
          <div ref={headerRef} className="text-center flex flex-col gap-4 sm:gap-6">
            <p
              className={`font-medium text-[11px] sm:text-[12px] leading-4 uppercase tracking-[4px] sm:tracking-[4.8px] text-[#6D7873] font-inter ${base} ${headerVisible ? show : hidden}`}
              style={{ transitionDelay: "0ms" }}
            >
              Stories & Explorations
            </p>
            <h1
              className={`text-[52px] sm:text-[72px] md:text-[84px] lg:text-[96px] leading-tight font-normal tracking-[2.4px] sm:tracking-[3.6px] lg:tracking-[4.8px] text-[#1C221F] font-cormorant ${base} ${headerVisible ? show : hidden}`}
              style={{ transitionDelay: "120ms" }}
            >
              Botanical <span className="italic">Journal</span>
            </h1>
          </div>

          <div className="w-full flex flex-col gap-10 sm:gap-12 lg:gap-15">

            {/* Hero Article */}
            <div
              ref={heroRef}
              className={`w-full relative h-64 sm:h-96 md:h-[480px] lg:h-[510px] overflow-hidden ${base} ${heroVisible ? show : hidden}`}
              style={{ transitionDelay: "0ms" }}
            >
              <img
                src={imgOne}
                alt="The Art of Japanese Garden Design"
                className="h-full w-full block object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
              <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 lg:bottom-17 lg:left-15 max-w-[90%] sm:max-w-[520px] lg:max-w-[584px] flex flex-col gap-3 sm:gap-4">
                <p className="text-[10px] sm:text-[12px] leading-4 font-medium tracking-[3px] sm:tracking-[3.6px] text-[#808080] uppercase font-inter">
                  garden design
                </p>
                <h1 className="text-[28px] sm:text-[38px] md:text-[44px] lg:text-[48px] leading-tight font-medium tracking-[1.4px] sm:tracking-[2.4px] text-[#FFFFFF] font-cormorant">
                  The Art of Japanese Garden Design
                </h1>
                <p className="font-normal leading-6 tracking-[.4px] text-[#808080] font-inter text-[13px] sm:text-[14px]">
                  Exploring the ancient principles that guide the creation of the world's most serene landscapes.
                </p>
                <p className="font-normal leading-4 tracking-[.6px] text-[#797878] font-inter text-[11px] sm:text-[12px]">
                  By Isabella Laurent
                </p>
              </div>
            </div>

            {/* Articles Grid */}
            <div
              ref={gridRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-7 gap-y-10 sm:gap-y-12 lg:gap-y-13"
            >
              {articles.map(({ pics, paragraone, headive, paragathree, title }, i) => (
                <Rarecard
                  key={headive}
                  pics={pics}
                  paragraone={paragraone}
                  headive={headive}
                  paragathree={paragathree}
                  title={title}
                  isVisible={gridVisible}
                  delay={`${i * 80}ms`}
                />
              ))}
            </div>

          </div>
        </div>
      </section>

      <FooterSection />
    </>
  );
}

export default JournalSection;