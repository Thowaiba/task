
		function loadModalWindow(conditionalVariable) {
			 if(conditionalVariable == '1'){
		    	 $("#sidebar-container , .bg-dark ,.btnColor,.backColor2, .headerBCRTL,.headerBC ,.table-header ,footer").removeClass('color2 color3 main').addClass('color1');
		         $(".card , body").css({
		             "background-color": "white",
		             
		         });
		    } else if(conditionalVariable == '2') {                                        
		    	$("#sidebar-container , .bg-dark ,.btnColor, btnColor,.backColor2,.headerBCRTL ,.headerBC ,.table-header ,footer").removeClass('color1 color3 main').addClass('color2');

		        $(".card , body").css({
		            "background-color": "white",
		           
		        });
		    } else if(conditionalVariable == '3') {                                        
		    	 $("#sidebar-container ,.bg-dark ,.btnColor,.backColor2,.headerBCRTL, .headerBC ,.table-header ,footer").removeClass('color1 color2 main').addClass('color3');
		         $(".card , body ").css({
		             "background-color": "white",
		            
		         });
		    }  else if(conditionalVariable == '0') {                                        
		    	 $("#sidebar-container , .bg-dark ,.btnColor,.backColor2,.headerBCRTL, .headerBC ,.table-header ,footer").removeClass('color1 color2 color3').addClass('main');
		         $(".card , body").css({
		             "background-color": "#e9ecef",
		             
		         });  
		    
	    } 
			
			 // OPen PopUp When Browse Close Popup	
			 if(!popup_window ||  popup_window.closed || typeof  popup_window.closed=='undefined') 
			    { 
				 alert("Pop-up Is UnBlocked")
			    }else {
			    	
			    	alert("Pop-up Is Blocked , Please Unblock Pop-up From Browse Settings,Now Popup Is Opening In New Window");    	
		
			    }
		}
