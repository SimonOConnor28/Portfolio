
    const x_mainNav=document.getElementById("navBarId");
    const x_navItems=document.querySelectorAll("#navBarId nav a");
    const x_headerHeight = 100;

    window.addEventListener("scroll",(x)=>{
        if(window.pageYOffset >= window.innerHeight - x_headerHeight)
            x_mainNav.style.background="black";
        else
            x_mainNav.style.background="transparent";
    });


