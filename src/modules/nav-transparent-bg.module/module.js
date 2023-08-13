const mainNavMenu = document.getElementById("main-nav-menu");

const mobileNavOpen = document.getElementById("mobile-nav-open") || null;

const mobileNavClose = document.getElementById("mobile-nav-close") || null;


if( mobileNavOpen  ) {
  mobileNavOpen.addEventListener("click", function() {
    mobileNavClose.classList.remove("hidden");
    mobileNavOpen.classList.add("hidden");
    mainNavMenu.classList.add("active");
    document.body.classList.add("mobile-open");
  });
}

if( mobileNavClose ) {
  mobileNavClose.addEventListener("click", function() {
    mobileNavClose.classList.add("hidden");
    mobileNavOpen.classList.remove("hidden");
    mainNavMenu.classList.remove("active");
    document.body.classList.remove("mobile-open");
  });
}