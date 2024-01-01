import './MenuCard.css'
import RoundButton from '../buttons/RoundButton'
import pen from "../../assets/images/pen.png";
import remove from "../../assets/images/remove.png";
import photo_gallery from "../../assets/images/photo_gallery.png";
import { MenuCardProps } from "../../interfaces/Cards";

const MenuCard: React.FC<MenuCardProps>  = ({menu}) => {
    return(
        <>
            <div className="card-container">
                <RoundButton 
                    image={pen}
                />
                <RoundButton 
                    image={remove}
                />
                {menu}
            </div>
        </> 
    )
}

export default MenuCard;