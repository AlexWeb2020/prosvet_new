<?php
 /* Если нет соедениния с mysql тогда установить */
 if (!isset($connect)){
   $connect = new PDO ("mysql:host=localhost; dbname=prosvet_moscow; charset=utf8",'root','');
 }

if (isset($_POST['username'])){
  /* создание переменных с типами данных из формы переданных методом POST для дальнейшей записи в БД */
  $username = $_POST['username'];
  $review = $_POST['review'];
  $date = date('d-m-Y H:i'); /* $date = date('d-m-Y H:i') */

  /* заполнение табл mysql данными отправленными через форму */
  $query = $connect->query("INSERT INTO prosvet_moscow.reviews (username, review, date) VALUES('$username','$review','$date')");

  if ($query) {
    echo "Спасибо за Ваш отзыв {$username}!";
  } else {
    echo "<pre>";
    var_dump($connect->errorInfo());
    echo "</pre>";
  }
}
?>

<script type="text/javascript">
  document.location.replace("../index.php")
</script>