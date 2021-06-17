import { useState } from "react";
import { Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function NavMenu() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <div className="container flex md:flex-row m-8 mx-auto justify-between items-center flex-wrap border-indigod border-b border-opacity-50 pb-4">
            <div className="flex justify-start">
                <a href="/" className="hover:text-gray-600">
                    <h1 className="mx-4 text-3xl font-bold">Rayyan</h1>
                </a>
            </div>
            <button onClick={handleMenuToggle} className="mx-4 md:hidden">
                {menuOpen ? (
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                ) : (
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                )}
            </button>
            <Transition
                show={menuOpen}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                className="z-10 origin-top-right transform w-full text-left border-azure flex-col my-4"
            >
                <nav className="shadow-lg rounded-lg mx-4 divide-y divide-azure divide-opacity-50 ring-1 ring-black ring-opacity-5">
                    <a
                        href="#"
                        className="flex flex-row items-center mtext-base font-medium hover:text-gray-600 p-4"
                    >
                        Test1
                    </a>
                    <a
                        href="#"
                        className="block text-base font-medium hover:text-gray-600 p-4"
                    >
                        Test2
                    </a>
                    <a
                        href="#"
                        className="block text-base font-medium hover:text-gray-600 p-4"
                    >
                        Test3
                    </a>
                </nav>
            </Transition>
            <div className="hidden md:flex md:justify-end md:items-center">
                <a
                    href="#"
                    className="text-base font-medium hover:text-gray-600 mx-5"
                >
                    Test1
                </a>
                <a
                    href="#"
                    className="text-base font-medium hover:text-gray-600 mx-5"
                >
                    Test2
                </a>
                <a
                    href="#"
                    className="text-base font-medium hover:text-gray-600 mx-5"
                >
                    Test3
                </a>
            </div>
        </div>
    );
}
