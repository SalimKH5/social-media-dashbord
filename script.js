const button_mode=document.querySelector('.button-mode')
const social_container=document.querySelector('.social-container')
const btncontrol=document.querySelector('.button-control')
const mode=document.getElementById('mode')
const html=document.documentElement



button_mode.addEventListener('click',()=>{  
    
    const currenttheme=html.getAttribute('data-theme')
    console.log(currenttheme)
   if(currenttheme === "light"){
    html.setAttribute('data-theme', 'dark');
    btncontrol.classList.remove('btn-left')
    btncontrol.classList.add('btn-right')
    mode.innerHTML="Dark Mode"

   }else{
    html.setAttribute('data-theme', 'light');
    btncontrol.classList.remove('btn-right')
    btncontrol.classList.add('btn-left')
    mode.innerHTML="Light Mode"
    
   }
})