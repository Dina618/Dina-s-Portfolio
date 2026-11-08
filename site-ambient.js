(()=>{
 const root=document.documentElement,allowed=matchMedia('(hover:hover) and (pointer:fine) and (prefers-reduced-motion:no-preference)');
 // Add light as the first background layer, preserving every existing background below it.
 // Hero already has its stronger local treatment. Cards and image pixels are left untouched.
 const candidates=new Set([document.body,...document.querySelectorAll('#projects,#contact,main,main>section,.process-story')]);
 for(const el of candidates){if(el.id==='home'||el.classList.contains('editorial-hero'))continue;const style=getComputedStyle(el);if(el!==document.body&&style.backgroundImage==='none'&&(style.backgroundColor==='rgba(0, 0, 0, 0)'||style.backgroundColor==='transparent'))continue;const old=style.backgroundImage;el.style.backgroundImage='var(--ambient-gradient)'+(old==='none'?'':', '+old);el.style.backgroundAttachment='fixed'+(old==='none'?'':', '+style.backgroundAttachment);}
 let frame=0,x=0,y=0;
 const stop=()=>{root.classList.remove('ambient-active');if(frame){cancelAnimationFrame(frame);frame=0;}};
 document.addEventListener('pointermove',e=>{if(!allowed.matches||e.pointerType==='touch'){stop();return;}x=e.clientX;y=e.clientY;root.classList.add('ambient-active');if(!frame)frame=requestAnimationFrame(()=>{root.style.setProperty('--ambient-x',x+'px');root.style.setProperty('--ambient-y',y+'px');frame=0;});},{passive:true});
 document.documentElement.addEventListener('pointerleave',stop);document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();});allowed.addEventListener('change',stop);
})();
