(()=>{
 const hero=document.querySelector('#home');if(!hero)return;
 for(const name of ['home-hover-light','home-hover-rim']){const layer=document.createElement('span');layer.className=name;layer.setAttribute('aria-hidden','true');hero.append(layer);}
 const fine=matchMedia('(hover:hover) and (pointer:fine)'),reduced=matchMedia('(prefers-reduced-motion:reduce)');let frame=0,x=0,y=0;
 function move(event){if(!fine.matches||event.pointerType==='touch')return;hero.classList.add('has-hover-light');if(reduced.matches)return;const r=hero.getBoundingClientRect();x=event.clientX-r.left;y=event.clientY-r.top;if(!frame)frame=requestAnimationFrame(()=>{hero.style.setProperty('--hover-light-x',x+'px');hero.style.setProperty('--hover-light-y',y+'px');frame=0;});}
 function leave(){hero.classList.remove('has-hover-light');if(frame){cancelAnimationFrame(frame);frame=0;}}
 hero.addEventListener('pointerenter',move,{passive:true});hero.addEventListener('pointermove',move,{passive:true});hero.addEventListener('pointerleave',leave);fine.addEventListener('change',leave);
})();
