import React from "react";
import { BsFillHeartFill } from "react-icons/bs";


const Navbar = () => {

    let imgUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

    return(
        <nav>
            <div>
                <img src={imgUrl} alt="Poke API logo" className="navbar-image" />
            </div>
            <div>
                <BsFillHeartFill />
            </div>
        </nav>
    );
};

export default Navbar;