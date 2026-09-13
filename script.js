document.getElementById('year').textContent=new Date().getFullYear();
const b=document.querySelector('.menu-btn'),n=document.querySelector('.nav');
b.addEventListener('click',()=>{const o=n.classList.toggle('open');b.setAttribute('aria-expanded',String(o))});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{n.classList.remove('open');b.setAttribute('aria-expanded','false')}));
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
const secs=document.querySelectorAll('main section[id]'),links=document.querySelectorAll('.nav a');function active(){let c='';secs.forEach(s=>{if(scrollY>=s.offsetTop-140)c=s.id});links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')===`#${c}`))}addEventListener('scroll',active);active();
