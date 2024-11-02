import express from "express";

const host = "0.0.0.0";
const porta = 3000;
const app = express();//aplicação web que utiliza HTTP

function paginaInicial(requisicao, resposta){
    resposta.send(` <h1>Seja bem vindo!</h1>
                    <br/>
                    <h2>Primeiros passos para o desenvolvimento de aplicação web</h2>
                    <h3>Página inicial</h3>
                `);
}
app.get("/", paginaInicial);//http://localhost:3000/ <== é a raiz da aplicação

function mostrarSobre(requisicao, resposta){
    resposta.write(`<html>`);
    resposta.write(`<head>
                        <meta charset="UTF-8">
                        <title>Sobre</title>
                    </head>
                    <body>`);
    resposta.write(`<h1>Sobre nós</h1>`);
    resposta.write(`<p>Somos uma equipe de desenvolvimento iniciante</p>`);
    resposta.write(`<p>Estamos aprendendo a programar em JavaScript para oferecer aos nossos clientes as melhores aplicações para nossos clientes.</p>`);
    resposta.write(`<p>Envie uma doação para o email: elisson@email.com</p>`);
    resposta.write(`<p>Adote um programador</p>`);
    resposta.write(`</body>`);
    resposta.write(`</html>`);
    resposta.end(); 
}

app.get("/sobre", mostrarSobre);

//adicionando parâmetros pela URL ex:http://localhost:3000?valor=10
function depositar(requisicao, resposta){
    const valor = requisicao.query.valor;

    if(valor){
        resposta.write(`<html>
                        <head>
                            <title>Depósito realizado!</title>
                        </head>
                        <body>
                            <h1>Depósito realizado!</h1>
                            <h1>Valor Depositado: R$ ${valor}</h1>
                            <h1>Obrigado!</h1>
                        </body>
                        </html>`);
        resposta.end();
    }
    else{
        resposta.write("É necessário informar o valor a ser depoisitado");
        resposta.end();
    }
}

app.get("\depositar", depositar);

app.listen(porta, host, () => {
    console.log("Servidor em execução http://" + host + ":" + porta);
});