// import '../App.css'
// import NavBar from '../components/Navbar.jsx'
// import FooterSection from '../components/Footer.jsx'

// import photoOne from '../assets/img-one.png'

// import imgFive from '../assets/photo-five.png'

// function AboutSection() {
//   return (
//     <>
//       <NavBar section="about" />
//       <main>
//         <section  style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(${photoOne})` }} className='w-full py-45 flex items-center justify-center flex-col text-center gap-5 bg-cover bg-center bg-no-repeat'>
//               <p className='text-[#999999] text-[14px] font-400 leading-5 tracking-[5.6px] uppercase font-inter'>Our Story</p>
//               <h1 className='text-[118px] leading-30 font-light tracking-[6.4px] text-[#FFFFFF] font-cormorant'>About <span className='italic'>Eden</span></h1>
//               {/* <p className="font-normal leading-6 tracking-[1.6px] text-[#808080] font-inter text-[18px]">Where nature meets luxury in perfect harmony</p> */}
//         </section>
//         <section className="w-full py-35 flex justify-center items-center flex-col gap-25">
//           <div className="w-[93%] flex flex-col gap-30">
//             <div>

//               <div className="w-full flex flex-col gap-16">
//                 <div className="flex flex-col gap-6">
//                   <h2 className="text-[48px] leading-12 font-light tracking-[2.4px] text-[#1C221F] font-cormorant">Our Mission</h2>
//                   <p className="font-normal leading-7 tracking-[.4px] text-[#6D7873] font-inter text-[16px]">
//                     At Eden Botanics, we believe that nature is the ultimate designer. Our mission is to create immersive botanical experiences 
//                     that transport visitors to worlds of beauty, serenity, and wonder. We combine horticultural expertise with architectural innovation 
//                     to craft spaces that inspire, heal, and transform.
//                   </p>
//                 </div>

//                 <div className="flex flex-col gap-6">
//                   <h2 className="text-[48px] leading-12 font-light tracking-[2.4px] text-[#1C221F] font-cormorant">Our Philosophy</h2>
//                   <p className="font-normal leading-7 tracking-[.4px] text-[#6D7873] font-inter text-[16px]">
//                     We don't simply cultivate plants—we cultivate experiences. Every garden is meticulously designed to engage all senses, 
//                     tell a story, and create lasting memories. From the Japanese zen garden's meditative harmony to the tropical paradise's 
//                     lush exuberance, each collection reflects our commitment to excellence and authenticity.
//                   </p>
//                 </div>

//                 <div className="flex flex-col gap-6">
//                   <h2 className="text-[48px] leading-12 font-light tracking-[2.4px] text-[#1C221F] font-cormorant">Our Expertise</h2>
//                   <p className="font-normal leading-7 tracking-[.4px] text-[#6D7873] font-inter text-[16px]">
//                     With decades of combined experience in landscape architecture, horticulture, and botanical science, our team brings unparalleled 
//                     expertise to every project. We source specimens from around the world, employ cutting-edge cultivation techniques, and maintain 
//                     our gardens to museum-quality standards.
//                   </p>
//                 </div>
//             </div>

//             {/* <div className="">helo</div> */}
            
//             </div>
//             <div className="flex gap-20">
//               <div className="w-full overflow-hidden group">
//                 <img src={imgFive} className='block transition-transform duration-500 ease-in-out group-hover:scale-105 ' alt="" />
//               </div>
//               <div className="flex flex-col gap-5 justify-center">
//                 <p className="text-[12px] leading-4 font-nromal tracking-[4.8px] uppercase font-inter text-[#6D7873]">Philosophy</p>
//                 <h1 className="text-[60px] leading-15 font-normal tracking-[3px] font-cormorant text-[#1C221F]">Nature is the <span className='italic'>ultimate</span> luxury</h1>
//                 <p className="text-[14px] leading-5.75 font-normal text-[#6D7873] font-inter">Eden Botanica was born from a singular vision: that the most profound luxury isn't found in man-made objects, but in the living masterpieces of the natural world.</p>
//                 <p className="text-[14px] leading-5.75 font-normal text-[#6D7873] font-inter">Every garden, every pathway, every curated collection represents decades of passionate cultivation and an unwavering commitment to botanical excellence.</p>
//               </div>
//             </div>
//           </div>


//         </section>
//       </main>
//       <FooterSection />
//     </>
//   )
// }

// export default AboutSection








































// import { useEffect, useRef, useState } from "react";
// import '../App.css'
// import NavBar from '../components/Navbar.jsx'
// import FooterSection from '../components/Footer.jsx'

// import photoOne from '../assets/img-one.png'
// import imgFive from '../assets/photo-five.png'

// function useScrollReveal(threshold = 0.15) {
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

// function AboutSection() {
//   const [heroRef, heroVisible] = useScrollReveal(0.1);
//   const [missionRef, missionVisible] = useScrollReveal(0.15);
//   const [philosophyBlockRef, philosophyBlockVisible] = useScrollReveal(0.15);

//   const base = "transition-all duration-700 ease-out";
//   const hidden = "opacity-0 translate-y-10";
//   const show = "opacity-100 translate-y-0";

//   return (
//     <>
//       <NavBar section="about" />

//       {/* Hero Section */}
//       <section
//         ref={heroRef}
//         style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(${photoOne})` }}
//         className="w-full py-24 sm:py-32 md:py-40 lg:py-45 flex items-center justify-center flex-col text-center gap-4 sm:gap-5 bg-cover bg-center bg-no-repeat"
//       >
//         <p className={`text-[#999999] text-[11px] sm:text-[13px] md:text-[14px] font-normal leading-5 tracking-[4px] sm:tracking-[5.6px] uppercase font-inter ${base} ${heroVisible ? show : hidden}`}
//           style={{ transitionDelay: "0ms" }}>
//           Our Story
//         </p>
//         <h1 className={`text-[52px] sm:text-[72px] md:text-[90px] lg:text-[118px] leading-tight font-light tracking-[3px] sm:tracking-[5px] lg:tracking-[6.4px] text-[#FFFFFF] font-cormorant ${base} ${heroVisible ? show : hidden}`}
//           style={{ transitionDelay: "120ms" }}>
//           About <span className="italic">Eden</span>
//         </h1>
//       </section>

//       {/* Content Section */}
//       <section className="w-full py-16 sm:py-24 md:py-28 lg:py-35 flex justify-center items-center flex-col gap-16 sm:gap-20 lg:gap-25">
//         <div className="w-[93%] flex flex-col gap-16 sm:gap-24 lg:gap-30">

//           {/* Mission / Philosophy / Expertise */}
//           <div
//             ref={missionRef}
//             className="w-full flex flex-col gap-12 sm:gap-14 lg:gap-16"
//           >
//             {[
//               {
//                 title: "Our Mission",
//                 delay: "0ms",
//                 text: "At Eden Botanics, we believe that nature is the ultimate designer. Our mission is to create immersive botanical experiences that transport visitors to worlds of beauty, serenity, and wonder. We combine horticultural expertise with architectural innovation to craft spaces that inspire, heal, and transform."
//               },
//               {
//                 title: "Our Philosophy",
//                 delay: "100ms",
//                 text: "We don't simply cultivate plants—we cultivate experiences. Every garden is meticulously designed to engage all senses, tell a story, and create lasting memories. From the Japanese zen garden's meditative harmony to the tropical paradise's lush exuberance, each collection reflects our commitment to excellence and authenticity."
//               },
//               {
//                 title: "Our Expertise",
//                 delay: "200ms",
//                 text: "With decades of combined experience in landscape architecture, horticulture, and botanical science, our team brings unparalleled expertise to every project. We source specimens from around the world, employ cutting-edge cultivation techniques, and maintain our gardens to museum-quality standards."
//               }
//             ].map(({ title, delay, text }) => (
//               <div
//                 key={title}
//                 className={`flex flex-col gap-4 sm:gap-6 ${base} ${missionVisible ? show : hidden}`}
//                 style={{ transitionDelay: delay }}
//               >
//                 <h2 className="text-[32px] sm:text-[40px] md:text-[48px] leading-tight font-light tracking-[2px] sm:tracking-[2.4px] text-[#1C221F] font-cormorant">
//                   {title}
//                 </h2>
//                 <p className="font-normal leading-7 tracking-[.4px] text-[#6D7873] font-inter text-[14px] sm:text-[15px] md:text-[16px]">
//                   {text}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Philosophy image + text block */}
//           <div
//             ref={philosophyBlockRef}
//             className="flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-20"
//           >
//             <div className={`w-full md:w-1/2 overflow-hidden group ${base} ${philosophyBlockVisible ? show : hidden}`}
//               style={{ transitionDelay: "0ms" }}>
//               <img
//                 src={imgFive}
//                 className="block w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
//                 alt="Philosophy"
//               />
//             </div>

//             <div className={`flex flex-col gap-4 sm:gap-5 justify-center md:w-1/2 ${base} ${philosophyBlockVisible ? show : hidden}`}
//               style={{ transitionDelay: "150ms" }}>
//               <p className="text-[11px] sm:text-[12px] leading-4 font-normal tracking-[4px] sm:tracking-[4.8px] uppercase font-inter text-[#6D7873]">
//                 Philosophy
//               </p>
//               <h1 className="text-[40px] sm:text-[50px] md:text-[56px] lg:text-[60px] leading-tight font-normal tracking-[2px] sm:tracking-[3px] font-cormorant text-[#1C221F]">
//                 Nature is the <span className="italic">ultimate</span> luxury
//               </h1>
//               <p className="text-[13px] sm:text-[14px] leading-6 font-normal text-[#6D7873] font-inter">
//                 Eden Botanica was born from a singular vision: that the most profound luxury isn't found in man-made objects, but in the living masterpieces of the natural world.
//               </p>
//               <p className="text-[13px] sm:text-[14px] leading-6 font-normal text-[#6D7873] font-inter">
//                 Every garden, every pathway, every curated collection represents decades of passionate cultivation and an unwavering commitment to botanical excellence.
//               </p>
//             </div>
//           </div>

//         </div>
//       </section>

//       <FooterSection />
//     </>
//   )
// }

// export default AboutSection















import { useEffect, useRef, useState } from "react";
// import '../App.css'
import NavBar from '../components/Navbar.jsx'
import FooterSection from '../components/Footer.jsx'

import photoOne from '../assets/img-one.png'
import imgFive from '../assets/photo-five.png'

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

function AboutSection() {
  const [heroRef, heroVisible] = useScrollReveal();
  const [missionRef, missionVisible] = useScrollReveal();
  const [philosophyBlockRef, philosophyBlockVisible] = useScrollReveal();

  return (
    <>
      <NavBar section="about" />

      {/* Hero */}
      <section
        ref={heroRef}
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(${photoOne})` }}
        className="w-full py-24 sm:py-32 md:py-40 lg:py-45 flex items-center justify-center flex-col text-center gap-4 sm:gap-5 bg-cover bg-center bg-no-repeat"
      >
        <p
          className={`text-[#999999] text-[11px] sm:text-[13px] md:text-[14px] font-normal leading-5 tracking-[4px] sm:tracking-[5.6px] uppercase font-inter ${base} ${heroVisible ? show : hidden}`}
          style={{ transitionDelay: "0ms" }}
        >
          Our Story
        </p>
        <h1
          className={`text-[52px] sm:text-[72px] md:text-[90px] lg:text-[118px] leading-tight font-light tracking-[3px] sm:tracking-[5px] lg:tracking-[6.4px] text-[#FFFFFF] font-cormorant ${base} ${heroVisible ? show : hidden}`}
          style={{ transitionDelay: "120ms" }}
        >
          About <span className="italic">Eden</span>
        </h1>
      </section>

      {/* Mission / Philosophy / Expertise */}
      <section className="w-full py-16 sm:py-24 md:py-28 lg:py-35 flex justify-center items-center flex-col gap-16 sm:gap-20 lg:gap-25">
        <div className="w-[93%] flex flex-col gap-16 sm:gap-24 lg:gap-30">

          <div ref={missionRef} className="w-full flex flex-col gap-12 sm:gap-14 lg:gap-16">
            {[
              {
                title: "Our Mission",
                delay: "0ms",
                text: "At Eden Botanics, we believe that nature is the ultimate designer. Our mission is to create immersive botanical experiences that transport visitors to worlds of beauty, serenity, and wonder. We combine horticultural expertise with architectural innovation to craft spaces that inspire, heal, and transform."
              },
              {
                title: "Our Philosophy",
                delay: "100ms",
                text: "We don't simply cultivate plants—we cultivate experiences. Every garden is meticulously designed to engage all senses, tell a story, and create lasting memories. From the Japanese zen garden's meditative harmony to the tropical paradise's lush exuberance, each collection reflects our commitment to excellence and authenticity."
              },
              {
                title: "Our Expertise",
                delay: "200ms",
                text: "With decades of combined experience in landscape architecture, horticulture, and botanical science, our team brings unparalleled expertise to every project. We source specimens from around the world, employ cutting-edge cultivation techniques, and maintain our gardens to museum-quality standards."
              }
            ].map(({ title, delay, text }) => (
              <div
                key={title}
                className={`flex flex-col gap-4 sm:gap-6 ${base} ${missionVisible ? show : hidden}`}
                style={{ transitionDelay: delay }}
              >
                <h2 className="text-[32px] sm:text-[40px] md:text-[48px] leading-tight font-light tracking-[2px] sm:tracking-[2.4px] text-[#1C221F] font-cormorant">
                  {title}
                </h2>
                <p className="font-normal leading-7 tracking-[.4px] text-[#6D7873] font-inter text-[14px] sm:text-[15px] md:text-[16px]">
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Philosophy image + text */}
          <div ref={philosophyBlockRef} className="flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-20">
            <div
              className={`w-full md:w-1/2 overflow-hidden group ${base} ${philosophyBlockVisible ? show : hidden}`}
              style={{ transitionDelay: "0ms" }}
            >
              <img
                src={imgFive}
                className="block w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                alt="Philosophy"
              />
            </div>
            <div
              className={`flex flex-col gap-4 sm:gap-5 justify-center md:w-1/2 ${base} ${philosophyBlockVisible ? show : hidden}`}
              style={{ transitionDelay: "150ms" }}
            >
              <p className="text-[11px] sm:text-[12px] leading-4 font-normal tracking-[4px] sm:tracking-[4.8px] uppercase font-inter text-[#6D7873]">
                Philosophy
              </p>
              <h1 className="text-[40px] sm:text-[50px] md:text-[56px] lg:text-[60px] leading-tight font-normal tracking-[2px] sm:tracking-[3px] font-cormorant text-[#1C221F]">
                Nature is the <span className="italic">ultimate</span> luxury
              </h1>
              <p className="text-[13px] sm:text-[14px] leading-6 font-normal text-[#6D7873] font-inter">
                Eden Botanica was born from a singular vision: that the most profound luxury isn't found in man-made objects, but in the living masterpieces of the natural world.
              </p>
              <p className="text-[13px] sm:text-[14px] leading-6 font-normal text-[#6D7873] font-inter">
                Every garden, every pathway, every curated collection represents decades of passionate cultivation and an unwavering commitment to botanical excellence.
              </p>
            </div>
          </div>

        </div>
      </section>

      <FooterSection />
    </>
  );
}

export default AboutSection;