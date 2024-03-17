import { Avatar } from "@mui/material";

const skills = [
    {
        id: 1,
        name: 'Javascript',
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
        id: 2,
        name: 'Typescript',
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
    },
    {
        id: 3,
        name: 'ReactJS',
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
        id: 4,
        name: 'NextJS',
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
    },
    {
        id: 5,
        name: 'NodeJS',
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    },
    
    {
        id: 6,
        name: 'GraphQL',
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"
    },

    {
        id: 7,
        name: 'Storybook',
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg"
    },
    {
        id: 8,
        name: 'Bootstrap',
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
    },
    {
        id: 9,
        name: 'Tailwindcss',
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
    },
    {
        id: 10,
        name: 'Sass',
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
    },
    {
        id: 11,
        name: 'Figma',
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
    },
    {
        id: 12,
        name: 'Firebase',
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
    },
    {
        id: 13,
        name: 'Docker',
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg"
    },
    {
        id: 14,
        name: 'PostgreSQL',
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
    },
    {
        id: 15,
        name: 'Git',
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    },
    
    {
        id: 16,
        name: 'C#',
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
    },

    {
        id: 17,
        name: '.Net',
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-plain.svg"
    },
]

export function Skills() {
    return (
        <div className="w-full mt-12 bg-neutral-800 flex flex-col justify-center items-center py-3">
            <h1 className="text-slate-50 text-lg md:text-3xl font-semibold transition duration-500 hover:text-sky-500">SKILLS</h1>
            <div className="mt-8 w-full grid grid-cols-3 md:grid-cols-5 gap-8">
                {skills.map(skill => {
                    return (
                        <div key={skill.id} className="flex flex-col justify-center items-center">
                            <Avatar alt={skill.name} src={skill.src} sx={{ width: 50, height: 50 }} variant="square"/>
                            <p className="text-slate-50 text-sm md:text-lg transition duration-500 hover:text-sky-500">{skill.name}</p>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}