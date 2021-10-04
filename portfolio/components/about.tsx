const Fade = require("react-reveal/Fade");

export default function About() {
    return (
        <div className="flex flex-col w-full content-center justify-center text-center md:text-left m-10">
            <div>
                <Fade right>
                    <h1 className="flex justify-center text-5xl font-medium text-oneblue">
                        Who am I?
                    </h1>
                </Fade>
            </div>
            <div className="flex flex-row justify-center">
                <Fade left>
                    <div className="text-left text-lg md:text-xl font-normal justify-start dark:text-onegrey m-8 shadow-lg p-5 md:p-10 max-w-3xl">
                        <p>
                            Well, I'm glad you asked, my name is Rayyan
                            Cyclegar. I'm a freshman in high school, and I first
                            started programming in January of 2020. My main
                            programming interests are in web development,
                            language design, and systems programming. Besides
                            programming, I enjoy playing games such as Valorant
                            and Minecraft, or hanging around with my friends.
                        </p>
                        <br />
                        <p>
                            I enjoy working with a team, as well as contributing to
                            open source projects. I've also taken an interest in
                            DevOps.
                        </p>
                    </div>
                </Fade>
                <Fade bottom>
                    <img
                        src={"/Code typing-bro.svg"}
                        alt={"Code typing image"}
                        width={500}
                        height={50}
                        className="lg:inline-flex hidden"
                    />
                </Fade>
            </div>
        </div>
    );
}
