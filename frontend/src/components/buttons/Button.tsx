import './Button.css'
import { ButtonProps } from "../../interfaces/Button";

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
    return (
        <button className={`default-button ${className}`} onClick={onClick}>
            {text}
        </button>
    );
};
  
export default Button;