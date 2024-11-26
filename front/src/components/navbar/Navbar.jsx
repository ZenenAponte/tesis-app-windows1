import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  const [anchorElContribuyentes, setAnchorElContribuyentes] = React.useState(null);
  const [anchorElNuevoMenu, setAnchorElNuevoMenu] = React.useState(null);

  // Manejo del menú de contribuyentes
  const handleContribuyentesClick = (event) => {
    setAnchorElContribuyentes(event.currentTarget);
  };

  const handleContribuyentesClose = () => {
    setAnchorElContribuyentes(null);
  };

  // Manejo del nuevo menú
  const handleNuevoMenuClick = (event) => {
    setAnchorElNuevoMenu(event.currentTarget);
  };

  const handleNuevoMenuClose = () => {
    setAnchorElNuevoMenu(null);
  };

  return (
    <AppBar position="static" color="success">
      <Toolbar>
        {/* Título */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#eee' }}>OAT-FAR</Link>
        </Typography>

        {/* Menú Contribuyentes */}
        <Button
          color="inherit"
          onClick={handleContribuyentesClick}
          endIcon={<MenuIcon />}
        >
          CONTRIBUYENTES
        </Button>
        <Menu
          anchorEl={anchorElContribuyentes}
          open={Boolean(anchorElContribuyentes)}
          onClose={handleContribuyentesClose}
        >
          <MenuItem component={Link} to="/contribuyente" onClick={handleContribuyentesClose}>Contribuyente</MenuItem>
          <MenuItem component={Link} to="/impuesto" onClick={handleContribuyentesClose}>Impuestos</MenuItem>
          <MenuItem component={Link} to="/reclamo" onClick={handleContribuyentesClose}>Reclamos</MenuItem>
          <MenuItem component={Link} to="/declaracion" onClick={handleContribuyentesClose}>Declaraciones</MenuItem>
          <MenuItem component={Link} to="/devolucion" onClick={handleContribuyentesClose}>Devoluciones</MenuItem>
        </Menu>

        {/* Nuevo Menú */}
        <Button
          color="inherit"
          onClick={handleNuevoMenuClick}
          endIcon={<MenuIcon />}
        >
          NUEVO MENÚ
        </Button>
        <Menu
          anchorEl={anchorElNuevoMenu}
          open={Boolean(anchorElNuevoMenu)}
          onClose={handleNuevoMenuClose}
        >
          <MenuItem component={Link} to="/opcion1" onClick={handleNuevoMenuClose}>Opción 1</MenuItem>
          <MenuItem component={Link} to="/opcion2" onClick={handleNuevoMenuClose}>Opción 2</MenuItem>
          <MenuItem component={Link} to="/opcion3" onClick={handleNuevoMenuClose}>Opción 3</MenuItem>
          <MenuItem component={Link} to="/opcion4" onClick={handleNuevoMenuClose}>Opción 4</MenuItem>
          <MenuItem component={Link} to="/opcion5" onClick={handleNuevoMenuClose}>Opción 5</MenuItem>
        </Menu>

        {/* Otros botones */}
        <Button component={Link} to="/lugar" color="inherit">Prueba lugar</Button>
        <Button component={Link} to="/forma" color="inherit">Prueba Forma</Button>
        <Button component={Link} to="/tipo" color="inherit">Prueba Tipo</Button>

        {/* Icono de Logout */}
        <IconButton color="inherit">
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}




