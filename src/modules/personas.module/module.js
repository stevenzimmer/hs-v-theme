const personaSelect = document.querySelector(".persona-select");
const personaOptionsWrapper = document.querySelector(".persona-options") ;

const personaOptions = Array.prototype.slice.call( personaOptionsWrapper.querySelectorAll(".persona-option"));
const personaLayouts = Array.prototype.slice.call( document.querySelectorAll(".persona-layout"));



personaSelect.addEventListener("click", function() {

  this.classList.toggle("active");
  personaOptionsWrapper.classList.toggle("hidden");
  
});

personaOptions.forEach((option, i, all) => {
  option.addEventListener("click", () => {
    // console.log("option click");
    all.forEach((item, i, all) => {
      item.classList.remove('active');
    });
    // console.dir(all[i]);
    all[i].classList.add("active");
    personaOptionsWrapper.classList.add("hidden");
    personaSelect.querySelector(".persona-select-text").textContent = all[i].innerText;

    personaLayouts.forEach((layout, i, all) => {
      layout.classList.remove("show");
      setTimeout(() => {
        layout.classList.remove("active");
      }, 100);
    });
    setTimeout(() => {
      personaLayouts[i].classList.add("active");
    }, 100);
    
    setTimeout(() => {
      personaLayouts[i].classList.add("show");
    }, 200);
    
  })
});

