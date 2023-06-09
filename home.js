window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    var navarea = document.querySelector(".logonit_nav_area");
    var videoHeight = document.querySelector("video").offsetHeight;
    /* If you scroll past the video, add the "scroll_fixed" class to the navarea */
    if (document.body.scrollTop > videoHeight || document.documentElement.scrollTop > videoHeight) {
        navarea.classList.add("scroll_fixed");
    } else { /* Else, remove it */
        navarea.classList.remove("scroll_fixed");
    }
}
