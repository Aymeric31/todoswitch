$(document).ready(function(){
	alert("Bienvenue")
	console.log("Bienvenue utilisateur");
	$("#todo-list").append("<li>" + "Ma todo-list" + "</li>")

	$('.ajout').click(function(){
		var tache=$("#new-todo").val();
		$("#todo-list").append("<li><input type=checkbox>" + tache + "</li>")
	});
	$(".supp").on("click", function() {
		$("#main input:checked").parent().remove();
	});

});