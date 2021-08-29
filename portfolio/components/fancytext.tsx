import { motion } from "framer-motion";

type Props = {
    text: string;
};

export default function FancyText({ text }: Props) {
    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.1,
            },
        },
    };

    const letter = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <motion.span
            variants={sentence}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            {text.split("").map((char, index) => {
                return (
                    <motion.span
                        key={char + "-" + index}
                        variants={letter}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {char}
                    </motion.span>
                );
            })}
        </motion.span>
    );
}
