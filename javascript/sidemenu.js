function wrapperFunc(){
    const hamburger = document.getElementById("hamburger-div");
    
    const blogMenu = document.getElementById("blog-menu");

    const blogSub = document.getElementById("blog-menu-sub");

    hamburger.addEventListener("click", (event)=>{

        let side = document.getElementById("side-menu");
        
        side.classList.toggle("toggle-menu");
    
        document.getElementById("hamburger").classList.toggle("switcheroo-none");
    
        document.getElementById("close").classList.toggle("switcheroo-display");

    });

    blogMenu.addEventListener("mouseenter", ()=>{

       blogSub.classList.add("hover-blog");

    });

    blogMenu.addEventListener("mouseleave", ()=>{
      
        blogSub.addEventListener("mouseenter", ()=>{

            blogSub.classList.add("hover-blog");
    
        });
    
        blogSub.addEventListener("mouseleave", ()=>{
    
           setTimeout(()=>{
            blogSub.classList.remove("hover-blog");
           }, 1000)
    
        });
    });

}

wrapperFunc();