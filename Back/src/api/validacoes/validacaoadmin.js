var tentativas = 3; // Variável com número de tentativas
// A função executa após o click no botão login

function validarUsuario(){
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
        if ( usuario == "admin" && senha == "admin#123"){
        alert ("Login realizado com sucesso");
        window.location = "dashboard.html"; // Redirecionamento para página do dashboard
        return false;
        }
        else{
        tentativas --;// Decrementing by one.
        alert("Você realizou "+tentativas+" tentativas;");
    // Desabilitar quando atingir o número máximo de tentativas
    if( tentativas == 0){
    document.getElementById("usuario").disabled = true;
    document.getElementById("senha").disabled = true;
    document.getElementById("submit").disabled = true;
return false;
    }
    }
}