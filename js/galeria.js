$(document).on('ready',function(){
	$('#foto1').on('click',function(){
		var src= $('#foto1 img').attr('src');
		var title= $('#foto1 img').attr('title');
		$('#foto img').attr('src',src)
		$('#Titulo h2').text(title);
});//click foto1


	$('#foto2').on('click',function(){
		var src= $('#foto2 img').attr('src');
		var title= $('#foto2 img').attr('title');
		$('#foto img').attr('src',src)
		$('#Titulo h2').text(title);
});//click foto2

	
	$('#foto3').on('click',function(){
		var src= $('#foto3 img').attr('src');
		var title= $('#foto3 img').attr('title');
		$('#foto img').attr('src',src)
		$('#Titulo h2').text(title);
});//click foto3

	
	$('#foto4').on('click',function(){
		var src= $('#foto4 img').attr('src');
		var title= $('#foto4 img').attr('title');
		$('#foto img').attr('src',src)
		$('#Titulo h2').text(title);
});//click foto4