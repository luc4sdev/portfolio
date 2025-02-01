import { Avatar } from "@mui/material";
import { skillsByCategory } from "../../../../utils/skills";


export function Skills() {
    return (
        <div className="w-full mt-12 bg-neutral-900 flex flex-col justify-center items-center py-12">
            <h1 className="text-slate-50 text-3xl md:text-5xl font-bold mb-8 transition duration-500 hover:text-sky-500 transform hover:scale-105">
                SKILLS
            </h1>

            {Object.entries(skillsByCategory).map(([category, skills]) => (
                <div key={category} className="w-full max-w-7xl mb-12">
                    <h2 className="text-slate-50 text-xl md:text-2xl font-semibold mb-6 ml-4">
                        {category}
                    </h2>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-6 px-4">
                        {skills.map(skill => (
                            <div
                                key={skill.id}
                                className="flex flex-col justify-center items-center p-4 bg-neutral-800 rounded-lg shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 hover:bg-neutral-700"
                            >
                                <Avatar
                                    alt={skill.name}
                                    src={skill.src}
                                    sx={{
                                        width: 80,
                                        height: 80,
                                        borderRadius: '12px',
                                        transition: 'transform 0.3s ease-in-out',
                                        '&:hover': {
                                            transform: 'scale(1.1)'
                                        }
                                    }}
                                    variant="square"
                                />
                                <p className="text-slate-50 text-sm md:text-lg mt-4 font-medium transition duration-500 hover:text-sky-500">
                                    {skill.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}