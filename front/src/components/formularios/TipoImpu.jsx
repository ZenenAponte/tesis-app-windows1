import { Button, Card, CardContent, CircularProgress, Container, TextField, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


export default function TipoImpu() {

    const [tipo, setTipo] = useState({
        tipo: '',
    })

    const [loading, setLoading] = useState(false)
    const [editing, setEditing] = useState(false)

    const navegate = useNavigate();
    const params = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true)

        if (editing) {
            await fetch(`http://localhost:4000/TipoImp/`, {
                method: 'PUT',
                headers: {
                    "Contenet-Type": "applicaion/json",
                },
                body: JSON.stringify(tipo),
            });

        } else {
            await fetch('http://localhost:4000/TipoImp', {
                method: 'POST',
                body: JSON.stringify(tipo),
                headers: { 'Content-Type': 'application/json' },
            })

        }

        setLoading(false)
        navegate('/')
    }

    const handleChange = (e) => {
        setTipo({ ...tipo, [e.target.name]: e.target.value });
    }

    const loadUntipo = async (id_tipo) => {
        const res = await fetch(`http://localhost:4000/TipoImp/${id_tipo}`)
        const data = await res.json()
        console.log(data)
        //setTipo({ tipo: data.tipo })
        //setEditing(true)
    };




    useEffect(() => {
        if (params.id_tipo) {
            loadUntipo(params.id_tipo);
        }
    }, [params.id_tipo]);




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
                    {editing ? "Editar Tipo" : "Añadir un Tipo"}
                </Typography>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            name='tipo'
                            value={tipo.tipo}
                            variant='filled'
                            label='Escriba un Tipo'
                            sx={{
                                display: 'block',
                                margin: '1.5 rem '
                            }}
                            onChange={handleChange}
                        />
                        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>

                        <Button variant='contained' color='primary' type='submit' disabled={
                            !tipo.tipo
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