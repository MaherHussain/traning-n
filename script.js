
"use strict"

window.onscroll = function () {
    var topPos = window.pageYOffset;
    /*    console.log(topPos);*/
    var Myheader = document.getElementById('MyHeader');
    var HeaerPost = Myheader.offsetTop;


    if (topPos > HeaerPost) {
        Myheader.classList.add('sticky');
    } else {
        Myheader.classList.remove('sticky');
    }
}

var Mywrapper= document.getElementById("gridwrapper");
function Overlay() {
    var i;

    var item = Mywrapper.getElementsByClassName('overlayItem');
    
    for (i = 0; i < item.length; i++) {
       item[i].onmouseover = (function(){
           
          this.getElementsByClassName('overlayTxt')[0].style.top=77+"%";
       });
        item[i].onmouseout = (function(){
           this.getElementsByClassName('overlayTxt')[0].style.top="";
       });
    }

}
Overlay();


$(document).ready(function(){
    $("#burgerWrapper").on('click',function(){
        
       $(this).toggleClass('openburger');
        $("nav ul").toggleClass("openmenu");
      
    
    });
    
});