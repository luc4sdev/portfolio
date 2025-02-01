import { animateScroll as scroll } from 'react-scroll';

function handleScrollHome() {
  scroll.scrollToTop();
}

function handleScrollAbout() {
  const documentHeight = document.body.scrollHeight;
  const scrollToPosition = documentHeight * 0.094;
  scroll.scrollTo(scrollToPosition);
}

function handleScrollSkills() {
  const documentHeight = document.body.scrollHeight;
  const scrollToPosition = documentHeight * 0.22;
  scroll.scrollTo(scrollToPosition);
}

function handleScrollProjects() {
  const documentHeight = document.body.scrollHeight;
  const scrollToPosition = documentHeight * 0.49;
  scroll.scrollTo(scrollToPosition);
}

function handleScrollContact() {
  scroll.scrollToBottom();
}

export function Navbar() {
  return (
    <nav className="flex justify-between  gap-x-12 lg:gap-x-24">
      <button type="button" onClick={handleScrollHome} className="text-slate-50 text-xs lg:text-sm font-semibold transition duration-500 hover:text-sky-500">HOME</button>
      <button type="button" onClick={handleScrollAbout} className="text-slate-50 text-xs lg:text-sm font-semibold transition duration-500 hover:text-sky-500">ABOUT</button>
      <button type="button" onClick={handleScrollSkills} className="text-slate-50 text-xs lg:text-sm font-semibold transition duration-500 hover:text-sky-500">SKILLS</button>
      <button type="button" onClick={handleScrollProjects} className="text-slate-50 text-xs lg:text-sm font-semibold transition duration-500 hover:text-sky-500">PROJECTS</button>
      <button type="button" onClick={handleScrollContact} className="text-slate-50 text-xs lg:text-sm font-semibold transition duration-500 hover:text-sky-500">CONTACT</button>
      <button type="button" className="text-slate-50 bg-sky-500 hover:brightness-110 p-2 px-4 rounded-lg text-xs lg:text-sm font-semibold ">
        <a href="https://drive.google.com/file/d/1qNeFVUfWfr1PZsNgHmHgkn7t23Q0fsuM/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          MY RESUME
        </a>
      </button>
    </nav>
  )
}