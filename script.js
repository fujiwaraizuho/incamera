document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('camera');

    const startCamera = () => {
        navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: 'user' // インカメを指定
            }
        })
        .then((stream) => {
            video.srcObject = stream;
        })
        .catch((error) => {
            console.error(error);
        })
    }

    startCamera();
});