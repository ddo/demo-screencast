<script>
    import Stream from '@/models/stream'

    async function enumerateDevices() {
        const res = await navigator.mediaDevices.enumerateDevices()
        console.log(res)
    }

    async function getUserMedia() {
        const opt = { audio: true, video: true }
        const stream = await navigator.mediaDevices.getUserMedia(opt)
        console.log(stream)
        const video = Stream.createVideo(stream)
        document.body.appendChild(video)
    }

    async function getDisplayMedia() {
        const opt = {
            video: {
                cursor: 'always',
            },
            audio: true,
        }

        const stream = await navigator.mediaDevices.getDisplayMedia(opt)
        console.log(stream)
        const video = Stream.createVideo(stream)
        document.body.appendChild(video)
    }
</script>

<button on:click={enumerateDevices} class="btn content-center">
    enumerateDevices
</button>

<button on:click={getUserMedia} class="btn content-center">
    getUserMedia
</button>

<button on:click={getDisplayMedia} class="btn content-center">
    getDisplayMedia
</button>
