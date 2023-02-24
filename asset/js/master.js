let _li = document.querySelectorAll("._acc>li");
for (let i = 0; i <= _li.length; i++) {
  let temp = document.querySelector(
    "li:nth-of-type(" + (i + 1) + ") p"
  ).clientHeight;
  _li[i].setAttribute("data-height", temp);
  document.querySelector("li:nth-of-type(" + (i + 1) + ") p").style.height =
    "0px";
}
function para(self, num) {
  for (i = 1; i <= _li.length; i++) {
    if (i != num) {
      document.querySelector("li:nth-of-type(" + i + ") p").style.height =
        "0px";
      _li[i - 1].setAttribute("data-d", "off");
      document.querySelector("li:nth-of-type(" + i + ") span").innerHTML =
        '<i class="bi bi-arrow-down text-success"></i>';
    }
  }
  let status = self.getAttribute("data-d");
  let _all = self.children;
  let _row1 = _all[0].children;
  let _row2 = _all[1].children;
  let _h = self.getAttribute("data-height");
  if (status == "off") {
    _row1[1].innerHTML = '<i class="bi bi-x text-danger"></i>';
    self.setAttribute("data-d", "on");
    _row2[0].style.height = _h + "px";
  } else {
    _row1[1].innerHTML = '<i class="bi bi-arrow-down text-success"></i>';
    self.setAttribute("data-d", "off");
    _row2[0].style.height = "0px";
  }
}
