
$(document).ready(function(){
	  $("#id1").click(function(){
	    $("#myDIV,#head1,#head2,#head3,#detail1,#detail2,#detail3").fadeToggle("slow");
	  });
	});
	
function loadOnValues(conditionalVariable){
    
    if(conditionalVariable == '1'){
    	 $("#sidebar-container , .bg-dark ,.btnColor,.backColor2,.fontColor, .headerBCRTL,.headerBC ,.table-header ,footer").removeClass('color2 color3 main').addClass('color1');
         $(".card , body").css({
             "background-color": "#e9ecef",
             
         });
    } else if(conditionalVariable == '2') {                                        
    	$("#sidebar-container , .bg-dark ,.btnColor,.backColor2,.fontColor,.headerBCRTL ,.headerBC ,.table-header ,footer").removeClass('color1 color3 main').addClass('color2');

        $(".card , body").css({
            "background-color": "#e9ecef",
           
        });
    } else if(conditionalVariable == '3') {                                        
    	 $("#sidebar-container ,.bg-dark ,.btnColor,.backColor2,.fontColor,.headerBCRTL, .headerBC ,.table-header ,footer").removeClass('color1 color2 main').addClass('color3');
         $(".card , body ").css({
             "background-color": "#e9ecef",
            
         });
    }  else if(conditionalVariable == '0') {                                        
    	 $("#sidebar-container , .bg-dark ,.btnColor,.backColor2,.fontColor,.headerBCRTL, .headerBC ,.table-header ,footer").removeClass('color1 color2 color3').addClass('main');
         $(".card , body").css({
             "background-color": "#e9ecef",
             
         });  
    }  
} 
// Hide submenus

$('#body-row .collapse').collapse('hide'); 

// Collapse/Expand icon
$('#collapse-icon').addClass('fa-angle-double-right'); 

// Collapse click
$('[data-toggle=sidebar-colapse]').click(function() {
    SidebarCollapse();
});

function SidebarCollapse () {
    //$('.menu-collapsed').toggleClass('d-none');
    $('.menu-collapsed').toggle(200);
    $('.caret').toggle(200); 
    $('.sidebar-submenu').toggleClass('d-none');
    $('.submenu-icon').toggleClass('d-none');
    $('#accordion').toggleClass('d-none'); //Hid SideBar Icons
    $('#sidebar-container').toggleClass('sidebar-expanded sidebar-collapsed');
    $('#textRotating').toggleClass('d-none d-block');
    //Pages Of Tabs
    $('#posAbsoluting').toggleClass('posAbs posAbs2');
    $('.card').toggleClass('marginR80');
 
    // Collapse/Expand icon
    $('#collapse-icon').toggleClass('fa-angle-double-left fa-angle-double-right');
}

//$(document).ready(function(){
	//  $("#sidebar-container").click(function(){
	  //  $("#accordion").toggle();
	  //});
	//});

/////////////////////////////Notification/////////////////////////////////////////////

/*$(document).ready(function(){
	  $("#notification").click(function(){
		  $("#notimenue").toggleClass("d-none");
		});
	  
	 $('.toast').toast(option)

	});*/

/////////////////// Delete Row In Table ///////////////////////////////////


/////////////////////Buttons tab////////////////////////////////////////////////////


function openTab(evt, tabName) {
var i, tabcontent, tablinks;
tabcontent = document.getElementsByClassName("tabcontent");

for (i = 0; i < tabcontent.length; i++) {
tabcontent[i].style.display = "none";
}
tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
tablinks[i].className = tablinks[i].className.replace(" active", "");
}
document.getElementById(tabName).style.display = "block";
evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();


