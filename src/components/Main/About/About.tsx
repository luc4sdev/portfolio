import { Avatar } from "@mui/material";
import avatar from '../../../assets/avatar.jpeg';
import { Skills } from "./Skills/Skills";

export function About() {
    return (
        <>
            <div className="mt-96 w-full flex flex-col justify-center items-center gap-16 py-12 bg-neutral-900">
                <h1 className="text-slate-50 text-3xl md:text-6xl font-bold transition duration-500 hover:text-sky-500 transform hover:scale-105">
                    ABOUT ME
                </h1>

                <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 px-4">

                    <div className="flex flex-col gap-8 justify-center items-center">
                        <Avatar
                            alt="Lucas Pereira"
                            src={avatar}
                            sx={{
                                width: 200,
                                height: 200,
                                border: '4px solid #0ea5e9',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
                                transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'scale(1.05)'
                                }
                            }}
                        />
                        <p className="w-full text-slate-50 text-base md:text-xl font-normal leading-relaxed text-justify">
                            Hello, my name is Lucas and I'm a web developer with over 4 years of experience.
                            I specialize in modern web technologies and have worked on both professional and personal projects.
                            I am passionate about learning new technologies and always strive to deliver high-quality work.
                        </p>
                    </div>

                    <div className="flex flex-col gap-10">
                        <h2 className="text-sky-500 text-2xl md:text-3xl font-bold transition duration-500 hover:text-slate-50">
                            PROFESSIONAL EXPERIENCE
                        </h2>

                        <div className="flex flex-col gap-4 p-6 bg-neutral-800 rounded-lg shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105">
                            <p className="text-slate-50 text-lg md:text-xl font-semibold">
                                Front-End Developer | LiveFarm Agricultural Technology LTDA.
                            </p>
                            <p className="text-slate-400 text-base md:text-lg font-normal">
                                05/2022 - 03/2024
                            </p>
                            <p className="text-slate-300 text-base md:text-lg font-normal leading-relaxed">
                                Developed applications using front-end/back-end frameworks and libraries, including TypeScript, ReactJS, NextJS, NodeJS, Firebase, Bootstrap 5, TailwindCSS, and Figma. Managed servers, refactored scripts, and followed best programming practices using Scrum methodology.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 p-6 bg-neutral-800 rounded-lg shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105">
                            <p className="text-slate-50 text-lg md:text-xl font-semibold">
                                Front-End Developer | Venda Kobi
                            </p>
                            <p className="text-slate-400 text-base md:text-lg font-normal">
                                03/2024 - 05/2024
                            </p>
                            <p className="text-slate-300 text-base md:text-lg font-normal leading-relaxed">
                                Built applications in Next.js using TypeScript with SOLID principles and Clean Code. Utilized React Query, Sass, and Figma for design. Integrated with backend APIs and followed Scrum and Kanban methodologies.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 p-6 bg-neutral-800 rounded-lg shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105">
                            <p className="text-slate-50 text-lg md:text-xl font-semibold">
                                Full Stack Developer | OneSelect System
                            </p>
                            <p className="text-slate-400 text-base md:text-lg font-normal">
                                05/2024 - Now
                            </p>
                            <p className="text-slate-300 text-base md:text-lg font-normal leading-relaxed">
                                Develop full-stack applications using React.js, TailwindCSS, Node.js, Prisma, MySQL, and Elasticsearch. Configure and deploy environments with Docker and Linux. Implement automated tests with Vitest.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Skills />
        </>
    );
}