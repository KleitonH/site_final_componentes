function CadastroPage(){
    return <div>
        <form style={{display:'flex', flexDirection: 'column', backgroundColor:'black', color:'white', borderRadius:'25px'}}>
            <label htmlFor="descricao">Descrição:</label>
            <input id="descricao" type="text" />
            <label htmlFor="quantidade">Quantidade:</label>
            <input id="quantidade" type="number" />
            <label htmlFor="preco">Preço:</label>
            <input id="preco" type="number" />
            <label htmlFor="imagem">Imagem:</label>
            <input id="imagem" type="text" />
            <button style={{backgroundColor:'black', color:'white'}}>Salvar</button>
        </form>
    </div>
        
        
    
}

export default CadastroPage;