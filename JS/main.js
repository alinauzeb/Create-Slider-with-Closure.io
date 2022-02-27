// slider-section

let show = 0;
slideShow(show);

function controller(x) {
    show = show + x ;
    slideShow(show);
}

function slideShow(num){
    let slider = document.getElementsByClassName('slider'); 
    
    if(num == slider.length){
        show = 0;
        num = 0 ;
    }

    if(num < 0){
        show = slider.length-1;
        num = slider.length-1;
    }

     for(let x of slider){
          x.style.display="none";
     }
    slider[num].style.display="block";
}

// slider-section

