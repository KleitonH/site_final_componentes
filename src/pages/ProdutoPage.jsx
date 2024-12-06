import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProdutoPage(){

    const navegacao = useNavigate()

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
                return <div onClick={() => {
                    navegacao(`/produtos/${item.id}`)
                }} style={{border: "solid"}}>
                    <h2>{item.descricao}</h2>
                    <img src={item.imagem} alt="imagem produto" />
                </div>
            })}
        </div>
    )

    
}

export default ProdutoPage;