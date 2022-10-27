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

    // firefox always call suspend when loaded. chrome/edge doesnt
    video.addEventListener('abort', () => {
        video.srcObject = null
        onStop()
    })

    // add listeners to all tracks of the video
    const tracks = video.srcObject.getTracks()
    for (const track of tracks) {
        track.addEventListener('ended', () => {
            video.srcObject = null
            onStop()
        })
    }
}

function stop(video) {
    const tracks = video.srcObject.getTracks()
    for (const track of tracks) {
        track.stop()
    }

    video.srcObject = null
}

// function debug(ele) {
//     ele.addEventListener('suspend', () => {
//         console.log('debug:suspend')
//     })
//     ele.addEventListener('stop', () => {
//         console.log('debug:stop')
//     })
//     ele.addEventListener('pause', () => {
//         console.log('debug:pause')
//     })
//     ele.addEventListener('ended', () => {
//         console.log('debug:ended')
//     })
//     ele.addEventListener('abort', () => {
//         console.log('debug:abort')
//     })
//     ele.addEventListener('stalled', () => {
//         console.log('debug:stalled')
//     })
// }
