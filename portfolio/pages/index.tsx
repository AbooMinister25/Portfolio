import Layout from "../components/layout";
import NavMenu from "../components/navbar";
import About from "../components/about";
import Header from "../components/header";

const meta = {
    title: "Portfolio",
    description:
        "Rayyan Cyclegar- A 14 year old programmer that codes primarily in Python, Rust, and Typescript",
};

export default function Home() {
    return (
        <Layout pageTitle={meta.title} pageDescription={meta.description}>
            <NavMenu />
            <Header />
            <About />
        </Layout>
    );
}
