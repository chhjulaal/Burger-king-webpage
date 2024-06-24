// manu btn click start
let body =document.querySelector("body");
let manuBtn = document.getElementById("manu");
let ulLIst = document.getElementById("ul");
let xIcon = document.getElementById("x");
let logoIcon = document.getElementById("logo-img");
manuBtn.addEventListener("click", function () {
  ulLIst.style.display = "flex";
  manuBtn.style.display = "none";
  logoIcon.style.display = "none";
  if(manuBtn.style.display!='none'){
    body.style.section="none"
  }
});
xIcon.addEventListener("click", function () {
  ulLIst.style.display = "none";
  manuBtn.style.display = "flex";
  logoIcon.style.display = "flex";
  
});

// manu btn click end
