<?php 
	function my_scripts() {
		wp_enqueue_style( 'joefong_style', get_template_directory_uri() . '/css/main.css');
		//wp_enqueue_script('joefong_js', get_template_directory_uri() . '/js/main.js' );
	}
	add_action( 'wp_enqueue_scripts', 'my_scripts' );
?>