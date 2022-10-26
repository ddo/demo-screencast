<script>
    import Capture from './components/Capture.svelte'
</script>

<div class="hero min-h-screen">
    <div class="hero-overlay bg-opacity-60" />
    <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">Screencast Demo</h1>
            <p class="mb-5 italic">
                Demo by <a href="https://github.com/ddo">Ddo</a>
            </p>
            <button class="btn btn-primary">Get Started</button>
        </div>
    </div>

    <video src="https://www.w3schools.com/howto/rain.mp4" />
</div>
