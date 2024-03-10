const toggle = document.getElementById('toggle');
const menu = document.getElementById('menu');
const menuToggle = document.getElementById('menuToggle');
const menuWidth = menu.offsetWidth;

toggle.addEventListener('change', function() {
    const isOpen = this.checked;
    const menuPosition = isOpen ? '0' : `-${menuWidth}px`;
    const buttonText = isOpen ? '&#9776; Cerrar' : '&#9776; Menú';
    
    menu.style.left = menuPosition;
    menuToggle.innerHTML = buttonText;
    
    const animation = menu.animate(
        [
            { left: isOpen ? `-${menuWidth}px` : '0' },
            { left: menuPosition }
        ],
        {
            duration: 300,
            easing: 'ease'
        }
    );
});
