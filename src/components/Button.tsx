import { Link } from "react-router-dom";

type ButtonType = {
    children: string;
    handleClick?: () => void;
    className?: string;
    isLinked?: boolean;
    path?: string;
    disabled?: boolean;
}

const Button = ({ children, handleClick, className, isLinked=false, path="", disabled=false }: ButtonType) => {

return (
    <>
        {
            isLinked ? 
            <Link to={path}><button onClick={handleClick} className={`${styles.btn} ${className}`} disabled={disabled}> {children} </button></Link> :
            <button onClick={handleClick} className={`${styles.btn} ${className}`} disabled={disabled}> {children} </button> 
        }
    </>
  )
}

const styles = {
    btn: "bg-primary text-white font-bold px-10 py-3 rounded-lg cursor-pointer transition linear duration-300 hover:scale-105"
}

export default Button