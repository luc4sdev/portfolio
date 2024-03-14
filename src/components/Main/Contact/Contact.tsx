import { Avatar } from "@mui/material";

const contacts = [
    {
        id: 1,
        name: 'LinkedIn',
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
        url: 'https://www.linkedin.com/in/lucas-pereira-37001b202/'
    },
    {
        id: 1,
        name: 'Github',
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        url: 'https://github.com/luc4sdev'

    },
]
export function Contact() {
    return (
        <div className=" bg-slate-50 mt-96 w-full h-96 flex flex-col gap-8 justify-center items-center py-5">
        <h1 className="text-slate-950 text-xl md:text-6xl font-semibold transition duration-500 hover:text-sky-500">CONTACT</h1>
        <p className="text-slate-950 text-lg md:text-xl font-semibold">How can you find me?</p>
       <div className="flex justify-center items-center gap-4">
           {contacts.map(contact => {
            return (
                <a key={contact.id} href={contact.url} target="_blank" rel="external">
                    <Avatar alt={contact.name} src={contact.src} sx={{ width: 50, height: 50 }} variant="square"/>
                </a>
            )
           })}
       </div>

    </div>
    )
}