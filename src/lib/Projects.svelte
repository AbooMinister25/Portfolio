<script lang="ts">
    import { onMount } from "svelte";

    onMount(() => {
        if (typeof IntersectionObserver !== "undefined") {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    const projects = entry.target.querySelector(".projects");

                    if (entry.isIntersecting) {
                        projects.classList.add("fly-in");
                        observer.unobserve(
                            document.querySelector(".projects-wrapper")
                        );
                        return;
                    }

                    projects.classList.remove("fly-in");
                });
            });

            observer.observe(document.querySelector(".projects-wrapper"));
        }
    });
</script>

<div class="projects-wrapper">
    <div class="projects">
        <div class="projects-header">
            <p>Projects</p>
        </div>
        <div class="projects-list">
            <div class="project-card hvr-float">
                <div>
                    <a
                        target="blank"
                        href="https://github.com/AbooMinister25/Lite"
                        ><p class="card-header">Lite</p></a
                    >
                    <p class="card-description">
                        Lite is a high level and statically typed programming
                        language written in Rust.
                    </p>
                    <p class="card-language"><strong>Rust</strong></p>
                </div>
            </div>
            <div class="project-card hvr-float">
                <div>
                    <a
                        target="blank"
                        href="https://github.com/AbooMinister25/blog"
                        ><p class="card-header">My Blog</p></a
                    >
                    <p class="card-description">
                        My personal blog, with a backend written in Rust, and
                        powered by Rocket and Svelte
                    </p>
                    <p class="card-language">
                        <strong>Rust</strong>, <strong>Svelte</strong>,
                        <strong>TypeScript</strong>
                    </p>
                </div>
            </div>
            <div class="project-card hvr-float">
                <div>
                    <a
                        target="blank"
                        href="https://github.com/AbooMinister25/Lite"
                        ><p class="card-header">Arc</p></a
                    >
                    <p class="card-description">
                        Arc is an ASGI python web framework designed for
                        creating performant web applications
                    </p>
                    <p class="card-language"><strong>Python</strong></p>
                </div>
            </div>
            <div class="project-card hvr-float">
                <div>
                    <a
                        target="blank"
                        href="https://github.com/AbooMinister25/pylauncher"
                        ><p class="card-header">pylauncher</p></a
                    >
                    <p class="card-description">
                        A python launcher and version manager for *NIX systems
                    </p>
                    <p class="card-language"><strong>Python</strong></p>
                </div>
            </div>
        </div>
    </div>
</div>
