import addDragDown from "./dragDown";

const cat = "cat";

for (let index = 0; index < 10; index++) {
  console.log(cat);
}

const button = document.querySelector(".button");
const menu = document.querySelector(".menu");
addDragDown(button, menu);
