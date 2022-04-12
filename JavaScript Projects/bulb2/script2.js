var on  = document.querySelector("#on");
var off = document.querySelector("#off");
var bulb = document.querySelector("#bulb");

on.addEventListener("click",function () {
    bulb.style.backgroundColor = "red";
})

off.addEventListener("click",function () {
    bulb.style.backgroundColor = "transparent" ;
})