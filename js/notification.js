// request permission on page load
document.addEventListener('DOMContentLoaded', function () {
    console.log('ok');
    if (Notification.permission !== "granted")
        Notification.requestPermission();
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
        var notification = new Notification('Hello world title', {
        icon: 'http://statick4.bseller.com.br/product/74507/694485_5104_Dancing_Groot_GLAM_1024x1024.png',
        body: "Hello Gaia, that's my first notification test!",
        });

        // notification.onclick = function () {
        // window.open("http://stackoverflow.com/a/13328397/1269037");      
        // };
    }
}  