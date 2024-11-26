const pool = require('../db');

const getNotificacion = async (req, res, next) => {
    try {
        const result = await pool.query("SELECT * FROM notificacion")
        res.json(result.rows)

    } catch (error) {
        next(error)

    }
};

const postNotificacion = async (req, res, next) => {
    
    try {
           const { fecha, descrip } = req.body;
           const result = await pool.query(
               "INSERT INTO notificacion ( fecha, descrip) VALUES ($1,$2) RETURNING *", [ fecha, descrip]
           );
   
           res.json(result.rows[0]);
   
       } catch (error) {
           next(error)
   
       }
   
   };

const putNotificacion =async (req, res, next) => {
    try {
        const { id_notif } = req.params;
        const { fecha, descrip } = req.body
        const result = await pool.query("UPDATE notificacion SET fecha = $1, descrip = $2 WHERE id_notif=$3 RETURNING *", [fecha, descrip, id_notif]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message: "No Encontrado"
            });

        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }


};

const deleteNotificacion = async (req, res, next) => {
    try {
        const { id_notif } = req.params;
        const result = await pool.query("DELETE FROM notificacion WHERE id_notif=$1", [id_notif]);

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
    getNotificacion,
    postNotificacion,
    putNotificacion,
    deleteNotificacion

}