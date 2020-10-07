// create a fuction to select an element
const selectElement = (element) => document.querySelector(element);

// call selectElement function then values into variables
const header = selectElement("header");
const mainContent = selectElement("main");

// click event on hamburger menu trigger the .active state
selectElement(".hamburger").addEventListener("click", () => {
  header.classList.toggle("active");
  mainContent.classList.toggle("active");
});

// close navigation side bar on clicking outside the hamburger or on the window

window.onclick = (event) => {
  if (event.target.matches(".active")) {
    if (header.classList.contains("active")) {
      header.classList.remove("active");
      mainContent.classList.remove("active");
    }
  }
};
