// Keep collapsed menus out of keyboard navigation without changing their visual layout.
(() => {
 const nav=document.getElementById('nav');
 if(!nav)return;
 const work=nav.querySelector('.nav-work');
 const workMenu=nav.querySelector('.work-menu');
 const mobile=nav.querySelector('.mobile-menu');
 const narrow=matchMedia('(max-width:900px)');
 function sync(){
  if(workMenu)workMenu.inert=narrow.matches||!work?.classList.contains('is-open');
  if(mobile)mobile.inert=!narrow.matches||!nav.classList.contains('mobile-open');
 }
 const observer=new MutationObserver(sync);
 observer.observe(nav,{attributes:true,attributeFilter:['class'],subtree:true});
 narrow.addEventListener('change',sync);sync();
})();
