 function navline(){
    let home = window.location.href
    if(home){
        document.getElementsByClassName('Home')[0].style.textDecoration = 'underline' 
    }
}

document.addEventListener('DOMContentLoaded', function () {
navline();

});