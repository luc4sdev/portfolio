import { animateScroll as scroll } from 'react-scroll';

function handleScrollHome() {
    scroll.scrollTo(0)
}
function handleScrollAbout() {
    scroll.scrollTo(815)
}
function handleScrollProjects() {
    scroll.scrollTo(1950)
}
function handleScrollContact() {
    scroll.scrollTo(5000)
}

export function Navbar() {
    return (
        <nav className="flex justify-between  gap-x-12 lg:gap-x-24">
            <button type="button" onClick={handleScrollHome} className="text-slate-50 text-xs lg:text-sm font-semibold transition duration-500 hover:text-indigo-800">HOME</button>
            <button type="button" onClick={handleScrollAbout} className="text-slate-50 text-xs lg:text-sm font-semibold transition duration-500 hover:text-indigo-800">ABOUT</button>
            <button type="button" onClick={handleScrollProjects} className="text-slate-50 text-xs lg:text-sm font-semibold transition duration-500 hover:text-indigo-800">PROJECTS</button>
            <button type="button" onClick={handleScrollContact} className="text-slate-50 text-xs lg:text-sm font-semibold transition duration-500 hover:text-indigo-800">CONTACT</button>
            <button type="button" onClick={handleScrollContact} className="text-slate-50 bg-indigo-800 p-2 px-4 rounded-lg text-xs lg:text-sm font-semibold ">
                <a href="https://drive.google.com/file/d/16Rnz1yhWVwW-8l3o1JWKVAlGhTkS74ck/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    MY CV
                </a>
            </button>
        </nav>
    )
}