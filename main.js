const menuBtn = document.getElementById("menu-btn");
const navLink = document.getElementById("nav-link");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLink.classList.toggle("open");

  const isOpen = navLink.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLink.addEventListener("click", (e) => {
  navLink.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".about_container .section_header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".about_container .section_description", {
  ...scrollRevealOption,
  delay: 500,
  interval: 550,
});
ScrollReveal().reveal(".about_container img", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".package_container .section_header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".package_container .section_description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".package_card", {
  ...scrollRevealOption,
  delay: 1000,
  interval: 500,
});

ScrollReveal().reveal(".blog_content .section_header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".blog_content h4", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".blog_content p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".blog_content .blog_btn", {
  ...scrollRevealOption,
  delay: 1500,
});

const instagram = document.querySelector(".instagram_flex");

Array.from(instagram.children).forEach(item => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  instagram.appendChild(duplicateNode);
});