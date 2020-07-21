$(document).ready(function (){


//  scroll時加入動畫(全站可套，目前有用於：首頁品牌區)
    jQuery(function($) {

        // Function which adds the 'animated' class to any '.animatable' in view
        var doAnimations = function() {

            // Calc current offset and get all animatables
            var offset = $(window).scrollTop() + $(window).height(),
                $animatables = $('.animatable');

            // Unbind scroll handler if we have no animatables
            // if ($animatables.length == 0) {
            //   $(window).off('scroll', doAnimations);
            // }

            // Check all animatables and animate them if necessary
            $animatables.each(function(i) {
                var $animatable = $(this);
                if (($animatable.offset().top + $animatable.height() - 220) < offset) {
                    $animatable.addClass('animated');
                }
            });

        };

        // Hook doAnimations on scroll, and trigger a scroll
        $(window).on('scroll', doAnimations);
//            $(window).trigger('scroll');

    });



    //背景金粉

    var w = window.screen.width,
        h = document.body.clientHeight,
        canvas = document.getElementById('golden'),
        ctx = canvas.getContext('2d'),
        rate = 50,
        arc = 1500,
        time,
        count,
        size = 2,
        speed = 3,
        globalAlpha = 0,
        lights = new Array,
        opcaity = Math.random(),
        colors = ['#eedc70','#eedc70','#fff2c7'];


    canvas.setAttribute('width',w);
    canvas.setAttribute('height',h);


    function init() {
        time = 0;
        count = 0;
        // starPic.src="../img/snow.png";

        for(var i = 0; i < arc; i++) {
            lights[i] = {
                x: Math.ceil(Math.random() * w),
                y: Math.ceil(Math.random() * h),
                toX: Math.random() * 1 + 0,
                toY: Math.random() * 5 + 1,
                c: colors[Math.floor(Math.random()*colors.length)],
                size: Math.random() * size,
                blur: Math.random() * 10,
                increment: Math.random()*0.05,
                opacity: Math.random(),
                factor: 1,
            }

            // snow[i] = {
            //     x: Math.ceil(Math.random() * w),
            //     y: Math.ceil(Math.random() * h),
            //     toX: Math.random() * 1 + 0,
            //     toY: Math.random() * 5 + 1,
            //     size: Math.random() * size,
            // }
        }
    }

    function bubble() {
        ctx.clearRect(0,0,w,h);

        for(var i = 0; i < arc; i++) {
            var li = lights[i];
            if( li.opacity > 1) {
                li.factor = -1;
            }else if( li.opacity <=0 ) {
                li.factor = 1;
            }
            li.opacity = li.opacity + li.factor * li.increment;
            ctx.globalAlpha = li.opacity;
            ctx.beginPath();
            ctx.arc(li.x,li.y,li.size,0,Math.PI*2,false);
            ctx.fillStyle = li.c;
            ctx.fill();


            li.x = li.x + li.toX * (time * 0.05);
            li.y = li.y + li.toY * (time * 0.05);
            // li.globalAlpha = Math.random() * 0;


            // ctx.globalAlpha = 1;
            // ctx.drawImage(starPic,0,0,100,100);

            if(li.x > w) { li.x = 0; }
            if(li.y > h) { li.y = 0; }
            if(li.x < 0) { li.x = w; }
            if(li.y < 0) { li.y = h; }


        }
        if(time < speed) {
            time++;
        }
        timerID = setTimeout(bubble,1000/rate);
    }
    init();
    bubble();

});