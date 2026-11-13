(()=>{
 const buttons=[...document.querySelectorAll('[data-filter]')];
 const allCards=[...document.querySelectorAll('.project-card[data-category]')];
 const cards=allCards.filter(card=>card.dataset.draft!=='true');
 const status=document.querySelector('.filter-status');
 const reduced=matchMedia('(prefers-reduced-motion:reduce)');
 const matches=(card,value)=>value==='all'||card.dataset.category.split(' ').includes(value);
 allCards.filter(card=>card.dataset.draft==='true').forEach(card=>{card.hidden=true;});
 buttons.forEach(button=>{
  const count=cards.filter(card=>matches(card,button.dataset.filter)).length;
  button.querySelector('span').textContent=count;
  button.hidden=count===0&&button.dataset.filter!=='all';
  button.addEventListener('click',()=>{
   const value=button.dataset.filter;
   buttons.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
   let count=0;
   cards.forEach(card=>{
    card.getAnimations().forEach(a=>{if(a.animationName==='filterIn')a.cancel()});
    card.classList.remove('filter-enter');card.hidden=!matches(card,value);
    if(!card.hidden){count++;card.classList.add('visible');if(!reduced.matches){void card.offsetWidth;card.classList.add('filter-enter');}}
   });
   status.textContent=`Showing ${count} projects: ${button.childNodes[0].textContent.trim()}`;
  });
 });
 status.textContent=`Showing all ${cards.length} projects`;
})();
