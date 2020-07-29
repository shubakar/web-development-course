//Done: To make an item marked
$("ul").on("click", "li",function(){
	$(this).toggleClass("done");

});
//Function to delete a list item
$("ul").on("click", "span",function(){
	$(this).parent().toggleClass("done");
	$(this).fadeOut(1000,function(){
		$( "ul li:nth-child(2n)" ).toggleClass("change");
		$(this).parent().remove();
		$( "ul li:nth-child(2n)" ).toggleClass("change");
	});

});
//Function to add a List item
$("input").keypress(function(e) {
    if(e.which == 13) {
        var value=$(this).val();
        $(this).val("");
        value='<li><span><i class="fa fa-trash"></i></span> '+value+'</li>';
        console.log(value);
        $("ul").append(value);
        $( "ul li:nth-child(even)" ).addClass("change");
    }
});
//Functin to Show/Hide Input Box
$("h1").on("click",".plus", function(){
	$("input").toggleClass("hide");
});

