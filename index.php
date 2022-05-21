<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="description" content="I am Elisee, a full-stack developper">
    <title>EJstudio</title>
    <!-- Styles-->
    <link rel="stylesheet" href="./css/main.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
    <!-- Favicon-->
    <link rel="icon" type="image/png" href="./assets/images/favicon.png">
    <script
  src="https://code.jquery.com/jquery-3.5.1.js"
  integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
  crossorigin="anonymous"></script>
  </head>
<body>
 <style>
     .app.fixed{
         position:fixed;
         width:100%;
         height:100%;
         overflow:visible;
     }
 </style>   
<div class="app">
    <?php include("views/navbar.html");?>
    <div class="main-content landing">
        <?php include("views/hero.html");?>
    </div>
    
</body>
</html>