var tu_ = document.getElementsByClassName('tu')[0]
var mb_ = document.getElementsByClassName('mb')[0]
console.log(typeof tu_);
tu_.addEventListener('click', function () {
    // mb_.style.display = 'none'
    mb_.parentNode.removeChild(mb_)
})