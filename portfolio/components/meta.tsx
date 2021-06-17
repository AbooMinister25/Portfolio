import Head from "next/head";

type Props = {
    pageTitle?: string;
    pageDescription?: string;
};

export default function Meta({ pageTitle, pageDescription }: Props) {
    return (
        <Head>
            <meta charSet="utf-8" />
            <title>{`${pageTitle}`}</title>
            <meta name="author" content="Rayyan Cyclegar" />
            <meta name="description" content={`${pageDescription}`}></meta>
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            <meta property="og:image" content="/Logo.jpeg" />
            <meta
                property="og:description"
                content="Rayyan Cyclegar's profile website, which showcases a few of his recent projects, ways to contact his, some details about him, and his blog."
            />
            <meta property="og:title" content="Rayyan Cyclegar's Profile" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Rayyan Cyclegar's Portfolio" />
            <meta
                name="twitter:description"
                content="Rayyan Cyclegar's Portfolio website, which showcases a few of his recent projects, ways to contact his, some details about him, and his blog."
            />
            <meta name="twitter:image" content="/Logo.jpeg" />
        </Head>
    );
}
