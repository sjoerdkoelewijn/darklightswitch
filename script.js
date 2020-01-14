
document.addEventListener('DOMContentLoaded', function () {
  BackgroundCheck.init({
    targets: '.logo',
    images: '.image'
    });    
});

window.onload = function () {
  BackgroundCheck.refresh(); 
}; 
