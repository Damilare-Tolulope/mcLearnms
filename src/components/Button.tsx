
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
    btn: "bg-primary text-white font-bold px-16 py-3 rounded-lg cursor-pointer transition linear duration-300 hover:scale-105",
    secBtn: "text-primary font-bold px-10 py-1 rounded-lg cursor-pointer border border-2 border-transparent transition linear duration-300 hover:border-primary",
}

export default Button