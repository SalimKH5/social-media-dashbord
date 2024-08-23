const buttonMode = document.querySelector('.button-mode');
const btnControl = document.querySelector('.button-control');
const mode = document.getElementById('mode');
const html = document.documentElement;

let isRightAligned = true;

buttonMode.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const isLightMode = currentTheme === "light";

    // Toggle theme
    html.setAttribute('data-theme', isLightMode ? 'dark' : 'light');
    mode.textContent = isLightMode ? "Dark Mode" : "Light Mode";
    
    // Toggle button position
    btnControl.classList.toggle('btn-right', isRightAligned);
    btnControl.classList.toggle('btn-left', !isRightAligned);
   
    isRightAligned = !isRightAligned;

    console.log({ btnControl: btnControl.classList });
});
