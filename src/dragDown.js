function addDragDown(button, menu) {
  button.addEventListener("click", () => {
    if (menu.hasAttribute("hidden")) {
      menu.removeAttribute("hidden");
    } else {
      menu.setAttribute("hidden", "");
    }
  });
}

export default addDragDown;
