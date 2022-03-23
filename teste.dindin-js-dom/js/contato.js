// 1.1- O header deve ter cor de fundo #2E948A.

let header = document.getElementsByTagName('header');
// console.log(header[0]);
// document.getElementsByTagName('header').style.backgroundColor = '#2E948A';
header[0].style.backgroundColor = '#2E948A';

// 1.2 - No menu do header, está faltando o link do item Cursos que deve redirecionar para cursos.
let linkCursos = document.querySelector('#menu_opcoes nav a:nth-child(1)');
// console.log(linkCursos);
linkCursos.setAttribute('href', 'cursos.html');


//página contato 

//3.1 O formulário não está funcionando, o atributo action deve mandar para url sucesso.html

document.querySelector('form').action = 'sucesso.html'

//3.2. Após o campo de email, precisamos de um novo campo para que o usuário adicione também um número de telefone.
let inputTelefone = document.createElement("input");
inputTelefone.setAttribute("type", "tel");
inputTelefone.setAttribute("placeholder", "Digite seu telefone");
let textRef = document.querySelector("textarea");
let formPai = document.querySelector("form");
formPai.insertBefore(inputTelefone, textRef);


// 3.3. O campo de mensagem está ultrapassando o tamanho do elemento pai.
// Podemos resolver adicionando o atributo box-sizing: border-box;

let textoform = document.querySelector('textarea')
textoform.style.boxSizing = 'border-box';


// 3.4. O botão não está do tamanho adequado, precisa ter uma largura maior;

document.getElementsByTagName('button')[0].style.width = 'auto';

//3. 5. Abaixo da section do formulário, adicione uma seção de comentário igual a
// página Home.

let tituloComentario = document.createElement('section');
tituloComentario.setAttribute('class', 'titulo depoimento');
tituloComentario.innerHTML = `<h3>Depoimentos</h3>`;

let comentarios = document.createElement('section');
comentarios.setAttribute('id', 'falam_sobre');
comentarios.innerHTML = `<section id='falam_sobre'>

<div class="depoimentos">
    <img src="imagens/icon-wally.png" width="80px" height="80px" alt="depoimentos da dindim">
    <p>
        ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.”
        <br>
        <br> Wally, 25
    </p>
</div>

<div class="depoimentos">
    <img src="imagens/icon-jaden.png" width="80px" height="80px" alt="depoimentos da dindim">
    <p>
        ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.”
        <br>
        <br> Jaden Smith, 23
    </p>
</div>

<div class="depoimentos">
    <img src="imagens/icon-whoopi.png" width="80px" height="80px" alt="depoimentos da dindim">
    <p>
        ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.”
        <br>
        <br> Whoopi Goldberg, 37
    </p>
</div>

<div class="depoimentos">
    <img src="imagens/icon-jane.png" width="80px" height="80px" alt="depoimentos da dindim">
    <p>
        ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.”
        <br>
        <br> Janes Joplin, 29
    </p>
</div>
</section>`

let main = document.querySelector('main');
main.append(tituloComentario, comentarios);
let comentarioHtml = document.querySelector('head');
comentarioHtml.innerHTML +=
    `<link rel="stylesheet" href="css/index.css">`