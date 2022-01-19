	$(function () {
     //Set the hubs URL for the connection
         $.connection.hub.url = "http://localhost:9000/signalr";
         
         // Declare a proxy to reference the hub.
         var chat = $.connection.myHub;

            if(chat == null){           

    			//alert("مشكلة فى الماكينة")

    		//	alert('Service Is Stoped Or Not Exist');

    	//		alert('Online Payment Service Is Stoped Or Does Not Exist');
           
           // when atm is disabled or does not exists
            $('#ATMServiceBtn').val(1);  
	 
document.getElementById("payment2").style.display = "none"  
    			return;
    		}
         
         // Create a function that the hub can call to broadcast messages.
         chat.client.addMessage = function (name, message) {
             // Html encode display name and message.
             var encodedName = $('<div />').text(name).html();
             var encodedMsg = $('<div />').text(message).html();
             // Add the message to the page.
             $('#discussion').append('<li><strong>' + encodedName
                 + '</strong>:&nbsp;&nbsp;' + '' + '</li>');
                 
           //create vars For Payment
                var c =JSON.stringify(encodedMsg);
            	var firstvariable = "card_type";
                var secondvariable = "transaction_date";
            
                var middleText = c.split(firstvariable)[1].split(secondvariable)[0]
				
				var tt ="\":\"      MADA\",\" ";
				var t =middleText.indexOf(":")
				var e =middleText.indexOf(",")
				var cardType=middleText.substring(t, e)
                //var res_code= c.substring(190, 193)
                  var res_code="000";
			    // remove space from card type
			   removedSpacesText =   cardType.split(" ").join(""); 
			
				var Amount  = c.substring(68, 80)
				const num=Amount;
	//		alert("hi" +num);
				// var cashvaluee =  $("#cashamtvalue").val();				 
				// var hiddencash =  $("#hiddencash").val();
				// var hiddenSpan=$("#hiddenSpan").val();				 
				//var amount1  =  $('#spanamtvalue').val().replace(".","");				
				//var cash= parseInt(amount1);
				//var ttt = parseFloat(amount1);
				
				//Check if return number is Zero
				if(+num==0){
					return;
				} 
				
				else{
				if(+num >0){
				//Case1
				 	if(res_code =='CAN' || removedSpacesText.length <6 ){				  
			       validate(res_code);		
					    	 
		                }
		       
		       //Case2
		         else if(res_code =='NNA'){
			    
				    	   validate(res_code);
				    	  $(document).ready(function(){         		  
            		        $("#loading").fadeOut(1000);
            	
            		      });
		                }
		        
		        //Case3
		          
		          else if(res_code ==' NA'){    	
				    	    validate(res_code);
				     	 $(document).ready(function(){         		  
            		        $("#loading").fadeOut(1000);
            	
            		      });
		
		                }
		        //case4
		        
		        else	if(res_code ==' UN'){			    	
				         validate(res_code);
				    	 $(document).ready(function(){         		  
            		        $("#loading").fadeOut(1000);
            	
            		      });
		                }
		      //case5
		       else	if(res_code ==' LC'){
				    	 
				    	   validate(res_code);
				    	 $(document).ready(function(){         		  
            		        $("#loading").fadeOut(1000);
            	
            		      }); 
		                }                           
				
				//case6
				
				else if(res_code ==' CE'){
				    	
				    	   validate(res_code);
				            $(document).ready(function(){         		  
            		        $("#loading").fadeOut(1000);
            	
            		      });  
		                }
		         //case7
		         else	if(res_code ==' TO'){
						
				    	
				    	   validate(res_code);
                           $(document).ready(function(){         		  
            		        $("#loading").fadeOut(1000);
            	
            		      });
		                }
		        //case8
		         else if(res_code ==' XC'){
				    	
				    	     validate(res_code);
				    	    $(document).ready(function(){         		  
            		        $("#loading").fadeOut(1000);
            	
            		      });
		                }
		        //case9
		        else if(res_code ==' UC'){
				    	
				    	    validate(res_code);
				    	   $(document).ready(function(){         		  
            		        $("#loading").fadeOut(1000);
            	
            		      });
		                }
		        //case10
		        else if(res_code ==' NL'){
				    	
				    	     validate(res_code);
				          $(document).ready(function(){         		  
            		        $("#loading").fadeOut(1000);
            	
            		      }); 
		                } 
		         //case11
		         
		         else	if(res_code ==' NL'){
				    	    validate(res_code);
				    	  $("#payment2").prop('disabled', false); 
						  $(document).ready(function(){         		  
            		        $("#loading").fadeOut(1000);
            	
            		      }); 
		                } 
		          //case12
		          
		          else	if(res_code ==' LB'){
				    	 
				    	     validate(res_code);
                     $(document).ready(function(){         		  
            		        $("#loading").fadeOut(1000);
            	
            		      }); 
		                }  
		         //case13
		         
		           else if(res_code =='111'){
			    
			    	    validate(res_code);
			    	   $("#payment2").prop('disabled', false); 
				    $(document).ready(function(){         		  
            		        $("#loading").fadeOut(1000);
            	
            		      });  
			    	
	                } 
	              //case14
	              
	               else	if(res_code =='201'){
			
			    	   validate(res_code);
			        $(document).ready(function(){         		  
            		        $("#loading").fadeOut(1000);
            	
            		      }); 
	                }
	             //case15
	             else	if(res_code =='127'){

				    validate(res_code);
				  $(document).ready(function(){         		  
            		        $("#loading").fadeOut(1000);
            	
            		      }); 
		                }
		                
		         //case16
		         	else	if(res_code =='118'){
				    	   validate(res_code);
				            $(document).ready(function(){         		  
            		        $("#loading").fadeOut(1000);
            	
            		      }); 
				     }
				  //case17
				  
				  else if(res_code =='000' || res_code =="001" || res_code =="003"|| res_code =="007" 
						|| res_code =="087" || res_code =="089" || res_code =="300" || res_code =="400"
						|| res_code =="500" ||  res_code =="800" ){
					 
					 
		     
					 
					 
					  
		
							
		   validate(res_code);
			    	     $(document).ready(function(){         		  
            		        $("#loading").fadeOut(1000);
            	
            		      });
			    	  
			    	  
			    	  
	
			
			    	  
			    	  
			    	   }
			    //case18
			    else	{
				    	     validate(res_code);
				    	    $(document).ready(function(){         		  
            		        $("#loading").fadeOut(1000);
            	
            		      });
				    	
		                }	    
	                                                              
				} // End Of If 
				 } //End Of Else     
                 
                 
                 
                 
         };
         
         
         
         
         
         
         
         
         
         // Get the user name and store it to prepend to messages.
         // $('#displayname').val(prompt('Enter your name:', ''));
         // Set initial focus to message input box.
         //  $('#message').focus();
         // Start the connection.
         $.connection.hub.start().done(function () {

             //alert("CONNECTION TO SERVICE ESTABLISHED!");

             $('#payment2').click(function () {
            	 var testt= "${IsATMService}";
if(testt == 'Y'){
	//alert('جارى الان عملية السداد ... من فضلك انتظر ')
}else{
	return ;
}
	
            
             
             
             
             
             
             
             
                 // Call the Send method on the hub.
            //	 alert('1111111111111111111')
         var card =  parseFloat(document.getElementById('card1').value);
         var cash=$('#cash').val();
       
        
         $('#hidden_card').val(card);
         $('#hidden_cash').val(cash);
         

            	if( parseFloat($('#card1').val())  == 0 ){
            		// alert('1');		
            		return false;
            	}
            	 // display loading image
            	 $(document).ready(function(){         		  
            		    $("#loading").fadeIn(1000);
            		    //$("#loading").fadeOut(1000);
            	
            		});
            	 
            	 
            	 

                 var amount  =  $("#card1").val();
                 var ip_port  = 5;
                 
                 if(amount == "" || ip_port == ""){
                   //  alert("Please enter the required fields")
                     return;
                 }

                 var param_txn = {
                     msg_id : "PUR",
                     ecr_no : "123",
                     ecr_receipt_no : "1234567890",
                     amount :amount,
                     field1 : "",
                     field2 : "",
                     field3 : "",
                     field4 : "",
                     field5 : "",
                     port_no_or_ip_adddress : ip_port
                 }

                 var param_check_device = {
                     port_no_or_ip_adddress : ip_port
                 }
                 // FOR CHECKING DEVICE
                  // chat.server.send("check", JSON.stringify(param_txn));

                 // SENDING  TRANSACTION
                 chat.server.send("transaction", JSON.stringify(param_txn));
                 // Clear text box and reset focus for next comment.
 
               //  $('#message').val('').focus();
             });
         });
     });
		