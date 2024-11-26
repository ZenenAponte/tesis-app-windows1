const pool = require('../db');

const getTipoDesc =async (req, res, next) => {
    try {
        const result = await pool.query("SELECT * FROM tipo_desc")
        res.json(result.rows)

    } catch (error) {
        next(error)

    }
};

const postTipoDesc =  async (req, res, next) => {
    
    try {
           const { tipo } = req.body;
           const result = await pool.query(
               "INSERT INTO tipo_desc ( tipo) VALUES ($1) RETURNING *", [ tipo]
           );
   
           res.json(result.rows[0]);
   
       } catch (error) {
           next(error)
   
       }
   
   };

const putTipoDesc = async (req, res, next) => {
    try {
        const { id_tipo_desc } = req.params;
        const { tipo } = req.body
        const result = await pool.query("UPDATE tipo_desc SET tipo = $1 WHERE id_tipo_desc=$2 RETURNING *", [tipo, id_tipo_desc]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message: "No Encontrado"
            });

        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }


};

const deleteTipoDesc = async (req, res, next) => {
    try {
        const { id_tipo_desc } = req.params;
        const result = await pool.query("DELETE FROM tipo_desc WHERE id_tipo_desc=$1", [id_tipo_desc]);

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
    getTipoDesc,
    postTipoDesc,
    putTipoDesc,
    deleteTipoDesc

}