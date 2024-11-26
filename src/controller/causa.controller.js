const pool = require('../db');

const getCausa =async (req, res, next) => {
    try {
        const result = await pool.query("SELECT * FROM causa")
        res.json(result.rows)

    } catch (error) {
        next(error)

    }
};

const postCausa =  async (req, res, next) => {
    
    try {
           const { tipo } = req.body;
           const result = await pool.query(
               "INSERT INTO causa ( tipo) VALUES ($1) RETURNING *", [ tipo]
           );
   
           res.json(result.rows[0]);
   
       } catch (error) {
           next(error)
   
       }
   
   };

const putCausa = async (req, res, next) => {
    try {
        const { id_causa } = req.params;
        const { tipo } = req.body
        const result = await pool.query("UPDATE causa SET tipo = $1 WHERE id_causa=$2 RETURNING *", [tipo, id_causa]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message: "No Encontrado"
            });

        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }


};

const deleteCausa = async (req, res, next) => {
    try {
        const { id_causa } = req.params;
        const result = await pool.query("DELETE FROM causa WHERE id_causa=$1", [id_causa]);

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
    getCausa,
    postCausa,
    putCausa,
    deleteCausa

}