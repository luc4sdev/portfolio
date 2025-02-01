import { useEffect, useState } from "react";
import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";
import { Progress } from "../components/Progress/Progress";

export default function Index() {

    const [time, setTime] = useState(false)
    const [op, setOp] = useState(true)

    useEffect(() => {

        setTimeout(() => {
            setOp(false)
        }, 1500)

    }, [])

    useEffect(() => {

        setTimeout(() => {
            setOp(true)
            setTime(true)
        }, 2000)

    }, [])
    return (
        <div className={`h-full flex flex-col justify-center items-center overflow-y-auto transition-opacity duration-1000 ${op ? 'opacity-100' : 'opacity-0'}`}>

            {time ? (
                <>
                    <Header />
                    <Main />
                </>
            )
                :
                (
                    <div className="w-screen h-screen flex justify-center items-center">
                        <Progress />
                    </div>
                )}
        </div>
    )
}