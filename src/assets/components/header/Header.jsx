import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom'; // Importando o hook useNavigate
import Navegacao from "../navigation/Navegacao";

function Header() {
    const [anchorEl, setAnchorEl] = useState(null); // Controlar o menu dropdown
    const navigate = useNavigate(); // Inicializando o hook useNavigate

    // Função para navegar para uma nova rota
    const handleMenuRoute = (route) => {
        navigate(route); // Usando o navigate para redirecionar
    };

    // Função para abrir o menu
    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // Função para fechar o menu
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <AppBar position="fixed" sx={{ backgroundColor: 'black', width: '100%', zIndex: 1300, height: '64px' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {/* Logo e Nome */}
                        <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'white', marginRight: 2 }}>
                            CK Storage
                        </Typography>
                    </Box>

                    {/* Botões de navegação fixos para telas grandes */}
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <Navegacao />
                    </Box>

                    {/* Icone de Menu para telas pequenas */}
                    <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleMenuClick}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Menu dropdown para telas pequenas */}
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                MenuListProps={{
                    'aria-labelledby': 'menu-button',
                }}
            >
                {/* MenuItem com navegação para diferentes rotas */}
                <MenuItem onClick={() => { handleMenuRoute("/home"); handleMenuClose(); }}>
                    Início
                </MenuItem>
                <MenuItem onClick={() => { handleMenuRoute("/produtos"); handleMenuClose(); }}>
                    Produtos
                </MenuItem>
                <MenuItem onClick={() => { handleMenuRoute("/cadastrar"); handleMenuClose(); }}>
                    Cadastrar Produto
                </MenuItem>
            </Menu>

            {/* Espaçamento para dar espaço entre o Header fixo e o conteúdo */}
            <Box sx={{ paddingTop: '64px' }}>
                {/* O conteúdo principal vai aqui */}
            </Box>
        </>
    );
}

export default Header;
