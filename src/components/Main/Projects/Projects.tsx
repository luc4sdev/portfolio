import { projects } from "../../../utils/projects";
import { ActionAreaCard } from "./ActionAreaCard/ActionAreaCard";


export function Projects() {
    return (
        <div className="w-full py-16 bg-neutral-900 flex flex-col justify-center items-center">
            <h1 className="text-slate-50 text-3xl md:text-5xl font-bold mb-4 transition duration-500 hover:text-sky-500 transform hover:scale-105">
                PROJECTS
            </h1>
            <p className="text-slate-300 text-lg md:text-xl text-center mb-8 max-w-2xl px-4">
                Some of my personal projects. You can find more in my GitHub repository.
                <a
                    href="https://www.github.com/luc4sdev"
                    className="ml-2 text-sky-500 hover:text-sky-400 transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="devicon-github-original text-2xl"></i>
                </a>
            </p>
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                <ActionAreaCard projects={projects} />
            </div>
        </div>
    );
}