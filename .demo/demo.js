import Breakpoints from '../breakpoints.js';

/*
 * Demo -----------------------------
 */
(function($){
	/*
	 * Create instance & list your breakpoints here
	 */
	let breakpoints = new Breakpoints();
		
	$(document).ready(function(){
		let runcode = function(){
			/*
			 * METHODS
			 * 
			 * // Returns the breakpoint label
			 * .get()
			 * 
			 * Returns true or false
			 * 
			 * .between()
			 * @param (str) breakpoint1
			 * @param (str) breakpoint2
			 *
			 * .is()
			 * @param (str) breakpoint
			 *
			 * .gte()
			 * @param (str) breakpoint
			 *
			 * .lte()
			 * @param (str) breakpoint
			 */
			$('.get').html(breakpoints.get());
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