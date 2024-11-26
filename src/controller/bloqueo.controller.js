const pool = require('../db');

const getBloqueo = async (req, res, next) => {
    try {
        const result = await pool.query("SELECT * FROM bloqueo")
        res.json(result.rows)

    } catch (error) {
        next(error)

    }
};

const postBloqueo = async (req, res, next) => {
    
    try {
           const {  deuda, idCausa, idCausaDescrip } = req.body;
           const result = await pool.query(
               "INSERT INTO bloqueo ( deuda, idCausa, idCausaDescrip) VALUES ($1,$2,$3) RETURNING *", [ deuda, idCausa, idCausaDescrip]
           );
   
           res.json(result.rows[0]);
   
       } catch (error) {
           next(error)
   
       }
   
   };

const putBloqueo =async (req, res, next) => {
    try {
        const { id_bloq } = req.params;
        const { deuda, idCausa, idCausaDescrip } = req.body
        const result = await pool.query("UPDATE bloqueo SET deuda = $1, idCausa = $2, idCausaDescrip = $3 WHERE id_bloq=$4 RETURNING *", [deuda, idCausa, idCausaDescrip, id_bloq]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message: "No Encontrado"
            });

        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }


};

const deleteBloqueo = async (req, res, next) => {
    try {
        const { id_bloq } = req.params;
        const result = await pool.query("DELETE FROM bloqueo WHERE id_bloq=$1", [id_bloq]);

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
    getBloqueo,
    postBloqueo,
    putBloqueo,
    deleteBloqueo

}