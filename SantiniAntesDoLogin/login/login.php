<?php
if(!empty($_POST))
{
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    include_once('conexao.php');
    try{
      
      $system = $conn->prepare('SELECT * FROM cliente where email = :email and senha = :senha');
      $system->bindParam(':email', $email);
      $system->bindParam(':senha', $senha);
      $system->execute();
    
      while($row = $system->fetch()){
         
          
          header( "refresh:0;url=http://localhost/SantiniProjeto/SantiniPosLogin/Site/" );
      ?>
        
    <?php
    }
}
catch(PDOException $e)
    {
        echo 'ERROR: '.$e->getMesssage();
    }
}
?>
  

