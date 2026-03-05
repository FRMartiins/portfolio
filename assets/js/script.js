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

// Open dialogs
document.querySelectorAll("[data-open]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-open");
    const dialog = document.getElementById(id);
    if (dialog) dialog.showModal();
  });
});

// Close dialogs and stop YouTube playback
document.querySelectorAll("dialog.demo").forEach((dialog) => {
  dialog.addEventListener("click", (e) => {
    // click outside content closes
    const rect = dialog.getBoundingClientRect();
    const isOutside =
      e.clientX < rect.left || e.clientX > rect.right ||
      e.clientY < rect.top  || e.clientY > rect.bottom;
    if (isOutside) dialog.close();
  });

  dialog.addEventListener("close", () => {
    // reset iframes to stop audio
    dialog.querySelectorAll("iframe").forEach((iframe) => {
      const src = iframe.getAttribute("src");
      iframe.setAttribute("src", src);
    });
  });
});

document.querySelectorAll("[data-close]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const dialog = btn.closest("dialog");
    if (dialog) dialog.close();
  });
});