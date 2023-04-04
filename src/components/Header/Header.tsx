import { BasicMenu } from "./BasicMenu/BasicMenu";
import { Navbar } from "./Navbar/Navbar";
import { Profile } from "./Profile/Profile";

export function Header() {
    return (
        <header className="fixed top-0 z-10 w-full h-24 px-4 md:px-14 bg-neutral-800 flex justify-between items-center">
            <Profile />
            <div className="hidden md:block">
                <Navbar />
            </div>

            <div className="md:hidden">
                <BasicMenu />
            </div>
        </header>
    )
}