<?
$domain = htmlentities($_REQUEST['domain']);

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <link href="http://tools.storn.es/estil.css" rel="stylesheet" type="text/css" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cookie police</title>
    <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet">
  </head>

  <body>
    <div class="container">

      <div class="page-header">
        <h1>Politica de cookies</h1>
        <?if($domain){?>
        	<p class="lead">Para el sitio web <?=$domain?></p>
        <?}?>
      </div>

      <h3></h3>
<p>
Este Portal utiliza cookies (archivos de información que se guardan en el ordenador de quien accede a la página) en la medida imprescindible para el correcto funcionamiento y visualización del sitio web por parte del usuario. 
</p>
<p>
Las cookies utilizadas tienen una vigencia temporal limitada y en ningún caso se usan para recoger información de carácter personal.
</p>
<p>

<table border="1"  bordercolor="#FFFFFF" cellspacing="0" cellpadding="0" hspace="5px" >
  <tr style="color:#FFF">
    <td align="center" valign="top" bgcolor="#FF9900"><h4><strong>TIPOLOGÍA</strong></h4></td>
    <td align="center" valign="top" bgcolor="#FF9900"><h4><strong>COOKIE</strong></h4></td>
    <td align="center" valign="top" bgcolor="#FF9933"><h4><strong>FINALIDAD</strong></h4></td>
    <td align="center" valign="top" bgcolor="#FF9900"><h4><strong>MÁS INFORMACIÓN</strong></h4></td>
  </tr>
  <tr>
    <td style="padding:10px; color:#FFF" valign="top" bgcolor="#FF9933"><p><br />
      <strong>Analíticas</strong></p></td>
    <td valign="top" bgcolor="#f8f7f1" style="padding:10px"><p><br />
      Google    Analytics (Google Inc)</p></td>
    <td valign="top" bgcolor="#f8f7f1" style="padding:10px"><br />
    <p>
      Obtener y    analizar la información de la navegación del usuario por nuestro sitio web    para mejorar nuestros servicios. </p>
<p>Google    Analytics es una herramienta gratuita de análisis web de Google que    principalmente nos permite conocer cómo interactúan los usuarios con nuestro    sitio web. Asimismo, habilita cookies en el dominio de nuestro sitio web y    utiliza un conjunto de cookies denominadas &quot;__utma&quot; y    &quot;__utmz&quot; para recopilar información de forma anónima y elaborar    informes de tendencias de sitios web sin identificar a usuarios individuales. </p>
      <p>La    información anónima que obtiene esta aplicación está relacionada por ejemplo    con la hora de la visita, el número de usuarios que nos visitan, la    frecuencia y la reincidencia de las visitas, el navegador que usan, o el    operador o tipo de terminal desde el que se realiza la visita, etc. Esta información la utilizamos para mejorar    nuestra página web, detectar nuevas necesidades y valorar las mejoras    a introducir con la finalidad de prestar un mejor servicio a los usuarios que    nos visitan. </p></td>
    <td valign="top" bgcolor="#f8f7f1" style="padding:10px"><p><br />
      <a href="http://www.google.com/intl/es/analytics/privacyoverview.html" target="_blank">http://www.google.com/intl/es/analytics/privacyoverview.html</a></p>
      <p><a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage" target="_blank">
      	https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage</a></p>
      <p>&nbsp;</p></td>
  </tr>
  <tr>
    <td rowspan="2" valign="top" bgcolor="#FF9933" style="padding:10px; color:#FFF"><br />
      <p><strong>Publicitarias</strong></p>
      <br />
      <p>&nbsp;</p></td>
    
  </tr>
    <tr>
    <td valign="top" bgcolor="#f8f7f1" style="padding:10px"><p><br />
      Google  Adsense</p></td>
    <td valign="top" bgcolor="#f8f7f1" style="padding:10px"><p><br />
      Google  usa la <a href="https://support.google.com/adsense/answer/answer.py?answer=2839090" target="_blank">cookie de DoubleClick</a> en los anuncios publicados en los sitios web de sus  socios, como, por ejemplo, los sitios web que muestran anuncios de AdSense o  participan en las redes publicitarias certificadas de Google con el fin de  mejorar la publicidad. Suele utilizarse para orientar la publicidad según el  contenido que es relevante para un usuario, mejorar los informes de rendimiento  de la campaña y evitar mostrar anuncios que el usuario ya haya visto. Las  cookies de DoubleClick no contienen información de identificación personal; no  guarda otros datos en la cookie y ningún dato permite la identificación  personal<br />
      <br />
    </p></td>
    <td valign="top" bgcolor="#f8f7f1" style="padding:10px"><p><br />
        <a href="https://support.google.com/adsense/
        answer/48182?sourceid=aso&amp;subid=ww-ww-et-asui&amp;medium=link" target="_blank">https://support.google.com/adsense/answer/48182</a></p>
      <p><a href="https://support.google.com/adsense/answer/2839090" target="_blank">https://support.google.com/adsense/answer/2839090</a></p>
      <p><a href="http://www.google.com/policies/technologies/ads/" target="_blank">http://www.google.com/policies/technologies/ads/</a></p>
  	</td>
  </tr>
</table>

</p>
      <p>
Para obtener más información sobre cookies, visita: <a href='http://www.aboutcookies.org/' target='_blank'>aboutcookies.org</a>
      </p>

<!--https://www.facebook.com/help/cookies/-->





    </div> <!-- /container -->

    <script type="text/javascript" src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-35510556-7', 'storn.es');
  ga('send', 'pageview');

</script>

  </body>
</html>

