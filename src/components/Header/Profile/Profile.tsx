import { Avatar } from "@mui/material";
import avatar from '../../../assets/avatar.jpeg'

export function Profile() {
    return (
        <div className="flex justify-center items-center gap-x-4">
            <Avatar alt="Lucas Pereira" src={avatar} sx={{ width: 50, height: 50 }} />
            <h1 className="text-slate-50 text-sm lg:text-lg font-semibold transition duration-500 hover:text-sky-500">LUCAS PEREIRA</h1>
        </div>
    )
}