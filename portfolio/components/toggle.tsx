import { useState } from "react";
import { motion } from "framer-motion";

type Props = {
    toggle: () => void;
    open: boolean;
};

export default function MenuToggle({ toggle, open }: Props) {
    const [menuOpen, setMenuOpen] = useState(open);
    const Open = ({ ...props }) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#61AFEF"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>
        );
    };

    const Close = ({ ...props }) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#282C34"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        );
    };

    return (
        <button
            onClick={() => {
                toggle();
                setMenuOpen(!menuOpen);
            }}
        >
            {menuOpen ? (
                <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 90 }}
                    transition={{ type: "tween", duration: 0.15 }}
                >
                    <Close className="w-6 h-6 stroke-current text-green" />
                </motion.div>
            ) : (
                <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: menuOpen ? 90 : 0 }}
                    transition={{ type: "tween", duration: 0.15 }}
                >
                    <Open className="w-6 h-6" />
                </motion.div>
            )}
        </button>
    );
}
