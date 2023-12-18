import './Button.css'
import { ButtonProps } from "../../interfaces/Button";

const Button: React.FC<ButtonProps> = ({ text }) => {
    return (
        <button className='default-button'>
            {text}
        </button>
    );
};
  
export default Button;