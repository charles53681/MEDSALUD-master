const router = require('express').Router();
const gestionarCategoriasController = require('../gestionarCategorias/controller/gCategorias.controller')
const gestionarOrdenCompraController = require('../gestionarOdenCompra/controller/gOCompra.controller')
const gestionarMedicamentoOCController = require('../medicamentoOC/controller/medicamentoOC.controller')

const proveedorController = require('../proveedor/proveedor.controller')
const medicamentoController = require('../medicamento/controller/medicamento.controller')


router.use('/gestionarCategorias', gestionarCategoriasController);
router.use('/gestionarOrdenCompra', gestionarOrdenCompraController);
router.use('/proveedor', proveedorController);
router.use('/medicamento', medicamentoController);
router.use('/gestionaroMedicamentoOC', gestionarMedicamentoOCController);


module.exports = router;