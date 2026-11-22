const corpoTabela = document.getElementById("corpoTabela")
const formulario = document.getElementById("formulario")

const doces = [
    {nome: "Brigadeiro", sabor: "Chocolate", preco: 3.50},
    {nome: "Beijinho", sabor: "Coco", preco: 3.00},
    {nome: "Brownie", sabor: "Chocolate", preco: 6.00},
    {nome: "Pudim", sabor: "Leite Condensado", preco: 8.00},
]

function exibir(){
    corpoTabela.innerHTML = ""

    for (doce of doces){
        // Transforma 12.5 em "12,50" e 8.99 em "8,99"
        const precoFormatado = Number(doce.preco).toFixed(2).replace(".", ",")
        corpoTabela.innerHTML +=
        `<tr>
            <td>${doce.nome}</td>
            <td>${doce.sabor}</td>
            <td>R$ ${precoFormatado}</td>
        </tr>`
    }
}

exibir()

formulario.addEventListener("submit", function(evento){
    evento.preventDefault()

    const valorNome = document.getElementById("campoNome").value
    const valorSabor = document.getElementById("campoSabor").value
    let valorPreco = document.getElementById("campoPreco").value

    // Troca a vírgula por ponto pra o JS entender: 8,99 vira 8.99
    valorPreco = valorPreco.replace(",", ".")
    valorPreco = Number(valorPreco)

    if (isNaN(valorPreco)) {
        alert("Digite um preço válido! Ex: 12.50 ou 8,99")
        return
    }

    const x = {nome: valorNome, sabor: valorSabor, preco: valorPreco}

    doces.push(x)

    exibir()

    formulario.reset()
})