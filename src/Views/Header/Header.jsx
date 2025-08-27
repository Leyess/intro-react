import React from "react";
import Buscador from "./_buscador";
import Logo from "./_logo";
import PerfilUsuario from "./_perfilUsuario";

const Header = () => {
    return (
        <>
            <Logo />
            <Buscador />
            <PerfilUsuario />
        </>
    )
}

export default Header;