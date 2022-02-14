document.querySelector(".common").innerHTML = `
   <div>
      <a href="portfolio.html"><img class="logo" src="../images/portfolio.png" alt="Logo"></a>
   </div>

   <span></span>

   <ul class="menu">
      <li class="menu-item"><a href="portfolio.html">Portfolio</a></li>
      <li class="menu-item"><a href="works.html">My Works</a></li>
      <li class="menu-item"><a href="resume.html">Resume</a></li>
   </ul>

   <div class="icon-container">
      <i class="fa-solid fa-ellipsis menu-icon" onclick="showMenu()"></i>
   </div>

   <div class="menu1">
      <ul>
         <a href="portfolio.html"><li>Portfolio</li></a>
         <a href="works.html"><li>My Works</li></a>
         <a href="resume.html"><li>Resume</li></a>
      </ul>
   </div>
`;

const menu = document.querySelector(".menu1");
function showMenu() {
   if (menu.style.maxHeight) menu.style.maxHeight = null;
   else menu.style.maxHeight = "155px";
}
