// Hide submenus
$('#body-row .collapse').collapse('hide'); 

// Collapse/Expand icon
$('#collapse-icon').addClass('fa-angle-double-right'); 

// Collapse click
$('[data-toggle=sidebar-colapse]').click(function() {
    SidebarCollapse();
});

function SidebarCollapse () {
    $('.menu-collapsed').toggleClass('d-none');
    $('.sidebar-submenu').toggleClass('d-none');
    $('.submenu-icon').toggleClass('d-none');
    $('#sidebar-container').toggleClass('sidebar-expanded sidebar-collapsed');
    
    // Treating d-flex/d-none on separators with title
    var SeparatorTitle = $('.sidebar-separator-title');
    if ( SeparatorTitle.hasClass('d-flex') ) {
        SeparatorTitle.removeClass('d-flex');
    } else {
        SeparatorTitle.addClass('d-flex');
    }
    
    // Collapse/Expand icon
    $('#collapse-icon').toggleClass('fa-angle-double-left fa-angle-double-right');
}
//////////////////Product page (save- Edite-cancel-Update-Delete)///////////////////////
//$("form").submit(function(e){
//        e.preventDefault();
//		
//        var pname = $("input[name='pname']").val();
//        var pprice = $("input[name='pprice']").val();
//        var id = $("input[name='id']").val();
//     
//	 
//        $(".data-table tbody").append("<tr data-pname='"+pname+"' data-pprice='"+pprice+"' data-id='"+id+"'><td>"+pname+"</td><td>"+pprice+"</td><td>"+id+"</td><td><button class='btn btn-info btn-xs btn-edit'>تعديل</button><button class='btn btn-danger btn-xs btn-delete'>حذف</button></td></tr>");
//   
//        $("input[name='pname']").val('');
//        $("input[name='pprice']").val('');
//        $("input[name='id']").val('');
//    });
//   
//    $("body").on("click", ".btn-delete", function(){ //Delete Button
//        $(this).parents("tr").remove();
//    });
//      
//    $("body").on("click", ".btn-edit", function(){ //Edite Button
//        var pname = $(this).parents("tr").attr('data-pname');
//        var pprice = $(this).parents("tr").attr('data-pprice');
//        var id = $(this).parents("tr").attr('data-id');
//    
//	
//        $(this).parents("tr").find("td:eq(0)").html('<input name="edit_pname" value="'+pname+'">');
//        $(this).parents("tr").find("td:eq(1)").html('<input name="edit_pprice" value="'+pprice+'">');
//        $(this).parents("tr").find("td:eq(2)").html('<input name="edit_id" value="'+id+'">');
//    
//        $(this).parents("tr").find("td:eq(3)").prepend("<button class='btn btn-info btn-xs btn-update'>تحديث</button><button class='btn btn-warning btn-xs btn-cancel'>الغاء</button>")
//        $(this).hide();
//    });
//   
//    $("body").on("click", ".btn-cancel", function(){  //Cancel Button
//        var pname = $(this).parents("tr").attr('data-pname');
//        var pprice = $(this).parents("tr").attr('data-pprice');
//        var id = $(this).parents("tr").attr('data-id');
//    
//        $(this).parents("tr").find("td:eq(0)").text(pname);
//        $(this).parents("tr").find("td:eq(1)").text(pprice);
//        $(this).parents("tr").find("td:eq(2)").text(id);
//  
//        $(this).parents("tr").find(".btn-edit").show();
//        $(this).parents("tr").find(".btn-update").remove();
//        $(this).parents("tr").find(".btn-cancel").remove();
//    });
//   
//    $("body").on("click", ".btn-update", function(){ //Update
//        var pname = $(this).parents("tr").find("input[name='edit_pname']").val();
//        var pprice = $(this).parents("tr").find("input[name='edit_pprice']").val();
//        var id = $(this).parents("tr").find("input[name='edit_id']").val();
//    
//        $(this).parents("tr").find("td:eq(0)").text(pname);
//        $(this).parents("tr").find("td:eq(1)").text(pprice);
//        $(this).parents("tr").find("td:eq(2)").text(id);
//     
//        $(this).parents("tr").attr('data-pname', pname);
//        $(this).parents("tr").attr('data-pprice', pprice);
//        $(this).parents("tr").attr('data-id', id);
//    
//        $(this).parents("tr").find(".btn-edit").show();
//        $(this).parents("tr").find(".btn-cancel").remove();
//        $(this).parents("tr").find(".btn-update").remove();
//    });
