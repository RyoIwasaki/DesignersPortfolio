


$(".search").on("click", function(){
	console.log($(this));
});


$(".header_title a").on("click", function(){
	$.ajax({
		type: 'GET',
		cache: false,
		url: 'data.json',
		datatype: 'json',
		success: function(data){
			$.each(data, function(i, item){
				console.log(item.name);
			});
		},
		error: function(){
			console.log("!!!!!!!!!!ajax error!!!!!!!!!!");
		}
	});
});