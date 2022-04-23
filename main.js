const mainTopInfo = document.getElementById("main-top-info");

window.onscroll = function () {
  let scrollValue = window.pageYOffset;
  let scrollTop = mainTopInfo.getBoundingClientRect().top + scrollValue;
  let windowHeight = window.innerHeight;
  let value = 400;
  if (scrollValue > scrollTop - windowHeight + value) {
    //   mainTopInfo.classList.remove("main-top-info")
    mainTopInfo.classList.add("backColor");
  }
};
