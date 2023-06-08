const integrationRows = Array.prototype.slice.call( document.querySelectorAll(".sign-up-step") );

const steps = Array.prototype.slice.call( document.querySelectorAll(".step-content") );
const stepMobiles = Array.prototype.slice.call( document.querySelectorAll(".step-content-mobile") );

// console.log({integrationRows});

integrationRows.forEach((row, i, all) => {
  row.addEventListener("click", function() {
    // console.log("click");
    // console.log({i});
    all.forEach( (item) => {
      item.classList.remove("active");
    });

    steps.forEach( (step) => {
      step.classList.add("hidden");
    });
    stepMobiles.forEach( (step) => {
      step.classList.add("hidden");
    });

    integrationRows[i].classList.add("active");
    steps[i].classList.remove("hidden");
    stepMobiles[i].classList.remove("hidden");

  });
  
});