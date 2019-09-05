import Breakpoints from '../breakpoints.js';

/*
 * Demo -----------------------------
 */
(function($){
	/*
	 * Create instance & list your breakpoints here
	 */
	let breakpoints = new Breakpoints([
			[	'xs',	0	],
			[	'sm',	480	],
			[	'md',	768	],
			[	'lg',	1024	],
			[	'xl',	1280	],
			[	'x2',	1440	],
			[	'x3',	1690	],
			[	'x4',	1920	],
			[	'x5',	2560	],
		]);
		
	$(document).ready(function(){
		let runcode = function(){
			/*
			 * METHODS
			 * 
			 * .between()
			 * @param (str) breakpoint1
			 * @param (str) breakpoint2
			 */
			$('.is').html(breakpoints.is('x3') || 'false');
			$('.lte').html(breakpoints.lte('x3') || 'false');
			$('.gte').html(breakpoints.gte('x3') || 'false');
			$('.between').html(breakpoints.between('md', 'x3') || 'false');
			$('.window_w').text(window.innerWidth);
		};
		runcode();
		$(window).resize(runcode);
		
		$('hr').wrap('<div class="hr">');
	});
})(jQuery);