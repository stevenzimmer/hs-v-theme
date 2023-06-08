document.addEventListener('DOMContentLoaded', () => {
  const burgerButton = document.getElementById('hamburgerButton');
  const mobileMenu = document.getElementById('mobileMenuContainer');
  const mobileDropdowns = mobileMenu.getElementsByClassName('level-1 has-children');
  
  function handleBurgerClick() {
    if(mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        burgerButton.classList.remove('active');
       } else {
        mobileMenu.classList.add('active');
        burgerButton.classList.add('active');
       }
  }
  
  function handleParentClick() {
    const dropDown = this.querySelector('.dropdown-wrapper');
    
    if(dropDown.classList.contains('active')) {
      dropDown.classList.remove('active');
    } else {
      dropDown.classList.add('active');
    }
  }
  
  for (var i = 0; i < mobileDropdowns.length; i++) {
    mobileDropdowns[i].addEventListener('click', handleParentClick, false);
  }
  burgerButton.addEventListener('click', handleBurgerClick, false);
  
});