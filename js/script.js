function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var formAno = document.getElementById("anoNasc");
    var res = document.getElementById("res");
    if(formAno.value.length == 0 || formAno.value.length > ano){
        alert("Verifique os dados informados!");
    }else{
        var formSexo = document.getElementsByName("radSexo");
        var idade = ano - formAno.value;
        var genero = "";
        var img = document.createElement('img');
        img.setAttribute("id", "foto");
        if(formSexo[0].checked){
            genero = "homem";
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute("src", "imgs/menino.jpg");
            }else if(idade < 20){
                //Jovem
                img.setAttribute("src", "imgs/piá.jpg");
            }else if(idade < 50){
                //Adulto
                img.setAttribute("src", "imgs/homem.jpg");
            }else{
                //Idoso
                img.setAttribute("src", "imgs/idoso.jpg");
            }
        }else{
            genero = "mulher";
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute("src", "imgs/menina.jpg");
            }else if(idade < 20){
                //Jovem
                img.setAttribute("src", "imgs/guria.jpg");
            }else if(idade < 50){
                //Adulta
                img.setAttribute("src", "imgs/mulher.jpg");
            }else{
                //Idosa
                img.setAttribute("src", "imgs/idosa.jpg");
            }
        }
        res.style.textAlign = "center";
        res.innerHTML = "Detectamos " + genero + " com " + idade + " anos." + "<br>";
        res.appendChild(img);
    }
}