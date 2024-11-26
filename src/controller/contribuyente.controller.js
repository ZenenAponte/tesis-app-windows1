const pool = require('../db');

const getContribuyente = async (req, res, next) => {
    try {
        const result = await pool.query("SELECT * FROM contribuyente")
        res.json(result.rows)
        
    } catch (error) {
        next(error)

    }
};

const postContribuyente = async (req, res, next) => {
    
 try {
        const { dni,nombre,first_apellido,second_apellido,edad,phone,email,id_direc,id_sex,id_notif,id_bloq,id_user} = req.body;
        const result = await pool.query(
            "INSERT INTO contribuyente (dni,nombre,first_apellido,second_apellido,edad,phone,email,id_direc,id_sex,id_notif,id_bloq,id_user) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING *", [dni,nombre,first_apellido,second_apellido,edad,phone,email,id_direc,id_sex,id_notif,id_bloq,id_user]
        );

        res.json(result.rows[0]);

    } catch (error) {
        next(error)

    }

};

const putContribuyente = async (req, res, next) => {
    try {
        const { dni } = req.params;
        const { nombre,first_apellido,second_apellido,edad,phone,email,id_direc,id_sex,id_notif,id_bloq,id_user } = req.body
        const result = await pool.query("UPDATE contribuyente SET nombre = $1 ,first_apellido = $2,second_apellido = $3,edad = $4,phone = $5,email = $6,id_direc = $7,id_sex = $8,id_notif = $9,id_bloq = $10, id_user = $11 WHERE dni=$12 RETURNING *", [nombre,first_apellido,second_apellido,edad,phone,email,id_direc,id_sex,id_notif,id_bloq,id_user,dni]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message: "No Encontrado"
            });

        return res.json(result.rows[0])
    } catch (error) {
        next(error)
    }


};

const deleteContribuyente = async (req, res, next) => {
    try {
        const { dni } = req.params;
        const result = await pool.query("DELETE FROM contribuyente WHERE dni=$1", [dni]);

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
    getContribuyente,
    postContribuyente,
    putContribuyente,
    deleteContribuyente

}