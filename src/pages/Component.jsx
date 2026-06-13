// import { useState } from 'react'
// // import '../App.css'
// import NavBar from '../components/Navbar.jsx'
// import FooterSection from '../components/Footer.jsx'


// import imgOne from '../assets/photo-one.png'
// import imgTwo from '../assets/photo-two.png'
// import imgThree from '../assets/photo-three.png'
// import imgFour from '../assets/photo-four.png'
// import imgFive from '../assets/photo-five.png'
// import imgSix from '../assets/photo-six.png'
// import imgSeven from '../assets/photo-seven.png'
// import imgEight from '../assets/photo-eight.png'



// function HalfComp(props) {
//     return(
//         <div className="w-full relative  h-[60%] overflow-hidden group">
//             <img src={props.images} alt="Garden one" className="h-full w-full block object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"/>
//             <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/70"></div>
//             <div className="absolute bottom-8 left-8 max-w-[384px] flex flex-col gap-2">
//                 <p className="text-[12px] leading-4 font-medium tracking-[3.6px] text-[#808080] uppercase font-inter">{props.paragraphThree}</p>
//                 <h1 className="text-[36px] leading-10 font-medium tracking-[1.8px] text-[#FFFFFF] font-cormorant">{props.headerThree}</h1>
//                 <p className="font-normal leading-6 tracking-[.4px] text-[#808080] font-inter text-[14px]">{props.paragraphFour}</p>
//             </div>
//         </div>
//     )
// }

// function FullComp(props) {
//      return(
//         <div className="w-full relative overflow-hidden group">
//             <img src={props.imge} alt="Garden one" className="h-full w-full block object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"/>
//             <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/70"></div>
//             <div className="absolute bottom-8 left-8 max-w-[384px] flex flex-col gap-2">
//                 <p class="text-[12px] leading-4 font-medium tracking-[3.6px] text-[#808080] uppercase font-inter">{props.paraone}</p>
//                 <h1 className="text-[36px] leading-10 font-medium tracking-[1.8px] text-[#FFFFFF] font-cormorant">{props.headone}</h1>
//                 <p className="font-normal leading-6 tracking-[.4px] text-[#808080] font-inter text-[14px]">{props.paratwo}</p>
//             </div>
//         </div>
//      )
// }


// function ComponentSection() {

//   return (
//     <>
//       <NavBar section="collections" />
//       <main>

//         <section className="w-full py-35 flex justify-center items-center">
//             <div className="w-[95%] flex flex-col justify-center items-center gap-22">

//                 <div className="header text-center flex flex-col gap-6">
//                     <p className="font-medium text-[12px] leading-4 uppercase tracking-[4.8px] text-[#6D7873]  font-inter">Curated Experiences</p>
//                     <h1 className="text-[96px] leading-24 font-light tracking-[4.8px] text-[#1C221F] font-cormorant">Garden <span className="italic">Collections</span></h1>
//                     <p className="font-normal leading-6 tracking-[.4px] text-[#808080] font-inter text-[16px]">Each collection is a world unto itself — meticulously designed, lovingly<br /> curated, endlessly captivating.</p>
//                 </div>

//                 <div className="w-full grid grid-cols-2 gap-7.5">
                    
//                     <HalfComp 
//                         images={imgOne}
//                         paragraphThree='Meditative harmony'
//                         headerThree='Japanese Zen Gardens'
//                         paragraphFour='Ancient traditions meet contemporary serenity in our meticulously crafted zen landscapes.'
//                     />


//                     <FullComp 
//                         imge={imgTwo}
//                         paraone='Exotic immersion'
//                         headone='Tropical Paradise'
//                         paratwo='Lush canopies, exotic blooms, and the intoxicating fragrance of paradise.'
//                     />


//                     <FullComp 
//                         imge={imgThree}
//                         paraone='Timeless Elegance'
//                         headone='Rose Gardens'
//                         paratwo='Hundreds of heritage and rare rose varieties in a setting of pure romantic beauty.'
//                     />


//                     <HalfComp 
//                         images={imgFour}
//                         paragraphThree='Contemporary serenity'
//                         headerThree='Modern Minimalist'
//                         paragraphFour='Clean lines, architectural forms, and nature refined to its purest essence.'
//                     />

//                     <FullComp 
//                         imge={imgFive}
//                         paraone='Glass & Greenery'
//                         headone='The Grand Conservatory'
//                         paratwo='A cathedral of glass housing the worlds rarest botanical specimens.'
//                     />



//                     <FullComp 
//                         imge={imgSix}
//                         paraone='Elevated Gardens'
//                         headone='Rooftop Sanctuaries'
//                         paratwo='Where sky meets earth in the most exclusive urban botanical experiences.'
//                     />


//                     <HalfComp 
//                         images={imgSeven}
//                         paragraphThree='>Private Paradise'
//                         headerThree='Botanical Estates'
//                         paragraphFour='Sprawling private gardens designed for those who desire the extraordinary.'
//                     />
                    
//                     <FullComp 
//                         imge={imgEight}
//                         paraone='Liquid Serenity'
//                         headone='Water Gardens'
//                         paratwo='Koi ponds, lotus pools, and cascading waterfalls in perfect harmony.'
//                     />
                 
//                 </div>
                    
//             </div>
//         </section>

//     </main>

//     <FooterSection />
//     </>
//   )
// }

// export default ComponentSection



































// import { useEffect, useRef, useState } from "react";
// import NavBar from '../components/Navbar.jsx'
// import FooterSection from '../components/Footer.jsx'

// import imgOne from '../assets/photo-one.png'
// import imgTwo from '../assets/photo-two.png'
// import imgThree from '../assets/photo-three.png'
// import imgFour from '../assets/photo-four.png'
// import imgFive from '../assets/photo-five.png'
// import imgSix from '../assets/photo-six.png'
// import imgSeven from '../assets/photo-seven.png'
// import imgEight from '../assets/photo-eight.png'

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

// function HalfComp({ images, paragraphThree, headerThree, paragraphFour, isVisible, delay }) {
//   return (
//     <div
//       className={`w-full h-[60%] relative overflow-hidden group ${base} ${isVisible ? show : hidden}`}
//       style={{ transitionDelay: delay }}
//     >
//       <img
//         src={images}
//         alt={headerThree}
//         className="h-full w-full block object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
//       />
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
//       <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8 max-w-[280px] sm:max-w-[384px] flex flex-col gap-1 sm:gap-2">
//         <p className="text-[10px] sm:text-[12px] leading-4 font-medium tracking-[3px] sm:tracking-[3.6px] text-[#808080] uppercase font-inter">
//           {paragraphThree}
//         </p>
//         <h1 className="text-[22px] sm:text-[28px] md:text-[36px] leading-tight font-medium tracking-[1.4px] sm:tracking-[1.8px] text-[#FFFFFF] font-cormorant">
//           {headerThree}
//         </h1>
//         <p className="font-normal leading-5 sm:leading-6 tracking-[.4px] text-[#808080] font-inter text-[12px] sm:text-[14px]">
//           {paragraphFour}
//         </p>
//       </div>
//     </div>
//   );
// }

// function FullComp({ imge, paraone, headone, paratwo, isVisible, delay }) {
//   return (
//     <div
//       className={`w-full relative overflow-hidden group ${base} ${isVisible ? show : hidden}`}
//       style={{ transitionDelay: delay }}
//     >
//       <img
//         src={imge}
//         alt={headone}
//         className="h-full w-full block object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
//       />
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
//       <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8 max-w-[280px] sm:max-w-[384px] flex flex-col gap-1 sm:gap-2">
//         <p className="text-[10px] sm:text-[12px] leading-4 font-medium tracking-[3px] sm:tracking-[3.6px] text-[#808080] uppercase font-inter">
//           {paraone}
//         </p>
//         <h1 className="text-[22px] sm:text-[28px] md:text-[36px] leading-tight font-medium tracking-[1.4px] sm:tracking-[1.8px] text-[#FFFFFF] font-cormorant">
//           {headone}
//         </h1>
//         <p className="font-normal leading-5 sm:leading-6 tracking-[.4px] text-[#808080] font-inter text-[12px] sm:text-[14px]">
//           {paratwo}
//         </p>
//       </div>
//     </div>
//   );
// }

// function ComponentSection() {
//   const [headerRef, headerVisible] = useScrollReveal(0.1);
//   const [rowOneRef, rowOneVisible] = useScrollReveal(0.1);
//   const [rowTwoRef, rowTwoVisible] = useScrollReveal(0.1);
//   const [rowThreeRef, rowThreeVisible] = useScrollReveal(0.1);
//   const [rowFourRef, rowFourVisible] = useScrollReveal(0.1);

//   return (
//     <>
//       <NavBar section="collections" />

//       <section className="w-full py-16 sm:py-24 md:py-28 lg:py-35 flex justify-center items-center">
//         <div className="w-[95%] flex flex-col justify-center items-center gap-14 sm:gap-18 lg:gap-22">

//           {/* Header */}
//           <div
//             ref={headerRef}
//             className="text-center flex flex-col gap-4 sm:gap-6"
//           >
//             <p className={`font-medium text-[11px] sm:text-[12px] leading-4 uppercase tracking-[4px] sm:tracking-[4.8px] text-[#6D7873] font-inter ${base} ${headerVisible ? show : hidden}`}
//               style={{ transitionDelay: "0ms" }}>
//               Curated Experiences
//             </p>
//             <h1 className={`text-[52px] sm:text-[72px] md:text-[84px] lg:text-[96px] leading-tight font-light tracking-[3px] sm:tracking-[4px] lg:tracking-[4.8px] text-[#1C221F] font-cormorant ${base} ${headerVisible ? show : hidden}`}
//               style={{ transitionDelay: "100ms" }}>
//               Garden <span className="italic">Collections</span>
//             </h1>
//             <p className={`font-normal leading-6 tracking-[.4px] text-[#808080] font-inter text-[14px] sm:text-[15px] md:text-[16px] ${base} ${headerVisible ? show : hidden}`}
//               style={{ transitionDelay: "200ms" }}>
//               Each collection is a world unto itself — meticulously designed, lovingly curated, endlessly captivating.
//             </p>
//           </div>

//           {/* Grid */}
//           <div className="w-full flex flex-col gap-5 sm:gap-6 lg:gap-7">

//             {/* Row 1 */}
//             <div ref={rowOneRef} className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
//               <HalfComp
//                 images={imgOne}
//                 paragraphThree="Meditative harmony"
//                 headerThree="Japanese Zen Gardens"
//                 paragraphFour="Ancient traditions meet contemporary serenity in our meticulously crafted zen landscapes."
//                 isVisible={rowOneVisible}
//                 delay="0ms"
//               />
//               <FullComp
//                 imge={imgTwo}
//                 paraone="Exotic immersion"
//                 headone="Tropical Paradise"
//                 paratwo="Lush canopies, exotic blooms, and the intoxicating fragrance of paradise."
//                 isVisible={rowOneVisible}
//                 delay="120ms"
//               />
//             </div>

//             {/* Row 2 */}
//             <div ref={rowTwoRef} className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
//               <FullComp
//                 imge={imgThree}
//                 paraone="Timeless Elegance"
//                 headone="Rose Gardens"
//                 paratwo="Hundreds of heritage and rare rose varieties in a setting of pure romantic beauty."
//                 isVisible={rowTwoVisible}
//                 delay="0ms"
//               />
//               <HalfComp
//                 images={imgFour}
//                 paragraphThree="Contemporary serenity"
//                 headerThree="Modern Minimalist"
//                 paragraphFour="Clean lines, architectural forms, and nature refined to its purest essence."
//                 isVisible={rowTwoVisible}
//                 delay="120ms"
//               />
//             </div>

//             {/* Row 3 */}
//             <div ref={rowThreeRef} className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
//               <FullComp
//                 imge={imgFive}
//                 paraone="Glass & Greenery"
//                 headone="The Grand Conservatory"
//                 paratwo="A cathedral of glass housing the world's rarest botanical specimens."
//                 isVisible={rowThreeVisible}
//                 delay="0ms"
//               />
//               <FullComp
//                 imge={imgSix}
//                 paraone="Elevated Gardens"
//                 headone="Rooftop Sanctuaries"
//                 paratwo="Where sky meets earth in the most exclusive urban botanical experiences."
//                 isVisible={rowThreeVisible}
//                 delay="120ms"
//               />
//             </div>

//             {/* Row 4 */}
//             <div ref={rowFourRef} className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
//               <HalfComp
//                 images={imgSeven}
//                 paragraphThree="Private Paradise"
//                 headerThree="Botanical Estates"
//                 paragraphFour="Sprawling private gardens designed for those who desire the extraordinary."
//                 isVisible={rowFourVisible}
//                 delay="0ms"
//               />
//               <FullComp
//                 imge={imgEight}
//                 paraone="Liquid Serenity"
//                 headone="Water Gardens"
//                 paratwo="Koi ponds, lotus pools, and cascading waterfalls in perfect harmony."
//                 isVisible={rowFourVisible}
//                 delay="120ms"
//               />
//             </div>

//           </div>
//         </div>
//       </section>

//       <FooterSection />
//     </>
//   );
// }

// export default ComponentSection;





















import { useEffect, useRef, useState } from "react";
import NavBar from '../components/Navbar.jsx'
import FooterSection from '../components/Footer.jsx'

import imgOne from '../assets/photo-one.png'
import imgTwo from '../assets/photo-two.png'
import imgThree from '../assets/photo-three.png'
import imgFour from '../assets/photo-four.png'
import imgFive from '../assets/photo-five.png'
import imgSix from '../assets/photo-six.png'
import imgSeven from '../assets/photo-seven.png'
import imgEight from '../assets/photo-eight.png'

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

function HalfComp({ images, paragraphThree, headerThree, paragraphFour, isVisible, delay }) {
  return (
    <div
      className={`w-full h-[60%] relative overflow-hidden group ${base} ${isVisible ? show : hidden}`}
      style={{ transitionDelay: delay }}
    >
      <img src={images} alt={headerThree} className="h-full w-full block object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
      <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8 max-w-[280px] sm:max-w-[384px] flex flex-col gap-1 sm:gap-2">
        <p className="text-[10px] sm:text-[12px] leading-4 font-medium tracking-[3px] sm:tracking-[3.6px] text-[#808080] uppercase font-inter">{paragraphThree}</p>
        <h1 className="text-[22px] sm:text-[28px] md:text-[36px] leading-tight font-medium tracking-[1.4px] sm:tracking-[1.8px] text-[#FFFFFF] font-cormorant">{headerThree}</h1>
        <p className="font-normal leading-5 sm:leading-6 tracking-[.4px] text-[#808080] font-inter text-[12px] sm:text-[14px]">{paragraphFour}</p>
      </div>
    </div>
  );
}

function FullComp({ imge, paraone, headone, paratwo, isVisible, delay }) {
  return (
    <div
      className={`w-full relative overflow-hidden group ${base} ${isVisible ? show : hidden}`}
      style={{ transitionDelay: delay }}
    >
      <img src={imge} alt={headone} className="h-full w-full block object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
      <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8 max-w-[280px] sm:max-w-[384px] flex flex-col gap-1 sm:gap-2">
        <p className="text-[10px] sm:text-[12px] leading-4 font-medium tracking-[3px] sm:tracking-[3.6px] text-[#808080] uppercase font-inter">{paraone}</p>
        <h1 className="text-[22px] sm:text-[28px] md:text-[36px] leading-tight font-medium tracking-[1.4px] sm:tracking-[1.8px] text-[#FFFFFF] font-cormorant">{headone}</h1>
        <p className="font-normal leading-5 sm:leading-6 tracking-[.4px] text-[#808080] font-inter text-[12px] sm:text-[14px]">{paratwo}</p>
      </div>
    </div>
  );
}

function ComponentSection() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [rowOneRef, rowOneVisible] = useScrollReveal();
  const [rowTwoRef, rowTwoVisible] = useScrollReveal();
  const [rowThreeRef, rowThreeVisible] = useScrollReveal();
  const [rowFourRef, rowFourVisible] = useScrollReveal();

  return (
    <>
      <NavBar section="collections" />

      <section className="w-full py-16 sm:py-24 md:py-28 lg:py-35 flex justify-center items-center">
        <div className="w-[95%] flex flex-col justify-center items-center gap-14 sm:gap-18 lg:gap-22">

          {/* Header */}
          <div ref={headerRef} className="text-center flex flex-col gap-4 sm:gap-6">
            <p
              className={`font-medium text-[11px] sm:text-[12px] leading-4 uppercase tracking-[4px] sm:tracking-[4.8px] text-[#6D7873] font-inter ${base} ${headerVisible ? show : hidden}`}
              style={{ transitionDelay: "0ms" }}
            >
              Curated Experiences
            </p>
            <h1
              className={`text-[52px] sm:text-[72px] md:text-[84px] lg:text-[96px] leading-tight font-light tracking-[3px] sm:tracking-[4px] lg:tracking-[4.8px] text-[#1C221F] font-cormorant ${base} ${headerVisible ? show : hidden}`}
              style={{ transitionDelay: "100ms" }}
            >
              Garden <span className="italic">Collections</span>
            </h1>
            <p
              className={`font-normal leading-6 tracking-[.4px] text-[#808080] font-inter text-[14px] sm:text-[15px] md:text-[16px] ${base} ${headerVisible ? show : hidden}`}
              style={{ transitionDelay: "200ms" }}
            >
              Each collection is a world unto itself — meticulously designed, lovingly curated, endlessly captivating.
            </p>
          </div>

          {/* Grid */}
          <div className="w-full flex flex-col gap-5 sm:gap-6 lg:gap-7">

            {/* Row 1 */}
            <div ref={rowOneRef} className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
              <HalfComp images={imgOne} paragraphThree="Meditative harmony" headerThree="Japanese Zen Gardens" paragraphFour="Ancient traditions meet contemporary serenity in our meticulously crafted zen landscapes." isVisible={rowOneVisible} delay="0ms" />
              <FullComp imge={imgTwo} paraone="Exotic immersion" headone="Tropical Paradise" paratwo="Lush canopies, exotic blooms, and the intoxicating fragrance of paradise." isVisible={rowOneVisible} delay="150ms" />
            </div>

            {/* Row 2 */}
            <div ref={rowTwoRef} className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
              <FullComp imge={imgThree} paraone="Timeless Elegance" headone="Rose Gardens" paratwo="Hundreds of heritage and rare rose varieties in a setting of pure romantic beauty." isVisible={rowTwoVisible} delay="0ms" />
              <HalfComp images={imgFour} paragraphThree="Contemporary serenity" headerThree="Modern Minimalist" paragraphFour="Clean lines, architectural forms, and nature refined to its purest essence." isVisible={rowTwoVisible} delay="150ms" />
            </div>

            {/* Row 3 */}
            <div ref={rowThreeRef} className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
              <FullComp imge={imgFive} paraone="Glass & Greenery" headone="The Grand Conservatory" paratwo="A cathedral of glass housing the world's rarest botanical specimens." isVisible={rowThreeVisible} delay="0ms" />
              <FullComp imge={imgSix} paraone="Elevated Gardens" headone="Rooftop Sanctuaries" paratwo="Where sky meets earth in the most exclusive urban botanical experiences." isVisible={rowThreeVisible} delay="150ms" />
            </div>

            {/* Row 4 */}
            <div ref={rowFourRef} className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
              <HalfComp images={imgSeven} paragraphThree="Private Paradise" headerThree="Botanical Estates" paragraphFour="Sprawling private gardens designed for those who desire the extraordinary." isVisible={rowFourVisible} delay="0ms" />
              <FullComp imge={imgEight} paraone="Liquid Serenity" headone="Water Gardens" paratwo="Koi ponds, lotus pools, and cascading waterfalls in perfect harmony." isVisible={rowFourVisible} delay="150ms" />
            </div>

          </div>
        </div>
      </section>

      <FooterSection />
    </>
  );
}

export default ComponentSection;