 //  lang Menu Toggle 
$('header > .langBlock > li > .langA').click(function(){
   $('header > .langBlock > li > ul').toggle();
   $(this).toggleClass('langActive');
   if ($('#ul').css('display') == 'block') {
}
});

		