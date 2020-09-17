const tiles = document.getElementsByClassName("slide-tile");

let animationID;

if (window.innerWidth < 600){

    let presentCount = 0;
    for(let i=1; i<tiles.length; i++){
        tiles[i].classList.add("not-active");
    }
    
    (function sliding(){
        
    
        if(presentCount >= tiles.length){
            presentCount = 0;
        }
    
        tiles[presentCount].classList.add("active");
    
    
    
        setTimeout(()=>{
            tiles[presentCount].classList.add("not-active");
    
            tiles[presentCount].classList.remove("active");
    
            presentCount++;
    
            animationID = requestAnimationFrame(sliding);
        }, 5000);
    })()
    

}

if(window.innerWidth >600){
    let x = 0, y = 1;

    for(let i=2; i<tiles.length; i++){
        tiles[i].classList.add("not-active");
    }


    (function sliding(){
    
        if(y >= tiles.length){
            x = 0;
            y  = x+1;
        }
    
        tiles[x].classList.add("active");
        
        tiles[y].classList.add("active");
    
    
    
        setTimeout(()=>{
            tiles[x].classList.add("not-active");
    
            tiles[x].classList.remove("active");

            tiles[y].classList.add("not-active");
    
            tiles[y].classList.remove("active");
    
            x++;
            y++;
    
            animationID = requestAnimationFrame(sliding);
        }, 10000);
    })()

}