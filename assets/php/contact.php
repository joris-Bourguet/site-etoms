<?php 
    $nom = $_POST['name'];
    $prenom = $_POST['lastName'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $error_message = "Des informations sont manquantes ou incorrectes";

    if ($nom && $prenom && $email && $message) {
        echo "Nom : " .  $nom . " Prenom : " . $prenom . " Email : " . $email . " Phone : " . $phone . " Message : " . $message; 
    } else {
        echo $error_message;
        return $error_message;
    }

    $to = "Admin <jorisbourguet30@gmail.com>";
    $subject = "Contact form E-toms";
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-type: text/html; charset=iso-8859-1';
    $success = mail($to, $subject, $message, implode("\r\n", $headers));
    if ($success) {
        echo "mail envoyé";
    }else {
        echo "une erreur est survenu réessayez plus tard";
    }
?>