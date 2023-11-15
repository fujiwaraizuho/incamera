document.addEventListener('DOMContentLoaded', function () {
    const startCameraButton = document.getElementById('startCameraButton');
    const startCountdownButton = document.getElementById('startCountdownButton');
    const countdownElement = document.getElementById('countdown');
    const camera = document.getElementById('camera');

    startCameraButton.addEventListener('click', function() {
        navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } })
            .then(function (stream) {
                camera.srcObject = stream;
                startCameraButton.style.display = 'none';
                startCountdownButton.style.display = 'block'; // PUSHボタンを表示
            })
            .catch(function (error) {
                console.error("メディアデバイスの取得に失敗しました。", error);
            });
    });

    startCountdownButton.addEventListener('click', function() {
        startCountdownButton.style.display = 'none'; // PUSHボタンを隠す
        startCountdown();
    });

    function startCountdown() {
        let countdown = 5;
        countdownElement.textContent = countdown;
        countdownElement.style.display = 'block';

        const countdownInterval = setInterval(function () {
            countdown--;
            countdownElement.textContent = countdown;

            if (countdown <= 0) {
                clearInterval(countdownInterval);
                countdownElement.style.display = 'none';
                camera.style.display = 'block';
            }
        }, 1000);
    }
});