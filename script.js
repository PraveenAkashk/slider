let Slider = document.querySelectorAll(".slider");
let leftButton = document.querySelector(".left-button");
let rightButton = document.querySelector(".right-button");
let slidercontainer=document.querySelector(".slider-main");
let singleslider= document.querySelector(".slider")


let sliderlenght= Slider.length;

let count= 0;

if(count<=0){
    leftButton.classList.add("disbale")
}



rightButton.addEventListener("click", ()=>{
    count++;
    if(count < sliderlenght){
        removeclass();
        currentslide();

        if(count>= sliderlenght-1){
            rightButton.classList.add("disbale")
        }

    }
    if(count>0){
        leftButton.classList.remove("disbale")
    }
})


leftButton.addEventListener("click",()=>{
    count--;

    if(count < sliderlenght){
        removeclass();
        currentslide();
    }
    
    if(count<= sliderlenght-2){
        rightButton.classList.remove("disbale")
    }

    if(count<=0){
        leftButton.classList.add("disbale")
    }

})



// Current Slide
let currentslide=()=>{
    Slider[count].classList.add("active")
    slidercontainer.style.transition="0.5s linear"
    slidercontainer.style.marginLeft =`-${count*(singleslider.clientWidth)}px`;
}

// To remove active class
let removeclass=()=>{
    let perviousactiveelem= document.querySelectorAll(".slider.active")
    for(let prevelem of perviousactiveelem)
    {
        prevelem.classList.remove("active");
    }
}








