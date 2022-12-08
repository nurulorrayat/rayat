window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("navbar").style.opacity = 0.5;
  } else {
    document.getElementById("navbar").style.opacity = 1;
  }
}