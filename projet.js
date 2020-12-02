function validemail(){
    var text;
    var y=document.getElementById("email").value;
    if (!y.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){
        alert("l'addresse mail n'est pas bonne");
        return false;
    }
    else{
        alert("l'addresse mail est bonne");
        return false;
    }

    return true;
}


var cuisto= document.getElementsByName("cuisto");
    cuisto[0].onclick = function(){
        if(this.value == "budget" && this.checked){
            alert("cocher")
            document.location.href="http://google.com";
        } 
    }
    cuisto[1].onclick=function (){
        if (this.value=="rapide" && this.checked){
            alert("deuxième cocher");
            document.location.href="https://fr.wikipedia.org/wiki/Wiki"
        }
    }
    cuisto[2].onclick=function(){
        if(this.value=="monde" && this.checked){
            alert("troisième");
        }
    }
}