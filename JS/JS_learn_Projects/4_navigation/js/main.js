const menuBtn = document.querySelector(".nav-toggle");
const menuList = document.querySelector(".links");

menuBtn.addEventListener("click", () => {
//   menuList.classList.contains("show-links")
//     ? menuList.classList.remove("show-links")
//     : menuList.classList.add("show-links");

     menuList.classList.toggle('show-links')
});
