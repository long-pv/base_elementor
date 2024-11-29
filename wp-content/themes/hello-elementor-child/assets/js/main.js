(function ($, window) {
	var main_js = function ($scope, $) {
		// Open and close the mobile menu
		$(".header .header__toggleItem").on("click", function () {
			menu_open_sp();
		});

		function menu_open_sp() {
			$("body").toggleClass("mobile-menu-open");
			$(".header__menusp").toggleClass("active");
			$(".header__toggleItem").toggle();
		}

		$(".menu-item-has-children > .dropdown-arrow").click(function (e) {
			e.preventDefault();
			var $submenu = $(this).siblings(".sub-menu");

			if ($submenu.length) {
				$submenu.stop(true, true).slideToggle();
				$(this).parent().toggleClass("open");
				$(".sub-menu").not($submenu).slideUp();
				$(".menu-item-has-children").not($(this).parent()).removeClass("open");
			}
		});
		// end mobile menu
	};

	// tích hợp thêm vào trong elementor
	$(window).on("elementor/frontend/init", function () {
		elementorFrontend.hooks.addAction("frontend/element_ready/global", function ($scope, $) {
			main_js($scope, $);
		});
	});
})(jQuery, window);
