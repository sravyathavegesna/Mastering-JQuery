$(document).ready(function(){
	console.log("ready");
	$.getJSON('https://api.myjson.com/bins/gwgnt', function(data){
		var allIceCreams = data.menu.icecreams,
			allIceCreamsIndex;

		$.each(allIceCreams, function(index, value){
			allIceCreamsIndex = allIceCreams[index];
			$('#allIceCreamsID').append('<div class="col-sm-4 col-lg-4 col-md-4">'+
                        '<div class="thumbnail">'+
                            '<img src="'+allIceCreamsIndex.imgPath+'" alt="">'+
                            '<div class="caption">'+
                                '<h4 class="pull-right">$'+allIceCreamsIndex.price+'</h4>'+
                                '<h4><a href="#">'+allIceCreamsIndex.name+'</a>'+
                                '</h4>'+
                                '<p>'+allIceCreamsIndex.description+'</p>'+
                            '</div>'+
                            '<div class="ratings">'+
                                '<p class="pull-right">'+allIceCreamsIndex.reviews+' reviews</p>'+
                                '<p id="displayRatingsID">'+
                                    '<span class="glyphicon glyphicon-star"></span>'+
                                    '<span class="glyphicon glyphicon-star"></span>'+
                                    '<span class="glyphicon glyphicon-star"></span>'+
                                    '<span class="glyphicon glyphicon-star"></span>'+
                                    '<span class="glyphicon glyphicon-star"></span>'+
   									
                                '</p>'+
                            '</div>'+
                        '</div>'+
                    '</div>');
		});
	});
});