
// Global Variable To Get Caliber Price Text Box
var caliberPrice = document.getElementById('caliberPrice');

// Auto Set Caliber Pirce Depends On Caliber Name
function getCaliberPrice(caliber)
{	
	if      (caliber == '500'){caliberPrice.value = 100;}
	else if	(caliber == '501'){caliberPrice.value = 200;}
	else if	(caliber == '502'){caliberPrice.value = 300;}
	else if	(caliber == '503'){caliberPrice.value = 400;}
	else if	(caliber == '504'){caliberPrice.value = 500;}	
}

//Function To Set Product Bar Code Into Search Text Box And Submit Form
 function displayNeighborProduct()
{
	if(document.getElementById('searchTextBox') != null)
	{
		var barCode = document.getElementById('searchTextBox').value;
		if(barCode != null)
		{
			document.theForm.submit();
		}
	}
	
}


// Refresh Parent Window
function refreshParent(conditionalVariable) {
	if(conditionalVariable == '1'){
   	 $("#sidebar-container , .bg-dark , .headerBC ,.table-header ,footer").removeClass('color2 color3 main').addClass('color1');
        $(".card , body").css({
            "background-color": "white",
            
        });
   } else if(conditionalVariable == '2') {                                        
   	$("#sidebar-container , .bg-dark ,.headerBC ,.table-header ,footer").removeClass('color1 color3 main').addClass('color2');

       $(".card , body").css({
           "background-color": "white",
          
       });
   } else if(conditionalVariable == '3') {                                        
   	 $("#sidebar-container ,.bg-dark , .headerBC ,.table-header ,footer").removeClass('color1 color2 main').addClass('color3');
        $(".card , body ").css({
            "background-color": "white",
           
        });
   }  else if(conditionalVariable == '0') {                                        
   	 $("#sidebar-container , .bg-dark , .headerBC ,.table-header ,footer").removeClass('color1 color2 color3').addClass('main');
        $(".card , body").css({
            "background-color": "#e9ecef",
            
        });  
   } 

	window.opener.location.reload(true);

}