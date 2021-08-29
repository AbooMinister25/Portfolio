import Link from "next/link";
import { animated, useSpring } from "react-spring";
import { useState, useEffect } from "react";

export default function SocialButton() {
    const [isBooped, setIsBooped] = useState(false);

    const style = useSpring({
        display: "inline-block",
        backfaceVisibility: "hidden",
        transform: isBooped ? `rotate(20deg)` : `rotate(0deg)`,
    });

    useEffect(() => {
        if (!isBooped) {
            return;
        }

        const timeoutId = window.setTimeout(() => {
            setIsBooped(false);
        }, 200);

        return () => {
            window.clearTimeout(timeoutId);
        };
    }, [isBooped]);

    const trigger = () => {
        setIsBooped(true);
    };

    return (
        <div className="flex flex-row m-5">
            <animated.span onMouseEnter={trigger} style={style}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-oneblack dark:text-onegrey hover:text-onered dark:hover:text-onered"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 5l7 7-7 7M5 5l7 7-7 7"
                    />
                </svg>
            </animated.span>
            <animated.span onMouseEnter={trigger} style={style}>
                <Link href="https://github.com/AbooMinister25">
                    <a>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="h-6 w-6 mx-6 fill-current text-oneblack dark:text-onegrey hover:text-onered dark:hover:text-onered"
                        >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                </Link>
            </animated.span>
            <animated.span onMouseEnter={trigger} style={style}>
                <Link href="https://twitter.com/RCyclegar">
                    <a>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="h-6 w-6 fill-current text-oneblack dark:text-onegrey hover:text-onered dark:hover:text-onered"
                        >
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                    </a>
                </Link>
            </animated.span>
        </div>
    );
}