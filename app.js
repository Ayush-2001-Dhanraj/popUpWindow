var parent = document.querySelector(".model-parent"),
    btn = document.querySelector("button"),
    x = document.querySelector(".X"),
    section = document.querySelector("section");

btn.addEventListener("click", function() {
  parent.style.display = "block";
  section.style.filter = "blur(10px)";
});

x.addEventListener("click", function() {
  parent.style.display = "none";
  section.style.filter = "blur(0px)";
});

parent.addEventListener("click", function(event) {
  if (event.target.className == "model-parent") {
    parent.style.display = "none";
    section.style.filter = "blur(0px)";
  }
});
