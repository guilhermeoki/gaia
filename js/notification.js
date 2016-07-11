var intervalo = 30 * 1000;//30 segundos

//essa funcao jah seta o timer. A gente guarda a variavel para poder limpar o timer, se quiser.
var myTimer = window.setInterval(notifyMe, intervalo);

// request permission on page load
document.addEventListener('DOMContentLoaded', function () {
    console.log('ok');
    if (Notification.permission !== "granted"){
        Notification.requestPermission();
    }
    // timerNotification();
});

function notifyMe() {
    if (!Notification) {
        alert('Desktop notifications not available in your browser. Try Chromium.'); 
        return;
    }

    if (Notification.permission !== "granted"){
        Notification.requestPermission();
    }
    else {
        var notification = new Notification('Ei!! Não se esquece de regar seu alecrim!!! :)', {
        icon: 'http://statick4.bseller.com.br/product/74507/694485_5104_Dancing_Groot_GLAM_1024x1024.png',
        body: "Hello Gaia, that's my first notification test!",
        });

        // notification.onclick = function () {
        // window.open("http://foo.com/bar");      
        // };
    }
}  