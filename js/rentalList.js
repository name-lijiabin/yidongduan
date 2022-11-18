// 要点击的内容
var dj = document.querySelectorAll('.dj')
// 箭头上升
var t_s = document.querySelectorAll('.t_s')
console.log(t_s);
// 找到点击之后的元素
var lis = document.querySelectorAll('.lis')
var type = document.getElementsByClassName('type')[0];
var mb = document.getElementsByClassName('mb')[0];
for (var i = 0; i <= dj.length; i++) {
    dj[i].setAttribute('index', i);
    dj[i].onclick = function () {
        type.style.position = 'absolute';
        type.style.width = '100%'
        type.style.top = '0';
        type.style.left = '0';
        var index = this.getAttribute('index');
        for (var j = 0; j < dj.length; j++) {
            dj[j].className = '';
            dj[index].className = 'ys';
        }
        for (var m = 0; m < t_s.length; m++) {
            t_s[m].className = 't_s';
            t_s[index].className = 'bs';
        }

        for (var k = 0; k < lis.length; k++) {
            lis[k].style.display = 'none';
            lis[index].style.display = 'block';
            mb.style.display = 'block';
            mb.onclick = function () {
                mb.style.display = 'none';
                lis[index].style.display = 'none';
                dj[index].className = '';
                t_s[index].className = '';
                type.style.position = '';
            }
        }
    }
}

