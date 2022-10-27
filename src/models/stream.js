export default {
    requestScreen,
    requestWebcam,
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
    const opt = {
        video: true,
        audio: false, // disable for demo
    }
    const stream = await navigator.mediaDevices.getUserMedia(opt)
    return stream
}
