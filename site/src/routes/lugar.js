var express = require("express");
var router = express.Router();

var lugarController = require("../controllers/lugarController");

router.get("/", function (req, res) {
    lugarController.testar(req, res);
});

router.get("/listar", function (req, res) {
    lugarController.listar(req, res);
});

router.get("/listar/:idDiario", function (req, res) {
    lugarController.listarPorUsuario(req, res);
});

module.exports = router;