/*! CREDIT: https://medium.com/@mariusc23/hide-header-on-scroll-down-show-on-scroll-up-67bbaae9a78c#.v77rs2jif */

import $ from 'jquery';

const cssPrefix = ($el, rule, value, prValue) => {
	['-webkit-', '-moz-', '-ms-', '-o-', ''].forEach((prefix) => {
		$el.css(prefix + rule, (prValue ? prefix : '') + value);
	});
}

export function hideOnScroll({navbarSelector, hidingClass, pollInterval = 200}) {
	const delta = 5;
	const $navbar = $(navbarSelector);

	let didScroll;
	let lastScrollTop = 0;

	let navbarHeight = $navbar.outerHeight();

	if (!hidingClass) {
		cssPrefix($navbar, 'transition-property', 'transform', true);
	}

	$(window).scroll(() => didScroll = true);

	function hasScrolled() {
		const st = $(window).scrollTop();

		// Make sure they scroll more than delta
		if (Math.abs(lastScrollTop - st) <= delta) {
			return;
		}

		// If they scrolled down and are past the navbar, hide it
		// This is necessary so you never see what is "behind" the navbar.
		if (st > lastScrollTop && st > navbarHeight){
			// Scroll Down
			if (hidingClass) {
				$navbar.addClass(hidingClass);
			} else {
				cssPrefix($navbar, 'transform', 'translateY(-100%)');
			}
		} else {
			// Scroll Up
			if (st + $(window).height() < $(document).height()) {
				if (hidingClass) {
					$navbar.removeClass(hidingClass);
				} else {
					cssPrefix($navbar, 'transform', 'translateY(0)');
				}
			}
		}
		lastScrollTop = st;
	}

	setInterval(() => {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, pollInterval);
}

/*! call hideOnScroll on document.ready */
export default function onReady_hideOnScroll(...args) {
	$(() => hideOnScroll.call(null, args));
}
