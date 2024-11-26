const pool = require('../db');

const getLugar =async (req, res, next) => {
    try {
        const result = await pool.query("SELECT * FROM lugar")
        res.json(result.rows)

    } catch (error) {
        next(error)

    }
};

const postLugar =  async (req, res, next) => {
    
    try {
           const {  lugar } = req.body;
           const result = await pool.query(
               "INSERT INTO lugar (lugar) VALUES ($1) RETURNING *", [ lugar]
           );
   
           res.json(result.rows[0]);
   
       } catch (error) {
           next(error)
   
       }
   
   };

const putLugar = async (req, res, next) => {
    try {
        const { id_lugar } = req.params;
        const { lugar } = req.body
        const result = await pool.query("UPDATE lugar SET lugar = $1 WHERE id_lugar=$2 RETURNING *", [lugar, id_lugar]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message: "No Encontrado"
            });

        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }


};

const deleteLugar = async (req, res, next) => {
    try {
        const { id_lugar } = req.params;
        const result = await pool.query("DELETE FROM lugar WHERE id_lugar=$1", [id_lugar]);

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
    getLugar,
    postLugar,
    putLugar,
    deleteLugar

}