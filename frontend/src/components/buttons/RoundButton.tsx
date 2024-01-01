import './RoundButton.css'
import { RoundedButtonProps } from "../../interfaces/Button";

const RoundButton: React.FC<RoundedButtonProps> = ({ image }) => {
    return (
        <button className={`default-round-button`}>
            <img src={image} alt="defaut image"/>
        </button>
    );
};
  
export default RoundButton;