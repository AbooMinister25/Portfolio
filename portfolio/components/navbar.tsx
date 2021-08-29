import Link from "next/link";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import MenuToggle from "../components/toggle";

export default function NavMenu() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div
            className={`${
                menuOpen ? "navopen bg-red" : ""
            } flex overflow-hidden bg-white z-50 min-w-full justify-end bg-oneblack`}
        >
            <div className={`m-3 z-50`}>
                <MenuToggle
                    toggle={() => setMenuOpen(!menuOpen)}
                    open={false}
                />
            </div>
            <Transition
                show={menuOpen}
                enter="transition-opacity duration-100"
                enterFrom="opacity-0"
                enterTo="opacity-100 scale-100"
                className={`${
                    menuOpen ? "navopen" : ""
                } flex flex-col justify-center content-center bg-onered text-4xl md:text-5xl text-oneblack text-center`}
            >
                <div className="flex flex-col justify-center content-center m-auto">
                    <Link href="#">
                        <a className="hover:text-onelblack m-5">About Me</a>
                    </Link>
                    <Link href="#">
                        <a className="hover:text-onelblack m-5">Projects</a>
                    </Link>
                    <Link href="#">
                        <a className="hover:text-onelblack m-5">Contact</a>
                    </Link>
                </div>
            </Transition>
        </div>
    );
}
