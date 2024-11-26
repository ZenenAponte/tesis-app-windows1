import { Button, Card, CardContent, CircularProgress, Container, TextField, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


export default function Sexo() {

    const [sexo, setSexo] = useState({
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
            await fetch(`http://localhost:4000/sexo/`, {
                method: 'PUT',
                headers: {
                    "Contenet-Type": "applicaion/json",
                },
                body: JSON.stringify(sexo),
            });

        } else {
            await fetch('http://localhost:4000/sexo', {
                method: 'POST',
                body: JSON.stringify(sexo),
                headers: { 'Content-Type': 'application/json' },
            })

        }

        setLoading(false)
        navegate('/')
    }

    const handleChange = (e) => {
        setSexo({ ...sexo, [e.target.name]: e.target.value });
    }

    const loadUnsexo = async (id_sexo) => {
        const res = await fetch(`http://localhost:4000/sexo/${id_sexo}`)
        const data = await res.json()
        console.log(data)
        //setSexo({ sexo: data.sexo })
        //setEditing(true)
    };




    useEffect(() => {
        if (params.id_sexo) {
            loadUnsexo(params.id_sexo);
        }
    }, [params.id_sexo]);




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
                    {editing ? "Edite su Sexo" : "Añadir un Sexo"}
                </Typography>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            name='tipo'
                            value={sexo.tipo}
                            variant='filled'
                            label='Escriba su Sexo'
                            sx={{
                                display: 'block',
                                margin: '1.5 rem '
                            }}
                            onChange={handleChange}
                        />
                        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>

                        <Button variant='contained' color='primary' type='submit' disabled={
                            !sexo.tipo
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