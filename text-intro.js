(() => {
 const hero=document.getElementById('home');
 const button=hero.querySelector('.intro-replay');
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
 let timer;
 function play(){
  clearTimeout(timer); hero.classList.remove('is-revealing');
  if(reduced.matches)return;
  void hero.offsetWidth; hero.classList.add('is-revealing');
  timer=setTimeout(()=>hero.classList.remove('is-revealing'),2800);
 }
 button.addEventListener('click',play);
 play();
})();
