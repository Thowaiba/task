$(document).ready(function() {
        	
        	
        	  $("#Color1 ").click(function() {
                  $("#sidebar-container , .bg-dark , .headerBC ,.table-header ,footer").removeClass('color2 color3 main').addClass('color1');
                  $(".card , body").css({
                      "background-color": "white",
                      
                  });
        	  });
            $("#Color2 ").click(function() {
                $("#sidebar-container , .bg-dark ,.headerBC ,.table-header ,footer").removeClass('color1 color3 main').addClass('color2');

                $(".card , body").css({
                    "background-color": "white",
                   
                });

            });
          
            $("#Black ").click(function() {
                $("#sidebar-container ,.bg-dark , .headerBC ,.table-header ,footer").removeClass('color1 color2 main').addClass('color3');
                $(".card , body ").css({
                    "background-color": "white",
                   
                });
            });
            $("#White ").click(function() {
                $("#sidebar-container , .bg-dark , .headerBC ,.table-header ,footer").removeClass('color1 color2 color3').addClass('main');
                $(".card , body").css({
                    "background-color": "#e9ecef",
                    
                });
            });
        });

$(document).ready(function(){
	  $("#id1").click(function(){
	    $("#myDIV,#head1,#head2,#head3,#detail1,#detail2,#detail3").fadeToggle("slow");
	  });
	});

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
    $('#accordion').toggleClass('d-none');//Hid SideBar Icons
    $('#sidebar-container').toggleClass('sidebar-expanded sidebar-collapsed');
    $('#textRotating').toggleClass('d-none d-block');
    //Pages Of Tabs
    $('#posAbsoluting').toggleClass('posAbs posAbs2');
    $('.card').toggleClass('marginR80');
 
    // Collapse/Expand icon
    $('#collapse-icon').toggleClass('fa-angle-double-left fa-angle-double-right');
}

