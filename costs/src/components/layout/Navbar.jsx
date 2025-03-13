import { Link } from "react-router-dom";
import Container from "./Container";
import '../../index.css';

import logo from '../../img/costs_logo.png';

function Navbar(){
    return(
          <nav className="flex justify-between bg-[#222] p-[1em]">
            <Container>
                    <Link to="/">
                        <img src={logo} alt="Costs Logo" className="w-[80px] h-[80px]"/>
                    </Link>
                <ul className="flex list-none items-center space-x-4"> 

                    <li className="text-white hover:text-[#FFBB33]">
                         <Link to="/">Home</Link>
                    </li>

                    <li className="text-white hover:text-[#FFBB33]">
                         <Link to="/">Projetos</Link>
                    </li>

                    <li className="text-white hover:text-[#FFBB33]">
                        <Link to="/company">Company</Link>
                    </li>
                    <li className="text-white hover:text-[#FFBB33]">
                         <Link to="/contatos">Contatos</Link>
                    </li>
                </ul>
                </Container>
              </nav>
    )
}

export default Navbar;