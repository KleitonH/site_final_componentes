import { NavLink } from "react-router-dom";

function Navegacao(){
    return <>
        <nav className="navigation" style={{display: 'flex', justifyContent:'space-around'}}>
                <NavLink className={({isActive}) => isActive ? "active" : ""}  to={"/home"}>Home</NavLink>
                <NavLink to={"/produtos"}>Produtos</NavLink>
                <NavLink to={"/cadastrar"}>Cadastrar Produto</NavLink>
        </nav>
    </>
}

export default Navegacao;