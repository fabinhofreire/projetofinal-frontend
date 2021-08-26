//Aguarda o DOM estar pronto para executar os scripts jQuery
$(document).ready(function(){

  $("#loginFa").submit(function(event){

    var usuario = $("#inputUsuario").val()
    var senha = $("#inputSenha").val()


    // Testar se usuario e senha estão corretos
    if(usuario == "titas" && senha == "1234"){

      //add classes CSS (alert) na DIV
      $("#mensagem").addClass("alert alert-success alert-dismissible fade show")

      //remove a class alert-warning caso ela exista
      $("#mensagem").removeClass("alert-warning")

      //exibe a mensagem para o usuario dentro do alert
      $("#mensagem").text("Usuário logado!").show().fadeOut(3000)

    }else{
      //add classes CSS (alert) na DIV
      $("#mensagem").addClass("alert alert-warning alert-dismissible fade show")

      //remove a class alert-success caso ela exista
      $("#mensagem").removeClass("alert-success")

      //exibe a mensagem para o usuario dentro do alert
      $("#mensagem").text("Usuário ou senha inválida!").show().fadeOut(3000)
      event.preventDefault()//bloqueia o evento de submit

    }
  })
})