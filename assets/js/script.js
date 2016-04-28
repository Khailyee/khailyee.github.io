
$(document).ready(function () {

	$("#button").click(function () {
		$("#about-container").show();
	});

	$("#about-overlay").click(function () {
		$("#about-container").hide();
	});

  $("#sidebar-button").click(function () {
  if ($(".sidebar-container").hasClass("sidebar-active")) {
    $("#sidebar-button").removeClass("button-active");
    $(".sidebar-container").removeClass("sidebar-active");
  } else {
    $("#sidebar-button").addClass("button-active");
    $(".sidebar-container").addClass("sidebar-active");
    setTimeout(function() {
      $('body').addClass('no-scroll');
    }, 300);
  }
  });

  $(".background-lay").click(function () {
  if ($(".sidebar-container").hasClass("sidebar-active")) {
    $("#sidebar-button").removeClass("button-active");
    $(".sidebar-container").removeClass("sidebar-active");
    $(".background-lay").removeClass("wrapper-active");
  }
  });

  $(".page-wrapper").click(function () {
  if ($(".sidebar-container").hasClass("sidebar-active")) {
    $("#sidebar-button").removeClass("button-active");
    $(".sidebar-container").removeClass("sidebar-active");
    $(".london-overlay").removeClass("wrapper-active");
  }
  });

});
