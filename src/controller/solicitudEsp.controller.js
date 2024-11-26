const pool = require('../db');

const getSolicitudEsp = async (req, res, next) => {
    try {
        const result = await pool.query("SELECT * FROM solicitud_esp")
        res.json(result.rows)

    } catch (error) {
        next(error)

    }
};

const postSolicitudEsp =  async (req, res, next) => {
    
    try {
           const { tipo } = req.body;
           const result = await pool.query(
               "INSERT INTO solicitud_esp ( tipo) VALUES ($1) RETURNING *", [ tipo]
           );
   
           res.json(result.rows[0]);
   
       } catch (error) {
           next(error)
   
       }
   
   };

const putSolicitudEsp = async (req, res, next) => {
    try {
        const { id_sol_esp } = req.params;
        const { tipo } = req.body
        const result = await pool.query("UPDATE solicitud_esp SET tipo = $1 WHERE id_sol_esp=$2 RETURNING *", [tipo, id_sol_esp]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message: "No Encontrado"
            });

        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }


};

const deleteSolicitudEsp = async (req, res, next) => {
    try {
        const { id_sol_esp } = req.params;
        const result = await pool.query("DELETE FROM solicitud_esp WHERE id_sol_esp=$1", [id_sol_esp]);

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
    getSolicitudEsp,
    postSolicitudEsp,
    putSolicitudEsp,
    deleteSolicitudEsp

}