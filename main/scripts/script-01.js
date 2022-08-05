let myBtn = document.querySelector("#testButton");
let elems = document.querySelectorAll(".site_item");

//let items = document.getElementsByClassName("site_nav");
//let findItem = document.getElementById("findItem");
let ulItems = document.getElementsByTagName("ul");
ulItems[0].children[2].textContent = "Test";
console.log();
