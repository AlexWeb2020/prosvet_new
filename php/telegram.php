<?php

/* https://api.telegram.org/bot5224959568:AAGa-GIzNdaM60y09zbf6_zfcLQfq6XpHO0/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */
$date = $_POST['user_date'];
$auto = $_POST['user_auto'];
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];

$token = "5224959568:AAGa-GIzNdaM60y09zbf6_zfcLQfq6XpHO0";
$chat_id = "-772111884";
$arr = array(
  'Запись!'=> '',
  'Дата: ' => $date,
  'Автомобиль: ' => $auto,
  'Клиент: ' => $name,
  'Телефон: ' => $phone,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};


$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: ../index.html');
} else {
  echo "Error";
}
?>