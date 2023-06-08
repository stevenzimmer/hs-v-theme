const integrationRows = Array.prototype.slice.call( document.querySelectorAll(".integrations-row") );

const rowImgs = Array.prototype.slice.call( document.querySelectorAll(".row-img") );

// console.log({integrationRows});

integrationRows.forEach((row, i, all) => {
  row.addEventListener("click", function() {
    // console.log("click");
    // console.log({i});
    all.forEach( (item) => {
      item.classList.remove("active");
    });

    rowImgs.forEach( (img) => {
      img.classList.add("hidden");
    });

    integrationRows[i].classList.add("active");
    rowImgs[i].classList.remove("hidden");
  });
  
});