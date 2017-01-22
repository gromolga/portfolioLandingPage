$(document).ready(function() {

$(".owl-carousel").owlCarousel(
  	{
	responsive : {
		0 : {
      items : 1,
      nav : true,
    }
  },
  navText : ""
});


	$(".top-phone .wrapper .tab").click(function()
	{$(".top-phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".top-phone .tab-item").hide().eq($(this).index()).fadeIn();
});

	$(".bottom-phone .wrapper .tab").click(function()
	{$(".bottom-phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".bottom-phone .tab-item").hide().eq($(this).index()).fadeIn()
});



function wResize
(){
	$("header").css("min-height", $(window).height());

}
wResize();
$(window).resize(function(){wResize()})

$.stellar({
	responsive: true,
	horizontalOffset: 60
});

$(".tabs_header .wrapper .tab").click(function()
	{$(".tabs_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tabs_header .tab-item").hide().eq($(this).index()).fadeIn()
});

$(".contacts_top .tab").click(function()
	{$(".contacts_top .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".s_contacts .tab-item").hide().eq($(this).index()).fadeIn()
});
	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));


		//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};


//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function(e) {
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				var magnificPopup = $.magnificPopup.instance; 
				magnificPopup.close(); 
			}, 1000);
		});
	});

$(".popup").magnificPopup({type:"image"});
$(".popup_c").magnificPopup({});

});

$(window).load(function() {
	$(".top_header").animated("fadeInDown", "fadeOut");
	$(".tabs_header .wrapper").animated("flipInY", "fadeOut");
	$(".profi_item").animated("fadeInRight", "fadeOut");
	$(".s_profi form").animated("zoomInRight", "fadeOut");
	$(".s_back h3").animated("fadeInUp", "fadeOut");
	$("footer").animated("fadeInUp", "fadeOut");
});





	



