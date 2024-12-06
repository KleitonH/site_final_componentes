import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Button, Card, CardContent, CardMedia } from "@mui/material";
import Grid from '@mui/material/Grid2';

function ProdutoDetalhe() {
    const params = useParams();
    const [produto, setProduto] = useState({});
    const navigate = useNavigate();

    async function pegarProduto() {
        const detalheProduto = await fetch(`http://localhost:3001/produtos/${params.id}`);
        const detalhe = await detalheProduto.json();
        setProduto(detalhe);
    }

    useEffect(() => {
        pegarProduto();
    }, []);

    return (
        <Box sx={{ padding: 3 }}>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} sm={8} md={6}>
                    <Card sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardMedia
                            component="img"
                            image={produto.imagem}
                            alt={produto.descricao}
                            sx={{ height: 300, objectFit: 'cover', borderRadius: 2 }}
                        />
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', padding: 3 }}>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                                {produto.descricao}
                            </Typography>
                            <Typography variant="h6" color="textSecondary" sx={{ marginBottom: 1 }}>
                                Quantidade: {produto.quantidade}
                            </Typography>
                            <Typography variant="h6" color="textPrimary" sx={{ marginBottom: 2 }}>
                                Preço: R${produto.preco}
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => navigate("/produtos")}
                                sx={{ width: '100%', marginTop: 2 }}
                            >
                                Voltar para a lista
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ProdutoDetalhe;
