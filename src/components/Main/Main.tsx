import { About } from "./About/About";
import { Contact } from "./Contact/Contact";
import { Footer } from "./Footer/Footer";
import { Presentation } from "./Presentation/Presentation";
import { Projects } from "./Projects/Projects";

export function Main() {
    return (
        <div className="w-full mt-80 grow flex flex-col justify-center items-center">
            <Presentation />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}