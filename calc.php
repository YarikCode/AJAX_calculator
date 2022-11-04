<?php

$num1 = $_GET['num1'];
$num2 = $_GET['num2'];
$action = $_GET['action'];

if($action == "addition"){
    echo $num1 + $num2;
}
else if($action == "deduction"){
    echo $num1 - $num2;
}
else if($action == "multiply"){
    echo $num1 * $num2;
}
else if($action == "division"){
    echo $num1 / $num2;
}

?>