<?php
    $email=$_POST['exampleInputEmail1'];
    $password=$_POST['exampleInputPassword1'];

    $conn = new mysqli('localhost',"root','','netflix');
    if($conn->connect_error)


?>