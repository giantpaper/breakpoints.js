<!DOCTYPE html>
<html>
	<head>
		<title>giantpaper/breakpoints.js</title>
		<meta charset="utf-8">
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
		<link rel="stylesheet" href="main.css">
	</head>
	<body>

		<header>
			<h1>breakpoint.js</h1>
	
			<p>Based off Bootstrap's breakpoint mixins -- made for Javascript!</p>
			
			<p>Does not need jQuery. (Only using it for demo purposes)</p>
		</header>
		<section id="setup" class="container">
			<p>Your window width: <span class="window_w"></span>px</p>
			
			<pre><code><?php code(function(){ ?>
// Import Breakpoints class
import Breakpoints from './breakpoints.js';

// Create a new instance and list your breakpoints
var breakpoint = new Breakpoints([
  [  'xs',  0  ],
  [  'sm',  480  ],
  [  'md',  768  ],
  ...
]);

// Resize your browser window to test!

// get current breakpoint
breakpoint.get() === <code class="get"></code>

// if current breakpoint is xlarge 3
breakpoint.is('x3') === <code class="is"></code>

// if current breakpoint is greater than or equal to xlarge 3
breakpoint.gte('x3') === <code class="gte"></code>

// if current breakpoint is less than or equal to xlarge 3
breakpoint.lte('x3') === <code class="lte"></code>

// if current breakpoint is between medium and xlarge 3
breakpoint.between('md', 'x3') === <code class="between"></code>
		<?php }); ?>
</code></pre></section>
		<script
			  src="https://code.jquery.com/jquery-3.4.1.min.js"
			  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
			  crossorigin="anonymous"></script>
		<script type="text/javascript" src="demo.min.js"></script>
		
	</body>
</html>
<?php

function code($code) {
	ob_start();
	$code();
	$output = ob_get_contents();
	ob_get_clean();
	
	echo trim(str_replace("\t", "  ", $output));
}

?>