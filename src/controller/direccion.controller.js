const pool = require('../db');

const getDireccion = async (req, res, next) => {
    try {
        const result = await pool.query("SELECT * FROM direccion")
        res.json(result.rows)

    } catch (error) {
        next(error)

    }
};

const postDireccion = async (req, res, next) => {
    
    try {
           const { nombre, numero, calle1, calle2 } = req.body;
           const result = await pool.query(
               "INSERT INTO direccion ( nombre, numero, calle1, calle2) VALUES ($1,$2,$3,$4) RETURNING *", [ nombre, numero, calle1, calle2]
           );
   
           res.json(result.rows[0]);
   
       } catch (error) {
           next(error)
   
       }
   
   };

const putDireccion =async (req, res, next) => {
    try {
        const { id_direcc } = req.params;
        const { nombre, numero, calle1, calle2 } = req.body
        const result = await pool.query("UPDATE direccion SET nombre = $1, numero = $2, calle1 = $3, calle2 = $4 WHERE id_direcc=$5RETURNING *", [nombre, numero, calle1, calle2, id_direcc]);
            
        if (result.rowCount === 0)
            return res.status(404).json({
                message: "No Encontrado"
        });

        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }


};

const deleteDireccion = async (req, res, next) => {
    try {
        const { id_direcc } = req.params;
        const result = await pool.query("DELETE FROM direccion WHERE id_direcc=$1", [id_direcc]);

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
    getDireccion,
    postDireccion,
    putDireccion,
    deleteDireccion

}