'use strict';

const handler = async (event) => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: 'user'
            }
        });

        const video = document.getElementById('video');
        video.srcObject = stream;
    } catch (err) {
        //
    }
}

document.addEventListener('DOMContentLoaded', (event) => handler(event));