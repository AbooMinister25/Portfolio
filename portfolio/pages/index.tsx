import Layout from "../components/layout";
import NavMenu from "../components/menu";
import ArrowButton from "../components/arrow-button";
import Typewriter from "typewriter-effect";

const meta = {
    title: "Portfolio",
    description:
        "Rayyan Cyclegar- A 14 year old programmer that codes primarily in Python, Rust, and Typescript",
};

export default function Home() {
    return (
        <Layout pageTitle={meta.title} pageDescription={meta.description}>
            <NavMenu />
            <div className="flex flex-col items-center justify-center m-12">
                <h1 className="text-6xl font-medium text-azure m-5">
                    {" "}
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString("Hi.").start();
                        }}
                    />
                </h1>
                <p className="text-3xl text-center">
                    I'm Rayyan Cyclegar, a 14 year old programmer.
                </p>
                <p className="text-3xl text-center m-3">
                    I program in <span className="text-pyyel">Python</span>,
                    <span className="text-rustorange"> Rust</span>, and
                    <span className="text-tsblue"> Typescript</span>
                </p>
                <ArrowButton target="#"/>
            </div>
        </Layout>
    );
}
