const pool = require('../db');

const getFormaPago =async (req, res, next) => {
    try {
        const result = await pool.query("SELECT * FROM forma_pago")
        res.json(result.rows)

    } catch (error) {
        next(error)

    }
};

const postFormaPago =  async (req, res, next) => {
    
    try {
           const {  tipo } = req.body;
           const result = await pool.query(
               "INSERT INTO forma_pago ( tipo) VALUES ($1) RETURNING *", [ tipo]
           );
   
           res.json(result.rows[0]);
   
       } catch (error) {
           next(error)
   
       }
   
   };

const putFormaPago = async (req, res, next) => {
    try {
        const { id_forma } = req.params;
        const { tipo } = req.body
        const result = await pool.query("UPDATE forma_pago SET tipo = $1 WHERE id_forma=$2 RETURNING *", [tipo, id_forma]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message: "No Encontrado"
            });

        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }


};

const deleteFormaPago = async (req, res, next) => {
    try {
        const { id_forma } = req.params;
        const result = await pool.query("DELETE FROM forma_pago WHERE id_forma=$1", [id_forma]);

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
    getFormaPago,
    postFormaPago,
    putFormaPago,
    deleteFormaPago

}