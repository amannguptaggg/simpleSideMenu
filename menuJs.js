(function(){
    "use strict";

    let submenus = document.querySelectorAll('ul li ul');
    for(let i =0; i < submenus.length; i++){
        submenus[i].className='hide-menu';
    }

    let menuLinks = document.querySelectorAll('.menulink');
    for(let i =0; i < menuLinks.length; i++){
        menuLinks[i].addEventListener('click',function(e){
            e.preventDefault();
            let thisMenu = this.parentNode.querySelector('ul');

            if(thisMenu.classList.contains('hide-menu')){
                hideSubMenu();
                thisMenu.className='show-menu';
            } else {
                thisMenu.className = 'hide-menu';
            }
            
        });
    }

    function hideSubMenu(){
        for(let i=0; i < submenus.length; i++){
            submenus[i].className='hide-menu';
        }
    }

}());