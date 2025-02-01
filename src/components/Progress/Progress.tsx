import { useEffect, useState } from "react"
import Typewriter from 'typewriter-effect';

export function Progress() {

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (progress < 100) {
                setProgress(prevProgress => prevProgress + 1);
            }
        }, 15);
        return () => clearInterval(interval);
    }, [progress]);


    return (
        <div className="w-1/3">
            <p className="text-slate-50 text-center text-xl md:text-3xl font-semibold mb-3">
                <Typewriter
                    options={{
                        strings: ['Connecting...'],
                        autoStart: true,
                        loop: false,
                        delay: 10
                    }}

                />
            </p>
            <div
                style={{ width: `${progress}%` }}
                className="bg-sky-500 rounded-md p-[1px] text-center text-white text-sm font-semibold"
            >

            </div>
        </div>
    )
}