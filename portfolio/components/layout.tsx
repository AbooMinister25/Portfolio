import Meta from "../components/meta";

type Props = {
    children: React.ReactNode;
    pageTitle?: string;
    pageDescription?: string;
};

export default function Layout({
    children,
    pageTitle,
    pageDescription,
}: Props) {
    return (
        <div>
            <Meta pageTitle={pageTitle} pageDescription={pageDescription} />
            <div>{children}</div>
        </div>
    );
}
