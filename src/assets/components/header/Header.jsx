import StoreIcon from '@mui/icons-material/Store';
import Navegacao from "../navigation/Navegacao";

function Header(){
    return <>
        <header className="container">
            <div className="logo">
                <h1>CK Storage</h1>
                <StoreIcon/>
            </div>
        </header>
        <br />
        <br />
        <br />
        <Navegacao/>
        <br />
        <br />
        <br />
    </>
}

export default Header;