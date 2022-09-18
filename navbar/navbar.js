const navbar = document.querySelector(".navbar");
navbar.innerHTML = `
   <div>
      <a href="homepage.html" title="Homepage"><img class="logo" src="../images/portfolio.png" alt="Logo"></a>
   </div>

   <span></span>

   <ul class="menu">
      <li class="menu-item" title="Homepage"><a href="homepage.html">Home</a></li>
      <li class="menu-item" title="My Works"><a href="works.html">My Works</a></li>
      <li class="menu-item" title="My Resume"><a href="resume.html">Resume</a></li>
      
      <button class="dark-mode-button light" title="Toggle Dark Mode">
         <i class="fa-solid fa-sun icon"></i>
      </button>
   </ul>

   <div class="icon-container">
      <div class="hamburger"></div>
   </div>

   <div class="small-menu">
      <ul>
         <a href="homepage.html"><li>Home</li></a>
         <a href="works.html"><li>My Works</li></a>
         <a href="resume.html"><li>Resume</li></a>
      </ul>
   </div>
`;

const menu = document.querySelector(".small-menu");
const hamburger = document.querySelector(".hamburger");
const docStyle = document.documentElement.style;
const iconConatiner = document.querySelector(".icon-container");
const darkModeButton = document.querySelector(".dark-mode-button");

darkModeButton.addEventListener("click", () => {
   if (darkModeButton.classList.contains("light")) {
      docStyle.setProperty("--bg-color", "#333");
      docStyle.setProperty("--text-color", "#fff");
      docStyle.setProperty("--border-color", "#fff");
      darkModeButton.innerHTML = `<i class="fa-solid fa-moon"></i>`;
      navbar.style.boxShadow = "5px 10px 30px rgba(255, 255, 255, 0.1)";
   } else {
      docStyle.setProperty("--bg-color", "#fff");
      docStyle.setProperty("--text-color", "#000");
      docStyle.setProperty("--border-color", "#000");
      darkModeButton.innerHTML = `<i class="fa-solid fa-sun"></i>`;
      navbar.style.boxShadow = "5px 10px 30px rgba(0, 0, 0, 0.05)";
   }

   darkModeButton.classList.toggle("light");
   darkModeButton.classList.toggle("dark");

});

let cross = false;

iconConatiner.addEventListener("click", function () {
   if (cross) {
      menu.style.maxHeight = null;
      hamburger.classList.remove("open");
      docStyle.setProperty("--before-angle", 0 + "deg");
      docStyle.setProperty("--after-angle", 0 + "deg");
      docStyle.setProperty("--before-position", -8 + "px");
      docStyle.setProperty("--after-position", 8 + "px");
      cross = false;
   } else {
      menu.style.maxHeight = "187.2px";
      hamburger.classList.add("open");
      docStyle.setProperty("--before-angle", 45 + "deg");
      docStyle.setProperty("--after-angle", -45 + "deg");
      docStyle.setProperty("--before-position", 0 + "px");
      docStyle.setProperty("--after-position", 0 + "px");
      cross = true;
   }
});

document.addEventListener("scroll", () => {
   if (!cross) return;

   iconConatiner.click();
});
