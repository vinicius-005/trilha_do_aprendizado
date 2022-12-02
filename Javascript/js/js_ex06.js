var dia
dia=parseInt(prompt("Digite um número correspondente ao dia da semana"))

switch(dia){
    case 1:
        {
            alert("Domingo")
            break
        }
    case 2:
        {
            alert("Segunda-feira")
            break
        }
    case 3:
        {
            alert("Terã-feira")
            break
        }
    case 4:
        {
            alert("Quarta-feira")
            break
        }
    case 5:
        {
            alert("Quinta-feira")
            break
        }
    case 6:
        {
            alert("Sexta-feira")
            break
        }
    case 7:
        {
            alert("Sábado")
        }
    default:{
        alert("Opção inválida")
    }
}