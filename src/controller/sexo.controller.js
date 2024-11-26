const pool = require('../db');

const getSexo =async (req, res, next) => {
    try {
        const result = await pool.query("SELECT * FROM sexo")
        res.json(result.rows)

    } catch (error) {
        next(error)

    }
};

const postSexo =  async (req, res, next) => {
    
    try {
           const { tipo } = req.body;
           const result = await pool.query(
               "INSERT INTO sexo ( tipo) VALUES ($1) RETURNING *", [ tipo]
           );
   
           res.json(result.rows[0]);
   
       } catch (error) {
           next(error)
   
       }
   
   };

const putSexo = async (req, res, next) => {
    try {
        const { id_sexo } = req.params;
        const { tipo } = req.body
        const result = await pool.query("UPDATE sexo SET tipo = $1 WHERE id_sexo=$2 RETURNING *", [tipo, id_sexo]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message: "No Encontrado"
            });

        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }


};

const deleteSexo = async (req, res, next) => {
    try {
        const { id_sexo } = req.params;
        const result = await pool.query("DELETE FROM sexo WHERE id_sexo=$1", [id_sexo]);

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
    getSexo,
    postSexo,
    putSexo,
    deleteSexo

}