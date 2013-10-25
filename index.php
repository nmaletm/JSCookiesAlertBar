<?

$code = '<script src="http://tools.storn.es/cookies/alertUser.js" id="script-cookie-bar" data-lang="es" data-position="top"></script>';

?>
<html>
	<head>
		<title>Cookie-law compilance for Europe</title>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<link rel="stylesheet" type="text/css" media="all" href="http://tools.storn.es/estil.css" />
	</head>
	<body class="simplePage">

<?=$code?>

<h1>Barra politica de cookies</h1>

<h3>Codi:</h3>
<p>
	<pre style="background: #ccc; padding: 10px;">
<?=htmlentities($code)?>
	</pre>
</p>
<h3>Atributs:</h3>
<p>
<ul>
	<li><b>data-lang</b> ca, es, en (default: en)</li>
	<li><b>data-position</b>: top, bottom (default: top)</li>
</ul>
</p>
	</body>
</html>