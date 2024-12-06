import { NavLink } from "react-router-dom";

function Navegacao(){
    return <>
        <nav className="navigation" style={{display: 'flex', justifyContent:'space-around', gap: '45px'}}>
                <NavLink className={({isActive}) => isActive ? "active" : ""}  to={"/home"}>Início</NavLink>
                <NavLink to={"/produtos"}>Produtos</NavLink>
                <NavLink to={"/cadastrar"}>Cadastrar Produto</NavLink>
        </nav>
    </>
}

export default Navegacao;