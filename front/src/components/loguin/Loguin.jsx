import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { text } from 'express';

const Loguin = () => {
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí puedes añadir la lógica de autenticación
    console.log('Nombre:', nombre);
    console.log('Password:', password);
  };

  return (
    <Container maxWidth="xs">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Iniciar Sesión
        </Typography>
        <TextField
          label="Nombre"
          variant="outlined"
          fullWidth
          margin="normal"
          value={text}
          onChange={(e) => setNombre(e.target.value)}
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
        >
          Iniciar Sesión
        </Button>
      </Box>
    </Container>
  );
};

export default Loguin;
