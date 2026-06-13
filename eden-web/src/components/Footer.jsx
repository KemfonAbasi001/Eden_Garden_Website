import { Link, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from "react"

function useScrollReveal() {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -10px 0px"
      }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return [ref, isVisible]
}

function FooterSection() {
  const location = useLocation()
  const [gridRef, gridVisible] = useScrollReveal()
  const [bottomRef, bottomVisible] = useScrollReveal()

  const base = "transition-all duration-700 ease-out"
  const hidden = "opacity-0 translate-y-10"
  const show = "opacity-100 translate-y-0"

  const handleHomeLink = (e) => {
    if (location.pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer className="w-full bg-[#173626] py-16 sm:py-20 flex justify-center items-center overflow-hidden">
      <div className="w-[93%] flex flex-col gap-14 sm:gap-16">


        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

   
          <div className={`flex flex-col gap-5 ${base} ${gridVisible ? show : hidden}`} style={{ transitionDelay: "0ms" }}>
            <Link to="/" onClick={handleHomeLink}>
              <h1 className="text-[28px] sm:text-[30px] leading-9 font-light text-[#FFFFFF] font-cormorant">EDEN</h1>
            </Link>
            <p className="text-[18px] lg:text-[13px] sm:text-[14px] font-normal leading-7.5 lg:leading-5 text-[#FFFFFF80]">
              The world's most exclusive botanical paradise. Where nature meets luxury in perfect harmony.
            </p>
          </div>


          <div className={`flex flex-col gap-7 lg:gap-5 ${base} ${gridVisible ? show : hidden}`} style={{ transitionDelay: "100ms" }}>
            <h4 className="text-[22px] lg:text-[16px] leading-7 tracking-[.9px] text-[#FFFFFF] font-cormorant font-normal">Experience</h4>
            <ul className="flex flex-col gap-7 lg:gap-4">
              <li><Link to="/collections" className="text-[18px] lg:text-[13px] sm:text-[14px] font-normal leading-5 text-[#FFFFFF80] hover:text-white transition-colors duration-500 ease-in-out">Collections</Link></li>
              <li><Link to="/gallery" className="text-[18px] lg:text-[13px] sm:text-[14px] font-normal leading-5 text-[#FFFFFF80] hover:text-white transition-colors duration-500 ease-in-out">Gallery</Link></li>
              <li><Link to="/architecture" className="text-[18px] lg:text-[13px] sm:text-[14px] font-normal leading-5 text-[#FFFFFF80] hover:text-white transition-colors duration-500 ease-in-out">Architecture</Link></li>
              <li><Link to="/gallery" className="text-[18px] lg:text-[13px] sm:text-[14px] font-normal leading-5 text-[#FFFFFF80] hover:text-white transition-colors duration-500 ease-in-out">Explorer</Link></li>
              <li><Link to="/events" className="text-[18px] lg:text-[13px] sm:text-[14px] font-normal leading-5 text-[#FFFFFF80] hover:text-white transition-colors duration-500 ease-in-out">Events</Link></li>
            </ul>
          </div>

          <div className={`flex flex-col gap-7 lg:gap-5 ${base} ${gridVisible ? show : hidden}`} style={{ transitionDelay: "200ms" }}>
            <h4 className="text-[22px] lg:text-[16px] leading-7 tracking-[.9px] text-[#FFFFFF] font-cormorant font-normal">Visit</h4>
            <ul className="flex flex-col gap-7 lg:gap-4">
              <li>
                <Link to="/" onClick={handleHomeLink} className="text-[18px] lg:text-[13px] sm:text-[14px] font-normal leading-5 text-[#FFFFFF80] hover:text-white transition-colors duration-500 ease-in-out">
                  Book a Tour
                </Link>
              </li>
              <li><Link to="/gallery" className="text-[18px] lg:text-[13px] sm:text-[14px] font-normal leading-5 text-[#FFFFFF80] hover:text-white transition-colors duration-500 ease-in-out">Shop</Link></li>
              <li><Link to="/journal" className="text-[18px] lg:text-[13px] sm:text-[14px] font-normal leading-5 text-[#FFFFFF80] hover:text-white transition-colors duration-500 ease-in-out">Journal</Link></li>
              <li><Link to="/about" className="text-[18px] lg:text-[13px] sm:text-[14px] font-normal leading-5 text-[#FFFFFF80] hover:text-white transition-colors duration-500 ease-in-out">About</Link></li>
              <li><Link to="/" onClick={handleHomeLink} className="text-[18px] lg:text-[13px] sm:text-[14px] font-normal leading-5 text-[#FFFFFF80] hover:text-white transition-colors duration-500 ease-in-out">Contact</Link></li>
            </ul>
          </div>

          <div className={`flex flex-col gap-7 lg:gap-5 ${base} ${gridVisible ? show : hidden}`} style={{ transitionDelay: "300ms" }}>
            <h4 className="text-[22px] lg:text-[16px] leading-7 tracking-[.9px] text-[#FFFFFF] font-cormorant font-normal">Connect</h4>
            <ul className="flex flex-col gap-7 lg:gap-4">
              <p className="text-[18px] lg:text-[13px] sm:text-[14px] font-normal leading-7.5 lg:leading-5 text-[#FFFFFF80]">Eden Estate Drive <br />Paradise Garder, 90210</p>
              <p className="text-[18px] lg:text-[13px] sm:text-[14px] font-normal text-[#FFFFFF80] leading-7.5 lg:leading-5">edenparadise@gmail.com <br />+1 (800) EDEN</p>
            </ul>
          </div>

        </div>


        <div
          ref={bottomRef}
          className={`flex flex-col sm:flex-row justify-between items-start sm:items-center py-7 gap-3 border-t border-b-0 border-r-0 border-l-0 border-solid border-[#FFFFFF80] ${base} ${bottomVisible ? show : hidden}`}
          style={{ transitionDelay: "0ms" }}
        >
          <p className="lg:text-[12px] text-[16px] text-[#808080] font-inter tracking-[0.4px]">
            © {new Date().getFullYear()} Eden Gardens. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/" onClick={handleHomeLink} className="text-[16px] lg:text-[12px] text-[#808080] hover:text-white transition-colors duration-200 font-inter tracking-[0.4px]">Privacy Policy</Link>
            <Link to="/" onClick={handleHomeLink} className="text-[16px] lg:text-[12px] text-[#808080] hover:text-white transition-colors duration-200 font-inter tracking-[0.4px]">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default FooterSection