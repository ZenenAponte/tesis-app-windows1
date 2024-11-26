const pool = require('../db');

const getEstado =async (req, res, next) => {
    try {
        const result = await pool.query("SELECT * FROM estado")
        res.json(result.rows)
        
    } catch (error) {
        next(error)

    }
};

const postEstado =  async (req, res, next) => {
    
    try {
           const {  estado } = req.body;
           const result = await pool.query(
               "INSERT INTO estado ( estado) VALUES ($1) RETURNING *", [ estado]
           );
   
           res.json(result.rows[0]);
           
       } catch (error) {
           next(error)
   
       }
   
   };

const putEstado = async (req, res, next) => {
    try {
        const { id_estado } = req.params;
        const { estado } = req.body
        const result = await pool.query("UPDATE estado SET estado = $1 WHERE id_estado=$2 RETURNING *", [estado, id_estado]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message: "No Encontrado"
            });

        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }


};

const deleteEstado = async (req, res, next) => {
    try {
        const { id_estado } = req.params;
        const result = await pool.query("DELETE FROM estado WHERE id_estado=$1", [id_estado]);

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
    getEstado,
    postEstado,
    putEstado,
    deleteEstado

}