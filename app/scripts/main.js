picmo.mainTimelineAdd = function(data){
	/** param **/
	var workId				= data.workId,
		thumbnailAddress	= data.thumbnailAddress,
		titleString			= data.title,
		captionString		= data.caption,
		tagList				= data.tagList,
		likeNum				= data.like,
		watchNum			= data.watch,
		likeJudge			= data.isLiked,
		minProIcon			= data.miniProfile.iconAddress,
		miniProUserId		= data.miniProfile.userId,
		miniProUserName		= data.miniProfile.userName,
		miniProDepertment	= data.miniProfile.userDepartment;


	var base = $("<article>").addClass("entry");

	/**
	 * image ELEMENT
	 */
	var image = $("<div>").addClass("image").css({
		"background": "url(" + thumbnailAddress +") no-repeat",
		"background-size": "contain",
		"height": "100",
		"width": "238"
	});
	$(image).append($("<a>").attr("href", "javascript:void(0)"));


	/**
	 * entry_content ELEMENT
	 */
	var entryContent = $("<div>").addClass("entry_content");
	$(entryContent).append($("<p>").addClass("entry_title").append($("<a>").attr("href", "javascript:void(0)").append(titleString)));
	$(entryContent).append($("<p>").addClass("entry_comment").append(captionString));

	var tagsElement = $("<div>").addClass("tag_wrap");
	for(var i = 0; tagList.length > i; i++){
		var tag = $("<p>").addClass("tag").append($("<a>").attr("href", "javascript:void(0)").append("#" + tagList[i]));
		$(tagsElement).append(tag);
	}
	$(entryContent).append(tagsElement);

	var iconElement = $("<div>").addClass("icon_wrap");
		$(iconElement).append($("<p>").addClass("favorite").append($("<a>").attr("href", "javascript:void(0)").append(likeNum)));
		$(iconElement).append($("<p>").addClass("watch").append($("<a>").attr("href", "javascript:void(0)").append(watchNum)));
	$(entryContent).append(iconElement);

	/**
	 * entry_user ELEMENT
	 */
	var entryUser = $("<div>").addClass("entry_user");
	var entryUserLeft = $("<div>").addClass("left");
		var miniProIcon = $("<div>").addClass("image").css({
			"background": "url(" + minProIcon +") no-repeat",
			"background-size": "contain"
		})
		$(miniProIcon).append($("<a>").attr("href", "javascript:void(0)"));
		$(entryUserLeft).append(miniProIcon);

	var enetryUserRight = $("<div>").addClass("right");
		$(enetryUserRight).append($("<a>").addClass("name").attr("href", "javascript:void(0)").append("田中太郎"));
		$(enetryUserRight).append($("<a>").addClass("project").attr("href", "javascript:void(0)").append("CyberAgent"));
	$(entryUser).append(entryUserLeft).append(enetryUserRight);


	$(base).append(image).append(entryContent).append(entryUser);
	$(base).attr({
		"data-workid": workId
	});
	$(".entry_wrap").append(base);
};



picmo.detailPopupAdd = function(data){
	/**　仮パラメーター **/
	var testParam = ["test", "test", "test"];
	/**　仮パラメーター **/

	/** param **/
	//var 
	/** param **/

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
			$(userWrap).append($("<p>").addClass("name").append($("<a>").attr("href", "javascript:void(0)").append("田中太郎")));
			$(userWrap).append($("<p>").addClass("project").append($("<a>").attr("href", "javascript:void(0)").append("CyberAgent")));
			$(userWrap).append($("<p>").addClass("comment").append($("<a>").attr("href", "javascript:void(0)").append("はろーはろーはろーはろーはろーはろーはろーはろーはろーはろーはろーはろーはろーはろーはろーはろーはろーはろーはろーはろーはろーはろーはろーはろー")));

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

picmo.mainTimelineAJAX = function(workId){
	$.ajax({
		type: 'GET',
		url: 'data.json',
		data: workId,
		dataType: 'json',
		success: function(data){
			console.log("ajax success!!! ☆great☆");
			//picmo.mainTimelineAdd(data);
			console.log(data.workOutlines)
			
			$.each(data.workOutlines, function(i, getData){
				picmo.mainTimelineAdd(getData);
			});
		},
		error: function(jqXHR, textStatus, errorThrown) {
			console.log("エラー：" + textStatus);
			console.log("テキスト：" + jqXHR.responseText);
		}
	});

	return false;
};

picmo.detailPopupAJAX = function(workId) {
	$.ajax({
		type: 'GET',
		url: 'data.json',
		data: workId,
		dataType: 'json',
		success: function(data){
			console.log("ajax success!!! ☆great☆");
			//picmo.mainTimelineAdd(data);
			console.log(data.workOutlines)
			
			$.each(data.workOutlines, function(i, getData){
				picmo.detailPopupAdd(getData);
			});
		},
		error: function(jqXHR, textStatus, errorThrown) {
			console.log("エラー：" + textStatus);
			console.log("テキスト：" + jqXHR.responseText);
		}
	});

	return false;
};

picmo.startLoad = function(){
	// for(var i=0; i<10; i++){
	// 	picmo.mainTimelineAJAX();
	// }
	picmo.mainTimelineAJAX();
	return false;
};

picmo.getScrollTop = function(lastWorkId){
	var onlyFlag = false;
	var windowBottom = document.body.scrollHeight - ($(window).height() + $(window).scrollTop());

	if(windowBottom <= 100){
		onlyFlag = true;
		picmo.mainTimelineAJAX(lastWorkId);
	}
};









/*
 * 実行Function
 *
 */

$(window).on("load", picmo.startLoad);
$(window).on("scroll", function(){
	var lastWorkIdGet = $(".entry").last().data("workid");
	var lastWorkId = {"lastWorkId": lastWorkIdGet};
	picmo.getScrollTop(lastWorkId);
});

$("body").delegate(".entry .image", "click", function(){
	var thisWorkIdGet = $(this).parent().data("workid");
	var thisWorkId = {"lastWorkId": thisWorkId};
	picmo.detailPopupAdd(thisWorkId);
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