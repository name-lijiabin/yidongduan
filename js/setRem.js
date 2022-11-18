var flg = true;
function setRem() {
    if (flg) {
        flg = false;
        var ui_w = 375;
        var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
        clientWidth = clientWidth > 625 ? 625 : clientWidth;
        clientWidth = clientWidth < 300 ? 300 : clientWidth;
        var html_ = document.getElementsByTagName('html')[0];
        html_.style.fontSize = (clientWidth / ui_w) * 10 + 'px';
        setTimeout(function () {
            flg = true;
        }, 300)
    }
}

window.onresize = setRem;
window.onload = setRem;
