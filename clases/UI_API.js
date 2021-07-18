class UI_API {
    
    showhidenav(){
       addchg.forEach((elem) => {
           elem.classList.toggle('change');
       })
       
        Tags.forEach((elem) => {
            elem.classList.toggle('disp');
        })  
    }
    changeicon(){
        let count = 0,
            ics   = document.querySelectorAll('.big');
            ics[0].classList.toggle('change');
        setInterval(function() {
            ++count;
            if(count > 7){
                count = 0;
                ics[7].classList.toggle('change');
            }
            else{
                ics[count-1].classList.toggle('change');
            }
            ics[count].classList.toggle('change');           
        }, 3000);
    }

    
}

