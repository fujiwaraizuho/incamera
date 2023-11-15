document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('startButton');
    const camera = document.getElementById('camera');

    startButton.addEventListener('click', function() {
        navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } })
            .then(function (stream) {
                camera.srcObject = stream;
                camera.style.display = 'block';
                startButton.style.display = 'none';
            })
            .catch(function (error) {
                console.error("メディアデバイスの取得に失敗しました。", error);
            });
    });
});