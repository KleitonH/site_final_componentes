import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal, Box, TextField, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import CustomCard from "../assets/components/CustomCard/CustomCard";
import { Edit, Delete } from '@mui/icons-material';


function ProdutoPage() {
    const [produtos, setProdutos] = useState([]);
    const [selectedProduto, setSelectedProduto] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const navigation = useNavigate();

    async function pegarProdutos() {
        const listaProdutos = await fetch("http://localhost:3001/produtos");
        const lista = await listaProdutos.json();
        setProdutos(lista);
    }

    async function deleteProduto(id) {
        await fetch(`http://localhost:3001/produtos/${id}`, {
            method: "DELETE",
        });
        pegarProdutos();
    }

    async function updateProduto(produto) {
        await fetch(`http://localhost:3001/produtos/${produto.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(produto),
        });
        pegarProdutos();
        setIsEditing(false);
    }

    const handleEditClick = (produto) => {
        setSelectedProduto(produto);
        setIsEditing(true);
    };

    const handleInputChange = (e) => {
        setSelectedProduto({
            ...selectedProduto,
            [e.target.name]: e.target.value,
        });
    };

    const handleEditSubmit = () => {
        updateProduto(selectedProduto);
    };

    useEffect(() => {
        pegarProdutos();
    }, []);

    return (
        <div>
            <Grid container spacing={3} justifyContent="center">
                {produtos.map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item.id}>
                        <CustomCard
                            title={item.descricao}
                            description={`Quantidade: ${item.quantidade}, Preço: R$${item.preco}`}
                            onButtonClick={() => navigation(`/produtos/${item.id}`)}
                            imageUrl={item.imagem}
                        >
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={() => handleEditClick(item)}
                                style={{ marginTop: "10px", display: "flex", alignItems: "center" }}
                            >
                                <Edit style={{ marginRight: "5px" }} />  {/* Ícone de lápis */}
                                Editar
                            </Button>

                            <Button
                                variant="contained"
                                color="error"
                                onClick={() => deleteProduto(item.id)}
                                style={{ marginTop: "10px", marginLeft: "10px", display: "flex", alignItems: "center" }}
                            >
                                <Delete style={{ marginRight: "5px" }} />  {/* Ícone de lixeira */}
                                Excluir
                            </Button>
                        </CustomCard>
                    </Grid>
                ))}
            </Grid>


            <Modal
                open={isEditing}
                onClose={() => setIsEditing(false)}
                aria-labelledby="modal-editar-produto"
                aria-describedby="modal-editar-produto-descricao"
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                    }}
                >
                    {selectedProduto && (
                        <>
                            <Typography id="modal-editar-produto" variant="h6" component="h2">
                                Editar Produto
                            </Typography>
                            <TextField
                                margin="normal"
                                fullWidth
                                label="Descrição"
                                name="descricao"
                                value={selectedProduto.descricao}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="normal"
                                fullWidth
                                label="Quantidade"
                                name="quantidade"
                                type="number"
                                value={selectedProduto.quantidade}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="normal"
                                fullWidth
                                label="Preço"
                                name="preco"
                                type="number"
                                value={selectedProduto.preco}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="normal"
                                fullWidth
                                label="URL da Imagem"
                                name="imagem"
                                value={selectedProduto.imagem}
                                onChange={handleInputChange}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                onClick={handleEditSubmit}
                                style={{ marginTop: "20px" }}
                            >
                                Alterar
                            </Button>
                        </>
                    )}
                </Box>
            </Modal>
        </div>
    );
}

export default ProdutoPage;
