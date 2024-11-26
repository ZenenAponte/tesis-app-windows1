import { Button, Card, CardContent, CircularProgress, Container, TextField, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


export default function Lugar() {

    const [lugar, setLugar] = useState({
        lugar: '',
    })

    const [loading, setLoading] = useState(false)
    const [editing, setEditing] = useState(false)

    const navegate = useNavigate();
    const params = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true)

        if (editing) {
            await fetch(`http://localhost:4000/lugar/`, {
                method: 'PUT',
                headers: {
                    "Contenet-Type": "applicaion/json",
                },
                body: JSON.stringify(lugar),
            });

        } else {
            await fetch('http://localhost:4000/lugar', {
                method: 'POST',
                body: JSON.stringify(lugar),
                headers: { 'Content-Type': 'application/json' },
            })

        }

        setLoading(false)
        navegate('/lugar')
    }

    const handleChange = (e) => {
        setLugar({ ...lugar, [e.target.name]: e.target.value });
    }

    const loadUnLugar = async (id_lugar) => {
        const res = await fetch(`http://localhost:4000/lugar/${id_lugar}`)
        const data = await res.json()
        console.log(data)
        //setLugar({ lugar: data.lugar })
        //setEditing(true)
    };




    useEffect(() => {
        if (params.id_lugar) {
            loadUnLugar(params.id_lugar);
        }
    }, [params.id_lugar]);




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
                    {editing ? "Editar Lugar" : "Añadir un lugar"}
                </Typography>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            name='lugar'
                            value={lugar.lugar}
                            variant='filled'
                            label='Escriba un Lugar'
                            sx={{
                                display: 'block',
                                margin: '1.5 rem '
                            }}
                            onChange={handleChange}
                        />
                        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>

                        <Button variant='contained' color='primary' type='submit' disabled={
                            !lugar.lugar
                        }>
                            {loading ? <CircularProgress
                                color='inherit'
                                size={24}

                            /> : 'Guardar'}
                        </Button>
                        <Button
                            variant='contained' color='error' onClick={() => navegate('/lugar')}
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