//// Swiper
$(function() {
    $('#visual-area').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,

        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        pauseOnDotsHover: true,
        draggable: false,
    });
});

//// 메인비쥬얼 canvas
// (function() {
//   var width, height, largeHeader, canvas, ctx, points, target, animateHeader = true;

//   // Main
//   initHeader();
//   initAnimation();
//   addListeners();

//   function initHeader() {
//     width = window.innerWidth - 17;
//     height = window.innerHeight;
//     target = { x: width / 2, y: height / 2 };

//     largeHeader = document.getElementById('visual-area');
//     largeHeader.style.height = height + 'px';

//     canvas = document.getElementById('slide-canvas');
//     canvas.width = width;
//     canvas.height = height;
//     ctx = canvas.getContext('2d');

//     // create points
//     points = [];
//     for (var x = 0; x < width; x = x + width / 25) {
//       for (var y = 0; y < height; y = y + height / 25) {
//         var px = x + Math.random() * width / 25;
//         var py = y + Math.random() * height / 25;
//         var p = { x: px, originX: px, y: py, originY: py };
//         points.push(p);
//       }
//     }

//     // for each point find the 5 closest points
//     for (var i = 0; i < points.length; i++) {
//       var closest = [];
//       var p1 = points[i];
//       for (var j = 0; j < points.length; j++) {
//         var p2 = points[j]
//         if (!(p1 == p2)) {
//           var placed = false;
//           for (var k = 0; k < 5; k++) {
//             if (!placed) {
//               if (closest[k] == undefined) {
//                 closest[k] = p2;
//                 placed = true;
//               }
//             }
//           }

//           for (var k = 0; k < 5; k++) {
//             if (!placed) {
//               if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
//                 closest[k] = p2;
//                 placed = true;
//               }
//             }
//           }
//         }
//       }
//       p1.closest = closest;
//     }

//     // assign a circle to each point
//     for (var i in points) {
//       var c = new Circle(points[i], 2 + Math.random() * 3, 'rgba(255,255,255,0.3)');
//       points[i].circle = c;
//     }
//   }

//   // Event handling
//   function addListeners() {
//     if (!('ontouchstart' in window)) {
//       window.addEventListener('mousemove', mouseMove);
//     }
//     window.addEventListener('scroll', scrollCheck);
//     window.addEventListener('resize', resize);
//   }

//   function mouseMove(e) {
//     var posx = posy = 0;
//     if (e.pageX || e.pageY) {
//       posx = e.pageX;
//       posy = e.pageY;
//     } else if (e.clientX || e.clientY) {
//       posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
//       posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
//     }
//     target.x = posx;
//     target.y = posy;
//   }

//   function scrollCheck() {
//     if (document.body.scrollTop > height) animateHeader = false;
//     else animateHeader = true;
//   }

//   function resize() {
//     width = window.innerWidth;
//     height = window.innerHeight;
//     largeHeader.style.height = height + 'px';
//     canvas.width = width;
//     canvas.height = height;
//   }

//   // animation
//   function initAnimation() {
//     animate();
//     for (var i in points) {
//       shiftPoint(points[i]);
//     }
//   }

//   function animate() {
//     if (animateHeader) {
//       ctx.clearRect(0, 0, width, height);
//       for (var i in points) {
//         // detect points in range
//         if (Math.abs(getDistance(target, points[i])) < 7000) {
//           points[i].active = 0.3;
//           points[i].circle.active = 0.6;
//         } else if (Math.abs(getDistance(target, points[i])) < 50000) {
//           points[i].active = 0.1;
//           points[i].circle.active = 0.3;
//         } else if (Math.abs(getDistance(target, points[i])) < 140000) {
//           points[i].active = 0.02;
//           points[i].circle.active = 0.1;
//         } else {
//           points[i].active = 0;
//           points[i].circle.active = 0;
//         }

//         drawLines(points[i]);
//         points[i].circle.draw();
//       }
//     }
//     requestAnimationFrame(animate);
//   }

//   function shiftPoint(p) {
//     TweenLite.to(p, 1 + 1 * Math.random(), {
//       x: p.originX - 50 + Math.random() * 100,
//       y: p.originY - 50 + Math.random() * 100,
//       ease: Circ.easeInOut,
//       onComplete: function() {
//         shiftPoint(p);
//       }
//     });
//   }

//   // Canvas manipulation
//   function drawLines(p) {
//     if (!p.active) return;
//     for (var i in p.closest) {
//       ctx.beginPath();
//       ctx.moveTo(p.x, p.y);
//       ctx.lineTo(p.closest[i].x, p.closest[i].y);
//       ctx.strokeStyle = 'rgba(255,255,255,' + p.active + ')';
//       ctx.stroke();
//     }
//   }

//   function Circle(pos, rad, color) {
//     var _this = this;

//     // constructor
//     (function() {
//       _this.pos = pos || null;
//       _this.radius = rad || null;
//       _this.color = color || null;
//     })();

//     this.draw = function() {
//       if (!_this.active) return;
//       ctx.beginPath();
//       ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
//       ctx.fillStyle = 'rgba(255,255,255,' + _this.active + ')';
//       ctx.fill();
//     };
//   }

//   // Util
//   function getDistance(p1, p2) {
//     return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
//   }
// })();


//TIMESTAMP
(function() {
    setInterval(function() {
        var now, timestamp;
        timestamp = new Date(1987, 5, 30);
        now = new Date();
        return $('#time').text(((now - timestamp) / 1000).toFixed(0));
    }, 1000);
}).call(this);

$(window).on('resize', function() {
    reinit();
});

//CANVAS
$(function() {
    var canvas = document.querySelector('canvas'),
        ctx = canvas.getContext('2d'),
        color = '#ffffff';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.display = 'block';
    ctx.fillStyle = color;
    ctx.lineWidth = .1;
    ctx.strokeStyle = color;

    var mousePosition = {
        x: 30 * canvas.width / 100,
        y: 30 * canvas.height / 100
    };

    var dots = {
        nb: 800,
        distance: 100,
        d_radius: 100,
        array: []
    };

    function Dot() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.vx = -2 + Math.random() * 4;
        this.vy = -2 + Math.random() * 4;

        this.radius = Math.random();
    }

    Dot.prototype = {
        create: function() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fill();
        },

        animate: function() {
            for (i = 0; i < dots.nb; i++) {

                var dot = dots.array[i];

                if (dot.y < 0 || dot.y > canvas.height) {
                    dot.vx = dot.vx;
                    dot.vy = -dot.vy;
                } else if (dot.x < 0 || dot.x > canvas.width) {
                    dot.vx = -dot.vx;
                    dot.vy = dot.vy;
                }
                dot.x += dot.vx;
                dot.y += dot.vy;
            }
        },

        line: function() {
            for (i = 0; i < dots.nb; i++) {
                for (j = 0; j < dots.nb; j++) {
                    i_dot = dots.array[i];
                    j_dot = dots.array[j];

                    if ((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > -dots.distance && (i_dot.y - j_dot.y) > -dots.distance) {
                        if ((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > -dots.d_radius && (i_dot.y - mousePosition.y) > -dots.d_radius) {
                            ctx.beginPath();
                            ctx.moveTo(i_dot.x, i_dot.y);
                            ctx.lineTo(j_dot.x, j_dot.y);
                            ctx.stroke();
                            ctx.closePath();
                        }
                    }
                }
            }
        }
    };

    function createDots() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (i = 0; i < dots.nb; i++) {
            dots.array.push(new Dot());
            dot = dots.array[i];

            dot.create();
        }

        dot.line();
        dot.animate();
    }

    $('canvas').on('mousemove mouseleave', function(e) {
        if (e.type == 'mousemove') {
            mousePosition.x = e.pageX;
            mousePosition.y = e.pageY;
        }
        if (e.type == 'mouseleave') {
            mousePosition.x = canvas.width / 2;
            mousePosition.y = canvas.height / 2;
        }
    });
    setInterval(createDots, 1000 / 30);
});