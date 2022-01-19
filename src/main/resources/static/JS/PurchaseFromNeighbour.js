
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
console.log("asdasd");

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
function refreshParent()
{
	
	window.opener.location.reload(true);
	
	
}