/* lastUpdated:05-01-2015 */

(function( win, doc, undefined ){

picmo.mainTimelineAdd = function(data){
	/** 仮パラメータ **/
	var tags = ["hey", "hey", "hey"];
	/** 仮パラメータ **/

	var base = $("<article>").addClass("entry");

	var image = $("<img>").attr({
		src: "images/icon.png",
		height: "100",
		width: "238"
	});

	/**
	 * entry_content ELEMENT
	 */
	var entryContent = $("<div>").addClass("entry_content");
	$(entryContent).append($("<p>").addClass("entry_title").append($("<a>").attr("href", "javascript:void(0)").append("作品名")));
	$(entryContent).append($("<p>").addClass("entry_comment").append("コメントコメントコメントコメントコメント"));

	var tagsElement = $("<div>").addClass("tag_wrap");
	for(var i = 0; tags.length > i; i++){
		var tag = $("<p>").addClass("tag").append($("<a>").attr("href", "javascript:void(0)").append("#" + "タグ"));
		$(tagsElement).append(tag);
	}
	$(entryContent).append(tagsElement);

	var iconElement = $("<div>").addClass("icon_wrap");
		$(iconElement).append($("<p>").addClass("favorite").append($("<a>").attr("href", "javascript:void(0)").append("12")))
		$(iconElement).append($("<p>").addClass("watch").append($("<a>").attr("href", "javascript:void(0)").append("100")))
	$(entryContent).append(iconElement);

	/**
	 * entry_user ELEMENT
	 */
	var entryUser = $("<div>").addClass("entry_user");
	var entryUserLeft = $("<div>").addClass("left");
		$(entryUserLeft).append($("<a>").attr("href", "javascript:void(0)").append($("<div>").addClass("image")))
	var enetryUserRight = $("<div>").addClass("left")
		$(enetryUserRight).append($("<a>").addClass("name").attr("href", "javascript:void(0)").append("田中太郎"))
		$(enetryUserRight).append($("<a>").addClass("project").attr("href", "javascript:void(0)").append("CyberAgent"))
	$(entryUser).append(entryUserLeft).append(enetryUserRight);


	$(base).append(image).append(entryContent).append(entryUser);
	$(".entry_wrap").append(base);
}

picmo.mainTimelineAJAX = function(){
	$.ajax({
		type: 'GET',
		cache: false,
		url: 'data.json',
		datatype: 'json',
		success: function(data){
			console.log("ajax success!!! ☆great☆")
			/*
			$.each(data, function(i, getData){
				console.log(getData.name);
				//mainTimelineAdd(getData);
			});
			mainTimelineAdd(data);
			*/
			for(var i=0; 3>i; i++){
				picmo.mainTimelineAdd();
			}
		},
		error: function(){
			console.log("!!!!!!!!!!ajax error!!!!!!!!!!");
		}
	});

	return false;
}

picmo.startLoad = function(){
	for(var i=0; i<3; i++){
		picmo.mainTimelineAJAX();
	}

	return false;
}

picmo.getScrollTop = function(){
	var onlyFlag = false;
	var windowBottom = document.body.scrollHeight - ($(window).height() + $(window).scrollTop())

	if(windowBottom <= 50){
		onlyFlag = true;
		picmo.mainTimelineAJAX();
	}
}


var dragEventFlag = true;
$("body").on('drop', function(event) {
	var file = event.originalEvent.dataTransfer.files[0];
	var formData = new FormData();
	formData.append('file', file);
	
	$.ajax({
		type: "POST",
		url: "",
		contentType: false,
		processData: false,
		data:formData,
		success: function(response) {
			console.log('アップロードに成功しました');
			console.log(response);
		},
		error: function(xhr, error) {
			console.log('アップデートに失敗しました');
			console.log(error);
		}
	});

	return false;
		
}).on('dragover', function(event) {
 	console.log("画面上に画像がON")

 	if(dragEventFlag){
 		dragEventFlag = false;
		$("body").append("<div class='upload_window'><p>DRAG IN</p></div>");
	}
})

$("body").delegate(".upload_window", "dragleave", function(){
	dragEventFlag = true;
	$(".upload_window").remove();
})




/*
 * 実行Function
 *
 */

$(window).load(function(){
	picmo.startLoad();
})
$(window).on("scroll", picmo.getScrollTop);

})( window, document );