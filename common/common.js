document.querySelector(".common").innerHTML = `
   <div>
      <a href="homepage.html"><img class="logo" src="../images/portfolio.png" alt="Logo"></a>
   </div>

   <span></span>

   <ul class="menu">
      <li class="menu-item"><a href="homepage.html">Home</a></li>
      <li class="menu-item"><a href="works.html">My Works</a></li>
      <li class="menu-item"><a href="resume.html">Resume</a></li>
      <li class="menu-item"><a href="contact.html">Contact Me</a></li>
   </ul>

   <div class="icon-container">
      <div class="hamburger"></div>
   </div>

   <div class="menu1">
      <ul>
         <a href="homepage.html"><li>Home</li></a>
         <a href="works.html"><li>My Works</li></a>
         <a href="resume.html"><li>Resume</li></a>
         <a href="contact.html"><li>Contact Me</li></a>
      </ul>
   </div>
`;

const menu = document.querySelector(".menu1");
const hamburger = document.querySelector(".hamburger");
const docStyle = document.documentElement.style;
let cross = false;
document.querySelector(".icon-container").addEventListener("click", function () {
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
