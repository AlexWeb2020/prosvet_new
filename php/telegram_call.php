<?php

/* https://api.telegram.org/bot5224959568:AAGa-GIzNdaM60y09zbf6_zfcLQfq6XpHO0/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$nameCall = $_POST['user_name-call'];
$phoneCall = $_POST['user_phone-call'];
$token = "5224959568:AAGa-GIzNdaM60y09zbf6_zfcLQfq6XpHO0";
$chat_id = "-772111884";

$arrCall = array(
  'Перезвон!' =>'',
  'Клиент: ' => $nameCall,
  'Телефон: ' => $phoneCall,
);

foreach($arrCall as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};


$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: ../index.html');
} else {
  echo "Error";
}
?>