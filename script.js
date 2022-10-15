$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show(); 
    }else{
      $('.top').hide();
    }
 
  });  
});

 
var themeChange=document.getElementsByClassName('body')

var icon = document.getElementById('theme-icon');
        icon.onclick = function(){
            document.body.classList.toggle("dark");
            if (document.body.classList.contains('dark')){
                icon.classList.replace('bxs-sun','bxs-moon');
                icon.classList.remove('bx-flip-horizontal','');

            } else{
              icon.classList.replace('bxs-moon','bxs-sun');
              icon.classList.add('bx-flip-horizontal',);
            }
        }


      
