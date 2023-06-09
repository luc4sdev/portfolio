import Typewriter from 'typewriter-effect';


export function Presentation() {
    return (
        <div className="md:w-9/12 px-48 flex flex-col gap-y-2 justify-center items-start">
            <h1 className="text-slate-50 text-xl md:text-3xl font-medium">Welcome to my portfólio.</h1>
            <h1 className="text-indigo-800 text-2xl md:text-4xl font-semibold">My name is</h1>
            <h1 className="text-indigo-800 text-3xl md:text-6xl font-semibold">Lucas Pereira.</h1>
            <h1 className="text-slate-50 text-4xl md:text-7xl font-semibold">
                <Typewriter
                    options={{
                        strings: ['I`M A WEB DEVELOPER.'],
                        autoStart: true,
                        loop: true,
                    }}

                />
            </h1>



        </div >
    )
}