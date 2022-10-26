export default {
    requestScreen,
    requestWebcam,
    createVideo,
}

async function requestScreen() {
    const opt = {
        video: {
            cursor: 'always',
        },
        audio: true,
    }

    const stream = await navigator.mediaDevices.getDisplayMedia(opt)
    return stream
}

async function requestWebcam() {
    const opt = { audio: true, video: true }
    const stream = await navigator.mediaDevices.getUserMedia(opt)
    return stream
}

function createVideo(stream) {
    const video = document.createElement('video')
    video.srcObject = stream
    video.onloadedmetadata = () => {
        video.play()
    }

    return video
}
