import { Avatar } from "@mui/material";
import { Skills } from "./Skills/Skills";

import avatar from '../../../assets/avatar.jpg'

export function About() {
    return (
        <>
            <div className="mt-96 w-10/12 md:w-6/12 flex flex-col gap-8 justify-center items-center">
                <h1 className="text-slate-50 text-xl md:text-6xl font-semibold transition duration-500 hover:text-indigo-800">ABOUT ME</h1>
                <Avatar alt="Lucas Pereira" src={avatar} sx={{ width: 150, height: 150 }} />
                <p className="w-full md:w-4/5 text-slate-50 text-start text-lg md:text-xl font-normal md:indent-8 leading-8">
                    Hello, my name is Lucas and I'm a web developer, I've been in this area for over 3 years.
                    I've been studying the most innovative technologies on the market.
                    I have professional experience and several personal projects.
                    I am responsible with my activities and I am always in search of new knowledge.
                </p>
            </div>
            <Skills />
        </>
    )
}