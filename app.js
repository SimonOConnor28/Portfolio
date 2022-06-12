    const x_mainNav=document.getElementById("navBarId");
    const x_navItems=document.querySelectorAll("#navBarId nav a");
    const x_headerHeight = 100;

    window.addEventListener("scroll",(x)=>{
        if(window.pageYOffset >= window.innerHeight - x_headerHeight)
            x_mainNav.style.background="black";
        else
            x_mainNav.style.background="transparent";
    });



    const mainListDiv = document.getElementById("mainListDiv"),
      mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {
    
    "use strict";
    
    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");
    
};
// const menuBar = document.getElementById('menuBar');
// const barUl = document.getElementById('navBarId')

// menuBar.addEventListener('click', function () {
//     menuBar.classList.toggle('active')
//     // barUl.classList.toggle('showNav')
//     console.log('clicked');
// });



