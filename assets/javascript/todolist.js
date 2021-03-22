$("li").click(function(){
	$(this).toggleClass("complete")
})

$("span").click(function(){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
})
//agregar el contenido del input a la lista
$("input[type=text]").keypress(function(event){
	//filtrar para que solo se active cuando aprietan enter
	if(event.key == "Enter"){
		$("ul").append("<li><span><i class='fas fa-trash-alt' aria-hidden='true'></i></span>"+ $(this).val() + "</li>");
		//se borra el contenido del input
		$(this).val("");
		event.stopPropagation();
	}
	//añadir el efecto de tachado de los item completados
		$("ul").on("click","li",function(){
			$(this).toggleClass("completado")
		});
		//borrar los item completados
		$("ul").on("click","span",function(event){
			$(this).parent().fadeOut(500,function(){
				$(this).remove();
			});
			event.stopPropagation()
		});
})
$("*.fa-atom*").click(function(){
	$("input").slideToggle()
})
