import { useState } from "react";
import { navLinks } from "../data";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { path } from "../constants/path"

import { blueLogo, caretDown, menu } from "../data/images";

const Header = () => {
    const [isShown, setIsShown] = useState(false)

    const handleShowHeader = () => {        
        setIsShown(!isShown)

        if(isShown){
            document.getElementById('header')!.style.marginTop = "-100%";
            document.getElementById('header')!.style.marginBottom = "0%";
        } else{
            document.getElementById('header')!.style.marginTop = "0%";  
            document.getElementById('header')!.style.marginBottom = "80%";
        }
    }

    return (
        <header className="w-full bg-[#D4DFF11A] py-5 pb-10 lg:pb-5 fixed filter backdrop-blur-xl z-50">
            <div className="flex items-center justify-between max-w-full mx-auto w-full md:px-16 px-10">
                <Link to={path.HOME}><img className="w-1/2 md:w-3/5 lg:w-auto" src={blueLogo} alt="mcLearnms" /></Link>

                <nav className="lg:flex gap-10 hidden">
                    {
                        navLinks.map(({ label, path }, index) => <Link className="cursor-pointer transition hover:text-primary duration-300" key={label} to={path}><button className="flex gap-2">{label}{index === 0 && <img src={caretDown} alt="caret-down" />}</button></Link>)
                    }
                </nav>
                <Button className="lg:block hidden">Get Started</Button>

                <img onClick={handleShowHeader} src={menu} className="block lg:hidden" alt="menu-bar" />
            </div>
            <nav className="lg:hidden gap-10 block transition ease-in-out duration-300" id="header">
                {
                    navLinks.map(({ label, path }, index) => (
                        <Link onClick={handleShowHeader} className="cursor-pointer transition hover:text-primary duration-300" key={label} to={path}>
                            <button className="w-full mt-5 justify-center items-center flex gap-2">{label}{index === 0 && <img className="w-3 md:w-auto" src={caretDown} alt="caret-down" />}</button>
                        </Link>
                    ))
                }
            </nav>
        </header>
    );
}

export default Header;