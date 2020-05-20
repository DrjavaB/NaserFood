/*
 * Auto-generated content from the Brackets New Project extension.
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $, window, document */

// Simple jQuery event handler
$(document).ready(function () {
	
	var wid  = window.innerWidth;
	var hei  = window.innerHeight;
	var flag = 0;

	// handle landscape screens (:
	handleRotate();
	$(window).resize(function(){
		handleRotate();
	})

	function handleRotate(){
		if ( window.innerWidth <= 1024 && window.innerHeight < window.innerWidth ){
			$('.rotate-overlay').addClass('show');
		} else {
			$('.rotate-overlay').removeClass('show');
		}
	}
	
	$(window).scroll(function () {
		
		var roll = $(window).scrollTop();
		
		
		if (roll > hei) { flag = 1; }
		if (roll < hei) { flag = 0; }
		
		if (roll > $("#group1_sub").offset().top) { $(".fader").css("display", "none"); }
		if (roll < $("#group1_sub").offset().top) {
			$(".fader").css("display", "block");
			$("#fader1").css("transform", "rotate(" + (-1) * (roll * 90) / hei + "deg)");
			$("#fader2").css("transform", "rotate(" + (-1) * (roll / 2 * 90) / hei + "deg)");
			$("#fader3").css("transform", "rotate(" + (-1) * (roll / 8 * 90) / hei + "deg)");
			$("#fader4").css("transform", "rotate(" + flag * (0 + (-1) * ((roll + hei * 2) / 4 * 90) / hei) + "deg)");
			$("#fader5").css("transform", "rotate(" + flag * (0 + (-1) * ((roll - hei / 2) / 1.5 * 90) / hei) + "deg)");
			$("#fader6").css("transform", "rotate(" + flag * (0 + (-1) * ((roll - hei) * 90) / hei) + "deg)");
		}
		
		//$('#bg1').css('top', roll/2 +'px');
		
		if (!$("#menucon").hasClass("fixed-top")) {
			if (roll > hei * 2 / 3) {
				$("#menucon").css("transform", "translateY(0%)");
			}
			else if (roll < hei * 2 / 3) {
				$("#menucon").css("transform", "translateY(-100%)");
			}
		}
		
		//menu
		
		if (roll <= $("#about").offset().top) {
			$("#mc1").addClass("selected");

			$("#mc2").removeClass("selected");
			$("#mc3").removeClass("selected");
			$("#mc4").removeClass("selected");
			$("#mc5").removeClass("selected");
			$("#mc6").removeClass("selected");
			
			$(".productbar2").removeClass("movein");
			$(".productbar2").addClass("out");
		} else if (roll > $("#about").offset().top && roll < $("#group1").offset().top) {
			$("#mc2").addClass("selected");

			$("#mc1").removeClass("selected");
			$("#mc3").removeClass("selected");
			$("#mc4").removeClass("selected");
			$("#mc5").removeClass("selected");
			$("#mc6").removeClass("selected");
			
			$(".productbar2").removeClass("movein");
			$(".productbar2").addClass("out");
		} else if (roll > $("#group1").offset().top && roll < $("#group_last_sub").offset().top + 50) {
			$("#mc3").addClass("selected");

			$("#mc1").removeClass("selected");
			$("#mc2").removeClass("selected");
			$("#mc4").removeClass("selected");
			$("#mc5").removeClass("selected");
			$("#mc6").removeClass("selected");
			
			$(".productbar2").removeClass("out");
			$(".productbar2").addClass("movein");
		} else {
			if ($("#mc4").length) {
				$("#mc4").addClass("selected");
				$("#mc5").removeClass("selected");
			} else {
				$("#mc5").addClass("selected");
			}
			
			$("#mc1").removeClass("selected");
			$("#mc2").removeClass("selected");
			$("#mc3").removeClass("selected");
			$("#mc6").removeClass("selected");
			
			$(".productbar2").removeClass("movein");
			$(".productbar2").addClass("out");
		}
		
		if ($("#cooking").length) {
			if (roll > $("#cooking").offset().top && roll < $("#news").offset().top + 50) {
				$("#mc5").addClass("selected");
				$("#mc1").removeClass("selected");
				$("#mc2").removeClass("selected");
				$("#mc4").removeClass("selected");
				$("#mc3").removeClass("selected");
				$("#mc6").removeClass("selected");
			}
		}
		
		if ($("#news").length) {
			if (roll > $("#news").offset().top + 50) {
				$("#mc6").addClass("selected");
				$("#mc1").removeClass("selected");
				$("#mc2").removeClass("selected");
				$("#mc3").removeClass("selected");
				$("#mc5").removeClass("selected");
				$("#mc4").removeClass("selected");
			}
		}
		else {
			if (roll > $("#group_last_sub").offset().top + 50) {
				$("#mc6").addClass("selected");
				$("#mc1").removeClass("selected");
				$("#mc2").removeClass("selected");
				$("#mc3").removeClass("selected");
				$("#mc5").removeClass("selected");
				$("#mc4").removeClass("selected");
			}
		}
		
	});
	
	$("#mc1").click(function () {
		$("body,html").animate({scrollTop: 0}, 1000);
	});
	$("#mc2").click(function () {
		$("body,html").animate({scrollTop: $("#about").offset().top - 100}, 1000);
	});
	$("#mc3").click(function () {
		$("body,html").animate({scrollTop: $("#group1_sub").offset().top - 100}, 1000);
	});
	$("#mc4").click(function () {
		$("body,html").animate({scrollTop: $("#cooking").offset().top - 300}, 1000);
	});
	$("#mc5").click(function () {
		$("body,html").animate({scrollTop: $("#news").offset().top - 250}, 1000);
	});
	$("#mc6").click(function () {
		$("body,html").animate({scrollTop: $("#contact").offset().top - 250}, 1000);
	});
	
	if ( $('.menu-toggle').length && $('.popup-menu').length  ){
		var menuStatus = false;
		$('.menu-toggle').on('click', function(){
			if ( !menuStatus ){
				$("#menucon").css("transform", "translateY(-100%)");
				$('.popup-menu').addClass('opened');
				$('.popup-menu .middle-nav a').each(function(index){
					var item = $('span', this);
					setTimeout(function(){
						$(item).addClass('loaded');
					}, 70 * index);
					clearTimeout();
				});
				menuStatus = !menuStatus;	
			}
		});

		$('.popup-menu').on('click', '.language', function(){
			if (menuStatus){
				$(this).toggleClass('show');
				$(this).find('a').not('.selected').each(function(){
					$(this).fadeToggle(100)
				});
			}
		});

		$('.popup-menu .close').on('click', function(){
			if ( menuStatus ){
				$("#menucon").css("transform", "translateY(0%)");
				$('.popup-menu .middle-nav a span').removeClass('loaded');
				$('.popup-menu').removeClass('opened');
				$('.popup-menu .language').removeClass('show');
				$('.popup-menu .language').find('a').not('.selected').each(function(){

					$(this).fadeOut(100);
				});
				menuStatus = !menuStatus;
			}
		});

        if( $('.mobile-cellmenu').length ){
            $('.mobile-cellmenu').on('click', function(e){
                e.preventDefault();
                var target = $(this).attr('href');
                if (menuStatus){
                    $('.popup-menu .middle-nav a span').removeClass('loaded');
                    $('.popup-menu').removeClass('opened');
                    menuStatus = !menuStatus;
				}
                $("body,html").animate({scrollTop: $(target).offset().top - 250}, 1500);
            });
		}
	}
	
	$(window).resize(function () {
		
		wid = window.innerWidth;
		hei = window.innerHeight;
		
		$("#fader1").css("transform", "rotate(" + (-1) * (roll * 90) / hei + "deg)");
		$("#fader2").css("transform", "rotate(" + (-1) * (roll / 2 * 90) / hei + "deg)");
		$("#fader3").css("transform", "rotate(" + (-1) * (roll / 8 * 90) / hei + "deg)");
		
		$("#fader4").css("transform", "rotate(" + flag * (0 + (-1) * ((roll + hei * 2) / 4 * 90) / hei) + "deg)");
		$("#fader5").css("transform", "rotate(" + flag * (0 + (-1) * ((roll - hei / 2) / 1.5 * 90) / hei) + "deg)");
		$("#fader6").css("transform", "rotate(" + flag * (0 + (-1) * ((roll - hei) * 90) / hei) + "deg)");
		
	});
	
	$(document).on("mousemove", function (event) {
		var x = event.pageX - (wid / 2);
		var y = event.pageY;
		$("#tomato1").css("margin-top", (y / 70) - 150 + "px");
		$("#tomato1").css("margin-left", (x / 70) - 190 + "px");
		$("#tomato2").css("margin-top", (y / 20) - 100 + "px");
		$("#tomato2").css("margin-left", (-1) * (x / 20) - 50 + "px");
		$("#tomato3").css("top", (y / 10) + "px");
		$("#tomato3").css("left", (x / 10) - 250 + "px");
		$("#hat").css("margin-top", (y / 30) - 270 + "px");
		$("#hat").css("margin-left", (x / 30) - 130 + "px");
		$("#salt").css("margin-bottom", (y / 40) + -70 + "px");
		$("#salt").css("left", (x / 40) + 40 + "px");
	});
});

function onScreen(elem) {
	if (elem.length === 0) {
		return null;
	}
	var $window         = $(window);
	var viewport_top    = $window.scrollTop();
	var viewport_height = $window.height();
	var viewport_bottom = viewport_top + viewport_height;
	var $elem           = $(elem);
	var top             = $elem.offset().top;
	var height          = $elem.height();
	var bottom          = top + height;
	
	var itIs = (top >= viewport_top && top < viewport_bottom) ||
	           (bottom > viewport_top && bottom <= viewport_bottom) ||
	           (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom);
	
	if (itIs) {
		return elem;
	}
	else {
		return null;
	}
}

function isOnScreen(elem) {
	return onScreen(elem) !== null;
}

$(document).ready(function () {
	var groups = [];
	for (var i = 0; i < 20; i++) {
		groups.push(i);
	}
	
	$(".pbarcell").on("click", function () {
		$("body,html").animate({scrollTop: $(".products2[data-icon=\"" + $(this).data("icon") + "\"]").offset().top - 200}, 1000);
	});
	
	window.addEventListener("scroll", function (e) {
		for (var item in groups) {
			var itemOnScreen = onScreen($("[data-group-loop=\"" + item + "\"]"));
			if (itemOnScreen !== null) {
				$(".pbarcell").removeClass("active");
				$(".pbarcell[data-icon=\"" + itemOnScreen.data("icon") + "\"]").addClass("active");
			}
		}
	});
});
