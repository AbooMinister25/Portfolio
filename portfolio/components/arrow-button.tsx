import Image from "next/image";

type Props = {
    target: string;
};

export default function ArrowButton({ target }: Props) {
    return (
        <div className="flex justify-center m-5">
            <a href={`${target}`} className="hover:text-gray-600 font-medium">
                <Image
                    src="/arrow-down.svg"
                    width={115}
                    height={100}
                    alt="Arrow Down"
                />
            </a>
        </div>
    );
}
