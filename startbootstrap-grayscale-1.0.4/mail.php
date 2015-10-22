<?php

/*
 * Form data handling
 */
$kuda='ofitserov.vladimir@gmail.com';//куда отправлять почту?
$zagolovok='Новый заказ на распил';
$headers='Content-type: text; charset="utf-8"';

if ($_POST) {
    $tel = $_POST['tel'];
    $name = $_POST['name'];
    if (mail($kuda, $zagolovok, $name, $tel, $headers)) {
        echo "<div class='alert alert-success' role='alert'>Ваша заявка отправлена!</div>";
    }
}    ?>

