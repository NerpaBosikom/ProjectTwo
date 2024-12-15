function openDrawer() {
  let checked = document.querySelector("input[type=checkbox]").checked;
  let drawer = document.getElementById("menu-drawer");
  drawer.setAttribute("opened", checked);
}
