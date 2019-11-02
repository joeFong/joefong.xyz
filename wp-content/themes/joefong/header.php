<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage joefong
 * @since 1.0.0
 */
?><!doctype html>
<html <?php language_attributes(); ?>>
<head>

	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-151320261-1"></script>
	<script>
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());

	gtag('config', 'UA-151320261-1');
	</script>

	<meta name="title" content="Joe Fong - A Full Stack Developer ">
	<meta name="description" content="I am a Software Developer with strong interests in web technologies in microservices and web components. ">
	<meta name="keywords" content="Software Developer, Resume, Joe Fong, Web Components, React, React Native, Web Developer, Web Developing, LitHtml, LitElement, VueJS, Full Stack Developing, Git, Opensource.">
	<meta name="robots" content="index, follow">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="language" content="English">
	<meta name="revisit-after" content="15 days">
	<meta name="author" content="Joe Fong">

	<meta property="og:title" content="Joe Fong - A Full Stack Developer ">
	<meta property="og:site_name" content="Joe Fong">
	<meta property="og:url" content="https://joefong.xyz">
	<meta property="og:description" content="I am a Software Developer with strong interests in web technologies in microservices and web components.">

	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="profile" href="https://gmpg.org/xfn/11" />
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">

	<div id="content" class="site-content">
