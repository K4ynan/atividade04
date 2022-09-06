function media() {
    var nota1 = Number(document.getElementsByTagName("input")[0].value);
    var nota2 = Number(document.getElementsByTagName("input")[1].value);
    var media = (nota1 + nota2) / 2;
    if (media >= 7 && media < 10) {
        document.querySelector('p').innerHTML = `O aluno está aprovado.`;
    } else if (media >= 10) {
        document.querySelector('p').innerHTML = `O aluno tirou a nota ${media} e está aprovado com distinção`;
    } else {
        document.querySelector('p').innerHTML = `O aluno está reprovado.`;
    }
}

function numero() {
    var n1 = Number(document.getElementsByTagName("n1")[0].value);
    var n2 = Number(document.getElementsByTagName("n2")[1].value);
    var n3 = Number(document.getElementsByTagName("n3")[2].value);
    if (n1 > n2 && n1 > n3) {
        document.querySelector('p').innerHTML = `${n1}`;
    } if (n2 > n1 && n2 > n3) {
        document.querySelector('p').innerHTML = `${n2}`;
    }
    if (n3 > n1 && n3 > n2) {
        document.querySelector('p').innerHTML = `${n3}`;
    }
}