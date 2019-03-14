function intersectionCallback(entries) {
  let intersectingTargets = []
  for(let {isIntersecting, target} of entries) {
    if(isIntersecting) {
      intersectingTargets.push(target);
    } 
  }
  if(intersectingTargets.length > 0) {
    window.requestAnimationFrame(() => {
      for(let target of intersectingTargets) {
        let width = target.offsetWidth;
        target.style.marginLeft = -width / 2 + "px";
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', function(){
  let observer = new IntersectionObserver(intersectionCallback, {
    rootMargin: '0px',
    threshold: 1.0,
  });
  let tooltips = document.querySelectorAll('.tooltip-text');
  for(let tooltip of tooltips) {
    observer.observe(tooltip)
  }
});