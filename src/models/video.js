export default {
    init,
    stop,
}

function init(video, stream, onReady, onStop) {
    video.srcObject = stream

    video.addEventListener('loadedmetadata', () => {
        video.play()
        onReady()
    })

    video.addEventListener('suspend', () => {
        video.srcObject = null
        onStop()
    })

    video.addEventListener('stop', () => {
        video.srcObject = null
        onStop()
    })
}

function stop(video) {
    const tracks = video.srcObject.getTracks()
    tracks.forEach((track) => track.stop())
    video.srcObject = null
}
