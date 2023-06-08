document.addEventListener('DOMContentLoaded', () => {
  let viewportWidth = window.innerWidth;
  const groupOne = document.querySelectorAll('[data-step="1"]');
  const groupTwo = document.querySelectorAll('[data-step="2"]');
  const groupThree = document.querySelectorAll('[data-step="3"]');
  const groupFour = document.querySelectorAll('[data-step="4"]');
  const allGroups = document.querySelectorAll('[data-step]:not([data-step=""])');
  const allDropText = document.querySelectorAll('.life_cycle-container .text-wrapper');
  let activeGroup;
  let clickedGroup;
  
  //slide up animations
  // let slideUp = (target, duration=500) => {
  //   target.style.transitionProperty = 'height, margin, padding';
  //   target.style.transitionDuration = duration + 'ms';
  //   target.style.boxSizing = 'border-box';
  //   target.style.height = target.offsetHeight + 'px';
  //   target.offsetHeight;
  //   target.style.overflow = 'hidden';
  //   target.style.height = 0;
  //   target.style.paddingTop = 0;
  //   target.style.paddingBottom = 0;
  //   target.style.marginTop = 0;
  //   target.style.marginBottom = 0;
  //   window.setTimeout( () => {
  //     target.style.display = 'none';
  //     target.style.removeProperty('height');
  //     target.style.removeProperty('padding-top');
  //     target.style.removeProperty('padding-bottom');
  //     target.style.removeProperty('margin-top');
  //     target.style.removeProperty('margin-bottom');
  //     target.style.removeProperty('overflow');
  //     target.style.removeProperty('transition-duration');
  //     target.style.removeProperty('transition-property');
  //     //alert("!");
  //   }, duration);
  // }

  // //slide down animations
  // let slideDown = (target, duration=500) => {
  //   target.style.removeProperty('display');
  //   let display = window.getComputedStyle(target).display;

  //   if (display === 'none')
  //     display = 'block';

  //   target.style.display = display;
  //   let height = target.offsetHeight;
  //   target.style.overflow = 'hidden';
  //   target.style.height = 0;
  //   target.style.paddingTop = 0;
  //   target.style.paddingBottom = 0;
  //   target.style.marginTop = 0;
  //   target.style.marginBottom = 0;
  //   target.offsetHeight;
  //   target.style.boxSizing = 'border-box';
  //   target.style.transitionProperty = "height, margin, padding";
  //   target.style.transitionDuration = duration + 'ms';
  //   target.style.height = height + 'px';
  //   target.style.removeProperty('padding-top');
  //   target.style.removeProperty('padding-bottom');
  //   target.style.removeProperty('margin-top');
  //   target.style.removeProperty('margin-bottom');
  //   window.setTimeout( () => {
  //     target.style.removeProperty('height');
  //     target.style.removeProperty('overflow');
  //     target.style.removeProperty('transition-duration');
  //     target.style.removeProperty('transition-property');
  //   }, duration);
  // }
  
  //handle click if event target is group
  function handleGroupClick(group) {
    //remove all active classes
    for(let i = 0; i < allGroups.length; i++) {
      allGroups[i].classList.remove('active');
    }
    //if clicked group is different from active group,
    //set active and update active group value
    if (clickedGroup != activeGroup) {
      for(let j = 0; j < group.length; j++) {
        group[j].classList.add('active');
      }
      activeGroup = clickedGroup;
    } 
    //slide dropdown text down or up based on new active state
    for (let k = 0; k < allDropText.length; k++) {
      const el = allDropText[k];
      // console.log({el});
      if (el.classList.contains('active')) {
        slideDown(el, 250);
      } else {
        slideUp(el, 250);
      }
    }
  }
  
  //set initial state for desktop
  if (viewportWidth >= 1000) {
    clickedGroup = 1;
    handleGroupClick(groupOne);
  }
  
  //listen if an element of a group is clicked
  document.addEventListener("click", function(event) {
    if(event.target.matches('[data-step="1"]') || event.target.closest('[data-step="1"]')) {
      clickedGroup = 1;
      return handleGroupClick(groupOne);
    } else if (event.target.matches('[data-step="2"]') || event.target.closest('[data-step="2"]')) {
      clickedGroup = 2;
      return handleGroupClick(groupTwo);
    } else if (event.target.matches('[data-step="3"]') || event.target.closest('[data-step="3"]')) {
      clickedGroup = 3;
      return handleGroupClick(groupThree);
    } else if (event.target.matches('[data-step="4"]') || event.target.closest('[data-step="4"]')) {
      clickedGroup = 4;
      return handleGroupClick(groupFour);
    }  
  });
  
});