import { Avatar } from "@mui/material";
import { Skills } from "./Skills/Skills";

import avatar from '../../../assets/avatar.jpg'

export function About() {
    return (
        <>

            <div className="mt-96 w-full flex flex-col justify-center items-center gap-10">
                <h1 className="text-slate-50 text-xl md:text-6xl font-semibold transition duration-500 hover:text-indigo-800">ABOUT ME</h1>
                
                <div className="w-3/4 grid grid-cols-2 px-2 gap-5">

                    <div className="col-span-2 md:col-span-1 flex flex-col gap-8 justify-center items-center">
                        <Avatar alt="Lucas Pereira" src={avatar} sx={{ width: 150, height: 150 }} />
                        <p className="w-full text-slate-50 text-start text-base md:text-lg font-normal md:indent-8 leading-8">
                            Hello, my name is Lucas and I'm a web developer, I've been in this area for over 3 years.
                            I've been studying the most innovative technologies on the market.
                            I have professional experience and several personal projects.
                            I am responsible with my activities and I am always in search of new knowledge.
                        </p>
                    </div>

                    <div className="col-span-2 md:col-span-1 flex flex-col gap-3 justify-start items-center text-start border-t-4 md:border-t-0 md:border-l-4 border-indigo-800 ps-10">
                        <h2 className="text-slate-50 text-lg md:text-2xl font-semibold transition duration-500 hover:text-indigo-800">Professional experience</h2>
                        <p className="w-full text-slate-50 text-start text-base md:text-lg font-normal">- Front-End Developer | LiveFarm Agricultural Technology LTDA.</p>
                        <p className="w-full text-slate-50 text-start text-base md:text-lg font-normal">- 05/2022 - Now</p>

                        <p className="w-full text-slate-50 text-start text-base md:text-lg font-normal">- Development of applications with front-end/back-end frameworks and libraries, TypeScript, ReactJS, NextJS, NodeJS, Firebase, Bootstrap 5, TailwindCSS, Figma, REST API, among others. Creation of scripts for servers in NodeJS, management and maintenance of servers, use of Firebase and its Firestore database, script refactoring and good programming practices. Working with the dev team using the Scrum methodology for better performance.</p>
                    </div>

                </div>
            </div>
            <Skills />
        </>
    )
}