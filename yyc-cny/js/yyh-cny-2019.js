$(document).ready(function() {

    $('.event-link-button').on('click', function () {
        var answerHeight = $(this).parents('.event-link').next('.event-fold').children('.fold-answer').height() + 80;
        $('.event-fold').height() > 0 ? $('.event-fold').css('max-height', 0) : $('.event-fold').css('max-height', answerHeight);
    });

    window.addEventListener("scroll", function (event) {
        // 获取滚轮滚动的距离，适配所有的浏览器
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        var getLayer1 = document.getElementsByClassName("parallax");
        var layer, speed, yPosition;
        for (var i = 0; i < getLayer1.length; i++) {
            layer = getLayer1[i];
            speed = layer.getAttribute('data-speed');
            yPosition = -(scrollTop * speed / 100);
            layer.setAttribute('style', 'transform: translate3d(0px, ' + yPosition + 'px, 0px)');
        }
    });

});
