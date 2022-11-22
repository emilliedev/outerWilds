var express = require("express");
var router = express.Router();

var diarioController = require("../controllers/diarioController");

router.get("/", function (req, res) {
    diarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    diarioController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    diarioController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    diarioController.pesquisarDescricao(req, res);
});

router.post("/publicar", function (req, res) {
    diarioController.publicar(req, res);
});

router.put("/editar/:idDiario", function (req, res) {
    diarioController.editar(req, res);
});

router.delete("/deletar/:idDiario", function (req, res) {
    diarioController.deletar(req, res);
});

module.exports = router;