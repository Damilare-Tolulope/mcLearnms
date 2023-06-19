import { navLinks } from "../data";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { path } from "../constants/path"

import { blueLogo, caretDown } from "../data/images";

const Header = () => {
    return (
        <header className="w-full bg-[#D4DFF11A] py-5 fixed filter backdrop-blur-lg z-50">
            <div className="flex items-center justify-between max-w-full mx-auto w-full md:px-16 px-10">
                <Link to={path.HOME}><img src={blueLogo} alt="mcLearnms" /></Link>

                <nav className="flex gap-10">
                    {
                        navLinks.map(({ label, path }, index) => <Link className="cursor-pointer transition hover:text-primary duration-300" key={label} to={path}><button className="flex gap-2">{label}{index === 0 && <img src={caretDown} alt="caret-down" />}</button></Link>)
                    }
                </nav>
                <Button>Get Started</Button>

            </div>
        </header>
    );
}

export default Header;