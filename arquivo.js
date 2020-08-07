

function mensagemA() {
    
    var userA = document.createElement("p");
    var chat1 = document.getElementById("conversaA").value;
    userA.innerHTML= ("<strong>Pessoa A diz:</strong>" + "   " + chat1);
    document.getElementById("mensagens").appendChild(userA);
    if(conversaA.value === "socorro"){
        window.alert('BOMBEIROS!!! BOMBEIROS!!!');
    }
  }

function mensagemB() {

    var userB =  document.createElement("p");
    var chat2 = document.getElementById("conversaB").value;
    userB.innerHTML= ("<strong>Pessoa B diz:</strong>" + "   " + chat2);
    document.getElementById("mensagens").appendChild(userB);
    if(conversaB.value === "socorro"){
        window.alert('BOMBEIROS!!! BOMBEIROS!!!');
    }
}

function limpar(){
    var apagarA = document.getElementById("mensagens");
    apagarA.remove();
    location.reload();
}