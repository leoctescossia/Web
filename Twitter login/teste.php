<?php

    $host = 'localhost';
    $bancodedados = 'emails';
    $usuario = 'root';
    $senha = '';

    $conexao = new mysqli($host, $usuario, $senha, $bancodedados)

    if($conexao -> connect_errno){
        echo "Erro";
    }
    else{
        echo "Funcionou";
    }

?>