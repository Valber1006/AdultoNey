function myfunc(){

    var randomNumber = Math.floor(Math.random()*100);
    var name = document.getElementById("formName").value;
  document.getElementById("final").innerHTML=( name + " Você é " + randomNumber +"%" + " Adulto Ney")
}

function reload() {
    location.reload();
}