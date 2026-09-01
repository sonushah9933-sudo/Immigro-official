const menuToggle=document.querySelector('.menu-toggle');
const navLinks=document.querySelector('.nav-links');
if(menuToggle){menuToggle.addEventListener('click',()=>navLinks.classList.toggle('open'))}
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));

document.querySelectorAll('[data-country]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const select=document.getElementById('country');
    if(select){
      select.value=btn.dataset.country;
      document.getElementById('apply').scrollIntoView({behavior:'smooth'});
    }
  });
});

const form=document.getElementById('applicationForm');
const status=document.getElementById('formStatus');
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const data=new FormData(form);
  const name=data.get('name');
  const phone=data.get('phone');
  const email=data.get('email');
  const current=data.get('currentCountry');
  const country=data.get('country');
  const visa=data.get('visaType');
  const message=data.get('message')||'Not provided';
  const text=`Hello Immigro, I would like to submit a visa application.

Name: ${name}
Phone/WhatsApp: ${phone}
Email: ${email}
Current Country: ${current}
Destination: ${country}
Visa Type: ${visa}
Additional Information: ${message}`;

  status.textContent='Opening WhatsApp with your application details…';
  status.style.color='#247452';
  window.open('https://wa.me/971560781134?text='+encodeURIComponent(text),'_blank','noopener');
});
