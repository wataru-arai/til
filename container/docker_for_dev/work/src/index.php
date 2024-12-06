<?php

$users = [];

$dsn = 'mysql:host=db;port=3306;dbname=sample';
$username = 'root';
$password = 'secret';

try {
  $pdo = new PDO($dsn, $username, $password);

  $statement = $pdo->query('select * from user');
  $statement->execute();
  while ($row = $statement->fetch()) {
    $users[] = $row;
  }

  $pdo = null;
} catch (PDOException $e) {
  echo 'データベースに接続できませんでした';
}

foreach ($users as $user) {
  echo '<p>id: ' . $user['id'] . ', user: ' . $user['name'] . '</p>';
}

$subject = 'テストメールです';
$message = 'Docker Hubはこちら -> https://hub.docker.com/';
foreach ($users as $user) {
  $success = mb_send_mail($user['email'], $subject, $message);
  if($success) {
    echo '<p>' . $user['name'] . 'にメールを送信しました</p>';
  } else {
    echo '<p>メール送信に失敗しました</p>';
  }
}
