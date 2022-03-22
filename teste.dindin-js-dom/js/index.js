// 1.1- O header deve ter cor de fundo #2E948A.

let header = document.getElementsByTagName('header');
// console.log(header[0]);
// document.getElementsByTagName('header').style.backgroundColor = '#2E948A';
header[0].style.backgroundColor = '#2E948A';

// 1.2 - No menu do header, está faltando o link do item Cursos que deve redirecionar para cursos.
let linkCursos = document.querySelector('#menu_opcoes nav a:nth-child(1)');
// console.log(linkCursos);
linkCursos.setAttribute('href', 'cursos.html');

// 2.1 - Centralizar Banner 
let introducao = document.getElementById("introducao");

introducao.style.justifyContent = 'space-around';
//console.log(introducao);

// 2.2  Na etapa de depoimentos, o título deveria ser "O que falam sobre nós".
document.querySelector(".titulo.depoimento h3").innerHTML = "O que falam sobre nós";

//outra forma de fazer
//let tituloDepoimento = document.querySelector('.titulo.depoimento h3');
//tituloDepoimento.innerHTML = ("O que falam sobre nós")


//2.3. Na etapa de blog, o título deveria ser "Mais conteúdo pra você".

let tituloBlog = document.querySelectorAll('.titulo h3')[1];
tituloBlog.innerHTML = "Mais conteúdo pra você"
    //console.log(tituloBlog)

//2.4 Todos os textos que estiverem com a classe .titulo devem apresentar todas as letras maiúsculas.

let maiusculo = document.querySelectorAll('.titulo')
maiusculo.forEach(item => {
    item.style.textTransform = "uppercase";
})

// var maiuscula = document.querySelectorAll(".titulo")
// maiuscula.forEach(item => {
//     item.style.textTransform = "uppercase";
// })

//2.5 o botão "ver todos os posts" deve ter um link que direciona para o arquivo blog.html

let posts = document.getElementById('todos_posts')
posts.setAttribute('href', 'blog.html')
console.log(posts)

//2.6 Adicionar um novo curso na section que contém o id investimentos_poupando_independencia:

let texto = document.createElement('div')
texto.innerHTML =
    '<div id="independencia">' +
    '<img src="imagens/independencia_financeira.png" width="180px" alt="Independência Financeira"/>' +
    '<h2>Independência Financeira</h2>' +
    '        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat      nulla     ariatur.</p>' +
    '<a class="comecar_agora" href="./curso.html">começar agora</a>' +
    '</div>'
let divprimeiro = document.querySelector('#investimentos')

divprimeiro.insertAdjacentElement("beforebegin", texto)


//página contato 

//3.1 O formulário não está funcionando, o atributo action deve mandar para url sucesso.html

//document.querySelector('form').action = 'sucesso.html'

//3.2. Após o campo de email, precisamos de um novo campo para que o usuário adicione também um número de telefone.

// let telefone = document.createElement(input)
// texto.innerHTML = 
//    <input type = "number" required placeholder = "Digite seu número de telefone">

//    </input>

// 3.3. O campo de mensagem está ultrapassando o tamanho do elemento pai.
// Podemos resolver adicionando o atributo box-sizing: border-box;

// document.querySelector('#formulario').setAttribute('box-sizing', 'border-box')
//textarea.style.boxSizing = "border-box";




// 3.4. O botão não está do tamanho adequado, precisa ter uma largura maior;


//3. 5. Abaixo da section do formulário, adicione uma seção de comentário igual a
// página Home.