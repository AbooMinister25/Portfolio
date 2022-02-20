<script lang="ts">
    import { onMount } from "svelte";

    onMount(() => {
        if (typeof IntersectionObserver !== "undefined") {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    const about = entry.target.querySelector(".about");

                    if (entry.isIntersecting) {
                        about.classList.add("fly-in");
                        observer.unobserve(
                            document.querySelector(".about-wrapper")
                        );
                        return;
                    }

                    about.classList.remove("fly-in");
                });
            });

            observer.observe(document.querySelector(".about-wrapper"));
        }
    });
</script>

<div class="about-wrapper">
    <div class="about">
        <div class="about-header">
            <p>Who <em>am</em> I?</p>
        </div>
        <div class="about-content">
            <div class="about-bio">
                <p>
                    Well, I'm glad you asked. My name is Rayyan Cyclegar, and
                    I'm a freshman in high school. I first started programming
                    in January of 2020, when I decided to take up coding as a
                    hobby in quarantine.
                </p>
                <p>
                    After hacking together a few projects, and experimenting
                    with different tools, I've discovered that my main interests
                    lie with web development and language design. Recently, I've
                    been delving into topics related to DevOps and systems
                    programming. Besides programming, I spend my time gaming,
                    with titles such as Minecraft, Valorant, and Forza Horizon
                    4.
                </p>
            </div>
            <div class="tools-list">
                <p class="tools-header">
                    Here are some of the tools I've worked with
                </p>
                <ul>
                    <li>Next.JS</li>
                    <li>React.JS</li>
                    <li>Svelte</li>
                    <li>FastAPI</li>
                    <li>Rocket</li>
                    <li>TypeScript</li>
                    <li>PostgreSQL</li>
                    <li>Git</li>
                    <li>Docker</li>
                </ul>
            </div>
        </div>
    </div>
</div>
