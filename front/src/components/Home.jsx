import React from 'react'
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, CardMedia, Box, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram, Phone, Email } from '@mui/icons-material';
import LoginIcon from '@mui/icons-material/Login';
import Carousel from 'react-material-ui-carousel';
import { useNavigate } from 'react-router-dom';



export default function Home() {

  const carouselImages = [
    { src: "https://via.placeholder.com/800x300?text=Gestión+de+Contribuyentes+1", alt: "Imagen 1" },
    { src: "https://via.placeholder.com/800x300?text=Gestión+de+Contribuyentes+2", alt: "Imagen 2" },
    { src: "https://via.placeholder.com/800x300?text=Gestión+de+Contribuyentes+3", alt: "Imagen 3" },
  ];

  const cardsInfo = [
    {
      title: "Gestión Eficiente",
      description: "Optimiza los procesos de registro y seguimiento de contribuyentes con nuestra plataforma.",
      image: "https://via.placeholder.com/150x150?text=Eficiencia",
    },
    {
      title: "Información Centralizada",
      description: "Accede a toda la información fiscal de los contribuyentes desde un solo lugar.",
      image: "https://via.placeholder.com/150x150?text=Centralizado",
    },
    {
      title: "Reportes Automatizados",
      description: "Genera reportes detallados y automatizados para una mejor toma de decisiones.",
      image: "https://via.placeholder.com/150x150?text=Reportes",
    },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#f4f4f4',
        margin: '0'
      }}
    >
      {/* Encabezado */}
      <AppBar position="static" style={{
        backgroundColor: "#38953d"
      }} >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Bienvenidos</Typography>
          <Button color="inherit">Iniciar Sesión</Button>
          {/*<IconButton color="inherit">
            <LoginIcon></LoginIcon>
          </IconButton>*/}

        </Toolbar>
      </AppBar>

      {/* Contenido principal */}

      {/* Carrusel */}
      <Carousel>
        {carouselImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            style={{ width: '100%', maxHeight: 300, objectFit: 'cover' }}
          />
        ))}
      </Carousel>

      {/* Sección informativa con tarjetas */}
      <Container sx={{ mt: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Beneficios de Nuestro Sistema
        </Typography>
        <Grid container spacing={4}>
          {cardsInfo.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="150"
                  image={card.image}
                  alt={card.title}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>{card.title}</Typography>
                  <Typography variant="body2" color="textSecondary">{card.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>


      {/* Footer */}
      <Box
        sx={{
          py: 3,
          backgroundColor: '#38953d',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Typography variant="h6" gutterBottom>Contacto</Typography>
        <Typography variant="body1">
          <Phone sx={{ verticalAlign: 'middle', mr: 1 }} />
          Teléfono: +1 123 456 7890
        </Typography>
        <Typography variant="body1">
          <Email sx={{ verticalAlign: 'middle', mr: 1 }} />
          Correo: info@gestioncontribuyentes.com
        </Typography>
        <Box sx={{ mt: 2 }}>
          <IconButton href="https://facebook.com" target="_blank" color="inherit">
            <Facebook />
          </IconButton>
          <IconButton href="https://twitter.com" target="_blank" color="inherit">
            <Twitter />
          </IconButton>
          <IconButton href="https://linkedin.com" target="_blank" color="inherit">
            <LinkedIn />
          </IconButton>
          <IconButton href="https://instagram.com" target="_blank" color="inherit">
            <Instagram />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}