const Fade = require("react-reveal/Fade");

export default function About() {
    return (
        <div className="flex flex-col w-full content-center justify-center text-center md:text-left">
            <div>
                <Fade right>
                    <h1 className="flex justify-center text-5xl font-medium text-oneblue text-center md:text-left">
                        Who am I?
                    </h1>
                </Fade>
            </div>
            <div className="flex justify-center shadow-xl">
                <Fade left>
                    <div className="text-left text-lg md:text-xl font-normal justify-start dark:text-onegrey m-8 shadow-xl p-5 md:p-10 border-t-8 border-black max-w-3xl">
                        <p>
                            Well, I'm glad you asked, my name is Rayyan
                            Cyclegar, and I'm a 9th grade high school freshman.
                            I started programming early January, 2020, where I
                            started with Python. My main interests are in Web
                            Development and Language Design. In my free time,
                            besides coding I enjoy gaming and talking with
                            friends.
                        </p>
                        <br />
                        <p>
                            I enjoy working on team projects, and contributing
                            to open source. I've started to delve further into
                            DevOps, and lower level programming concepts.
                        </p>
                    </div>
                </Fade>
            </div>
        </div>
    );
}
