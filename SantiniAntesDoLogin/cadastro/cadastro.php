<?php
if(!empty($_POST))
{
    $nome = $_POST['nome'];
    $cpf = $_POST['cpf'];
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    include_once('conexao.php');

    try {
        $system = $conn->prepare("INSERT INTO cliente (nome, cpf, email, senha)
                                    VALUES (:nome, :cpf, :email, :senha)");

        $system->bindParam(':nome', $nome);
        $system->bindParam(':cpf', $cpf);
        $system->bindParam(':email', $email);
        $system->bindParam(':senha', $senha);

        $system->execute();

        header( "refresh:0;url=http://localhost/SantiniProjeto/SantiniAntesDoLogin/Site/" );
       
    } catch (PDOException $e) {
        echo "Erro ao cadastrar: " . $e->getMessage();
    }
    $conn = null;
}
?>