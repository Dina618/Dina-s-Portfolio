(()=>{
 const buttons=[...document.querySelectorAll('[data-filter]')],cards=[...document.querySelectorAll('.project-card[data-category]')],status=document.querySelector('.filter-status');
 const reduced=matchMedia('(prefers-reduced-motion:reduce)');
 buttons.forEach(button=>button.addEventListener('click',()=>{
  const value=button.dataset.filter;
  buttons.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
  let count=0;
  cards.forEach(card=>{card.getAnimations().forEach(a=>{if(a.animationName==='filterIn')a.cancel()});card.classList.remove('filter-enter');card.hidden=value!=='all'&&!card.dataset.category.split(' ').includes(value);if(!card.hidden){count++;card.classList.add('visible');if(!reduced.matches){void card.offsetWidth;card.classList.add('filter-enter');}}});
  status.textContent=`Showing ${count} projects: ${button.childNodes[0].textContent.trim()}`;
 }));
})();
