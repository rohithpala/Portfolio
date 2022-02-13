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
`;

document.querySelector(".small-menu").innerHTML = `
   <div class="dots">
      <i class="fa-solid fa-ellipsis menu-icon" onclick="showMenu()"></i>
   </div>

   <div class="menu1">
      <ul>
         <li><a href="#">Portfolio</a></li>
         <li><a href="#">My Works</a></li>
         <li><a href="#">Resume</a></li>
      </ul>
   </div>
`;

const menu = document.querySelector(".menu");
function showMenu() {
   if (menu.style.maxHeight) menu.style.maxHeight = null;
   else menu.style.maxHeight = menu.scrollHeight + "px";
}
