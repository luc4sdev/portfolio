import { Avatar } from "@mui/material";
import { contacts } from "../../../utils/contact";


export function Contact() {
    return (
        <div className=" bg-slate-50 w-full h-96 flex flex-col gap-8 justify-center items-center py-5">
            <h1 className="text-slate-950 text-xl md:text-6xl font-semibold transition duration-500 hover:text-sky-500">CONTACT</h1>
            <p className="text-slate-950 text-lg md:text-xl font-semibold">How can you find me?</p>
            <div className="flex justify-center items-center gap-4">
                {contacts.map(contact => {
                    return (
                        <a key={contact.id} className="hover:scale-110" href={contact.url} target="_blank" rel="external">
                            <Avatar alt={contact.name} src={contact.src} sx={{ width: 50, height: 50 }} variant="square" />
                        </a>
                    )
                })}
            </div>

        </div>
    )
}