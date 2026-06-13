import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function NavBar({ section = 'home' }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (section !== 'home') return

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [section])


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isHome = section === 'home'

  const navbarClasses = isHome
    ? `w-full flex justify-center items-center fixed top-0 z-[200] transition-all duration-300 ease-in-out ${isScrolled || menuOpen ? 'bg-white' : ''}`
    : 'w-full flex justify-center items-center fixed top-0 z-[200] bg-white border-b border-black/20'

  const textColor = isHome && !isScrolled && !menuOpen ? 'text-[#FFFFFF]' : 'text-[#1C221F]'
  const hamburgerColor = isHome && !isScrolled && !menuOpen ? 'bg-white' : 'bg-[#1C221F]'

  return (
    <header className={navbarClasses}>
      <nav className="mx-auto my-0 w-[93%] py-4 px-0 flex flex-row justify-between items-center">

        <Link to="/" onClick={() => setMenuOpen(false)}>
          <h1 className={`text-[28px] sm:text-[30px] leading-9 font-light ${textColor} font-cormorant transition-colors duration-300`}>
            EDEN
          </h1>
        </Link>


        <ul className="hidden lg:flex gap-8 xl:gap-13">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/collections", label: "Collections" },
            { to: "/gallery", label: "Gallery" },
            { to: "/architecture", label: "Architecture" },
            { to: "/events", label: "Events" },
            { to: "/journal", label: "Journal" },
          ].map(({ to, label }) => (
            <li key={label}>
              <Link
                to={to}
                className={`text-[13px] xl:text-[15px] leading-4 font-normal ${textColor} tracking-[2.4px] uppercase transition-colors duration-300`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.25 justify-center items-center w-8 h-8 cursor-pointer"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[1.5px] ${hamburgerColor} transition-all duration-300 ease-in-out ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
          <span className={`block w-6 h-[1.5px] ${hamburgerColor} transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[1.5px] ${hamburgerColor} transition-all duration-300 ease-in-out ${menuOpen ? '-rotate-45 translate-y-[-6.5px]' : ''}`} />
        </button>

      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? 'max-h-180 border-b border-black/10' : 'max-h-0'}`}
      >
        <ul className="flex flex-col w-[93%] mx-auto py-6 gap-13 lg:gap-6 font-cormorant lg:font-inter ">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/collections", label: "Collections" },
            { to: "/gallery", label: "Gallery" },
            { to: "/architecture", label: "Architecture" },
            { to: "/events", label: "Events" },
            { to: "/journal", label: "Journal" },
          ].map(({ to, label }) => (
            <li key={label}>
              <Link
                to={to}
                onClick={() => setMenuOpen(false)}
                className="text-[22px] lg:text-[13px] leading-4 font-normal text-[#1C221F] tracking-[2.4px] uppercase"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default NavBar
