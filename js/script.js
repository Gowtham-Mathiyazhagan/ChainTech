// Nav functionality
const nav_icon = document.querySelector("[list-icon]");
const nav_data = document.querySelector("[list-data]");
nav_icon.addEventListener("click", (e) => {
  if(e.target.className=="fa-solid fa-bars"){
  nav_data.classList.toggle("active");
}
});
