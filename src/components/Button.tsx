
import { Link } from "react-router-dom";

type ButtonType = {
    children: any;
    handleClick?: () => void;
    className?: string;
    isLinked?: boolean;
    path?: string;
    disabled?: boolean;
    isSecondary?: boolean;
}

const Button = ({ children, handleClick, className, isLinked=false, path="", disabled=false, isSecondary=false }: ButtonType) => {

return (
    <>
        {
            isLinked ? 
            <Link to={path}><button onClick={handleClick} className={`${isSecondary ? styles.secBtn : styles.btn} ${className}`} disabled={disabled}> {children} </button></Link> :
            <button onClick={handleClick} className={`${isSecondary ? styles.secBtn : styles.btn} ${className}`} disabled={disabled}> {children} </button> 
        }
    </>
  )
}

const styles = {
    btn: "bg-primary text-white text-sm md:text-base font-bold md:px-16 px-8 py-3 rounded-lg cursor-pointer transition linear duration-300 hover:scale-105",
    secBtn: "text-primary text-sm md:text-base font-bold md:px-10 px-3 py-1 rounded-lg cursor-pointer border border-2 border-transparent transition linear duration-300 hover:border-primary",
}

export default Button