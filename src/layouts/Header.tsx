import { navLinks } from "../data";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { path } from "../constants/path"

import { blueLogo } from "../data/images";

const Header = () => {
    return ( 
        <header className="w-full bg-white/40 py-5 fixed filter backdrop-blur-lg">
            <div className="flex items-center justify-between max-w-full mx-auto w-full md:px-20 px-10">
                <Link to={path.HOME}><img src={blueLogo} alt="mcLearnms" /></Link>

                <nav className="flex gap-10">
                    {
                        navLinks.map(({label, path}) => <Link className="cursor-pointer transition hover:text-primary duration-300" key={label} to={path}><button>{label}</button></Link>)
                    }
                </nav>
                <Button>Get Started</Button>

            </div>
        </header>
     );
}
 
export default Header;