window.addEventListener('load',()=>{
    let hamburguesa = document.getElementById("hamburguesa");
    let nav = document.querySelectorAll(".barraN");
    //agrega o quita la clase none    
    hamburguesa.addEventListener("click", ()=>{
        for(i=0; i<4; i++){
                nav[i].classList.toggle("none");
        }
        
    })
})