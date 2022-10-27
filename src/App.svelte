<script>
    import Stream from '@/models/stream'
    import Video from '@/models/video'

    import Navbar from '@/components/Navbar.svelte'

    let screenEle, webcamEle
    let isScreenPlaying = false
    let isWebcamPlaying = false

    async function requestScreen() {
        const stream = await Stream.requestScreen()

        Video.init(
            screenEle,
            stream,
            () => {
                // onReady
                isScreenPlaying = true
            },
            () => {
                // onStop
                isScreenPlaying = false
            }
        )
    }

    function stopScreen() {
        Video.stop(screenEle)
        isScreenPlaying = false
    }

    async function requestWebcam() {
        const stream = await Stream.requestWebcam()

        Video.init(
            webcamEle,
            stream,
            () => {
                // onReady
                isWebcamPlaying = true

                // mute webcam for demo
                // webcamEle.muted = true
            },
            () => {
                // onStop
                isWebcamPlaying = false
            }
        )
    }

    function stopWebcam() {
        Video.stop(webcamEle)
        isWebcamPlaying = false
    }
</script>

<Navbar>
    <!-- stop screen -->
    {#if isScreenPlaying}
        <button on:click={stopScreen} class="btn btn-ghost btn-circle">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-5 w-5"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M12 18.75H4.5a2.25 2.25 0 01-2.25-2.25V9m12.841 9.091L16.5 19.5m-1.409-1.409c.407-.407.659-.97.659-1.591v-9a2.25 2.25 0 00-2.25-2.25h-9c-.621 0-1.184.252-1.591.659m12.182 12.182L2.909 5.909M1.5 4.5l1.409 1.409"
                />
            </svg>
        </button>
    {/if}

    <!-- stop webcam -->
    {#if isWebcamPlaying}
        <button on:click={stopWebcam} class="btn btn-ghost btn-circle">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-5 w-5"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
            </svg>
        </button>
    {/if}

    <!-- info -->
    <!-- <a -->
    <!--     href="https://github.com/ddo/demo-screencast" -->
    <!--     target="_blank" -->
    <!--     rel="noreferrer" -->
    <!--     class="btn btn-ghost btn-circle" -->
    <!-- > -->
    <!--     <svg -->
    <!--         xmlns="http://www.w3.org/2000/svg" -->
    <!--         fill="none" -->
    <!--         viewBox="0 0 24 24" -->
    <!--         stroke-width="1.5" -->
    <!--         stroke="currentColor" -->
    <!--         class="h-5 w-5" -->
    <!--     > -->
    <!--         <path -->
    <!--             stroke-linecap="round" -->
    <!--             stroke-linejoin="round" -->
    <!--             d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" -->
    <!--         /> -->
    <!--     </svg> -->
    <!-- </a> -->
</Navbar>

<div class="hero min-h-screen">
    <video bind:this={screenEle} />

    {#if !isScreenPlaying}
        <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
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

    <video
        bind:this={webcamEle}
        class="absolute bottom-5 left-5 w-60 object-cover aspect-square rounded-full"
    />

    {#if !isWebcamPlaying}
        <button
            on:click={requestWebcam}
            class="absolute bottom-5 left-5 w-32 object-cover aspect-square rounded-full"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-full"
            >
                <path
                    fill-rule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    clip-rule="evenodd"
                />
            </svg>
        </button>
    {/if}
</div>
