// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

var key = 'AIzaSyBxDR9n9N0Hg1C2-7_5F1hDGjs4gu61bso'

var id = 'xfG15i_uQvc'

$(document).on('turbolinks:load', function() {
	$.ajax({
		url: 'https://www.googleapis.com/youtube/v3/videos?id=' + id + '&key=' + key + '&part=snippet,contentDetails',
		dataType: 'json',
		async: false,
		success: function(data) {
			title = data.items[0].snippet.title;
			desc = data.items[0].snippet.description;
		}
	});

	// youtube player
	var tag = document.createElement('script');
	tag.src = "https://www.youtube.com/player_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	window.onYouTubePlayerAPIReady = function() {
		player = new YT.Player('player', {
			videoId: id
		});

		$('#title').text(title);
		$('#desc').text(desc);
	}

	$.ajax({
		url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=xfG15i_uQvc&type=video&key=AIzaSyBxDR9n9N0Hg1C2-7_5F1hDGjs4gu61bso',
		dataType: 'json',
		async: false,
		success: function(data) {
			$.each(data.items, function(i, vid) {
				$('#side').append('<li>' + vid.snippet.title + '</li>');
			});
		}
	});
});
