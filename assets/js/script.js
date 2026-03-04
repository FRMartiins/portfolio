document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

window.addEventListener("scroll", function(){

  const navbar = document.querySelector(".nav");

  if(window.scrollY > 50){
    navbar.classList.add("nav-scrolled");
  }else{
    navbar.classList.remove("nav-scrolled");
  }

});