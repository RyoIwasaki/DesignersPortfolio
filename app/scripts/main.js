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
		$(entryUserLeft).append($("<a>").attr("href", "javascript:void(0)").append($("<div>").addClass("image")));
	var enetryUserRight = $("<div>").addClass("left");
		$(enetryUserRight).append($("<a>").addClass("name").attr("href", "javascript:void(0)").append("田中太郎"));
		$(enetryUserRight).append($("<a>").addClass("project").attr("href", "javascript:void(0)").append("CyberAgent"));
	$(entryUser).append(entryUserLeft).append(enetryUserRight);


	$(base).append(image).append(entryContent).append(entryUser);
	$(".entry_wrap").append(base);

	/**
	 * DATA ATTACK
	 */
	$(".entry").attr({
		"data-test": "hogehoge"
	});
};



picmo.detailPopupAdd = function(data){
	/**　仮パラメーター **/
	var testParam = ["test", "test", "test"];
	/**　仮パラメーター **/
	var popupBase = $("<div>").addClass("popup_wrap");
	var detailWrap = $("<div>").addClass("detail_wrap");

	var leftBase = $("<div>").addClass("left");

	var mainWrap = $("<div>").addClass("main_wrap");
	var mainInfo = $("<div>").addClass("main_info");
		$(mainInfo).append($("<span>").addClass("title").append("タイトル"));
	var iconWrap = $("<div>").addClass("icon_wrap");
		$(iconWrap).append($("<p>").addClass("favorite").append($("<a>").attr("href", "javascript:void(0)").append("12")));
		$(iconWrap).append($("<p>").addClass("watch").append($("<a>").attr("href", "javascript:void(0)").append("100")));
		$(mainInfo).append(iconWrap);
		$(mainInfo).append($("<div>").addClass("iine").append($("<a>").attr("href", "javascript:void(0)").append("いいね")));
	var imageWrap = $("<div>").addClass("image_wrap").append($("<img>").addClass("image").attr({
		src: "images/icon.png",
		height: "100",
		width: "238"
	}))
	$(mainWrap).append(mainInfo).append(imageWrap);

	var commentWrap = $("<div>").addClass("comment_wrap");

	/** detailComment **/
		var detailComment = $("<div>").addClass("detail_comment");
		
		var userIcon = $("<div>").addClass("user_icon").append($("<a>").attr("href", "javascript:void(0)").append($("<div>").addClass("image")));
		var userInfo = $("<div>").addClass("user_info");
		var userWrap = $("<div>").addClass("user_wrap");
			$(userWrap).append($("<p>").addClass("name").append($("<a>").attr("href", "javascript:void(0)").append("田中太郎")))
			$(userWrap).append($("<p>").addClass("project").append($("<a>").attr("href", "javascript:void(0)").append("CyberAgent")))
			$(userWrap).append($("<p>").addClass("comment").append($("<a>").attr("href", "javascript:void(0)").append("はろーはろーはろーはろーはろーはろーはろーはろーはろーはろーはろーはろーはろーはろーはろーはろーはろーはろーはろーはろーはろーはろーはろーはろー")))

			var tagWrap = $("<div>").addClass("tag_wrap");

			picmo.detailPopupAdd.tagAdd = function(data){
				var tagAdd = $("<p>").addClass("tag").append($("<a>").attr("href", "javascript:void(0)").append("#" + "田中太郎"));
				$(tagWrap).append(tagAdd);
			}

			for(var i=0; testParam.length>i; i++){
				picmo.detailPopupAdd.tagAdd();
			}
			$(userWrap).append(tagWrap);


		$(userInfo).append(userWrap);
		$(detailComment).append(userIcon).append(userInfo);
	/** detailComment **/

	$(commentWrap).append(detailComment);

	/** otherComment **/
		picmo.detailPopupAdd.otherCommentAdd = function(data){
			var otherComment = $("<div>").addClass("other_comment detail_comment");
			var otherUserIcon = $("<div>").addClass("user_icon").append($("<a>").attr("href", "javascript:void(0)").append($("<div>").addClass("image")));
			var otherUserInfo = $("<div>").addClass("user_info");
			var otherUserWrap = $("<div>").addClass("user_wrap");
				$(otherUserWrap).append($("<p>").addClass("name").append($("<a>").attr("href", "javascript:void(0)").append("田中太郎")))
				$(otherUserWrap).append($("<p>").addClass("project").append($("<a>").attr("href", "javascript:void(0)").append("CyberAgent")))
				$(otherUserWrap).append($("<p>").addClass("comment").append($("<a>").attr("href", "javascript:void(0)").append("はろーはろーはろーはろーはろーはろーはろーはろーはろーはろーはろーはろーはろーはろーはろーはろーはろーはろーはろーはろーはろーはろーはろーはろー")))

			$(otherUserInfo).append(otherUserWrap);
			$(otherComment).append(otherUserIcon).append(otherUserInfo);

			$(commentWrap).append(otherComment);
		};

		for(var i=0; testParam.length>i; i++){
			picmo.detailPopupAdd.otherCommentAdd();
		}
	/** otherComment **/



	/** comment_input **/
		var commentInput = $("<div>").addClass("comment_input detail_comment");
		var inputUserIcon = $("<div>").addClass("user_icon").append($("<a>").attr("href", "javascript:void(0)").append($("<div>").addClass("image")));
		var inputUserInfo = $("<div>").addClass("user_info");
		var inputUserWrap = $("<div>").addClass("user_wrap");
			$(inputUserWrap).append($("<p>").addClass("name").append($("<a>").attr("href", "javascript:void(0)").append("田中太郎")))
			$(inputUserWrap).append($("<p>").addClass("project").append($("<a>").attr("href", "javascript:void(0)").append("CyberAgent")))
			var inputText = $("<div>").addClass("input_text");
				$(inputText).append("<textarea>").attr({
					name: "text",
					id: "",
					cols: "30",
					rows: "10",
					placeholder: "コメントする"
				})
			$(inputUserWrap).append(inputText);

		$(inputUserInfo).append(inputUserWrap);
		$(commentInput).append(inputUserIcon).append(inputUserInfo);

	/** comment_input **/

	$(commentWrap).append(commentInput);

	var rightBase = $("<div>").addClass("right");
		$(rightBase).append($("<div>").addClass("user_info show_window"));
		$(rightBase).append($("<div>").addClass("recomend_tag show_window"));

	$(leftBase).append(mainWrap).append(commentWrap);
	$(rightBase).append();
	$(detailWrap).append(leftBase).append(rightBase);
	$(popupBase).append(detailWrap);
	$("body").append(popupBase).hide().fadeIn(500);
};

picmo.mainTimelineAJAX = function(){
	$.ajax({
		type: 'GET',
		url: 'data.jsonp',
		dataType: 'jsonp',
		jsonpCallback: 'workOutlines',
		success: function(data){
			console.log("ajax success!!! ☆great☆");
			picmo.mainTimelineAdd();
			/*
			$.each(data, function(i, getData){
				console.log(getData.name);
				//mainTimelineAdd(getData);
			});
			mainTimelineAdd(data);
			*/
		},
		error: function(){
			console.log("!!!!!!!!!!ajax error!!!!!!!!!!");
		}
	});

	return false;
};

picmo.startLoad = function(){
	for(var i=0; i<10; i++){
		picmo.mainTimelineAJAX();
	}

	return false;
};

picmo.getScrollTop = function(){
	var onlyFlag = false;
	var windowBottom = document.body.scrollHeight - ($(window).height() + $(window).scrollTop());

	if(windowBottom <= 100){
		onlyFlag = true;
		picmo.mainTimelineAJAX();
	}
};









/*
 * 実行Function
 *
 */

$(window).on("load", picmo.startLoad);
$(window).on("scroll", picmo.getScrollTop);


//test
$(".header_title").on("click", function(){
	picmo.detailPopupAdd();
});


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
	console.log("画面上に画像がON");

	if(dragEventFlag){
		dragEventFlag = false;
		$("body").append("<div class='popup_wrap'><p class='drag'>DRAG IN</p></div>").hide().fadeIn(500);
	}
});

$("body").delegate(".popup_wrap", "dragleave", function(){
	dragEventFlag = true;
	$(".popup_wrap").remove();
});
$("body").delegate(".popup_wrap", "click", function(){
	$(this).remove();
})