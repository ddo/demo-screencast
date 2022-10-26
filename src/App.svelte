<script>
    import Stream from '@/models/stream'

    let videoScreen
    let isVideoScreenPlaying = false

    async function requestScreen() {
        const stream = await Stream.requestScreen()

        videoScreen.srcObject = stream

        videoScreen.addEventListener('loadedmetadata', () => {
            videoScreen.play()
            isVideoScreenPlaying = true
        })

        videoScreen.addEventListener('suspend', () => {
            isVideoScreenPlaying = false
        })
    }
</script>

<div class="hero min-h-screen">
    <!-- <video src="https://www.w3schools.com/howto/rain.mp4" /> -->
    <video bind:this={videoScreen} />

    {#if !isVideoScreenPlaying}
        <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
                <h1 class="mb-5 text-5xl font-bold">Screencast Demo</h1>
                <p class="mb-5 italic">
                    Demo by <a
                        class="link"
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/ddo">Ddo</a
                    >
                </p>

                <button on:click={requestScreen} class="btn btn-ghost h-fit">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-20 h-20"
                    >
                        <path
                            d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    {/if}
</div>
