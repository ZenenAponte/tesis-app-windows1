const pool = require('../db');

const getDeduccion = async (req, res, next) => {
    try {
        const result = await pool.query("SELECT * FROM deduccion")
        res.json(result.rows)

    } catch (error) {
        next(error)

    }
};

const postDeduccion = async (req, res, next) => {
    
    try {
           const {  tipo, cantidad } = req.body;
           const result = await pool.query(
               "INSERT INTO deduccion ( tipo, cantidad) VALUES ($1,$2) RETURNING *", [ tipo, cantidad]
           );
   
           res.json(result.rows[0]);
   
       } catch (error) {
           next(error)
   
       }
   
   };

const putDeduccion =async (req, res, next) => {
    try {
        const { id_deduc } = req.params;
        const { tipo, cantidad } = req.body
        const result = await pool.query("UPDATE deduccion SET tipo = $1, cantidad = $2 WHERE id_deduc=$3 RETURNING *", [tipo, cantidad, id_deduc]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message: "No Encontrado"
            });

        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }


};

const deleteDeduccion = async (req, res, next) => {
    try {
        const { id_deduc } = req.params;
        const result = await pool.query("DELETE FROM deduccion WHERE id_deduc=$1", [id_deduc]);

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
    getDeduccion,
    postDeduccion,
    putDeduccion,
    deleteDeduccion

}