document.addEventListener('DOMContentLoaded', () => {
  const playButton = document.getElementById('playButton');
  const buttonParent = playButton.parentElement;
  const videoWrapper = document.querySelector('.embed-wrapper');
  let src = videoWrapper.getAttribute('data-src-attribute');
  const symbol = src.indexOf("?") > -1 ? "&" : "?";
  src += symbol + "autoplay=1";
  let iframe = document.createElement('iframe');
  let executed = false;

  
  playButton.addEventListener('click', () => {
    videoWrapper.append(iframe);
    iframe.setAttribute('src', src);
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture');
    iframe.setAttribute('allowfullscreen', '');
    buttonParent.classList.add('active');
  });
  
  
});