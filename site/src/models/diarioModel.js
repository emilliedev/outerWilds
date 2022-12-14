var database = require("../database/config");

function edicaoDiario(descricao, idDiario) {
    var instrucao = `UPDATE Diario SET descricao = '${descricao}' WHERE idDiario = ${idDiario};`
    return database.executar(instrucao);
}

function listar() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()\n\n\n O LUGAR É..."+lugar);
    var instrucao = `
    SELECT 
    d.idDiario,
    d.titulo,
    d.descricao,
    d.fkLugar,
    d.fkUsuario,
    l.idLugar,
    l.nome,
    u.idUsuario 
    FROM Diario d
	INNER JOIN Lugar l 
    ON d.fkLugar = l.idLugar
    INNER JOIN Usuario u ON d.fkUsuario = u.idUsuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    console.log("ID DO USUARIO: \n" + idUsuario);
    return database.executar(instrucao);
}

function pesquisarDescricao(texto) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarDescricao()\n\n\n O LUGAR É..."+lugar);
    var instrucao = `
        SELECT 
            d.idDiario AS idDiario,
            d.titulo,
            d.descricao,
            d.fk_usuario,
            l.idLugar AS idLugar,
            l.nome
        FROM Diario d
            INNER JOIN Lugar l
                ON d.fkLugar = l.idLugar
        WHERE d.descricao LIKE '${texto}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarPorUsuario(idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucao = `
    SELECT 
    d.idDiario,
    d.titulo,
    d.descricao,
    d.fkLugar,
    d.fkUsuario,
    l.idLugar,
    l.nome,
    u.idUsuario 
        FROM Diario d
            INNER JOIN Lugar l
                ON d.fkLugar = l.idLugar
            INNER JOIN Usuario u
                ON d.fkUsuario = u.idUsuario
        WHERE u.idUsuario = ${idUsuario}
        ORDER BY idDiario DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarRanking(idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucao = `
    SELECT COUNT(fkLugar) AS qtdeLugar, nome FROM Diario 
        INNER JOIN Lugar ON Diario.fkLugar = Lugar.idLugar
        INNER JOIN Usuario ON Diario.fkUsuario = Usuario.idUsuario
        WHERE idUsuario = ${idUsuario}
        GROUP BY fkLugar
        ORDER BY COUNT(fkLugar) DESC 
        LIMIT 10;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarQtdeDiario(idUsuario) {
    var instrucao = `
    SELECT COUNT(idDiario) AS qtdeDiario FROM Diario
	INNER JOIN Usuario ON fkUsuario = idUsuario
	WHERE idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function publicar(titulo, descricao, lugar, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", titulo, descricao, idUsuario);
    var instrucao = `
        INSERT INTO Diario (titulo, descricao, fkLugar, fkUsuario) VALUES ('${titulo}', '${descricao}', '${lugar}', '${idUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function editar(novaDescricao, idDiario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novaDescricao, idDiario);
    var instrucao = `
        UPDATE Diario SET descricao = '${novaDescricao}' WHERE idDiario = ${idDiario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletar(idDiario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idDiario);
    var instrucao = `
        DELETE FROM Diario WHERE idDiario = ${idDiario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function grafico(idUsuario) {
    var instrucao = `
    SELECT COUNT(fkLugar) AS qtdeLugar, nome FROM Diario
        INNER JOIN Lugar ON fkLugar = idLugar
        INNER JOIN Usuario ON fkUsuario = idUsuario
        WHERE idUsuario = ${idUsuario}
    GROUP BY fkLugar;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar,
    listarPorUsuario,
    pesquisarDescricao,
    listarRanking,
    publicar,
    editar,
    edicaoDiario,
    listarQtdeDiario,
    grafico,
    deletar
}
