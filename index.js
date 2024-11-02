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

app.listen(porta, host, () => {
    console.log("Servidor em execução http://" + host + ":" + porta);
});