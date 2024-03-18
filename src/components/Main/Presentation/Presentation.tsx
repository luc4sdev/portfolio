import Typewriter from 'typewriter-effect';


export function Presentation() {
    return (
        <div className="md:w-9/12 md:px-48 flex flex-col gap-y-2 justify-center items-start">
            <h1 className="text-slate-50 text-xl md:text-3xl font-medium">Welcome to my portfólio.</h1>
            <h1 className="text-sky-500 text-2xl md:text-4xl font-semibold">My name is</h1>
            <h1 className="text-sky-500 text-3xl md:text-6xl font-semibold">Lucas Pereira.</h1>
            <h1 className="text-slate-50 text-3xl md:text-6xl font-semibold">
                <Typewriter
                    options={{
                        strings: ['FRONT-END', 'BACK-END', 'FULL-STACK'],
                        autoStart: true,
                        loop: true,
                    }}

                />
            </h1>



        </div >
    )
}