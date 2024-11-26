const pool = require('../db');

const getIngreso = async (req, res, next) => {
    try {
        const result = await pool.query("SELECT * FROM ingreso")
        res.json(result.rows)

    } catch (error) {
        next(error)

    }
};

const postIngreso = async (req, res, next) => {
    
    try {
           const {  tipo, cantidad } = req.body;
           const result = await pool.query(
               "INSERT INTO ingreso ( tipo, cantidad) VALUES ($1,$2) RETURNING *", [ tipo, cantidad]
           );
   
           res.json(result.rows[0]);
   
       } catch (error) {
           next(error)
   
       }
   
   };

const putIngreso =async (req, res, next) => {
    try {
        const { id_ingre } = req.params;
        const { tipo, cantidad } = req.body
        const result = await pool.query("UPDATE ingreso SET tipo = $1, cantidad = $2 WHERE id_ingre=$3 RETURNING *", [tipo, cantidad, id_ingre]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message: "No Encontrado"
            });

        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }


};

const deleteIngreso = async (req, res, next) => {
    try {
        const { id_ingre } = req.params;
        const result = await pool.query("DELETE FROM ingreso WHERE id_ingre=$1", [id_ingre]);

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
    getIngreso,
    postIngreso,
    putIngreso,
    deleteIngreso

}