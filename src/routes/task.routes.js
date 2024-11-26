const { Router } = require('express');
const pool = require('../db');
const { getAutenticar, postAutenticar, putAutenticar, deleteAutenticar } = require('../controller/autenticar.controller');
const { getBloqueo, postBloqueo, putBloqueo, deleteBloqueo } = require('../controller/bloqueo.controller');
const { getCausa, postCausa, putCausa, deleteCausa } = require('../controller/causa.controller');
const { getCausaDescrip, postCausaDescrip, putCausaDescrip, deleteCausaDescrip } = require('../controller/causaDescrip.controller');
const { getContribuyente, postContribuyente, putContribuyente, deleteContribuyente } = require('../controller/contribuyente.controller');
const { getDeduccion, postDeduccion, putDeduccion, deleteDeduccion } = require('../controller/deduccion.controller');
const { getDireccion, postDireccion, putDireccion, deleteDireccion } = require('../controller/direccion.controller');
const { getEstado, postEstado, putEstado, deleteEstado } = require('../controller/estado.controller');
const { getFormaPago, postFormaPago, putFormaPago, deleteFormaPago } = require('../controller/formaPago.controller');
const { getIngreso, postIngreso, putIngreso, deleteIngreso } = require('../controller/ingreso.controller');
const { getLugar, postLugar, putLugar, deleteLugar } = require('../controller/lugar.controller');
const { getNotificacion, postNotificacion, putNotificacion, deleteNotificacion } = require('../controller/notificacion.controller');
const { getSexo, postSexo, putSexo, deleteSexo } = require('../controller/sexo.controller');
const { getSolicitudEsp, postSolicitudEsp, putSolicitudEsp, deleteSolicitudEsp } = require('../controller/solicitudEsp.controller');
const { getTipoDesc, postTipoDesc, putTipoDesc, deleteTipoDesc } = require('../controller/tipoDesc.controller');
const { getTipoImp, postTipoImp, putTipoImp, deleteTipoImp } = require('../controller/tipoImp.controller');

const router = Router();





//Autenticar
router.get('/autenticar',getAutenticar)

router.post('/autenticar',postAutenticar)

router.put('/autenticar/:user_name',putAutenticar)

router.delete('/autenticar/:user_name',deleteAutenticar)


//Bloqueo
router.get('/bloqueo',getBloqueo)

router.post('/bloqueo',postBloqueo)

router.put('/bloqueo/:id_bloq',putBloqueo)

router.delete('/bloqueo/:id_bloq',deleteBloqueo)


//Causa
router.get('/causa',getCausa)

router.post('/causa',postCausa)

router.put('/causa/:id_causa',putCausa)

router.delete('/causa/:id_causa',deleteCausa)


//Contribuyente
router.get('/contribuyente',getContribuyente)

router.post('/contribuyente',postContribuyente)

router.put('/contribuyente/:dni',putContribuyente)

router.delete('/contribuyente/:dni',deleteContribuyente)


//CausaDescrip
router.get('/causaDescrip',getCausaDescrip)

router.post('/causaDescrip',postCausaDescrip)

router.put('/causaDescrip/:id_causa_descrip',putCausaDescrip)

router.delete('/causaDescrip/:id_causa_descrip',deleteCausaDescrip)


//Deduccion
router.get('/deduccion',getDeduccion)

router.post('/deduccion',postDeduccion)

router.put('/deduccion/:id_deduc',putDeduccion)

router.delete('/deduccion/:id_deduc',deleteDeduccion)


//Direccion
router.get('/direccion',getDireccion)

router.post('/direccion',postDireccion)

router.put('/direccion/:id_direcc',putDireccion)

router.delete('/direccion/:id_direcc',deleteDireccion)


//Estado
router.get('/estado',getEstado)

router.post('/estado',postEstado)

router.put('/estado/:id_estado',putEstado)

router.delete('/estado/:id_estado',deleteEstado)


//FormaPago
router.get('/formaPago',getFormaPago)

router.post('/formaPago',postFormaPago)

router.put('/formaPago/:id_forma',putFormaPago)

router.delete('/formaPago/:id_forma',deleteFormaPago)


//Ingreso
router.get('/ingreso',getIngreso)

router.post('/ingreso',postIngreso)

router.put('/ingreso/:id_ingre',putIngreso)

router.delete('/ingreso/:id_ingre',deleteIngreso)

//Lugar
router.get('/lugar',getLugar)

router.post('/lugar',postLugar)

router.put('/lugar/:id_lugar',putLugar)

router.delete('/lugar/:id_lugar',deleteLugar)


//Notificacion
router.get('/notificacion',getNotificacion)

router.post('/notificacion',postNotificacion)

router.put('/notificacion/:id_notif',putNotificacion)

router.delete('/notificacion/:id_notif',deleteNotificacion)


//Sexo
router.get('/sexo',getSexo)

router.post('/sexo',postSexo)

router.put('/sexo/:id_sexo',putSexo)

router.delete('/sexo/:id_sexo',deleteSexo)


//SolicitudEsp
router.get('/solEsp',getSolicitudEsp)

router.post('/solEsp',postSolicitudEsp)

router.put('/solEsp/:id_sol_esp',putSolicitudEsp)

router.delete('/solEsp/:id_sol_esp',deleteSolicitudEsp)


//TipoDesc
router.get('/tipoDesc',getTipoDesc)

router.post('/tipoDesc',postTipoDesc)

router.put('/tipoDesc/:id_tipo_desc',putTipoDesc)

router.delete('/tipoDesc/:id_tipo_desc',deleteTipoDesc)


//TipoImp
router.get('/TipoImp',getTipoImp)

router.post('/TipoImp',postTipoImp)

router.put('/TipoImp/:id_tipo',putTipoImp)

router.delete('/TipoImp/:id_tipo',deleteTipoImp)










module.exports = router;