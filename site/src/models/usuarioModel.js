var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM Usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(apelido, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", apelido, senha)
    var instrucao = `
        SELECT * FROM Usuario WHERE apelido = '${apelido}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(apelido, senha, planetaNatal) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", apelido, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO Usuario (apelido, senha, planetaNatal) VALUES ('${apelido}', '${senha}', '${planetaNatal}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function avaliar(nota, idUsuario){
    var instrucao = `INSERT INTO Avaliacao(nota, fkUsuario) values ('${nota}', ${idUsuario});
   ` 
    return database.executar(instrucao)
}

// /* Atualiza a fk do comentário */
// function atualizarDados(idUsuario){
//     var instrucao = `
//     UPDATE usuario SET fkComentario = ${idUsuario} WHERE idUsuario = ${idUsuario};
//    ` 
//    return database.executar(instrucao)
// }

module.exports = {
    entrar,
    avaliar,
    cadastrar,
    listar,
};