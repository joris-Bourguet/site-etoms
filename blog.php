<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
    <title>Blog - E-toms le sac connecté</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="assets/css/style.css">
</head>


<body>
    <div class="bandeauTop">
        <a href="./index.html">LOGO</a>
        <nav>
            <ul class="top-navbar">
                <li>
                    <a href="./index.html">Accueil</a>
                </li>
                <li>
                    <a href="#">Le cartable</a>
                </li>
                <li>
                    <a href="#">La marque</a>
                </li>
                <li>
                    <a href="./blog.php">Blog</a>
                </li>
                <li>
                    <a href="#"><i class="fas fa-shopping-cart"></i></a>
                </li>
                <li>
                    <a href="./contact.html">Contactez-nous</a>
                </li>
            </ul>
        </nav>
    </div>
    <?php 
        require './assets/php/BlogClass.php';
        $article = new Article();
        $show_articles = $article->show_article();
        ?> 
        <div class="container">
            <div class="row row-cols-1 row-cols-md-2">
                <?php   
                foreach ($show_articles as $row) { ?>
                    <div class="col mb-4">
                        <div class="card">
                            <img src="<?php print $row['image'] ?>" class="card-img-top" alt="image de l'article">
                            <div class="card-body">
                                <h5 class="card-title"><?php print $row['title'] ?></h5>
                                <p class="card-text"><?php print $row['description'] ?></p>
                                <button class="btn btn-primary"><a href="<?php print $row['link'] ?>">Voir plus</a></button>
                            </div>
                                <div class="card-footer">
                                <small class="text-muted"><?php print $row['createdAt'] ?></small>
                            </div>
                        </div>
                    </div>
                <?php
                }
                ?>
            </div>
        </div>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    <script type="module" src="assets/js/app.js"></script>
</body>

</html>