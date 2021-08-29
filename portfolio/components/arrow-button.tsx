import Link from "next/link";

type Props = {
    target: string;
};

export default function ArrowButton({ target }: Props) {
    return (
        <div className="flex justify-center mt-12">
            <Link href={`${target}`}>
                <a className="hover:text-gray-600 font-medium stroke-current dark:hover:text-onered dark:text-onegrey animate-bounce">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-20 w-20"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </a>
            </Link>
        </div>
    );
}
