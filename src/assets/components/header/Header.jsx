function Header(){
    return <>
        <header className="container">
            <div className="logo">
                inserir logo
            </div>
            <nav className="navigation">
                <ul>
                <NavLink className={({isActive}) => isActive ? "active" : ""}  to={"/home"}>Home</NavLink>
                    <NavLink to={"/contato"}>Produtos</NavLink>
                    <NavLink to={"/sobre"}>Cadastrar Produto</NavLink>
                    <NavLink to={"/produto"}>Editar Produto</NavLink>
                </ul>
                
            </nav>
        </header>
    </>
}