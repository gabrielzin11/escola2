import {BrowserRouter,Routes, Route} from "react-router-dom";

import Home from "../Paginas/Home";
import Home from "../Paginas/Cadastro";
import Home from "../Paginas/Consulta";
import Home from "../Paginas/Alteracao";
import Home from "../Paginas/Exclusao";
import Home from "../Paginas/Erro";

export default function Rotas()
{
return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/consulta" element={<Consulta />} />
            <Route path="/alteracao/:codigo" element={<Alteracao />} />
            <Route path="/exclusao/:codigo" element={<Exclusao />} />
            <Route path="*" element={<Erro />} />
        </Routes>
    </BrowserRouter>


);
}