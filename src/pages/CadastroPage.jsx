import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Box } from '@mui/material';

function CadastroPage() {
  const navigation = useNavigate();

  async function salvarProduto(produto) {
    await fetch("http://localhost:3001/produtos", {
      method: "POST",
      body: JSON.stringify(produto),
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigation("/produtos");
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const produto = {
      descricao: formData.get("descricao"),
      quantidade: formData.get("quantidade"),
      preco: formData.get("preco"),
      imagem: formData.get("imagem"),
    };

    salvarProduto(produto);
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '25px',
        padding: '20px',
        width: '100%',
        maxWidth: '400px',
        margin: 'auto',
        boxShadow: 3,
      }}
    >
      <Typography variant="h6" gutterBottom align="center" color="black">
        Cadastro de Produto
      </Typography>

      <TextField
        id="descricao"
        name="descricao"
        label="Descrição"
        type="text"
        variant="outlined"
        margin="normal"
        required
        sx={{
          backgroundColor: 'white',
          borderRadius: '4px',
        }}
      />
      <TextField
        id="quantidade"
        name="quantidade"
        label="Quantidade"
        type="number"
        variant="outlined"
        margin="normal"
        required
        sx={{
          backgroundColor: 'white',
          borderRadius: '4px',
        }}
      />
      <TextField
        id="preco"
        name="preco"
        label="Preço"
        type="number"
        variant="outlined"
        margin="normal"
        required
        sx={{
          backgroundColor: 'white',
          borderRadius: '4px',
        }}
      />
      <TextField
        id="imagem"
        name="imagem"
        label="Imagem (URL)"
        type="text"
        variant="outlined"
        margin="normal"
        required
        sx={{
          backgroundColor: 'white',
          borderRadius: '4px',
        }}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{
          marginTop: '20px',
          backgroundColor: 'secundary',
          color: 'white',
        }}
      >
        Salvar
      </Button>
    </Box>
  );
}

export default CadastroPage;
