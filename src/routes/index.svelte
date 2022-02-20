<script lang="ts">
    import Header from "$lib/Header.svelte";
    import About from "$lib/About.svelte";
    import Projects from "$lib/Projects.svelte";
</script>

<div class="container">
    <Header />
    <About visible={true} />
    <Projects />
</div>