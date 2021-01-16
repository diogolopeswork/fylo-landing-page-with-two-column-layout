// $(window).on('load', function() {
//     $(window).scroll(function() {
//         const windowBottom = $(this).scrollTop() + $(this).innerHeight();
//         $(".fade").each(function() {
//             const objectBottom = $(this).offset().top + $(this).outerHeight();

//             if(objectBottom < windowBottom) {
//                 if($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
//             } else {
//                 if($(this).css("opacity")==1) {$(this).fadeTo(500, 0);}
//             }
//         });
//     }).scroll();
// });

//################# Hero Anim ##############
const logo = document.getElementById('logo');
const nav = document.getElementById('nav');
const title = document.getElementById('title');
const content = document.getElementById('content');
const email = document.getElementById('email');
const button = document.getElementById('button');
const intro = document.getElementById('intro');

const tl = new TimelineMax();

tl.fromTo(
    logo,
    1.3,
    { x: '1500%' },
    { x: '0%', ease: Power2.easeInOut }
)
    .fromTo(
        nav,
        1.3,
        { x: '-1500%' },
        { x: '0%', ease: Power2.easeInOut }
    )

    .fromTo( title, 2, { y: '1500%' }, { y: '0%', ease: Power2. easeInOut}, '-=2')
    .fromTo( content, 2, { y: '-1800%' }, { y: '0%', ease: Power2. easeInOut}, '-=2')
    .fromTo( email, 2, { x: '1500%' }, { x: '0%', ease: Power2. easeInOut}, '-=2')
    .fromTo( button, 2, { x: '-1500%' }, { x: '0%', ease: Power2. easeInOut}, '-=2')
    .fromTo( intro, 2, { y: '1500%' }, { y: '0%', ease: Power2. easeInOut}, '-=2')
