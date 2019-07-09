$(document).ready(function () {
	$('#tabs_button').on('click', function (e) {
		$('#tabs_button > li > a').toggleClass('active',false);
		$(e.target).addClass('active');
	});
	$('#logOut').on('click', function () {
		$(location).attr('href','./login.html');
	});
});