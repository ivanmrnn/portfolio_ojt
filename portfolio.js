
var tab1 = document.getElementById('content-1');
var tab2 = document.getElementById('content-2');
function showTab(e) {

  if (e == 1) {
    tab1.classList.add("active")
    tab2.classList.remove("active")
  }
  else {
    tab2.classList.add("active")
    tab1.classList.remove("active")
  }
}
