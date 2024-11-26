const pool = require('../db');

const getTipoImp =async (req, res, next) => {
    try {
        const result = await pool.query("SELECT * FROM tipo_imp")
        res.json(result.rows)

    } catch (error) {
        next(error)

    }
};

const postTipoImp =  async (req, res, next) => {
    
    try {
           const {  tipo } = req.body;
           const result = await pool.query(
               "INSERT INTO tipo_imp ( tipo) VALUES ($1) RETURNING *", [ tipo]
           );
   
           res.json(result.rows[0]);
   
       } catch (error) {
           next(error)
   
       }
   
   };

const putTipoImp = async (req, res, next) => {
    try {
        const { id_tipo } = req.params;
        const { tipo } = req.body
        const result = await pool.query("UPDATE tipo_imp SET tipo = $1 WHERE id_tipo=$2 RETURNING *", [tipo, id_tipo]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message: "No Encontrado"
            });

        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }


};

const deleteTipoImp = async (req, res, next) => {
    try {
        const { id_tipo } = req.params;
        const result = await pool.query("DELETE FROM tipo_imp WHERE id_tipo=$1", [id_tipo]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message: "No Encontrado"
            });

        return res.sendStatus(204);
    } catch (error) {
        next(error)
    }


};

module.exports = {
    getTipoImp,
    postTipoImp,
    putTipoImp,
    deleteTipoImp

}