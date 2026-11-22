(() => {
 const params=new URLSearchParams(location.search);
 const code=(params.get('to')||'').trim().toLowerCase();
 document.getElementById('guestName').textContent=(window.GUESTS&&window.GUESTS[code])||'Tamu Undangan';

 const items=[...document.querySelectorAll('.reveal')];
 items.forEach((el,i)=>el.style.setProperty('--delay',`${(i%4)*110}ms`));
 if('IntersectionObserver' in window){
   const observer=new IntersectionObserver((entries,obs)=>entries.forEach(entry=>{
     if(entry.isIntersecting){entry.target.classList.add('is-visible');obs.unobserve(entry.target);}
   }),{threshold:.13,rootMargin:'0px 0px -5% 0px'});
   items.forEach(el=>observer.observe(el));
 }else items.forEach(el=>el.classList.add('is-visible'));

 // Scroll custom 2.15 detik, easing perlahan di awal dan akhir.
 function smoothScroll(target,duration=2150){
   const start=scrollY,end=target.getBoundingClientRect().top+scrollY,dist=end-start,t0=performance.now();
   let cancelled=false;
   const cancel=()=>cancelled=true;
   ['wheel','touchstart','keydown'].forEach(evt=>addEventListener(evt,cancel,{once:true,passive:true}));
   function frame(now){
     if(cancelled)return;
     const t=Math.min((now-t0)/duration,1);
     const ease=t<.5?16*t**5:1-Math.pow(-2*t+2,5)/2;
     scrollTo(0,start+dist*ease);
     if(t<1)requestAnimationFrame(frame);
   }
   requestAnimationFrame(frame);
 }
 const audio=document.getElementById('weddingMusic'),toggle=document.getElementById('musicToggle'),label=document.getElementById('musicLabel');
 async function playMusic(){
   try{await audio.play();toggle.hidden=false;toggle.classList.add('playing');label.textContent='Musik aktif';}
   catch(e){toggle.hidden=false;toggle.classList.remove('playing');label.textContent='Putar musik';}
 }
 document.getElementById('openInvitation').addEventListener('click',()=>{
   playMusic();
   smoothScroll(document.getElementById('intro'),2150);
 });
 toggle.addEventListener('click',async()=>{
   if(audio.paused)await playMusic();
   else{audio.pause();toggle.classList.remove('playing');label.textContent='Musik dijeda';}
 });
})();
