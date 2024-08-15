// // overlay

// function openNav1() {
//     document.getElementById("myNav1").style.display = "block";
// }

// function openNav2() {
//     document.getElementById("myNav2").style.display = "block";
// }

// function openNav3() {
//     document.getElementById("myNav3").style.display = "block";
// }




// function closeNav1() {
//     document.getElementById("myNav1").style.display = "none";
// }

// function closeNav2() {
//     document.getElementById("myNav2").style.display = "none";
// }

// function closeNav3() {
//     document.getElementById("myNav3").style.display = "none";
// }






/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//         document.getElementById("navbar").style.top = "0";
//     } else {
//         document.getElementById("navbar").style.top = "-80px";
//     }
//     prevScrollpos = currentScrollPos;
// }








// if ($('.overlay').is(':visible')) {
//     document.getElementsByClassName("nav").style.display = "none";
// } else {
//     document.getElementsByClassName("nav").style.display = "block";
// }


// if ($('.overlay').is(':invisible')) {
//     document.getElementsByClassName("nav").style.display = "block";
// } else {
//     document.getElementsByClassName("nav").style.display = "none";
// }







// if ($(window).width() > 992) {
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 40) {
//             $('#navbar').addClass("fixed-top");
//             // add padding top to show content behind navbar
//             $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
//         } else {
//             $('#navbar').removeClass("fixed-top");
//             // remove padding top from body
//             $('body').css('padding-top', '0');
//         }
//     });
// }











// video

var vid1 = document.getElementById("video1");

function playVid1() {
    vid1.play();
}

function pauseVid1() {
    vid1.pause();
}




var vid2 = document.getElementById("video2");

function playVid2() {
    vid2.play();
}

function pauseVid2() {
    vid2.pause();
}



var vid3 = document.getElementById("video3");

function playVid3() {
    vid3.play();
}

function pauseVid3() {
    vid3.pause();
}





var vid4 = document.getElementById("video4");

function playVid4() {
    vid4.play();
}

function pauseVid4() {
    vid4.pause();
}