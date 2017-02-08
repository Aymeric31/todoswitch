$(document).ready(function(){
	alert("Ouai c'est pas faux!");
	console.log("Bienvenue utilisateur");
	$("#todo-list").append("<li>" + "AVANT DE COMMENCER ANALYSER LE CODE" + "</li>")

	$(function ($){
		"use strict";
	});

	var ENTER_KEY = 13;
	var ESCAPE_KEY = 27;



	$('.ajout').click(function(){
		var tache=$("#new-todo").val();
		$("#todo-list").append("<li><input type=checkbox>" + tache + "</li>")
	});




});