const pool = require('../db');

const getCausaDescrip =async (req, res, next) => {
    try {
        const result = await pool.query("SELECT * FROM causa_descrip")
        res.json(result.rows)

    } catch (error) {
        next(error)

    }
};

const postCausaDescrip =  async (req, res, next) => {
    
    try {
           const {  tipo } = req.body;
           const result = await pool.query(
               "INSERT INTO causa_descrip ( tipo) VALUES ($1) RETURNING *", [ tipo]
           );
   
           res.json(result.rows[0]);
   
       } catch (error) {
           next(error)
   
       }
   
   };

const putCausaDescrip = async (req, res, next) => {
    try {
        const { id_causa_descrip } = req.params;
        const { tipo } = req.body
        const result = await pool.query("UPDATE causa_descrip SET tipo = $1 WHERE id_causa_descrip=$2 RETURNING *", [tipo, id_causa_descrip]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message: "No Encontrado"
            });

        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }


};

const deleteCausaDescrip = async (req, res, next) => {
    try {
        const { id_causa_descrip } = req.params;
        const result = await pool.query("DELETE FROM causa_descrip WHERE id_causa_descrip=$1", [id_causa_descrip]);

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
    getCausaDescrip,
    postCausaDescrip,
    putCausaDescrip,
    deleteCausaDescrip

}