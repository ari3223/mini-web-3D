//classes 
let ui = new UI_API();

//variables 
let Tags    = document.querySelectorAll('.ta'),
    tPlace = document.querySelector('.tag'),
    addchg = document.querySelectorAll('.add');




//evenLiseners
evenLiseners()
function evenLiseners(){
    tPlace.addEventListener('click', () =>{ui.showhidenav()});
    document.addEventListener('DOMContentLoaded', function(e) {
        ui.changeicon();
        
    });
    
        

    
}





//functions


