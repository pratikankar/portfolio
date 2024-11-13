import Navbar from "./Navbar"
import { useState } from "react"

const Header = () => {
    const [navOpen, setNavOpen] = useState(true);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-green-500 to-green-900/0">
        <div className="max-w-sxreen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:gid md:grid-cols-[1fr, 3fr, 1fr]">
            <h1>
                <a href="/" className="logo">
                    <img src="/images/favicon.svg" alt="logo" width={40} height={40} />
                </a>
            </h1>
            <div className="relative md:justify-self-center">
                <button className="menu-btn md:hidden" onClick={() => setNavOpen((prev) => !prev)}>
                    <span className="material-symbols-outlined">{navOpen ? 'close' : 'menu'}</span>
                </button>
                <Navbar navOpen={navOpen} />
            </div>
            <a href="#contact" className="btn btn-secondary max-md:hidden md:justify-self-end">Contact Me</a>
        </div>
    </header>
  )
}

export default Header