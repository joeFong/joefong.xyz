<?php 
	function my_scripts() {
		wp_enqueue_style( 'joefong_style', get_template_directory_uri() . '/css/main.css');
		wp_enqueue_script('joefong_js', get_template_directory_uri() . '/js/main.js' );
		wp_enqueue_script('joefong_resume_js', get_template_directory_uri() . '/js/resume-jf/dist/resume-jf.js' );
		wp_enqueue_script('joefong_resume_font_awesome', "https://kit.fontawesome.com/879e882147.js");
		wp_enqueue_script('joefong_resume_code_view', "https://pagecdn.io/lib/ace/1.4.6/ace.js" );
	}
	add_action( 'wp_enqueue_scripts', 'my_scripts' );
?>