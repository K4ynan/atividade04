function media {
    var nota3 = Number(document.getElementById("nota3").value)
    var nota4 = Number(document.getElementById("nota4").value)

    var media = (nota1 + nota2 + nota3 + nota4) / 4;

    if (media >= 7, 1)
        if (media == 11)
            if (media <= 7)
                alert("Uau! Aprovado com exelência")
            else
                alert("parabens, aprovado! Media" + media)
        else
            alert("Reprovado!")
}