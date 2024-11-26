import { Button, Card, CardContent, CircularProgress, Container, TextField, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


export default function Ingresos() {

    const [forma, setForma] = useState({
        tipo: '',
        cantidad:'',
    })

    const [loading, setLoading] = useState(false)
    const [editing, setEditing] = useState(false)

    const navegate = useNavigate();
    const params = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true)

        if (editing) {
            await fetch(`http://localhost:4000/ingreso/`, {
                method: 'PUT',
                headers: {
                    "Contenet-Type": "applicaion/json",
                },
                body: JSON.stringify(forma),
            });

        } else {
            await fetch('http://localhost:4000/ingreso', {
                method: 'POST',
                body: JSON.stringify(forma),
                headers: { 'Content-Type': 'application/json' },
            })

        }

        setLoading(false)
        navegate('/')
    }

    const handleChange = (e) => {
        setForma({ ...forma, [e.target.name]: e.target.value });
    }

    const loadUnforma = async (id_ingre) => {
        const res = await fetch(`http://localhost:4000/ingreso/${id_ingre}`)
        const data = await res.json()
        console.log(data)
        //setForma({ forma: data.forma })
        //setEditing(true)
    };




    useEffect(() => {
        if (params.id_ingre) {
            loadUnforma(params.id_ingre);
        }
    }, [params.id_ingre]);




    return (
        <Container style={{  width: '56%', margin: '0 auto', padding: '2rem 0'}}>
            <Card
                sx={{ mt: 5 }}
                style={{
                    backgroundColor: 'darkgray',
                    padding: "1 rem"
                }}

            >
                <Typography variant='h5' textAlign={'center'} padding={'5 rem'} >
                    {editing ? "Editar sus Ingresos" : "Añadir sus Ingreso"}
                </Typography>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            name='tipo'
                            value={forma.tipo}
                            variant='filled'
                            label='Escriba su forma de Ingreso'
                            sx={{
                                display: 'block',
                                margin: '1.5 rem '
                            }}
                            onChange={handleChange}
                        />
                        <TextField
                            name='cantidad'
                            value={forma.cantidad}
                            variant='filled'
                            label='Escriba la Cantidad'
                            sx={{
                                display: 'block',
                                margin: '1.5 rem '
                            }}
                            onChange={handleChange}
                        />
                        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>

                        <Button variant='contained' color='primary' type='submit' disabled={
                            !forma.tipo || !forma.cantidad
                        }>
                            {loading ? <CircularProgress
                                color='inherit'
                                size={24}

                            /> : 'Guardar'}
                        </Button>
                        <Button
                            variant='contained' color='error' onClick={() => navegate('/')}
                        > 
                            Cancelar
                        </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </Container>
    )
}