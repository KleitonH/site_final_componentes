import { NavLink } from "react-router-dom";

function Header(){
    return <>
        <header className="container">
            <div className="logo">
                inserir logo
            </div>
            <nav className="navigation" style={'display: flex'}>
                <ul>
                <NavLink className={({isActive}) => isActive ? "active" : ""}  to={"/home"}>Home</NavLink>
                    <NavLink to={"/produtos"}>Produtos</NavLink>
                    <NavLink to={"/cadastrar"}>Cadastrar Produto</NavLink>
                </ul>
            </nav>
        </header>
    </>
}

export default Header;