import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";

export default function Index() {
    return (
        <div className="h-full flex flex-col justify-center items-center overflow-y-auto">
            <Header />
            <Main />
        </div>
    )
}