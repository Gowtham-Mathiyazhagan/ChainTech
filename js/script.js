// Nav functionality
const nav_icon = document.querySelector("[list-icon]");
const nav_data = document.querySelector("[list-data]");
nav_icon.addEventListener("click", (e) => {
  const bar_icon = document.querySelector("[bar-icon]");
  const close_icon = document.querySelector("[close-icon]");
  if (e.target.className == "fa-solid fa-bars active") {
    nav_data.classList.add("active");
    bar_icon.classList.remove("active");
    close_icon.classList.add("active");
  } else if (e.target.className == "fa-solid fa-xmark active") {
    nav_data.classList.remove("active");
    bar_icon.classList.add("active");
    close_icon.classList.remove("active");
  }
});

let data = [
  {
    id: "1",
    title: "Blockchain<br> Development",
    img: "./img/image-1.png",
    color: "rgb(43, 255, 138, 0.4)",
  },
  {
    id: "2",
    title: "Blockchain<br> Development",
    img: "./img/image-2.png",
    color: "rgb(0, 240, 255,0.4)",
  },
  {
    id: "3",
    title: "Security<br> AAS",
    img: "./img/image-3.png",
    color: "rgb(252, 89, 89,0.4);",
  },
  {
    id: "4",
    title: "Motion<br> Graphic",
    img: "./img/image-4.png",
    color: "rgb(45, 69, 230.0.4)",
  },
  {
    id: "5",
    title: "Blockchain<br> Development",
    img: "./img/image-1.png",
    color: "rgb(43, 255, 138, 0.4)",
  },
  {
    id: "6",
    title: "Blockchain<br> Development",
    img: "./img/image-2.png",
    color: "rgb(0, 240, 255,0.4)",
  },
  {
    id: "7",
    title: "Security<br> AAS",
    img: "./img/image-3.png",
    color: "rgb(252, 89, 89,0.4);",
  },
  {
    id: "8",
    title: "Motion<br> Graphic",
    img: "./img/image-4.png",
    color: "rgb(45, 69, 230.0.4)",
  },
];

const services_list = document.querySelector("[services-list]");

const service_item = data.map((val)=>{
  return `
  <li class="service-item" style="background-color: ${val.color};">
            <div class="join-dev">
              <figure class="icon">
              <img src="/img/company-icon2.png" alt="icon" />
              </figure>
              <h6 class="common-title h6">Join Development</h6>
            </div>
            <div class="title-wrapper">
              <h3 class="list-title h3">${val.title}</h1>
            <img class="list-img" src=${val.img} alt="image">
            </div>
            <div class="list-footer">
              <button class="button">
                Explore
            <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </li>
  `
})

services_list.innerHTML+=service_item;