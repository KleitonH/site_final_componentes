import { useEffect, useState } from "react";

function ProdutoPage(){

    const [produtos, setProdutos] = useState([])

    async function pegarProdutos(){
        const listaProdutos = await fetch("http://localhost:3001/produtos")
        const lista = await listaProdutos.json()

        setProdutos(lista)
    }

    useEffect(() => {
        pegarProdutos()
    }, [])

    return(
        <div style={{display:"flex", flexWrap:"wrap", gap:"20px", justifyContent:"space-around"}}>
            {produtos.map(item => {
                return <div>
                    <h2>{item.descricao}</h2>
                    <h3>{item.quantidade}</h3>
                    <h3>{item.preco}</h3>
                    <img src={item.imagem} alt="imagem produto" />
                </div>
            })}
        </div>
    )

    
}

export default ProdutoPage;