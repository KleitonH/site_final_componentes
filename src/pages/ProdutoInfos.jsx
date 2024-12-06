import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProdutoInfos(){

    const parms = useParams()

    const [produto, setProduto] = useState({})

    async function pegarProduto(){
        const listaProdutos = await fetch(`http://localhost:3001/produtos/${parms.id}`)
        const lista = await listaProdutos.json()

        setProduto(lista)
    }

    useEffect(() => {
        pegarProduto()
    }, [])

    return(
                <div style={{border: "solid"}}>
                    <h2>{produto.descricao}</h2>
                    <h3>{produto.quantidade}</h3>
                    <h3>{produto.preco}</h3>
                    <img src={item.imagem} alt="imagem produto" />
                </div>
           
    )

    
}

export default ProdutoInfos;