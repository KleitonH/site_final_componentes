import { NavLink } from "react-router-dom";

function Navegacao(){
    return <>
        <nav className="navigation" style={{display: 'flex'}}>
            <ul style={{gap: '20px'}}>
                <NavLink className={({isActive}) => isActive ? "active" : ""}  to={"/home"}>Home</NavLink>
                <NavLink to={"/produtos"}>Produtos</NavLink>
                <NavLink to={"/cadastrar"}>Cadastrar Produto</NavLink>
            </ul>
        </nav>
    </>
}

export default Navegacao;