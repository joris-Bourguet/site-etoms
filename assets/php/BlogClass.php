<?php 
    class Article {
        public $bdd;
        protected $id;
        protected $title;
        protected $description;
        protected $image;
        protected $createdAt;

        public function __construct()
        {
            $this->bdd = new PDO('mysql:host=localhost;dbname=sac-etoms;charset=utf8', 'root', '');   
            $this->createdAt = new DateTime('now');
        }

        public function nouvel_article($title, $description, $image, $createdAt){
            if (empty($title) || empty($description) || empty($image) || empty($createdAt)) { # Si jamais il manque un argument, la fonction ne s'exécute pas
                echo "il manque un argument";
                return;
            }
            $this->bdd->exec("INSERT INTO blog(title, description, image, createdAt) VALUES('$title', '$description', '$image', '$createdAt')");
        }    

        public function show_article(){
            $articles = $this->bdd->query('SELECT * FROM blog');
            return $articles->fetchAll(\PDO::FETCH_ASSOC);
        }
    }
   
?>