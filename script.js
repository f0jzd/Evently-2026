const icon = document.getElementById("icon");

icon.addEventListener("click", () => {
  icon.classList.toggle("active");
});

const sidebar = document.getElementById("sidebar");
const backdrop = document.getElementById("backdrop");

document.getElementById("openMenu").addEventListener("click", () => {
  sidebar.classList.add("open");
  backdrop.classList.add("open");

  sidebar.inert = false;
});

function closeMenu() {
  sidebar.classList.remove("open");
  backdrop.classList.remove("open");

  sidebar.inert = true;
}

document.getElementById("closeMenu").addEventListener("click", closeMenu);
backdrop.addEventListener("click", closeMenu);

//ESC key handler
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMenu();
  }
});