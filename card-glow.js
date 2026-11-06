(() => {
 const cards=[...document.querySelectorAll('.project-card')];
 const reduced=matchMedia('(prefers-reduced-motion:reduce)');
 const pointer=matchMedia('(hover:hover) and (pointer:fine)');
 cards.forEach((card,index)=>{
  for(const name of ['card-light','card-entry-shine']) {
   const layer=document.createElement('span');
   layer.className=name;layer.setAttribute('aria-hidden','true');card.append(layer);
  }
  card.style.setProperty('--light-delay',`${index*100}ms`);
  let frame=0,x=0,y=0;
  card.addEventListener('pointermove',event=>{
   if(!pointer.matches||reduced.matches)return;
   const bounds=card.getBoundingClientRect();x=event.clientX-bounds.left;y=event.clientY-bounds.top;
   if(!frame)frame=requestAnimationFrame(()=>{
    card.style.setProperty('--light-x',`${x}px`);card.style.setProperty('--light-y',`${y}px`);frame=0;
   });
  },{passive:true});
  card.addEventListener('focus',()=>{
   card.style.setProperty('--light-x','50%');card.style.setProperty('--light-y','45%');
  });
  card.addEventListener('animationend',event=>{
   if(event.animationName==='cardLightSweep')card.classList.remove('light-enter');
  });
 });
 if(!reduced.matches&&'IntersectionObserver' in window) {
  const observer=new IntersectionObserver(entries=>{
   entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('light-enter');observer.unobserve(entry.target);}
   });
  },{threshold:.18});
  cards.forEach(card=>observer.observe(card));
 }
})();
