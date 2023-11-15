document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('container');
    const startButton = document.getElementById('startButton');
    const camera = document.getElementById('camera');
    const textArea = document.getElementById('textArea');

    startButton.addEventListener('click', function() {
        navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } })
            .then(function (stream) {
                camera.srcObject = stream;
                camera.style.display = 'block';
                startButton.style.display = 'none';
                container.style.backgroundColor = 'white';
                textArea.style.display = 'block';
            })
            .catch(function (error) {
                console.error("メディアデバイスの取得に失敗しました。", error);
            });
    });
});